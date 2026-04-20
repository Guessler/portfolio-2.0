import websiteImage from "../../../public/assets/png/image 34.png";
import { Card } from "./Card";


const portfolio = [
  {
    id: 1,
    image: websiteImage,
    text: "ECOTECH"
  },
  {
    id: 2,
    image: websiteImage,
    text: "ECOTECH"
  },
  {
    id: 3,
    image: websiteImage,
    text: "ECOTECH"
  },
  {
    id: 4,
    image: websiteImage,
    text: "ECOTECH"
  },
  {
    id: 5,
    image: websiteImage,
    text: "ECOTECH"
  },
  {
    id: 6,
    image: websiteImage,
    text: "ECOTECH"
  },
]
export const Portfolio = () => {
  return (
    <div className="max-w-335 mx-auto text-center mt-20 mb-20">
      <h1 className="text-[48px]">MY WORKS</h1>
      <div className="flex gap-5  items-center justify-center mb-5">
        <p className="text-[24px]">ALL</p>
        <p className="text-[24px] text-black/60">FRONTEND</p>
        <p className="text-[24px] text-black/60">BACKEND</p>
      </div>

      <div className="w-full grid grid-cols-3 gap-5">
        {portfolio.map((project) => (
          <Card key={project.id} data={project} />
        ))}
      </div>
    </div>
  );
};

