import { PropsWithChildren } from "react";
import clsx from "clsx";
import { imgLink } from "@/types";
import Image from "next/image";

interface ImageLinkProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    imgLink {}

const ImageLink: React.FC<PropsWithChildren<ImageLinkProps>> = ({
  className,
  link,
  imagePath,
  imageAlt,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      className={clsx(
        className,
        "hover:opacity-50 transition-all duration-500",
      )}
    >
      <Image src={imagePath} alt={imageAlt} height="50" width="50" />
    </a>
  );
};

export default ImageLink;
