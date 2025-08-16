import * as React from "react";
import { CircleIcon } from "lucide-react";

function mergeClassNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

interface RadioGroupProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange"> {
  name: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

interface RadioGroupItemProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: React.ReactNode;
}

function RadioGroup({
  className,
  name,
  value,
  onValueChange,
  children,
  ...props
}: RadioGroupProps) {
  return (
    <div
      data-slot="radio-group"
      className={mergeClassNames("grid gap-3", className)}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement<RadioGroupItemProps>(child)) {
          return React.cloneElement(child, {
            name,
            checked: child.props.value === value,
            onChange: () => onValueChange?.(child.props.value as string),
          });
        }
        return child;
      })}
    </div>
  );
}

function RadioGroupItem({ className, label, ...props }: RadioGroupItemProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <span className="relative flex items-center justify-center">
        <input
          type="radio"
          className={mergeClassNames(
            "appearance-none border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          {...props}
        />
        {props?.checked && (
          <CircleIcon className="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
        )}
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}

export { RadioGroup, RadioGroupItem };
export type { RadioGroupItemProps };
