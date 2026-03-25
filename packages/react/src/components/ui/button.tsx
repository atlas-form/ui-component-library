import { forwardRef, type ButtonHTMLAttributes } from "react";
import { buttonVariants, type ButtonVariantProps } from "@atlas-art/ui-core";
import { cn } from "@atlas-art/ui-core";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, tone, appearance, size, fullWidth, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ tone, appearance, size, fullWidth }), className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
