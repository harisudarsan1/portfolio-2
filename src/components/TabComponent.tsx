// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
"use client";
import { SmallText, SmallerText } from "@/components/texts";
import { workExperience } from "@/utils/types";
import TriangleSVG from "./icons/TriangleSVG";
import { Tab } from "@headlessui/react";
import { classNames } from "@/utils";

type Props = {
  experience: workExperience[];
};

function Experience({ experience }: Props) {
  return (
    <Tab.Group>
      <div className="flex flex-col md:flex-row gap-5 max-w-full">
        <Tab.List className="min-w-max max-h-max px-5 flex flex-row md:flex-col cursor-pointer ">
          {experience.map((item, index) => (
            <Tab
              key={index + 1}
              className={({ selected }) =>
                classNames(
                  "  outline-0 md:border-l-4 border-l-0 border-bg4 px-5  border-b-2 md:border-b-0 border-solid max-h-max selection:border-bg4",
                  selected ? "border-l-black-900" : "",
                )
              }
            >
              <SmallText text={item.company}></SmallText>
            </Tab>
          ))}
        </Tab.List>

        <div>
          {experience.map((item, index) => (
            <Tab.Panel key={index + 1} className=" w-full flex flex-col gap-4">
              <span className="flex gap-4">
                <SmallText text={item.role}></SmallText>
                <SmallerText
                  className=" text-bg4"
                  text={"@ " + item.company}
                ></SmallerText>
              </span>
              <SmallerText text={item.timeline}></SmallerText>
              <ul className="flex flex-col gap-2 list-inside list-square">
                {item.details?.map((d, index) => (
                  <li key={index + 1}>
                    {" "}
                    <TriangleSVG></TriangleSVG>{" "}
                    <SmallerText text={d}></SmallerText>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </div>
      </div>
    </Tab.Group>
  );
}

export default Experience;
