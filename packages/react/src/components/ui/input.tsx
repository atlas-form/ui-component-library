import { forwardRef, type InputHTMLAttributes } from "react";
import { inputVariants, type InputVariantProps } from "@atlas-art/ui-core";
import { cn } from "@atlas-art/ui-core";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    InputVariantProps {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, state, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(inputVariants({ size, state }), className)}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
