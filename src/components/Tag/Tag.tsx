import React, { PropsWithChildren } from "react";
import clsx from "clsx";

interface TagProps extends React.HTMLAttributes<HTMLLIElement> {}

const Tag: React.FC<PropsWithChildren<TagProps>> = ({
  className,
  ...props
}) => {
  return (
    <li
      className={clsx(
        className,
        "flex justify-center text-xs",
        "border-solid border-accent border-2 rounded-lg",
        "w-fit px-2 py-1 mr-2 mt-2 bg-background-dark",
        "hover:px-4 transition-all duration-500",
      )}
      {...props}
    />
  );
};

export default Tag;
