import React from "react";
import ArrowBlue from "./image/arrow-blue-down.svg";
import "./section9.css";
export const FAQItem = ({ index, title, content, isExpanded, onClick }) => {
  return (
    <div
      id={`faq-accordion-${index}`}
      className="relative bg-[#fff] border border-[black] rounded-[10px] flex h-full"
      onClick={() => onClick(index)}
    >
      <div
        id={`faq-inner-${index}`}
        className="w-full flex items-center flex-col"
      >
        <div
          id={`faq-header-${index}`}
          className="w-full h-[87px - 1px] text-[28px] py-[20px] px-[88px] leading-1"
        >
          <div className="flex items-center justify-center absolute top-0 left-0 w-[42px] h-[38px] border-r text-[11.2px] border-b border-[black] [border-bottom-right-radius:10px]">
            <span>{index + 1}</span>
          </div>
          <span>{title}</span>
        </div>
        {isExpanded && (
          <div className="accordion-content w-full overflow-hidden relative">
            <div className="accordion-inner pt-[4.7px] pl-[90.5px] pr-[90.5px] pb-[33px]">
              <div className="body text-[17px] leading-[28.5px] w-[638px]">
                {content}
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        id={`faq-arrow-${index}`}
        className="max-w-[87px] flex items-center justify-center min-w-[87px] relative cursor-pointer border-l border-[black]"
      >
        <img
          src={ArrowBlue}
          alt="ArrowBlue"
          className={`arrow ${isExpanded ? "arrow-rotated" : ""}`}
        />
      </div>
    </div>
  );
};
