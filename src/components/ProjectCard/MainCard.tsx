import React from "react";
import { LargeText, SmallerText, SmallText } from "../texts";
import Image from "next/image";
import { classNames } from "@/utils";
import Link from "next/link";
import Github from "../icons/Github";
import External from "../icons/External";
import { Project } from "@/utils/types";

const MainCard = ({
  title,
  details,
  technologies,
  leftSide,
  image,
  github,
  liveURL,
}: Project) => {
  return (
    <div>
      <div
        className={classNames(
          leftSide ? "flex-row" : "flex-row-reverse",
          "flex relative",
        )}
      >
        <Image
          height={500}
          width={500}
          className={classNames(
            " -z-10 opacity-20 absolute h-full w-[60%] md:opacity-80 hover:opacity-100  ",
            leftSide ? "right-0" : "left-0",
          )}
          alt="projectImage"
          src={"/projects/" + image}
        ></Image>

        <div
          className={classNames(
            leftSide ? "text-left justify-start" : "text-right justify-end",
            "flex flex-col gap-5 z-10 ",
          )}
        >
          <SmallText text="featured project"></SmallText>
          <LargeText className=" md:text-5xl" text={title}></LargeText>

          <div
            className={classNames(
              "bg-bg1 px-6 py-4 flex min-w-[70%] overflow-visible relative max-w-[500px] ",
              leftSide ? " justify-start " : " justify-end",
            )}
          >
            <SmallerText text={details}></SmallerText>
          </div>

          <div
            className={classNames(
              leftSide ? "justify-start" : "justify-end",
              "flex gap-3",
            )}
          >
            {technologies.map((item, index) => (
              <SmallText
                key={index + 1}
                className=" text-sm"
                text={item}
              ></SmallText>
            ))}
          </div>
          <div
            className={classNames(
              leftSide ? "justify-start" : "justify-end",
              "flex gap-3 text-sm",
            )}
          >
            <Link href={github}>
              <Github></Github>
            </Link>
            <Link href={liveURL}>
              <External></External>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
