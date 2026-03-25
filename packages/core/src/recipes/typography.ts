import { cva, type VariantProps } from "class-variance-authority";

export const textVariants = cva("", {
  variants: {
    variant: {
      body: "text-sm text-(--app-text)",
      muted: "text-sm text-(--app-muted-text)",
      kicker: "text-xs font-medium tracking-[0.16em] text-(--app-muted-text)",
      brand: "text-xs tracking-[0.22em] text-(--app-muted-text)",
      lead: "text-4xl font-semibold leading-tight font-[Space_Grotesk,ui-sans-serif,system-ui]",
      title: "text-3xl font-semibold text-(--app-text) font-[Manrope,ui-sans-serif,system-ui]",
      error: "text-sm text-red-500",
      link: "font-medium text-(--app-active-text) hover:underline",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

export type TextVariantProps = VariantProps<typeof textVariants>;
