"use client";
import { PLACES } from "@/consts/experiance";
import { Card } from "./Card";
import BaseModal from "./modals/BaseModal";
import { useMemo, useState } from "react";
import { experianceData } from "@/consts/experianceData";
import { useLang } from "@/providers/LanguageProvider";
import { dict } from "@/consts/translations";

export const Experiance = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null,
  );

  const selectedModal = useMemo(() => {
    return experianceData.find((project) => project.id === selectedProjectId);
  }, [selectedProjectId]);

  const handleOpenModal = (projectId: number) => {
    const projectExists = experianceData.some(
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

  const { lang } = useLang();
  const t = dict[lang];

  return (
    <div className="max-w-335 mx-auto text-center">
      <h1 className="text-[20px] lg:text-[48px] mb-5">
        {t.experience.title}{" "}
        <span className="text-black/50 text-[16px] lg:text-[24px]">
          {t.experience.subtitle}
        </span>
      </h1>

      <div className="w-full flex flex-row overflow-auto lg:grid lg:grid-cols-3 gap-2.5 lg:gap-5">
        {experianceData.map((place) => (
          <Card
            onClick={() => handleOpenModal(place.id)}
            key={place.id}
            data={place}
          />
        ))}
      </div>
      {selectedProjectId && (
        <BaseModal onClose={handleCloseModal} data={selectedModal!} />
      )}
    </div>
  );
};
