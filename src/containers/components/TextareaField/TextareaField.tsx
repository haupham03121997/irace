import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Field } from "@/interfaces";
import React from "react";

type CustomField = Omit<Field, "type">;

interface TextareaFieldProps extends CustomField {
  control: any;
}

const TextareaField: React.FC<TextareaFieldProps> = ({ control, fieldName, label, placeholder, rows, required }) => (
  <FormField
    control={control}
    name={fieldName}
    render={({ field }) => (
      <FormItem>
        <FormControl>
          <Textarea
            className="text-base"
            required={required}
            label={label}
            placeholder={placeholder}
            rows={rows || 5}
            {...field}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default TextareaField;
