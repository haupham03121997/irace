import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Field } from "@/interfaces";
import { cn } from "@/libs/utils";

type CustomField = Omit<Field, "type">;

interface DateFieldProps extends CustomField {
  control: any;
}

const DateField: React.FC<DateFieldProps> = ({ control, fieldName, label, placeholder, required }) => (
  <FormField
    control={control}
    name={fieldName}
    render={({ field: { onChange, value } }) => (
      <FormItem>
        <FormControl>
          <div>
            <label className="leading-[21px] block text-sm font-medium text-black pb-1">
              {label} {required && <span className="text-red-500">*</span>}
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full py-4 justify-start text-left font-normal bg-white hover:bg-white",
                    !value && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {value ? format(value, "dd/MM/yyyy") : <span className="text-muted-foreground">{placeholder}</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={value ? new Date(value) : undefined}
                  onSelect={(date) => onChange(date)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default DateField;
