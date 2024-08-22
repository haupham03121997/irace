import { CircleX, Eye, EyeOff } from "lucide-react";
import * as React from "react";

import { cn } from "@/libs/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  allowClear?: boolean;
  label?: string;
  classNameLabel?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, classNameLabel, type, startAdornment, endAdornment, allowClear, label, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClear = () => {
      if (inputRef.current) {
        inputRef.current.value = "";
        const event = new Event("input", { bubbles: true });
        inputRef.current.dispatchEvent(event);
        inputRef.current?.focus();
      }
    };

    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className={cn("block text-sm font-medium text-black", classNameLabel)}>
            {label} {"    "} {props?.required && <span className="text-red-500">*</span>}
          </label>
        )}
        <div className="flex items-center relative">
          {startAdornment}
          <input
            type={showPassword ? "text" : type}
            className={cn(
              "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
              className,
              type === "password" && "pr-8"
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
          {type === "password" && (
            <span className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer">
              {showPassword ? (
                <Eye className="stroke-gray-500" size={18} onClick={() => setShowPassword(false)} />
              ) : (
                <EyeOff className="stroke-gray-500" size={18} onClick={() => setShowPassword(true)} />
              )}
            </span>
          )}
          {endAdornment}
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
