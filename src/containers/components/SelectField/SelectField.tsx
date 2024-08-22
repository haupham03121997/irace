// components/fields/SelectField.tsx
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Field } from "@/interfaces";
import React from "react";
import { Controller } from "react-hook-form";

type CustomField = Omit<Field, "type">;

interface SelectFieldProps extends CustomField {
  control: any;
}

const SelectField: React.FC<SelectFieldProps> = ({ control, fieldName, label, options, required, placeholder }) => (
  <div>
    <label className="leading-[21px] block text-sm font-medium text-black pb-1">
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <Controller
      name={fieldName}
      control={control}
      render={({ field }) => (
        <Select {...field} onValueChange={field.onChange}>
          <SelectTrigger className="w-full py-5">
            <SelectValue placeholder={placeholder || "Chọn"} className="text-muted-foreground" />
          </SelectTrigger>
          <SelectContent>
            {options?.map((option) => (
              <SelectItem key={`field-${fieldName}-${option.value}`} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    />
  </div>
);

export default SelectField;
