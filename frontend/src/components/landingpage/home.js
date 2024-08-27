import React from "react";
import { Section1 } from "./section1";
import { Section2 } from "./section2";
import { Section3 } from "./section3";
import { Section4 } from "./section4";
import { Section5 } from "./section5";
import { Section6 } from "./section6";
import { Section7 } from "./section7";
import { Section8 } from "./section8";
import { Section9 } from "./section9";

import "./home.css";
const Section1 = lazy(() => import("./section1"));
const Section2 = lazy(() => import("./section2"));
const Section3 = lazy(() => import("./section3"));
const Section4 = lazy(() => import("./section4"));
const Section5 = lazy(() => import("./section5"));
const Section6 = lazy(() => import("./section6"));
const Section7 = lazy(() => import("./section7"));
const Section8 = lazy(() => import("./section8"));
const Section9 = lazy(() => import("./section9"));
const Footer = lazy(() => import("./footer"));

export const Home = () => {
  return (
    <>
      <div>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
      </div>
    </>
  );
};
