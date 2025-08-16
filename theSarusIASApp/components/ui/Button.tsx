import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Variant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
type Size = "default" | "sm" | "lg" | "icon";

interface ButtonProps extends TouchableOpacityProps {
  variant?: Variant;
  size?: Size;
  label?: string; // optional if you want to pass children as text
  children?: React.ReactNode;
}

export function Button({
  variant = "default",
  size = "default",
  label,
  children,
  className,
  ...props
}: ButtonProps & { className?: string }) {
  // ✅ base styles
  let variantClasses = "";
  switch (variant) {
    case "destructive":
      variantClasses = "bg-destructive text-white shadow hover:bg-destructive/90";
      break;
    case "outline":
      variantClasses = "border bg-background shadow hover:bg-accent";
      break;
    case "secondary":
      variantClasses = "bg-secondary text-secondary-foreground shadow hover:bg-secondary/80";
      break;
    case "ghost":
      variantClasses = "hover:bg-accent text-accent-foreground";
      break;
    case "link":
      variantClasses = "text-primary underline underline-offset-4";
      break;
    default:
      variantClasses = "bg-primary text-primary-foreground shadow hover:bg-primary/90";
  }

  let sizeClasses = "";
  switch (size) {
    case "sm":
      sizeClasses = "h-8 rounded-md px-3";
      break;
    case "lg":
      sizeClasses = "h-10 rounded-md px-6";
      break;
    case "icon":
      sizeClasses = "w-9 h-9 items-center justify-center";
      break;
    default:
      sizeClasses = "h-9 px-4 py-2";
  }

  return (
    <TouchableOpacity
      className={`flex flex-row items-center justify-center rounded-md ${variantClasses} ${sizeClasses} ${className ?? ""}`}
      {...props}
    >
      {label ? (
        <Text className="text-sm font-medium">{label}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}
