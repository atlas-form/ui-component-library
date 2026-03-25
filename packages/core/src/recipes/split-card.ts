import { cva, type VariantProps } from "class-variance-authority";

export const splitCardVariants = cva(
  [
    "relative mx-auto grid w-full max-w-5xl overflow-hidden",
    "rounded-3xl border border-(--app-border) bg-(--app-surface)",
    "shadow-[0_24px_60px_-28px_rgba(15,23,42,0.45)]",
  ],
  {
    variants: {
      columns: {
        one: "grid-cols-1",
        two: "sm:grid-cols-2",
      },
    },
    defaultVariants: {
      columns: "two",
    },
  },
);

export const splitCardAsideVariants = cva(
  [
    "relative hidden flex-col justify-between p-10 sm:flex",
    "border-r border-(--app-border)",
    "bg-[linear-gradient(155deg,var(--app-active-bg)_0%,var(--app-surface)_65%)]",
    "text-(--app-text)",
  ],
);

export const splitCardMainVariants = cva("p-8 sm:p-10");

export type SplitCardVariantProps = VariantProps<typeof splitCardVariants>;
