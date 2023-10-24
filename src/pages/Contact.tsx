import React from "react";
import { LargerText, SmallText, SmallerText } from "@/components/texts";
import Button from "@/components/Button";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="w-[70%] py-20 mx-auto flex flex-col gap-5 items-center">
      <SmallerText text="05. what's next"></SmallerText>
      <LargerText text="Get In Touch"></LargerText>
      <SmallText text="Some details about myself"></SmallText>
      <Button text="Say Hello"></Button>
    </div>
  );
};

export default Contact;
