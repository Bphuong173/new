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
      title: "What does Patch do?",
      content: (
        <>
          <p>
            Patch makes it easier for your clinics to get new patients in the
            door. We do this in 3 ways. The first thing we do is build out your
            back-end sales and marketing systems. We utilize technology to help
            organize your leads, send out the right message to your potential
            patients based on where they’re in the customer journey, and help
            you follow up with lost leads. The second, and probably most
            important thing we do is teach you how to utilize the software. It’s
            one thing to have a badass system. It's a whole other thing to know
            how to use it.
          </p>
          <p className="mt-[25.7px]">
            Technology is scary. We make it easy to use with 1-on-1 onboarding
            calls, a private Slack channel, and all the training videos. The
            last thing we do is <strong>done for you</strong> marketing. We run
            your Google Ads. Create quarterly email marketing campaigns. Reach
            out to lost patients. Get your new Staff PT to 25+ sessions in under
            2 months. Build landing pages and follow-up email sequences for your
            local marketing events. You name it, we do it.
          </p>
        </>
      ),
    },
    {
      title: "What’s the time commitment during the program?",
      content: (
        <p>
          There are 5 tasks you need to do on day 1. These are important. From
          there, you’ll have a weekly 1-on-1 30-minute onboarding call
          <em>(that you schedule during your free time)</em> where we teach you
          exactly what you need to be doing. From there, you get weekly
          onboarding where we build off what you learned each week. That
          30-minute call, plus 5 to 10 minutes per day (<em>every day)</em> is
          what’s expected from you.
        </p>
      ),
    },
    {
      title: "Do you write all the email marketing for our business?",
      content: (
        <>
          <p>
            100%. Well, usually what we tell people is that we’ll write 95% of
            the emails, but we want you to go in and put your brand and voice
            spin on them. The hardest part of creating emails is just getting
            started. We do all the heavy lifting, you just finish the project.
          </p>
          <p className="mt-[25.7px]">
            Whats the typical Google Ads spend you suggest when getting started?
            500$/mo is what we typically recommend. If you’re not willing to
            invest anything more than that, your money might be best spent
            elsewhere. Google needs a certain amount of money each month to
            properly learn and understand what you’re trying to convert for.
            500$ to start seems to be the sweet spot.
          </p>
        </>
      ),
    },
    {
      title: "How long until my system is up and running?",
      content: (
        <p>
          If you complete all your onboarding tasks, we can get the system built
          within the first month. The key is your onboarding. If you’re
          committed to the 1-on-1 calls and put in your 5-10 minutes of work a
          day, your system will be ready to go by the end of month 1.
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
