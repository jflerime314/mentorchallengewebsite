import Image from "next/image";
import Accordion from "./components/accordion/accordion";
import { AccordionData } from "./components/accordion/accordion.model";
import { Work_Sans } from "next/font/google";

const work_sans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const accordionData: AccordionData[] = [
  {
    showedValue: "What is Frontend Mentor, and how will it help me?",
    hiddenValue:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    showedValue: "Is Frontend Mentor free?",
    hiddenValue:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    showedValue: "Can I use Frontend Mentor projects in my portfolio?",
    hiddenValue:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    showedValue:
      "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    hiddenValue:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

export default function FaqAccordion() {
  return (
    <div className=" w-full h-full flex flex-col">
      <div className="w-full h-[30%] relative">
        <Image
          className="hidden sm:block"
          src={"/faq-accordion/images/background-pattern-desktop.svg"}
          alt="Background"
          objectFit="cover"
          fill={true}
        />
        <Image
          className="block sm:hidden"
          src={"/faq-accordion/images/background-pattern-mobile.svg"}
          alt="Background"
          objectFit="cover"
          fill={true}
        />
      </div>
      <div className="flex-1 bg-[color:hsl(275_100%_97%)] relative">
        <div className="absolute z-50 -top-[26%] bg-white md:w-[50%]  lg:w-[45%] xl:w-[40%]  h-fit pb-10 rounded-xl left-0 right-0 mx-auto p-6 flex flex-col">
          <div className="flex space-x-5 items-center">
            <div>
              <Image
                src={"/faq-accordion/images/icon-star.svg"}
                alt="Icon star"
                width={30}
                height={30}
              />
            </div>
            <div>
              <h1
                className={`text-[2em] font-bold text-[color:hsl(292_42%_14%)] ${work_sans.className}`}
              >
                FAQs
              </h1>
            </div>
          </div>
          <div className="flex-1 mt-8">
            {accordionData.map((accData, index) => (
              <Accordion
                hasBottomBorder={
                  index < accordionData.length - 1 ? true : false
                }
                key={index}
                data={accData}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="text-[11px] text-center">
        Challenge by{" "}
        <a
          className="text-[color:hsl(228_45%_44%)]"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
}
