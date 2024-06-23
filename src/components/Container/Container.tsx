import React, { PropsWithChildren } from "react";
import clsx from "clsx";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container: React.FC<PropsWithChildren<ContainerProps>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(className, "md:container p-4 sm:p-12 mx-auto")}
      {...props}
    />
  );
};

export default Container;
