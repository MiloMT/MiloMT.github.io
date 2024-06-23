import React, { PropsWithoutRef } from "react";
import clsx from "clsx";
import Header from "../Header/Header";
import Tag from "../Tag/Tag";
import Image from "next/image";
import { proj } from "@/types";

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement>, proj {}

const ProjectCard: React.FC<PropsWithoutRef<ProjectCardProps>> = ({
  className,
  name,
  tags,
  imagePath,
  imageAlt,
  desc,
  link,
  ...props
}) => {
  return (
    <div
      className={clsx(
        className,
        "relative grid sm:grid-cols-3 auto-rows-min gap-4 h-full overflow-hidden" /** Layout */,
        "rounded-2xl border-4 border-solid border-gray-500/10 shadow-lg shadow-gray-500/10" /** Border */,
      )}
      {...props}
    >
      <a href={link} target="_blank" className="col-span-3">
        <Header
          variant="h3"
          className="p-4 sm:px-16 sm:pt-16 hover:brightness-75 transition-all duration-500"
        >
          {name}
        </Header>
      </a>
      <div className="col-span-2 flex flex-col justify-between p-4 sm:pb-16 sm:pl-16">
        <p className="leading-relaxed text-sm">{desc}</p>
        <ul className="flex flex-row flex-wrap mt-4">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </ul>
      </div>
      <Image
        src={imagePath}
        alt={imageAlt}
        className="absolute opacity-10 sm:opacity-20 min-w-[40%] h-full object-cover object-left-top right-0 bottom-0 z-[-5]"
        width="500"
        height="500"
      />
    </div>
  );
};

export default ProjectCard;
