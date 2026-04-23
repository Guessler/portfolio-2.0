import { StaticImageData } from "next/image";
import { ComponentType } from "react";

type TechIcon = ComponentType;

type WorkPosition = "frontend" | "backend" | "fullstack";
type ProjectType = "frontend" | "backend" | "fullstack";

export interface portfolioResponse {
  id: number;
  image: StaticImageData;
  name: string;
  description: string;
  contributions: string[];
  stack: TechIcon[];
  link: string;
  type: ProjectType;
}


export interface experienceResponse extends Omit<portfolioResponse, 'type'>{
  time: string;
  position: WorkPosition;
}

