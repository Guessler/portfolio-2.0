import { CSS, Git, GitHub, HTML, JS, Laravel, MUI, NextJS, Postman, ReactIcon, Shadcn, Tailwind, TanstackQuery, TS, Vite, Zustand } from "../../public/svg";
import sharixweb from "../../public/assets/png/sharix.png";
import neza from "../../public/assets/png/neza.png";
import { experienceResponse } from "@/interfaces/baseResponse";

import ansara from "../../public/assets/png/ansara.png";

export const experianceData: experienceResponse[] = [
  {
    id: 1,
    position: "frontend",
    time: "6",
    name: { en: "SHARIX", ru: "SHARIX" },
    image: sharixweb,
    description: {
      en: "A technology startup offering solutions to optimize the use of material and human resources through planning and organizing operational calls or resource bookings. We work with both existing businesses and startups at any stage.",
      ru: "Технологический стартап, предлагающий решения по оптимизации использования материальных и человеческих ресурсов посредством планирования и организации оперативного вызова или бронирований ресурсов. Мы работаем как с действующими бизнесами, так и со стартапами на любой стадии",
    },
    contributions: {
      en: [
        "Helped develop adaptive layouts in Figma",
        "Engaged in adaptive and cross-browser layout layout",
        "Worked with the git version control system",
        "Worked in the SCRUM team",
      ],
      ru: [
        "Помогал разрабатывать адаптивные макеты в Figma",
        "Занимался адаптивной и кроссбраузерной версткой макетов",
        "Работал с системой контроля версий git",
        "Работал в SCRUM-команде",
      ],
    },
    stack: [HTML, CSS, JS, TS, Git, ReactIcon, MUI],
    link: "https://sharix.org/",
  },
  {
    id: 2,
    position: "frontend",
    time: "4",
    name: { en: "INDEPENDENCE", ru: "НЕЗАВИСИМОСТЬ" },
    image: neza,
    description: {
      en: "Auto Technical Center is a company specializing in the sale of used and new cars, offering a wide range of models, professional advice and a full range of services for the selection and registration of purchases.",
      ru: "Авто-технический центр — компания, специализирующаяся на продаже автомобилей с пробегом и новых авто, предлагающая широкий ассортимент моделей, профессиональную консультацию и полный цикл услуг по подбору и оформлению покупки.",
    },
    contributions: {
      en: [
        "Engaged in the design and support of a scalable application architecture",
        "Integrated the frontend part with backend services",
        "Developed adaptive and cross-browser layout layouts",
        "Created functionally rich components without using third-party frameworks",
        "Participated in the implementation of Agile methodology in team development",
      ],
      ru: [
        "Занимался проектированием и поддержкой масштабируемой архитектуры приложений",
        "Осуществлял интеграцию frontend-части с backend-сервисами",
        "Разрабатывал адаптивную и кроссбраузерную верстку макетов",
        "Создавал функционально насыщенные компоненты без использования сторонних фреймворков",
        "Участвовал во внедрении Agile-методологии в командную разработку",
      ],
    },
    stack: [JS, Tailwind, Git, Vite, ReactIcon, HTML, CSS, Laravel],
    link: "https://percar.ru",
  },
  {
    id: 3,
    position: "frontend",
    time: "6",
    name: { en: "ANSARA", ru: "ANSARA" },
    image: ansara,
    description: {
      en: "Digital is a full-service agency that specializes in creating and promoting marketing solutions for businesses.",
      ru: "digital-агентство полного цикла, которое специализируется на создании и продвижении маркетинговых решений для бизнеса.",
    },
    contributions: {
      en: [
        "I was developing user interfaces using Next.js",
        "Created and maintained multi-page online catalogs with easy navigation and filtering",
        "Participated in designing the architecture of the client side and improving the user experience",
        "Developed administrative dashboards for managing website content and data",
        "Optimized the performance and download speed of web applications",
      ],
      ru: [
        "Разрабатывал пользовательские интерфейсы с использованием Next.js",
        "Создавал и поддерживал многостраничные онлайн-каталоги с удобной навигацией и фильтрацией",
        "Участвовал в проектировании архитектуры клиентской части и улучшении пользовательского опыта",
        "Разрабатывал административные панели для управления контентом и данными сайта",
        "Оптимизировал производительность и скорость загрузки веб-приложений",
      ],
    },
    stack: [ReactIcon, NextJS, Zustand, Tailwind, JS, TS, TanstackQuery, Vite, GitHub, Shadcn, Postman],
    link: "https://ansara.ru/",
  },
];