import { forwardRef, type HTMLAttributes } from "react";
import { stackVariants, type StackVariantProps } from "@atlas-art/ui-core";
import { cn } from "@atlas-art/ui-core";

export interface StackProps
  extends HTMLAttributes<HTMLDivElement>, StackVariantProps {}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ className, gap, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(stackVariants({ gap }), className)}
      {...props}
    />
  ),
);

Stack.displayName = "Stack";
