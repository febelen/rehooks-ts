import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/utils/cn";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-fd-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/90",
        destructive: "bg-rose-600 text-rose-100 hover:bg-rose-500",
        outline:
          "border border-input bg-fd-background hover:bg-fd-accent hover:text-fd-accent-foreground",
        secondary:
          "dark:bg-fd-secondary text-white bg-fd-primary hover:bg-fd-primary/80 dark:text-fd-secondary-foreground dark:hover:bg-fd-secondary/80",
        ghost: "hover:bg-fd-accent hover:text-fd-accent-foreground",
        link: "text-fd-primary underline-offset-4 hover:underline",
        hero: "bg-blue-600 text-white dark:text-fd-foreground hover:bg-blue-500",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        circular: "h-9 px-4 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
