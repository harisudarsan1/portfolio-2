import { Inconsolata } from "next/font/google";
import { HTMLAttributes } from "react";
import { classNames } from "@/utils";

const inconsolota = Inconsolata({
  subsets: ["latin"],
});

type props = HTMLAttributes<HTMLBodyElement> & {
  text: string;
  className?: string;
};

export function SmallText({ text, className }: props) {
  return (
    <h1
      className={classNames(
        inconsolota.className,
        `  text-base md:text-lg lg:text-xl`,
        className ?? "",
      )}
    >
      {text}
    </h1>
  );
}

export function LargeText({ text, className }: props) {
  return (
    <h2
      className={classNames(
        inconsolota.className,
        `text-2xl whitespace-nowrap md:text-4xl font-bold lg:text-5xl `,
        className ?? "",
      )}
    >
      {text}
    </h2>
  );
}

export function SmallerText({ text, className }: props) {
  return (
    <p
      className={`${inconsolota.className} ${className} text-sm md:text-lg lg:text-xl `}
    >
      {text}
    </p>
  );
}

export function LargerText({ text, className }: props) {
  return (
    <h1
      className={classNames(
        inconsolota.className,
        `text-2xl whitespace-nowrap md:text-3xl font-bold lg:text-6xl `,
        className ?? "",
      )}
    >
      {text}
    </h1>
  );
}
