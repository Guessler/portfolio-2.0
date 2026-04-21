import websiteImage from "../../../public/assets/png/ecotech.png";
import percar from "../../../public/assets/png/percar.png";
import sharixweb from "../../../public/assets/png/sharixFrient.png";
import vvrem from "../../../public/assets/png/vvrem.png";
import trelloAnalog from "../../../public/assets/png/trello-analog.png";
import soueast from "../../../public/assets/png/soueast.png";
import { Card } from "./Card";

const portfolio = [
  {
    id: 1,
    image: websiteImage,
    text: "ECOTECH",
  },
  {
    id: 2,
    image: vvrem,
    text: "VVREM",
  },
  {
    id: 3,
    image: percar,
    text: "PERCAR",
  },
  {
    id: 4,
    image: soueast,
    text: "SOUEAST-NZV",
  },
  {
    id: 5,
    image: sharixweb,
    text: "SPORT-FRIEND",
  },
  {
    id: 6,
    image: trelloAnalog,
    text: "TRELLO-ANALOG",
  },
];

const PROJECTS_TYPE = ["ALL", "FRONTEND", "BACKEND", "FULLSTACK"];

export const Portfolio = () => {
  return (
    <div className="max-w-335 mx-auto text-center">
      <h1 className="text-[24px] lg:text-[48px]">MY WORKS</h1>
      <div className="flex gap-5  items-center justify-center mb-5">
        {PROJECTS_TYPE.map((project, index) => (
          <p key={index} className="text-[16px] lg:text-[24px] text-black/60">
            {project}
          </p>
        ))}
      </div>

      <div className="w-full grid grid-cols-3 gap-5">
        {portfolio.map((project) => (
          <Card key={project.id} data={project} />
        ))}
      </div>
    </div>
  );
};
