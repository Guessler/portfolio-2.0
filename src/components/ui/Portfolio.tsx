import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./Card";
import { portfolioModalData } from "@/consts/portfolioData";
import BaseModal from "./modals/BaseModal";
import { useLang } from "@/providers/LanguageProvider";
import { dict } from "@/consts/translations";

const PROJECT_TYPES = ["ALL", "FRONTEND", "BACKEND", "FULLSTACK"] as const;
type ProjectType = (typeof PROJECT_TYPES)[number];

const filterStyles: Record<string, { bg: string; text: string; hover: string; activeBg: string; activeText: string }> = {
  ALL: { 
    bg: "bg-gray-300 dark:bg-gray-700", 
    text: "text-gray-700 dark:text-gray-300", 
    hover: "hover:bg-gray-400 dark:hover:bg-gray-600",
    activeBg: "bg-gray-900",
    activeText: "text-white"
  },
  FRONTEND: { 
    bg: "bg-purple-300 dark:bg-purple-800", 
    text: "text-purple-700 dark:text-purple-300", 
    hover: "hover:bg-purple-400 dark:hover:bg-purple-700",
    activeBg: "bg-purple-600",
    activeText: "text-white"
  },
  BACKEND: { 
    bg: "bg-blue-300 dark:bg-blue-800", 
    text: "text-blue-700 dark:text-blue-300", 
    hover: "hover:bg-blue-400 dark:hover:bg-blue-700",
    activeBg: "bg-blue-600",
    activeText: "text-white"
  },
  FULLSTACK: { 
    bg: "bg-emerald-300 dark:bg-emerald-800", 
    text: "text-emerald-700 dark:text-emerald-300", 
    hover: "hover:bg-emerald-400 dark:hover:bg-emerald-700",
    activeBg: "bg-emerald-600",
    activeText: "text-white"
  },
};

export const Portfolio = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<ProjectType>("ALL");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const selectedModal = useMemo(() => {
    return portfolioModalData.find((project) => project.id === selectedProjectId);
  }, [selectedProjectId]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "ALL") return portfolioModalData;
    return portfolioModalData.filter((project) => project.type === activeFilter.toLowerCase());
  }, [activeFilter]);

  const handleOpenModal = (projectId: number) => {
    const projectExists = portfolioModalData.some((project) => project.id === projectId);
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
      <h1 className="font-playfair text-[24px] lg:text-[52px] font-medium tracking-wide">{t.portfolio.title}</h1>
      
      <div className="flex items-center md:justify-center mb-5">
        <div className="md:hidden relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="font-space text-base bg-gray-200 px-4 py-2 rounded-xl flex items-center gap-2"
          >
            <span className="text-gray-800">{activeFilter}</span>
            <svg className={`w-4 h-4 text-gray-600 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-lg py-2 min-w-[150px] z-15">
              {PROJECT_TYPES.map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setActiveFilter(type);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 font-space text-base ${
                    activeFilter === type ? "bg-gray-200 font-medium" : "hover:bg-gray-100"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="hidden md:flex gap-3 items-center justify-center">
          {PROJECT_TYPES.map((type) => {
            const style = filterStyles[type];
            return (
              <motion.button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={`px-4 py-2 rounded-xl font-space text-base font-semibold tracking-wide cursor-pointer ${
                  activeFilter === type 
                    ? `${style.activeBg} ${style.activeText}`
                    : `${style.bg} ${style.text} ${style.hover}`
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {type}
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={activeFilter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="w-full flex flex-row overflow-auto md:overflow-hidden lg:grid lg:grid-cols-3 gap-2.5 lg:gap-5 pb-4 lg:pb-0"
        >
          {filteredProjects.map((project) => (
            <Card
              onClick={() => handleOpenModal(project.id)}
              key={project.id}
              data={project}
            />
          ))}
        </motion.div>
      </AnimatePresence>
      {selectedProjectId && (
        <BaseModal onClose={handleCloseModal} data={selectedModal!} />
      )}
    </div>
  );
};