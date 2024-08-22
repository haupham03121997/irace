import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Field } from "@/interfaces";

import React from "react";

type CustomField = Omit<Field, "type">;

interface InputFieldProps extends CustomField {
  control: any;
}

const InputField: React.FC<InputFieldProps> = ({ control, fieldName, label, placeholder, required }) => (
  <FormField
    control={control}
    name={fieldName}
    render={({ field }) => (
      <FormItem>
        <FormControl>
          <Input className="py-5 text-base" required={required} label={label} placeholder={placeholder} {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default InputField;
