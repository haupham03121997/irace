import { CircleX } from "lucide-react";
import * as React from "react";

import { cn } from "@/libs/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  allowClear?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startAdornment, endAdornment, allowClear, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement | null>(null);

    const handleClear = () => {
      if (inputRef.current) {
        inputRef.current.value = "";
        const event = new Event("input", { bubbles: true });
        inputRef.current.dispatchEvent(event);
        inputRef.current?.focus();
      }
    };

    return (
      <div className="flex items-center">
        {startAdornment}
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={(node) => {
            if (typeof ref === "function") {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
            inputRef.current = node;
          }}
          {...props}
        />
        {allowClear && (
          <span
            className="inline-block mr-3 cursor-pointer"
            onClick={() => {
              handleClear();
              props.onChange && props.onChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>);
            }}
          >
            <CircleX size={18} />
          </span>
        )}
        {endAdornment}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
