import { View, Text } from "react-native";

// Card container
function Card({ className, ...props }: React.ComponentProps<typeof View>) {
  return (
    <View
      className={`bg-card text-card-foreground flex flex-col gap-6 rounded-2xl border py-6 shadow-sm ${className ?? ""}`}
      {...props}
    />
  );
}

// Header
function CardHeader({ className, ...props }: React.ComponentProps<typeof View>) {
  return (
    <View
      className={`flex flex-col items-start gap-1.5 px-6 border-b pb-6 ${className ?? ""}`}
      {...props}
    />
  );
}

// Title
function CardTitle({ className, ...props }: React.ComponentProps<typeof Text>) {
  return (
    <Text
      className={`font-semibold leading-none text-lg ${className ?? ""}`}
      {...props}
    />
  );
}

// Description
function CardDescription({
  className,
  ...props
}: React.ComponentProps<typeof Text>) {
  return (
    <Text
      className={`text-muted-foreground text-sm ${className ?? ""}`}
      {...props}
    />
  );
}

// Action
function CardAction({ className, ...props }: React.ComponentProps<typeof View>) {
  return (
    <View
      className={`self-start ml-auto ${className ?? ""}`}
      {...props}
    />
  );
}

// Content
function CardContent({ className, ...props }: React.ComponentProps<typeof View>) {
  return <View className={`px-6 ${className ?? ""}`} {...props} />;
}

// Footer
function CardFooter({ className, ...props }: React.ComponentProps<typeof View>) {
  return (
    <View
      className={`flex flex-row items-center px-6 border-t pt-6 ${className ?? ""}`}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
