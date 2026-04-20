import sharixLogo from "../../../public/assets/png/sharix.png";
import { Card } from "./Card";


const PLACES = [
  {
    id: 1,
    image: sharixLogo,
    text: "SHARIX (6 MONTH)"
  },
  {
    id: 2,
    image: sharixLogo,
    text: "SHARIX (6 MONTH)"
  },
  {
    id: 3,
    image: sharixLogo,
    text: "SHARIX (6 MONTH)"
  },
]
export const Experiance = () => {
  return (
    <div className="max-w-335 mx-auto text-center mt-20 mb-20">
      <h1 className="text-[48px]">PREVIOUS PLACES (AND CURRENT)</h1>

      <div className="w-full grid grid-cols-3 gap-5">
        {PLACES.map((place) => (
          <Card key={place.id} data={place} />
        ))}
      </div>
    </div>
  );
};

