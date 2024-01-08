"use client";
import { useState } from "react";
import Image from "next/image";
import { AccordionData } from "./accordion.model";

import { Work_Sans } from "next/font/google";

const work_sans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Accordion(props: {
  data: AccordionData;
  hasBottomBorder?: boolean;
}) {
  const [isOpened, setIsOpened] = useState(false);
  // const classes = [
  //   isOpened ? "border-b-2 pb-4" : "",
  //   props.hasBottomBorder ? "pb-4" : "",
  // ].join(" ");
  return (
    <div
      className={isOpened && props.hasBottomBorder ? "border-b-[1px] pb-4" : ""}
    >
      <div
        className={`w-full h-[4em]  flex items-center text-[color:hsl(292_42%_14%)] justify-center px-4 ${
          !isOpened && props.hasBottomBorder ? "border-b-[1px]" : ""
        }`}
      >
        <div
          className={`flex-1 font-medium cursor-pointer ${work_sans.className}`}
          onClick={() => setIsOpened(!isOpened)}
        >
          {props.data.showedValue}
        </div>
        <div>
          {!isOpened ? (
            <button onClick={() => setIsOpened(true)}>
              <Image
                src={"/faq-accordion/images/icon-plus.svg"}
                alt="icon plus"
                width={25}
                height={25}
              />
            </button>
          ) : (
            <button onClick={() => setIsOpened(false)}>
              <Image
                src={"/faq-accordion/images/icon-minus.svg"}
                alt="icon plus"
                width={25}
                height={25}
              />
            </button>
          )}
        </div>
      </div>
      {isOpened ? (
        <div
          className={`px-4 animate-all ease-in-out duration-500 text-[color:hsl(292_16%_49%)] font-normal ${work_sans.className}`}
        >
          <p>{props.data.hiddenValue}</p>
        </div>
      ) : null}
    </div>
  );
}
