import { cva, type VariantProps } from "class-variance-authority";

export const stackVariants = cva("flex flex-col", {
  variants: {
    gap: {
      none: "gap-0",
      xs: "gap-1",
      sm: "gap-2",
      md: "gap-3",
      lg: "gap-4",
      xl: "gap-6",
    },
  },
  defaultVariants: {
    gap: "md",
  },
});

export type StackVariantProps = VariantProps<typeof stackVariants>;
