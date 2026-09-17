import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const variants = cva("c-section relative overflow-hidden py-16", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type Props = React.ComponentProps<"section"> & VariantProps<typeof variants>;

import Container from "@/app/components/Container";

function Section({ children, className, variant, ...props }: Props) {
  return (
    <section className={cn(variants({ variant, className }))} {...props}>
      <Container>{children}</Container>
    </section>
  );
}

export default Section;
