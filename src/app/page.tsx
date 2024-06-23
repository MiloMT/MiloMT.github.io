import React from "react";
import Image from "next/image";
import Header from "@/components/Header/Header";
import Container from "@/components/Container/Container";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import Button from "@/components/Button/Button";
import ImageLink from "@/components/ImageLink/ImageLink";
import { projList, socials, technologies } from "../../public/common";
import { proj, imgLink } from "@/types";

const Home = (): React.JSX.Element => {
  const technologyLength: number = Math.ceil(technologies.length / 2);
  const technologiesFirst: string[] = technologies.slice(0, technologyLength);
  const technologiesLast: string[] = technologies.slice(technologyLength);

  return (
    <main>
      <Container className="mt-48">
        <Image
          src={"/images/myles.svg"}
          alt={"first heading"}
          className="w-full mb-4"
          width={1}
          height={1}
        />
        <Image
          src={"/images/subheader.svg"}
          alt={"first heading"}
          className="w-full mb-4"
          width={1}
          height={1}
        />
      </Container>
      <Container className="my-48">
        <Header variant="h1" className={"italic text-center"}>
          Hi.
        </Header>
        <p className="text-lg sm:text-xl text-center leading-relaxed">
          {
            "I'm a full stack web developer with an extensive background in AEC and Software and a passion for creating functional, engaging web applications with a keen eye for clean and efficient code. "
          }
        </p>
      </Container>
      <Container className="relative my-48 flex flex-col justify-center items-center h-full">
        <div className="flex flex-row flex-wrap justify-around">
          {technologiesFirst.map((technology: string) => (
            <p
              className="hover:text-accent transition-all duration-500 mx-4 my-2 sm:mx-10 sm:my-4 font-heading text-lg text-neutral-800 italic"
              key={technology}
            >
              {technology}
            </p>
          ))}
        </div>
        <Header variant="h2" className={"italic text-center"}>
          Technologies I&apos;ve fiddled with.
        </Header>
        <div className="flex flex-row flex-wrap justify-center">
          {technologiesLast.map((technology: string) => (
            <p
              className="hover:text-accent transition-all duration-500 mx-4 my-2 sm:mx-8 sm:my-4 font-heading text-lg text-neutral-800 italic"
              key={technology}
            >
              {technology}
            </p>
          ))}
        </div>
        <div className="w-full h-full absolute bg-gray-700/5 z-[-5] rounded-full blur-3xl"></div>
      </Container>
      <Container>
        <Header variant="h2" className={"italic text-center shadow-lg"}>
          Stuff I&apos;ve worked on.
        </Header>
      </Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 sm:p-12">
        {projList.map((proj: proj) => (
          <ProjectCard
            key={proj.name}
            desc={proj.desc}
            name={proj.name}
            tags={proj.tags}
            imagePath={`/images/projects/${proj.imagePath}`}
            imageAlt={proj.imageAlt}
            link={proj.link}
          />
        ))}
      </div>
      <Container className="grid auto-cols-min grid-rows-2 gap-16 justify-center my-48">
        <Button variant="default">Let&apos;s work together</Button>
        <div className="flex flex-row justify-around">
          {socials.map((social: imgLink) => (
            <ImageLink
              key={social.link}
              imagePath={`/images/logos/${social.imagePath}`}
              imageAlt={social.imageAlt}
              link={social.link}
            />
          ))}
        </div>
      </Container>
    </main>
  );
};

export default Home;
