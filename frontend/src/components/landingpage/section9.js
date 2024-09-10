import React, { useState } from "react";
import backgroundImage from "./image/background-grid.svg";
import { FAQItem } from "./faq";
import "./section9.css";
import { AnimatedSection } from "./animatedsection";
export default function Section9() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const faqs = [
    {
      title: "What does AppTodo do?",
      content: (
        <>
          <p>
            AppTodo is a comprehensive task management tool designed to help you
            organize daily activities. With features like task prioritization,
            deadline tracking, and collaboration options, it empowers you to
            stay focused and productive. Whether for personal use or team
            projects, AppTodo adapts seamlessly to your workflow.
          </p>
        </>
      ),
    },
    {
      title: "What’s the time commitment during the program?",
      content: (
        <p>
          The time commitment varies based on your goals and the complexity of
          your tasks. On average, users spend about 15-30 minutes daily to
          update and manage their tasks effectively. appTodo is designed to
          integrate smoothly into your routine, making it easy to stay on track
          without feeling overwhelmed.
        </p>
      ),
    },
    {
      title: "How does appTodo help with time management",
      content: (
        <>
          <p>
            AppTodo includes features like deadline reminders, priority
            settings, and progress tracking, which help you manage your time
            effectively. By visualizing your tasks, you can allocate your time
            better and focus on what’s most important.
          </p>
        </>
      ),
    },
    {
      title: "Can I access appTodo on mobile devices?",
      content: (
        <p>
          Absolutely! appTodo is available on both desktop and mobile platforms,
          allowing you to manage your tasks on the go. Whether you're at the
          office or traveling, you can access your task list anytime, anywhere.
        </p>
      ),
    },
  ];
  const AnimatedText = ({ text }) => {
    return (
      <h1 className="fade-in">
        {text.split("").map((char, index) => (
          <span key={index} className="letter" style={{ "--delay": index }}>
            {char}
          </span>
        ))}
      </h1>
    );
  };
  return (
    <div
      id="faqs-nav-blue-locked"
      className="relative overflow-hidden h-auto pt-[219px] pb-[85px] top-0 left-0 right-0 bottom-0 bg-[position:6.35rem_0rem] bg-[#989696]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div id="products-top" className="relative pt-[50px]">
        <div>
          <h2
            id="h2 h-anima"
            className="lg:ml-[85.7px] ml-[14px] lg:mt-0 mt-[70px] lg:mb-[161px] mb-0"
          >
            <AnimatedSection
              id="h-line"
              className="uppercase lg:pr-[47.6px] pr-0 text-[50px] lg:text-[133.33px] lg:leading-[125px] leading-[50px] tracking-wide"
              animationClass="fade-in"
            >
              <AnimatedText text="FREQUENTLY" />
            </AnimatedSection>
            <AnimatedSection
              id="h-line"
              className="uppercase lg:pr-[47.6px] pr-0 lg:text-[133.33px] text-[50px] lg:leading-[125px]  leading-[50px] tracking-wide"
              animationClass="fade-in"
            >
              <AnimatedText text="ASKED QUESTIONS" />
            </AnimatedSection>
            <div id="section-couter4">
              <h1 className="font-pp-right text-[27px] absolute bottom-[5px] left-[5px]">
                07
              </h1>
              <p className=""></p>
            </div>
          </h2>
        </div>
      </div>
      <div
        id="faqs-inner"
        className="lg:ml-[177px] ml-[14px] lg:mr-0 mr-[14px] mb-[17px] lg:w-[1062px] w-auto lg:mt-0 mt-[120px]"
      >
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            index={index}
            title={faq.title}
            content={faq.content}
            isExpanded={expandedIndex === index}
            onClick={handleToggle}
          />
        ))}
      </div>
    </div>
  );
}
