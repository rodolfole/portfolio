import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        className={`
            active:scale-95
            disabled:cursor-not-allowed
            disabled:opacity-50
            duration-200
            flex
            font-medium
            hover:opacity-75
            items-center
            justify-center
            transition
            ${className}
            ${disabled && "cursor-not-allowed opacity-75"}
            }
          `}
        disabled={disabled}
        ref={ref}
        type={type}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
