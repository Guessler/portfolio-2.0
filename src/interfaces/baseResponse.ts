import { StaticImageData } from "next/image";
import { ComponentType } from "react";

type TechIcon = ComponentType;

type WorkPosition = "frontend" | "backend" | "fullstack" 

export interface portfolioResponse {
  id: number;
  image: StaticImageData;
  name: string;
  description: string;
  contributions: string[];
  stack: TechIcon[];
  link: string;
}


export interface experienceResponse extends portfolioResponse{
  time: string;
  position: WorkPosition;
}

