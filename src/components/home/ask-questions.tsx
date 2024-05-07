import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '../ui/accordian';
import faqData from '../../constant/faq-data';
export default function AskQuestions() {
  return (
    <div className="flex m-[32px] justify-between rounded-[40px] bg-[#E8EEE7]">
      <div className="flex  flex-col ">
        <div className="flex flex-col gap-[20px] p-[74px]">
          <span
            className="text-[32px] font-[400] font-cursive text-[#9E9D9D] leading-[35px]"
            style={{ letterSpacing: '-2px' }}
          >
            What's on your mind
          </span>
          <span
            className="text-[60px] font-[600] leading-[66px]"
            style={{ letterSpacing: '-1px' }}
          >
            Ask Questions
          </span>
        </div>
        <svg
          width="491"
          height="475"
          viewBox="0 0 491 475"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M251.005 123.04H14.5072V0H255.167C369.093 0 401.151 14.6756 444.456 57.9807C477.934 91.7389 490.999 135.444 490.999 205.385V514.607H349.717V205.385C349.717 204.652 349.706 203.921 349.685 203.191L275.051 253.194L275.078 253.215L144.958 340.344C136.345 346.116 130.769 355.335 130.769 365.723C130.769 383.206 146.563 397.378 166.047 397.378L166.077 397.393H283.781V514.592H166.077H166.05C74.3429 514.592 0 447.884 0 365.596C0 313.559 29.7294 267.753 74.779 241.107L251.005 123.04Z"
            fill="url(#paint0_linear_0_212)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0_212"
              x1="245.5"
              y1="2.84126e-08"
              x2="245"
              y2="457.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stop-color="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="pr-[74px] pt-[137px]">
        <Accordion type="single" collapsible className="w-[581px] gap-[32px]">
          {faqData.map((data, index) => (
            <AccordionItem
              key={data.label}
              value={`item-${index}`}
              className={`${index !== faqData.length - 1 && 'mb-[32px]'} ${index === faqData.length - 1 && 'border-none'}`}
            >
              <AccordionTrigger className="text-[20px] leading-[28px] font-[600] text-left">
                {data.label}
              </AccordionTrigger>
              <AccordionContent className="text-[15px] font-[400] leading-[24px] text-[#617275]">
                {data.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
