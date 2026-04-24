import { StaticImageData } from "next/image";
import { ComponentType } from "react";

type TechIcon = ComponentType;

type WorkPosition = "frontend" | "backend" | "fullstack";
type ProjectType = "frontend" | "backend" | "fullstack";

type LangString = {
  en: string;
  ru: string;
};

type LangArray = {
  en: string[];
  ru: string[];
};

export interface portfolioResponse {
  id: number;
  image: StaticImageData;
  name: string | LangString;
  description: string | LangString;
  contributions: string[] | LangArray;
  stack: TechIcon[];
  link: string;
  type: ProjectType;
}


export interface experienceResponse extends Omit<portfolioResponse, 'type'>{
  time: string;
  position: WorkPosition;
}