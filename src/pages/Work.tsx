import React from "react";
import Title from "@/components/Title";
import { SmallText, SmallerText } from "@/components/texts";
import TabComponent from "@/components/TabComponent";
import { workExperience } from "@/utils/types";
import { experience } from "@/utils/data";

type Props = {};

const Work = (props: Props) => {
  return (
    <div className=" w-[70%] mx-auto py-40 ">
      <Title num="02." title={`Where I've Worked `}></Title>
      <TabComponent experience={experience}></TabComponent>
    </div>
  );
};

export default Work;
