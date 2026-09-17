import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const variants = cva(
  "c-typography--paragraph text-base text-black/48 leading-[160%] font-normal",
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

type Props = React.ComponentProps<"p"> & VariantProps<typeof variants>;

function Paragraph({ children, className, variant, ...props }: Props) {
  return (
    <h2 className={cn(variants({ variant, className }))} {...props}>
      {children}
    </h2>
  );
}

export default Paragraph;
