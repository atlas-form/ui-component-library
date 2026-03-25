import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "rounded-md font-medium transition-colors outline-none",
    "focus-visible:ring-2 focus-visible:ring-(--ui-primary-bg)",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-(--ui-primary-bg) text-(--ui-primary-fg) hover:bg-(--ui-primary-bg-hover)",
        secondary:
          "border border-(--ui-secondary-border) bg-(--ui-secondary-bg) text-(--ui-secondary-fg) hover:bg-(--ui-secondary-bg-hover)",
        success:
          "bg-(--ui-success-bg) text-(--ui-success-fg) hover:bg-(--ui-success-bg-hover)",
        warning:
          "bg-(--ui-warning-bg) text-(--ui-warning-fg) hover:bg-(--ui-warning-bg-hover)",
        info: "bg-(--ui-info-bg) text-(--ui-info-fg) hover:bg-(--ui-info-bg-hover)",
        ghost: "bg-transparent text-(--app-text) hover:bg-(--app-hover)",
        danger: "bg-(--ui-danger-bg) text-(--ui-danger-fg) hover:bg-(--ui-danger-bg-hover)",
        outline:
          "border border-(--ui-primary-bg) bg-transparent text-(--ui-primary-fg) hover:bg-(--ui-primary-bg)",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-5 text-base",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
