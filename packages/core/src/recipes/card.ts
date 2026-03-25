import { cva, type VariantProps } from "class-variance-authority";

export const cardVariants = cva(
  "rounded-xl border border-(--app-border) bg-(--app-surface) text-(--app-text)",
  {
    variants: {
      padding: {
        none: "",
        sm: "p-3",
        md: "p-4",
        lg: "p-6",
      },
      shadow: {
        none: "",
        sm: "shadow-sm",
        md: "shadow-md",
      },
    },
    defaultVariants: {
      padding: "md",
      shadow: "none",
    },
  },
);

export type CardVariantProps = VariantProps<typeof cardVariants>;
