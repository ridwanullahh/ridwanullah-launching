
import UniversalSDK from '../lib/github-sdk';

interface WaitlistSubscriber {
  id?: string;
  uid?: string;
  email: string;
  subscribedAt: string;
  ipAddress?: string;
  userAgent?: string;
  source?: string;
}

class WaitlistService {
  private sdk: UniversalSDK | null = null;

  constructor() {
    this.initializeSDK();
  }

  private initializeSDK() {
    // Get configuration from environment variables
    const owner = import.meta.env.VITE_GITHUB_OWNER;
    const repo = import.meta.env.VITE_GITHUB_REPO;
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    const smtpEndpoint = import.meta.env.VITE_SMTP_ENDPOINT;
    const smtpFrom = import.meta.env.VITE_SMTP_FROM;

    if (!owner || !repo || !token) {
      console.warn('GitHub configuration missing. Waitlist functionality disabled.');
      return;
    }

    this.sdk = new UniversalSDK({
      owner,
      repo,
      token,
      branch: 'main',
      basePath: 'db',
      smtp: {
        endpoint: smtpEndpoint,
        from: smtpFrom,
      },
      schemas: {
        waitlist: {
          required: ['email'],
          types: {
            email: 'string',
            subscribedAt: 'date',
            ipAddress: 'string',
            userAgent: 'string',
            source: 'string'
          },
          defaults: {
            source: 'coming-soon-page'
          }
        }
      }
    });
  }

  async subscribeToWaitlist(email: string): Promise<{ success: boolean; message: string }> {
    if (!this.sdk) {
      throw new Error('SDK not initialized. Check environment variables.');
    }

    if (!this.sdk.validateEmailFormat(email)) {
      return { success: false, message: 'Please enter a valid email address.' };
    }

    try {
      // Check if email already exists
      const existingSubscribers = await this.sdk.get<WaitlistSubscriber>('waitlist');
      const existingSubscriber = existingSubscribers.find(sub => sub.email.toLowerCase() === email.toLowerCase());

      if (existingSubscriber) {
        return { success: false, message: 'This email is already subscribed to our waitlist.' };
      }

      // Add new subscriber
      const newSubscriber: Partial<WaitlistSubscriber> = {
        email: email.toLowerCase().trim(),
        subscribedAt: new Date().toISOString(),
        userAgent: navigator.userAgent,
        source: 'coming-soon-page'
      };

      await this.sdk.insert('waitlist', newSubscriber);

      // Send notification email to admin
      await this.sendAdminNotification(email);

      return { success: true, message: 'Successfully subscribed to waitlist!' };
    } catch (error) {
      console.error('Waitlist subscription error:', error);
      return { success: false, message: 'An error occurred. Please try again later.' };
    }
  }

  private async sendAdminNotification(subscriberEmail: string) {
    if (!this.sdk?.smtp.endpoint) {
      console.log('SMTP not configured, skipping admin notification');
      return;
    }

    try {
      const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;
      if (!adminEmail) {
        console.warn('Admin email not configured');
        return;
      }

      const subject = 'New Waitlist Subscription - Ridwanullah Group';
      const html = `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #05B34D, #F2B91C); border-radius: 16px; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center;">
              <div style="width: 32px; height: 32px; background: white; border-radius: 12px;"></div>
            </div>
            <h1 style="color: #05B34D; margin: 0; font-size: 24px; font-weight: 700;">Ridwanullah Group</h1>
            <p style="color: #181F25; margin: 8px 0 0; font-size: 16px;">New Waitlist Subscription</p>
          </div>
          
          <div style="background: #E9FBF1; border-radius: 12px; padding: 24px; margin: 24px 0;">
            <h2 style="color: #181F25; margin: 0 0 16px; font-size: 18px; font-weight: 600;">New Subscriber Details</h2>
            <p style="color: #181F25; margin: 8px 0; font-size: 16px;"><strong>Email:</strong> ${subscriberEmail}</p>
            <p style="color: #181F25; margin: 8px 0; font-size: 16px;"><strong>Subscribed At:</strong> ${new Date().toLocaleString()}</p>
            <p style="color: #181F25; margin: 8px 0; font-size: 16px;"><strong>Source:</strong> Coming Soon Page</p>
          </div>
          
          <div style="text-align: center; margin-top: 32px; padding-top: 24px; border-top: 1px solid #E9FBF1;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              This notification was sent automatically from your Ridwanullah Group waitlist system.
            </p>
          </div>
        </div>
      `;

      await this.sdk.sendEmail(adminEmail, subject, html);
    } catch (error) {
      console.error('Failed to send admin notification:', error);
    }
  }

  async getWaitlistCount(): Promise<number> {
    if (!this.sdk) return 0;
    
    try {
      const subscribers = await this.sdk.get<WaitlistSubscriber>('waitlist');
      return subscribers.length;
    } catch (error) {
      console.error('Failed to get waitlist count:', error);
      return 0;
    }
  }

  isConfigured(): boolean {
    return this.sdk !== null && this.sdk.isReady();
  }
}

export default new WaitlistService();
export type { WaitlistSubscriber };
