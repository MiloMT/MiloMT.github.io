import { PropsWithChildren } from "react";
import clsx from "clsx";

/** To include other styles later if needed */
type ButtonVariant = "default";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * The tag of Button element to be used, following standard Button convention
   */
  variant: ButtonVariant;
}

const buttonElement: Record<ButtonVariant, string> = {
  default: "border-accent text-xl",
};

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  className,
  variant,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "transition-all duration-500 hover:translate-y-3" /** Animation */,
        "border-4 border-solid shadow-lg shadow-gray-500/30" /** Border */,
        "hover:text-neutral-950 hover:bg-accent w-min text-nowrap py-4 px-8 rounded-2xl font-header text-accent" /** Styling */,
        className,
        buttonElement[variant],
      )}
      {...props}
    />
  );
};

export default Button;
