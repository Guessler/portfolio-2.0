import * as MySkills from "../../../public/svg";
export const SKILLS_TOOLS = {
  DEVOPS: [
    { icon: <MySkills.Nginx />, link: "https://nginx.org/en/docs/" },
    { icon: <MySkills.Linux />, link: "https://docs.kernel.org/" },
    {
      icon: <MySkills.PM2 />,
      link: "https://pm2.keymetrics.io/docs/usage/quick-start/",
    },
    { icon: <MySkills.Git />, link: "https://git-scm.com/docs" },
    { icon: <MySkills.GitHub />, link: "https://docs.github.com/ru" },
  ],
  BACKEND: [
    { icon: <MySkills.NestJS />, link: "https://nestjs.com/" },
    { icon: <MySkills.Express />, link: "https://expressjs.com/" },
    { icon: <MySkills.NodeJS />, link: "https://nodejs.org/docs/latest/api/" },
    { icon: <MySkills.Postman />, link: "https://learning.postman.com/" },
    { icon: <MySkills.Postgres />, link: "https://www.postgresql.org/docs/" },
    { icon: <MySkills.MySql />, link: "https://dev.mysql.com/doc/" },
    { icon: <MySkills.PrismaORM />, link: "https://www.prisma.io/docs" },
    { icon: <MySkills.JWT />, link: "https://www.jwt.io/introduction" },
    { icon: <MySkills.Swagger />, link: "https://swagger.io/docs/" },
  ],

  FRONTEND: [
    { icon: <MySkills.ReactIcon />, link: "https://react.dev/" },
    { icon: <MySkills.NextJS />, link: "https://nextjs.org/" },
    { icon: <MySkills.Vite />, link: "https://vite.dev/" },
    { icon: <MySkills.Zustand />, link: "https://zustand-demo.pmnd.rs/" },
    {
      icon: <MySkills.TanstackQuery />,
      link: "https://tanstack.com/query/latest",
    },
    { icon: <MySkills.JS />, link: "https://learn.javascript.ru/" },
    { icon: <MySkills.TS />, link: "https://www.typescriptlang.org/docs/" },
    { icon: <MySkills.Tailwind />, link: "https://tailwindcss.com/" },
    { icon: <MySkills.Redux />, link: "https://redux.js.org/" },
    { icon: <MySkills.MUI />, link: "https://mui.com/" },
    {
      icon: <MySkills.CSS />,
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      icon: <MySkills.HTML />,
      link: "https://developer.mozilla.org/ru/docs/Web/HTML",
    },
    { icon: <MySkills.Shadcn />, link: "https://ui.shadcn.com/docs" },
    { icon: <MySkills.Scss />, link: "https://sass-lang.com/documentation/" },
  ],
};
export default function Skills() {
  return (
    <div className="max-w-350 mx-auto">
      <h1 className="text-[48px] text-center">SKILLS</h1>
      <div className="flex flex-col gap-10 text-center">
        {Object.entries(SKILLS_TOOLS).map(([category, items]) => (
          <div key={category} className="flex flex-col gap-5 items-center">
            <h3 className="text-black/60 text-[32px]">{category}</h3>
            <div className="flex flex-wrap gap-7 justify-center">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="w-12 h-12"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="w-15 h-15 flex items-center justify-center ">
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
