import { baseResponse } from "@/interfaces/baseResponse";
import { Cross } from "../../../../public/svg";

export default function BaseModal({
  data,
  onClose,
}: {
  data: Omit<baseResponse, "image">;
  onClose: () => void;
}) {
  return (
    <div
      onClick={onClose}
      key={data.id}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm xl:p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full xl:max-w-300 relative bg-white shadow-2xl flex items-center justify-center xl:rounded-[40px] p-8 md:p-12 overflow-y-auto h-screen xl:h-auto"
      >
        <div className="">
          <h1 className="text-center text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            {data.name}
          </h1>
          <p className="max-w-170 mx-auto text-center text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
            {data.description}
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-semibold flex items-center gap-2 mb-4 text-gray-800">
                <span className="text-xl">🎯</span> My Contribution
              </h2>
              <ul className="space-y-3 text-gray-600 text-sm md:text-base pl-10">
                {data.contributions.map((item, i) => (
                  <li key={i} className="flex items-center gap-1">
                    <span className="text-blue-500 text-lg flex items-center justify-center w-5">
                      ✦
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold flex items-center gap-2 mb-4 text-gray-800">
                <span className="text-xl">🛠</span> Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.stack.map((TechIcon, index) => (
                  <div className="w-15" key={index}>
                    <TechIcon />
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-4">
              <a
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 w-full py-4 bg-black/70 text-white rounded-2xl font-semibold hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>View Project</span>
              </a>
            </div>
          </div>
        </div>
        <button className="absolute top-5 right-6 cursor-pointer" onClick={onClose}>
          <Cross />
        </button>
      </div>
    </div>
  );
}
