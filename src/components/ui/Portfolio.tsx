import { useMemo, useState } from "react";
import { Card } from "./Card";
import { portfolioModalData } from "@/consts/portfolioData";
import BaseModal from "./modals/BaseModal";
import { useLang } from "@/providers/LanguageProvider";
import { dict } from "@/consts/translations";

const PROJECT_TYPES = ["ALL", "FRONTEND", "BACKEND", "FULLSTACK"] as const;
type ProjectType = (typeof PROJECT_TYPES)[number];

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
            className="font-space text-base text-black bg-gray-100 px-4 py-2 rounded-xl flex items-center gap-2"
          >
            {activeFilter}
            <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-lg py-2 min-w-[150px] z-20">
              {PROJECT_TYPES.map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setActiveFilter(type);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 font-space text-base transition-colors ${
                    activeFilter === type ? "bg-gray-100 text-black font-medium" : "text-black/60 hover:bg-gray-50"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="hidden md:flex gap-5 items-center justify-center">
          {PROJECT_TYPES.map((type) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`font-space text-[16px] lg:text-[24px] tracking-wide transition-all cursor-pointer ${
                activeFilter === type 
                  ? "text-black font-medium" 
                  : "text-black/50 hover:text-black/80"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-row overflow-auto md:overflow-hidden lg:grid lg:grid-cols-3 gap-2.5 lg:gap-5 pb-4 lg:pb-0">
        {filteredProjects.map((project) => (
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