import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div>
      <p className=" text-center text-sm lg:text-lg">
        inspired from{" "}
        <Link href="https://v4.brittanychiang.com/">Brittany chang</Link>
      </p>
    </div>
  );
};

export default Footer;
