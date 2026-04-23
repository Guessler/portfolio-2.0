import { useMemo, useState } from "react";
import { Card } from "./Card";
import { portfolioModalData } from "@/consts/portfolioData";
import BaseModal from "./modals/BaseModal";

const PROJECTS_TYPE = ["ALL", "FRONTEND", "BACKEND", "FULLSTACK"];

export const Portfolio = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null,
  );

  const selectedModal = useMemo(() => {
    return portfolioModalData.find(
      (project) => project.id === selectedProjectId,
    );
  }, [selectedProjectId]);

  const handleOpenModal = (projectId: number) => {
    const projectExists = portfolioModalData.some(
      (project) => project.id === projectId,
    );
    if (projectExists) {
      setSelectedProjectId(projectId);
    } else {
      console.warn(`Project with id ${projectId} not found`);
    }
  };

  const handleCloseModal = () => {
    setSelectedProjectId(null);
  };

  return (
    <div className="max-w-335 mx-auto text-center">
      <h1 className="text-[20px] lg:text-[48px]">MY WORKS</h1>
      <div className="flex gap-5  items-center justify-center mb-5">
        {PROJECTS_TYPE.map((project, index) => (
          <p key={index} className="text-[16px] lg:text-[24px] text-black/60">
            {project}
          </p>
        ))}
      </div>

      <div className="w-full flex flex-row overflow-auto lg:grid lg:grid-cols-3 gap-2.5 lg:gap-5">
        {portfolioModalData.map((project) => (
          <Card
            onClick={() => handleOpenModal(project.id)}
            key={project.id}
            data={project}
          />
        ))}
      </div>
      {selectedProjectId && (
        <BaseModal onClose={handleCloseModal} data={selectedModal!} />
      )}
    </div>
  );
};
