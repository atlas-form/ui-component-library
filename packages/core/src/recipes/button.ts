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
      tone: {
        primary:
          "[--btn-bg:var(--ui-primary-bg)] [--btn-fg:var(--ui-primary-fg)] [--btn-border:var(--ui-primary-border)] [--btn-bg-hover:var(--ui-primary-bg-hover)]",
        secondary:
          "[--btn-bg:var(--ui-secondary-bg)] [--btn-fg:var(--ui-secondary-fg)] [--btn-border:var(--ui-secondary-border)] [--btn-bg-hover:var(--ui-secondary-bg-hover)]",
        success:
          "[--btn-bg:var(--ui-success-bg)] [--btn-fg:var(--ui-success-fg)] [--btn-border:var(--ui-success-border)] [--btn-bg-hover:var(--ui-success-bg-hover)]",
        warning:
          "[--btn-bg:var(--ui-warning-bg)] [--btn-fg:var(--ui-warning-fg)] [--btn-border:var(--ui-warning-border)] [--btn-bg-hover:var(--ui-warning-bg-hover)]",
        info:
          "[--btn-bg:var(--ui-info-bg)] [--btn-fg:var(--ui-info-fg)] [--btn-border:var(--ui-info-border)] [--btn-bg-hover:var(--ui-info-bg-hover)]",
        danger:
          "[--btn-bg:var(--ui-danger-bg)] [--btn-fg:var(--ui-danger-fg)] [--btn-border:var(--ui-danger-border)] [--btn-bg-hover:var(--ui-danger-bg-hover)]",
      },
      appearance: {
        solid:
          "border border-(--btn-border) bg-(--btn-bg) text-(--btn-fg) hover:bg-(--btn-bg-hover)",
        outline:
          "border border-(--btn-bg) bg-transparent text-(--btn-bg) hover:bg-(--btn-bg) hover:text-(--btn-fg)",
        ghost: "bg-transparent text-(--btn-bg) hover:bg-(--app-hover)",
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
      tone: "primary",
      appearance: "solid",
      size: "md",
      fullWidth: false,
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
