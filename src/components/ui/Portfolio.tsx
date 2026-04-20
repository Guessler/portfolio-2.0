// import Image from "next/image";
// import texture from "../../../public/assets/png/noise.png";
// import fon from "../../../public/assets/png/image 34.png";
export const Portfolio = () => {
  return (
    <div className="max-w-335 mx-auto text-center mt-20 mb-20">
      <h1 className="text-[48px]">MY WORKS</h1>
      <div className="flex gap-5  items-center justify-center">
        <p className="text-[24px]">ALL</p>
        <p className="text-[24px] text-black/60">FRONTEND</p>
        <p className="text-[24px] text-black/60">BACKEND</p>
      </div>

      <div className="w-full grid grid-cols-3  h-20">
        <PortfolioCard data={{}} />
      </div>
    </div>
  );
};

export const PortfolioCard = ({ data }: { data: any }) => {
  return (
    <div className="relative w-full h-[337px] rounded-[30px] overflow-hidden group">
    </div>
  );
};
