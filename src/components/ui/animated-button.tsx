
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading = false, children, disabled, ...props }, ref) => {
    const baseClasses = "relative inline-flex items-center justify-center gap-2 font-inter font-semibold transition-all duration-300 transform focus:outline-none focus:ring-4 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group";
    
    const variantClasses = {
      primary: "bg-gradient-to-r from-ridwan-green to-ridwan-green/90 hover:from-ridwan-green/90 hover:to-ridwan-green text-pure-white shadow-lg hover:shadow-xl hover:shadow-ridwan-green/25 focus:ring-ridwan-green/30",
      secondary: "bg-gradient-to-r from-digital-gold to-digital-gold/90 hover:from-digital-gold/90 hover:to-digital-gold text-pure-white shadow-lg hover:shadow-xl hover:shadow-digital-gold/25 focus:ring-digital-gold/30",
      outline: "border-2 border-ridwan-green text-ridwan-green hover:bg-ridwan-green hover:text-pure-white hover:shadow-lg hover:shadow-ridwan-green/20 focus:ring-ridwan-green/30"
    };
    
    const sizeClasses = {
      sm: "px-4 py-2 text-sm rounded-xl",
      md: "px-6 py-3 text-base rounded-2xl",
      lg: "px-8 py-4 text-lg rounded-2xl"
    };

    return (
      <button
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-700 hover:before:translate-x-[100%]",
          className
        )}
        disabled={disabled || isLoading}
        ref={ref}
        {...props}
      >
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
        
        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          {isLoading && (
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          )}
          {children}
        </span>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-ridwan-green/20 via-digital-gold/20 to-ridwan-green/20 blur-xl -z-10" />
      </button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton };
