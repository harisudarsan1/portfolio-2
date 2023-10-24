import React from "react";

import { SmallText, SmallerText } from "@/components/texts";
import Image from "next/image";
import Title from "@/components/Title";
import TriangleSVG from "@/components/icons/TriangleSVG";
import { AboutContent } from "@/utils/data";

const About = () => {
  return (
    <div className="flex flex-col gap-6 basis-2/3" id="about">
      <SmallText text={AboutContent}> </SmallText>
      <div className="flex gap-20 justify-start items-start list-square">
        <ul>
          <li>
            {" "}
            <TriangleSVG></TriangleSVG> NextJs
          </li>
          <li>
            {" "}
            <TriangleSVG></TriangleSVG> NodeJs
          </li>
          <li>
            {" "}
            <TriangleSVG></TriangleSVG> Linux
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <TriangleSVG></TriangleSVG> Tailwind
          </li>
          <li>
            {" "}
            <TriangleSVG></TriangleSVG> Golang
          </li>
          <li>
            {" "}
            <TriangleSVG></TriangleSVG> Docker
          </li>
        </ul>
      </div>
    </div>
  );
};

const AboutImage = () => {
  return (
    <Image
      width={500}
      height={500}
      className="flex h-[50%] "
      sizes="(max-width: 480px) 100vw,
         (max-width: 768px) 75vw,
         (max-width: 1060px) 50vw,
         33vw"
      src="/Profile.png"
      alt="profilepic"
      style={{ objectFit: "cover" }}
    ></Image>
  );
};

const AboutPage = () => {
  return (
    <div className="w-[70%] mx-auto my-20">
      <Title title="About me" num="01."></Title>

      <div className="flex flex-col-reverse lg:flex-row gap-6">
        <About></About>
        <AboutImage></AboutImage>
      </div>
    </div>
  );
};

export default AboutPage;
