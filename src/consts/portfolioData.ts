import { NextJS, ReactIcon, Tailwind, TS, Zustand } from "../../public/svg";
import websiteImage from "../../public/assets/png/ecotech.png";
import percar from "../../public/assets/png/percar.png";
import sharixweb from "../../public/assets/png/sharixFrient.png";
import vvrem from "../../public/assets/png/vvrem.png";
import trelloAnalog from "../../public/assets/png/trello-analog.png";
import soueast from "../../public/assets/png/soueast.png";
import { portfolioResponse } from "@/interfaces/baseResponse";

export const portfolioModalData: portfolioResponse[] = [
  {
    id: 1,
    name: "ECOTECH",
    image: websiteImage,
    description:
      "Website for ECOTECH, a company specializing in apartment renovations. It features a service catalog, project portfolio, and a cost calculator for quick lead processing.",
    contributions: [
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
    ],
    stack: [ReactIcon, NextJS, Zustand, Tailwind, TS],
    link: "https://vvrem.ru",
    type: "frontend",
  },
  {
    id: 2,
    name: "ESTETIKKA HAUS",
    image: vvrem,
    description:
      "Website for Estetikka Haus, a company specializing in apartment renovations. It features a service catalog, project portfolio, and a cost calculator for quick lead processing.",
    contributions: [
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
    ],
    stack: [ReactIcon, NextJS, Zustand, Tailwind, TS],
    link: "https://vvrem.ru",
    type: "fullstack",
  },
  {
    id: 3,
    name: "PERCAR",
    image: percar,
    description:
      "Website for Estetikka Haus, a company specializing in apartment renovations. It features a service catalog, project portfolio, and a cost calculator for quick lead processing.",
    contributions: [
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
    ],
    stack: [ReactIcon, NextJS, Zustand, Tailwind, TS],
    link: "https://vvrem.ru",
    type: "backend",
  },
  {
    id: 4,
    name: "SOUEAST-NZV",
    image: soueast,
    description:
      "Website for Estetikka Haus, a company specializing in apartment renovations. It features a service catalog, project portfolio, and a cost calculator for quick lead processing.",
    contributions: [
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
    ],
    stack: [ReactIcon, NextJS, Zustand, Tailwind, TS],
    link: "https://vvrem.ru",
    type: "frontend",
  },
  {
    id: 5,
    name: "SPORT-FRIEND",
    image: sharixweb,
    description:
      "Website for Estetikka Haus, a company specializing in apartment renovations. It features a service catalog, project portfolio, and a cost calculator for quick lead processing.",
    contributions: [
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
    ],
    stack: [ReactIcon, NextJS, Zustand, Tailwind, TS],
    link: "https://vvrem.ru",
    type: "fullstack",
  },
  {
    id: 6,
    name: "TRELLO-ANALOG",
    image: trelloAnalog,
    description:
      "Website for Estetikka Haus, a company specializing in apartment renovations. It features a service catalog, project portfolio, and a cost calculator for quick lead processing.",
    contributions: [
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
      "Developed responsive layouts for all pages based on Figma designs",
    ],
    stack: [ReactIcon, NextJS, Zustand, Tailwind, TS],
    link: "https://vvrem.ru",
    type: "fullstack",
  },
];