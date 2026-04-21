import { Card } from "./Card";
import { modalData } from "@/consts/modalsData";
const PROJECTS_TYPE = ["ALL", "FRONTEND", "BACKEND", "FULLSTACK"];


  const handleChangeVisability = () => {
    alert(123)
  };
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

      <div className="w-full flex flex-row overflow-auto lg:grid lg:grid-cols-3 gap-2.5 lg:gap-5">
        {modalData.map((project) => (
          <Card onClick={handleChangeVisability} key={project.id} data={project} />
        ))}
      </div>
    </div>
  );
};
