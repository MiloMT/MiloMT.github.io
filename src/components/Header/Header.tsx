import { PropsWithChildren } from "react";
import clsx from "clsx";

type HeadingVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * The tag of heading element to be used, following standard heading convention
   */
  variant: HeadingVariant;
}

const headingElement: Record<HeadingVariant, string> = {
  h1: "text-4xl",
  h2: "text-3xl",
  h3: "text-2xl-bold",
  h4: "text-xl-bold",
  h5: "text-lg",
  h6: "text-md",
};

const Header: React.FC<PropsWithChildren<HeadingProps>> = ({
  className,
  variant,
  ...props
}) => {
  const Element = variant;

  return (
    <Element
      className={clsx(
        "font-heading text-accent",
        className,
        headingElement[variant],
      )}
      {...props}
    />
  );
};

export default Header;
