import { type ElementType, type HTMLAttributes } from "react";
import { textVariants, type TextVariantProps } from "@atlas-art/ui-core";
import { cn } from "@atlas-art/ui-core";

type TypographyElement = ElementType;

export interface TextProps
  extends HTMLAttributes<HTMLElement>,
    TextVariantProps {
  as?: TypographyElement;
}

export function Text({ as, className, variant, ...props }: TextProps) {
  const Component = as ?? "p";
  return <Component className={cn(textVariants({ variant }), className)} {...props} />;
}
