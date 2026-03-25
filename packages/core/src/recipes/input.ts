import { cva, type VariantProps } from "class-variance-authority";

export const inputVariants = cva(
  [
    "w-full rounded-md border bg-(--app-surface) text-(--app-text)",
    "outline-none transition",
    "placeholder:text-(--app-muted-text)",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "focus-visible:ring-2 focus-visible:ring-(--ui-primary-bg)",
  ],
  {
    variants: {
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-3 text-sm",
        lg: "h-12 px-4 text-base",
      },
      state: {
        default: "border-(--app-border) focus-visible:border-(--ui-primary-bg)",
        error: "border-(--ui-danger-bg) focus-visible:border-(--ui-danger-bg)",
      },
    },
    defaultVariants: {
      size: "md",
      state: "default",
    },
  },
);

export type InputVariantProps = VariantProps<typeof inputVariants>;
