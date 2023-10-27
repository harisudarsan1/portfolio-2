import Link from "next/link";
import React from "react";
import { LargerText, SmallText } from "@/components/texts";
import Searchbar from "@/components/archive/Searchbar";
import { blogs } from "@/utils/data";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="">
      <LargerText text="Archives" className="text-center m-4">
        {" "}
      </LargerText>

      <div className="flex flex-col gap-2 justify-center md:w-[50%] mx-auto">
        {blogs.map((blog, index) => (
          <Link
            key={index + 1}
            className="text-left"
            href={"archive/" + blog.slag}
          >
            <SmallText text={index + 1 + " " + blog.title}></SmallText>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
