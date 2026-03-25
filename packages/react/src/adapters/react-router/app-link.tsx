import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { Link, type LinkProps } from "react-router";
import { cn } from "@atlas-art/ui-core";

const appLinkVariants = cva("transition", {
  variants: {
    variant: {
      primary: "font-medium text-(--app-active-text) hover:underline",
      muted: "text-sm text-(--app-muted-text) hover:text-(--app-text)",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export interface AppLinkProps
  extends LinkProps,
    VariantProps<typeof appLinkVariants> {
  className?: string;
}

export const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>(
  ({ className, variant, ...props }, ref) => (
    <Link
      ref={ref}
      className={cn(appLinkVariants({ variant }), className)}
      {...props}
    />
  ),
);

AppLink.displayName = "AppLink";
