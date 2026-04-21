import sharixLogo from "../../../public/assets/png/sharix.png";
import ansaraLogo from "../../../public/assets/png/ansara.png";
import neza from "../../../public/assets/png/neza.png";
import { Card } from "./Card";

const PLACES = [
  {
    id: 1,
    image: sharixLogo,
    text: "SHARIX (6 MONTH)",
  },
  {
    id: 2,
    image: neza,
    text: "INDEPENDENCE (6 MONTH)",
  },
  {
    id: 3,
    image: ansaraLogo,
    text: "ANSARA (6 MONTH)",
  },
];
export const Experiance = () => {
  return (
    <div className="max-w-335 mx-auto text-center">
      <h1 className="text-[24px] lg:text-[48px] mb-5">
        PREVIOUS PLACES <span className="text-black/50 text-[16px] lg:text-[24px]"> (AND CURRENT)</span>
      </h1>

      <div className="w-full flex flex-row overflow-auto lg:grid lg:grid-cols-3 gap-2.5 lg:gap-5">
        {PLACES.map((place) => (
          <Card key={place.id} data={place} />
        ))}
      </div>
    </div>
  );
};
