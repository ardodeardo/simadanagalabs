import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const variants = cva("c-container w-full px-6", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type Props = React.ComponentProps<"div"> & VariantProps<typeof variants>;

function Container({ children, className, variant, ...props }: Props) {
  return (
    <div className={cn(variants({ variant, className }))} {...props}>
      {children}
    </div>
  );
}

export default Container;
