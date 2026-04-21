
import { baseResponse } from "@/interfaces/baseResponse";
import Image from "next/image";

export const Card = ({
  data,
  onClick 
}: {
  data: Pick<baseResponse, "image" | "name">;
  onClick: () => void; 
}) => {
  return (
    <div onClick={onClick} className="relative lg:w-full flex items-center justify-center min-w-[212px] h-[165px] lg:h-[337px] rounded-[30px] overflow-hidden group cursor-pointer">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={data.image}
          alt={data.name}
          fill
          className="object-cover transition-all duration-900 group-hover:scale-110"
          style={{
            filter: "blur(4px)",
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

      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />

      <div className="relative z-10 h-full flex flex-col items-center justify-end text-white gap-5">
        <Image
          src={data.image}
          alt={data.name}
          className="object-cover w-25 lg:w-56.25 transition-all duration-700 scale-110"
        />
        <h3 className="text-[13px] md:text-2xl font-bold mb-2">{data.name}</h3>
      </div>
    </div>
  );
};
