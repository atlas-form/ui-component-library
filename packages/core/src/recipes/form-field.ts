import { cva } from "class-variance-authority";

export const fieldVariants = cva("block space-y-2");
export const labelVariants = cva("text-sm font-medium text-(--app-text)");
export const errorVariants = cva("text-sm text-red-500");
