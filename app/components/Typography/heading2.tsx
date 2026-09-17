import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const variants = cva(
  "c-typography--heading2 text-2xl leading-[140%] font-semibold",
  {
    variants: {
      variant: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type Props = React.ComponentProps<"h2"> & VariantProps<typeof variants>;

function Section({ children, className, variant, ...props }: Props) {
  return (
    <h2 className={cn(variants({ variant, className }))} {...props}>
      {children}
    </h2>
  );
}

export default Section;
