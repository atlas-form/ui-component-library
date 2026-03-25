import { forwardRef, type HTMLAttributes } from "react";
import {
  splitCardAsideVariants,
  splitCardMainVariants,
  splitCardVariants,
  type SplitCardVariantProps,
} from "@atlas-art/ui-core";
import { cn } from "@atlas-art/ui-core";

export interface SplitCardProps
  extends HTMLAttributes<HTMLDivElement>,
    SplitCardVariantProps {}

export const SplitCard = forwardRef<HTMLDivElement, SplitCardProps>(
  ({ className, columns, ...props }, ref) => (
    <div ref={ref} className={cn(splitCardVariants({ columns }), className)} {...props} />
  ),
);
SplitCard.displayName = "SplitCard";

export const SplitCardAside = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <section ref={ref} className={cn(splitCardAsideVariants(), className)} {...props} />
  ),
);
SplitCardAside.displayName = "SplitCardAside";

export const SplitCardMain = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <section ref={ref} className={cn(splitCardMainVariants(), className)} {...props} />
  ),
);
SplitCardMain.displayName = "SplitCardMain";

export const SplitCardDecoration = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "pointer-events-none absolute -bottom-14 -right-14 h-44 w-44 rounded-full border border-(--app-border)",
        className,
      )}
      {...props}
    />
  ),
);
SplitCardDecoration.displayName = "SplitCardDecoration";
