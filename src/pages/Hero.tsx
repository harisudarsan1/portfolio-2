import React from "react";
import { SmallText, SmallerText, LargerText } from "@/components/texts";
import { Herocontent } from "@/utils/data";
import Button from "@/components/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-[70%] mx-auto flex flex-col h-[90vh] justify-center ">
      <SmallText className=" mb-5" text="hi my name is"></SmallText>
      <LargerText className="mb-3 lg:text-7xl" text="Harisudarsan"></LargerText>
      <LargerText
        className="mb-7 lg:text-7xl"
        text="I build things for web"
      ></LargerText>
      <SmallerText className="mb-9" text={Herocontent}></SmallerText>
      <Link href="/#contact">
        {" "}
        <Button text="Contact me"></Button>
      </Link>
    </div>
  );
};

export default Hero;

{
  /* <SmallText className=' mb-5' text='hi my name is'></SmallText>
        <LargeText className='mb-3' text='Harisudarsan'></LargeText>
        <LargeText className='mb-7' text='I build things for web'></LargeText>
      <SmallerText className='mb-9' text="I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at "></SmallerText>
     <Link href="/#contact"> <Button text='Contact me'></Button></Link> */
}
