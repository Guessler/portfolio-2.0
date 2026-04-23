import { SKILLS_TOOLS } from "@/consts/skills";

export default function Skills() {
  return (
    <div className="max-w-350 mx-auto">
      <h1 className="text-[20px] lg:text-[48px] text-center">SKILLS</h1>
      <div className="flex flex-col gap-5 lg:gap-15 text-center py-5">
        {Object.entries(SKILLS_TOOLS).map(([category, items]) => (
          <div key={category} className="flex flex-col gap-5 items-center">
            <h3 className="text-black/60 text-[16px] lg:text-[32px]">
              {category}
            </h3>
            <div className="flex flex-wrap gap-1 lg:gap-7 justify-center px-12 lg:px-0">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="w-12 h-12"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="w-9.75 h-9.75 lg:w-15  lg:h-15 flex items-center justify-center ">
                    {item.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
