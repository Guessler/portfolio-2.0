import { portfolioResponse } from "@/interfaces/baseResponse";
import Image from "next/image";

export const Card = ({
  data,
  onClick,
}: {
  data: Pick<portfolioResponse, "image" | "name">;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="relative min-w-[280px] h-[220px] sm:min-w-[260px] sm:h-[250px] md:min-w-[250px] md:h-[280px] lg:min-w-[300px] lg:h-[337px] rounded-2xl sm:rounded-3xl overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-xl hover:scale-[1.02]"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={data.image}
          alt={data.name}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110"
          style={{
            filter: "blur(3px)",
            transform: "scale(1.1)",
          }}
        />
      </div>

      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20 group-hover:from-black/60 group-hover:via-black/20 group-hover:to-black/10 transition-all duration-500" />

      <div className="relative z-10 h-full flex flex-col items-center justify-end p-4 sm:p-5">
        <div className="mb-2 sm:mb-3">
          <Image
            src={data.image}
            alt={data.name}
            className="object-cover w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-xl sm:rounded-2xl shadow-lg transition-all duration-500 group-hover:scale-105"
          />
        </div>
        <h3 className="font-playfair text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-white tracking-wide text-center drop-shadow-lg">
          {data.name}
        </h3>
      </div>

      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
};