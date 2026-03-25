import {
  createContext,
  type HTMLAttributes,
  type LabelHTMLAttributes,
} from "react";
import {
  errorVariants,
  fieldVariants,
  labelVariants,
} from "@atlas-art/ui-core";
import { cn } from "@atlas-art/ui-core";

interface FormFieldContextValue {
  hasError: boolean;
}

const FormFieldContext = createContext<FormFieldContextValue>({ hasError: false });

export interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
  error?: string;
}

export function FormField({ className, error, children, ...props }: FormFieldProps) {
  return (
    <FormFieldContext.Provider value={{ hasError: Boolean(error) }}>
      <div className={cn(fieldVariants(), className)} {...props}>
        {children}
        {error ? <p className={errorVariants()}>{error}</p> : null}
      </div>
    </FormFieldContext.Provider>
  );
}

export function FormFieldLabel({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={cn(labelVariants(), className)} {...props} />;
}
