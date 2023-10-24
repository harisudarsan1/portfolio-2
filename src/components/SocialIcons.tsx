import React from "react";
import Github from "./icons/Github";
import Linkedin from "./icons/Linkedin";
import Instagram from "./icons/Instagram";
import Twitter from "./icons/Twitter";
import Link from "next/link";

type Props = {};

const SocialIcons = (props: Props) => {
  return (
    <div className="flex gap-6  py-5 md:py-0 md:flex-col md:fixed z-20 md:left-10 md:bottom-0 md:top-[50%] ">
      <Link href="https://twitter.com/HariSudarshan2">
        <Twitter></Twitter>
      </Link>
      <Link href="https://github.com/HARI-124">
        <Github></Github>
      </Link>
      <Link href="https://www.instagram.com/hari_sudarsan_/">
        <Instagram></Instagram>
      </Link>
      <Link href="https://www.linkedin.com/in/harisudarsan21/">
        <Linkedin></Linkedin>
      </Link>

      <div className=" hidden md:flex mx-auto h-full w-[2px] bg-black-900"></div>
    </div>
  );
};

export default SocialIcons;
