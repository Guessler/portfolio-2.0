"use client";
import { motion } from "framer-motion";
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
    <motion.div
      className="max-w-335 mx-auto text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h1 
        className="font-playfair text-[24px] lg:text-[52px] mb-5 font-medium leading-[30px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t.experience.title}{" "} <br className=" md:hidden flex"/>
        <span className="font-inter text-[16px] lg:text-[24px] font-normal">
          {t.experience.subtitle}
        </span>
      </motion.h1>

      <motion.div 
        className="w-full flex flex-row overflow-auto md:overflow-hidden lg:grid lg:grid-cols-3 gap-2.5 lg:gap-5 pb-4 lg:pb-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {experianceData.map((place, index) => (
          <motion.div
            key={place.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
          >
            <Card
              onClick={() => handleOpenModal(place.id)}
              data={place}
            />
          </motion.div>
        ))}
      </motion.div>
      {selectedProjectId && (
        <BaseModal onClose={handleCloseModal} data={selectedModal!} />
      )}
    </motion.div>
  );
};