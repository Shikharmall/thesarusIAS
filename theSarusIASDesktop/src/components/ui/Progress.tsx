import * as React from "react";

// Simple helper to merge class names
function mergeClassNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
}

function Progress({ className, value = 0, ...props }: ProgressProps) {
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      data-slot="progress"
      className={mergeClassNames(
        "bg-[#5dc5f129] relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <div
        data-slot="progress-indicator"
        className="bg-[#0ab7f3] h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - value}%)` }}
      />
    </div>
  );
}

export { Progress };
