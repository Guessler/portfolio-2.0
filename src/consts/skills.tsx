import * as MySkills from "../../public/svg";

const createIcon = (Icon: React.ComponentType<{ className?: string }>) => (
  <Icon className="w-8 h-8" />
);

export const SKILLS_TOOLS = {
  DEVOPS: [
    { icon: createIcon(MySkills.Nginx), link: "https://nginx.org/en/docs/" },
    { icon: createIcon(MySkills.Linux), link: "https://docs.kernel.org/" },
    { icon: createIcon(MySkills.PM2), link: "https://pm2.keymetrics.io/docs/usage/quick-start/" },
    { icon: createIcon(MySkills.Git), link: "https://git-scm.com/docs" },
    { icon: createIcon(MySkills.GitHub), link: "https://docs.github.com/ru" },
  ],
  BACKEND: [
    { icon: createIcon(MySkills.NestJS), link: "https://nestjs.com/" },
    { icon: createIcon(MySkills.Express), link: "https://expressjs.com/" },
    { icon: createIcon(MySkills.NodeJS), link: "https://nodejs.org/docs/latest/api/" },
    { icon: createIcon(MySkills.Postman), link: "https://learning.postman.com/" },
    { icon: createIcon(MySkills.Postgres), link: "https://www.postgresql.org/docs/" },
    { icon: createIcon(MySkills.MySql), link: "https://dev.mysql.com/doc/" },
    { icon: createIcon(MySkills.PrismaORM), link: "https://www.prisma.io/docs" },
    { icon: createIcon(MySkills.JWT), link: "https://www.jwt.io/introduction" },
    { icon: createIcon(MySkills.Swagger), link: "https://swagger.io/docs/" },
  ],

  FRONTEND: [
    { icon: createIcon(MySkills.ReactIcon), link: "https://react.dev/" },
    { icon: createIcon(MySkills.NextJS), link: "https://nextjs.org/" },
    { icon: createIcon(MySkills.Vite), link: "https://vite.dev/" },
    { icon: createIcon(MySkills.Zustand), link: "https://zustand-demo.pmnd.rs/" },
    { icon: createIcon(MySkills.TanstackQuery), link: "https://tanstack.com/query/latest" },
    { icon: createIcon(MySkills.JS), link: "https://learn.javascript.ru/" },
    { icon: createIcon(MySkills.TS), link: "https://www.typescriptlang.org/docs/" },
    { icon: createIcon(MySkills.Tailwind), link: "https://tailwindcss.com/" },
    { icon: createIcon(MySkills.Redux), link: "https://redux.js.org/" },
    { icon: createIcon(MySkills.MUI), link: "https://mui.com/" },
    { icon: createIcon(MySkills.CSS), link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { icon: createIcon(MySkills.HTML), link: "https://developer.mozilla.org/ru/docs/Web/HTML" },
    { icon: createIcon(MySkills.Shadcn), link: "https://ui.shadcn.com/docs" },
    { icon: createIcon(MySkills.Scss), link: "https://sass-lang.com/documentation/" },
  ],
};