import { NextJS, ReactIcon, Tailwind, TS, Zustand } from "../../public/svg";
import sharixweb from "../../public/assets/png/sharix.png";
import neza from "../../public/assets/png/neza.png";
import { experienceResponse } from "@/interfaces/baseResponse";

import ansara from "../../public/assets/png/ansara.png";

export const experianceData: experienceResponse[] = [
  {
    id: 1,
    position: "frontend",
    time: "6",
    name: "SHARIX",
    image: sharixweb,
    description:
      "Website for ANSARA, a company specializing in apartment renovations. It features a service catalog, project portfolio, and a cost calculator for quick lead processing.",
    contributions: [
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
    ],
    stack: [ReactIcon, NextJS, Zustand, Tailwind, TS],
    link: "https://vvrem.ru",
  },
  {
    id: 2,
    position: "frontend",
    time: "4",
    name: "INDEPENDENCE",
    image: neza,
    description:
      "Website for ANSARA, a company specializing in apartment renovations. It features a service catalog, project portfolio, and a cost calculator for quick lead processing.",
    contributions: [
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
    ],
    stack: [ReactIcon, NextJS, Zustand, Tailwind, TS],
    link: "https://vvrem.ru",
  },
  {
    id: 3,
    position: "frontend",
    time: "6",
    name: "ANSARA",
    image: ansara,
    description:
      "Website for ANSARA, a company specializing in apartment renovations. It features a service catalog, project portfolio, and a cost calculator for quick lead processing.",
    contributions: [
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
    ],
    stack: [ReactIcon, NextJS, Zustand, Tailwind, TS],
    link: "https://vvrem.ru",
  },
];
