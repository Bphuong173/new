import React from "react";
import { Section1 } from "./section1";
import { Section2 } from "./section2";
import { Section3 } from "./section3";
import { Section4 } from "./section4";
import { Section5 } from "./section5";
import { Section6 } from "./section6";
import { Section7 } from "./section7";

import "./home.css";

export const Home = () => {
  return (
    <>
      <div>
        <div>
          <Section1 />
        </div>
        <div>
          <Section2 />
        </div>
        <div>
          <Section3 />
        </div>
        <div>
          <Section4 />
        </div>
        <div>
          <Section5 />
        </div>
        <div>
          <Section6 />
        </div>
      </div>
    </>
  );
};
