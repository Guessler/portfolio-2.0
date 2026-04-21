import { StaticImageData } from "next/image";
import { ComponentType } from "react";

type TechIcon = ComponentType;

export interface baseResponse {
  id: number;
  image: StaticImageData;
  name: string;
  description: string;
  contributions: string[];
  stack: TechIcon[];
  link: string;
}

