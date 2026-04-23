import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./Card";
import { portfolioModalData } from "@/consts/portfolioData";
import BaseModal from "./modals/BaseModal";
import { useLang } from "@/providers/LanguageProvider";
import { dict } from "@/consts/translations";

const PROJECT_TYPES = ["ALL", "FRONTEND", "BACKEND", "FULLSTACK"] as const;
type ProjectType = (typeof PROJECT_TYPES)[number];

const filterStyles: Record<string, { border: string; text: string; hover: string; activeBorder: string; activeBg: string; activeText: string }> = {
  ALL: { 
    border: "border-gray-400 dark:border-gray-500", 
    text: "text-gray-500 dark:text-gray-400", 
    hover: "hover:border-gray-500 dark:hover:border-gray-400",
    activeBorder: "border-gray-600 dark:border-gray-400",
    activeBg: "bg-gray-600 dark:bg-gray-400",
    activeText: "text-white dark:text-gray-900"
  },
  FRONTEND: { 
    border: "border-purple-400 dark:border-purple-500", 
    text: "text-purple-500 dark:text-purple-400", 
    hover: "hover:border-purple-500 dark:hover:border-purple-400",
    activeBorder: "border-purple-500 dark:border-purple-400",
    activeBg: "bg-purple-500 dark:bg-purple-400",
    activeText: "text-white dark:text-purple-900"
  },
  BACKEND: { 
    border: "border-blue-400 dark:border-blue-500", 
    text: "text-blue-500 dark:text-blue-400", 
    hover: "hover:border-blue-500 dark:hover:border-blue-400",
    activeBorder: "border-blue-500 dark:border-blue-400",
    activeBg: "bg-blue-500 dark:bg-blue-400",
    activeText: "text-white dark:text-blue-900"
  },
  FULLSTACK: { 
    border: "border-emerald-400 dark:border-emerald-500", 
    text: "text-emerald-500 dark:text-emerald-400", 
    hover: "hover:border-emerald-500 dark:hover:border-emerald-400",
    activeBorder: "border-emerald-500 dark:border-emerald-400",
    activeBg: "bg-emerald-500 dark:bg-emerald-400",
    activeText: "text-white dark:text-emerald-900"
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
            className="font-space text-base bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <span className="text-gray-700 dark:text-gray-300">{activeFilter}</span>
            <svg className={`w-4 h-4 text-gray-500 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 min-w-[150px] z-15">
              {PROJECT_TYPES.map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setActiveFilter(type);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 font-space text-base ${
                    activeFilter === type ? "bg-gray-100 dark:bg-gray-700 font-medium" : "hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="hidden md:flex gap-2 items-center justify-center">
          {PROJECT_TYPES.map((type) => {
            const style = filterStyles[type];
            return (
              <motion.button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={`px-3 py-1.5 rounded-lg font-space text-sm font-medium cursor-pointer border-2 transition-colors ${
                  activeFilter === type 
                    ? `${style.activeBorder} ${style.activeBg} ${style.activeText}`
                    : `border-transparent ${style.border} ${style.text} ${style.hover}`
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
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