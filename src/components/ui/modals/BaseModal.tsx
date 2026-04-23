"use client";
import {
  experienceResponse,
  portfolioResponse,
} from "@/interfaces/baseResponse";
import { Cross } from "../../../../public/svg";

export default function BaseModal({
  data,
  onClose,
}: {
  data: Omit<portfolioResponse, "image"> | Omit<experienceResponse, "image">;
  onClose: () => void;
}) {
  return (
    <div
      onClick={onClose}
      key={data.id}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm lg:p-6 xl:p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full h-full xl:max-w-300 xl:max-h-[90vh] xl:h-auto bg-white overflow-y-auto lg:rounded-4xl"
      >
        <div className="p-6 sm:p-8 md:p-10 xl:p-12 flex flex-col min-h-full xl:min-h-0">
          <div className="flex-shrink-0">
            <h1 className="font-playfair text-center text-2xl sm:text-3xl md:text-4xl xl:text-[28px] font-medium tracking-tight mb-2">
              {data.name}
            </h1>
            {"position" in data && (
              <p className="font-space text-center text-sm sm:text-base md:text-xl uppercase tracking-wider mb-4">
                {data.position}
                <span className="opacity-60"> developer</span>
              </p>
            )}
          </div>
          
          <p className="font-inter text-sm sm:text-base md:text-lg text-center leading-relaxed mb-6 flex-shrink-0">
            {data.description}
          </p>

          <div className="flex-1 space-y-5 xl:space-y-8">
            <div>
              <h2 className="font-space text-base sm:text-lg md:text-xl xl:text-lg font-medium mb-3">
                My Contribution
              </h2>
              <ul className="space-y-2">
                {data.contributions.map((item, i) => (
                  <li key={i} className="font-inter text-sm sm:text-base md:text-lg xl:text-base flex items-start gap-2">
                    <span className="mt-0.5 flex-shrink-0">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-space text-base sm:text-lg md:text-xl xl:text-lg font-medium mb-3">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-3 sm:gap-4 xl:gap-2">
                {data.stack.map((TechIcon, index) => (
                  <div className="w-9 h-9 sm:w-11 sm:h-11 xl:w-12 xl:h-12" key={index}>
                    <TechIcon />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex-shrink-0 pt-4 xl:pt-4">
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group font-space bg-[#0f172a] text-white flex text-base sm:text-lg md:text-xl xl:text-lg items-center justify-center gap-2 w-full py-3 sm:py-4 rounded-xl xl:rounded-2xl font-semibold transition-all duration-300"
            >
              View Project
              <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
        
        <button
          className="absolute top-4 right-4 w-9 h-9 sm:w-10 sm:h-10 xl:top-5 xl:right-8 rounded-full flex items-center justify-center cursor-pointer transition-colors"
          onClick={onClose}
        >
          <Cross />
        </button>
      </div>
    </div>
  );
}