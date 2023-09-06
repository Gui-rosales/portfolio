import { FirstSVG } from './assets/projects/first';
import { SecondSVG } from './assets/projects/second';
import { NestSVG } from './assets/skills/nest';
import { PostGresSVG } from './assets/skills/postgres';
import { PrismaSVG } from './assets/skills/prisma';
import { PythonSVG } from './assets/skills/python';
import { ReactSVG } from './assets/skills/react';
import { TailwindSvg } from './assets/skills/tailwind';
import { TypescriptSvg } from './assets/skills/typescript';

const projects = [
  {
    bgImage: <FirstSVG />,
    title: 'Grafo App',
    description:
      'Software de ensino desenvolvido para auxiliar na manipulação e visualização de grafos e redes complexas',
    techs: [
      <ReactSVG key={1} />,
      <TypescriptSvg key={2} />,
      <TailwindSvg key={3} />,
      <PythonSVG key={4} />,
    ],
    repoLink: '#',
  },
  {
    bgImage: <SecondSVG />,
    title: 'Todo list',
    description:
      'API de uma aplicação todo list contando com autenticação e usuários',
    techs: [
      <TypescriptSvg key={1} />,
      <NestSVG key={2} />,
      <PrismaSVG key={3} />,
      <PostGresSVG key={4} />,
    ],
    repoLink: 'https://github.com/Gui-rosales/TodoList-API',
  },
];

export function Projects() {
  return (
    <section className="w-full h-screen bg-secondary flex flex-col items-center">
      <div className="w-full h-[15%] flex items-center justify-center">
        <h1 className="text-4xl text-primary">Projetos</h1>
      </div>
      <div className="w-4/5 h-[73%] flex mt-10 justify-around overflow-x-hidden flex-wrap max-[560px]:flex-col max-[560px]:items-center max-[560px]:justify-evenly max-[560px]:h-[90%] max-[560px]:mt-0">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-1/4 h-[50%] bg-primary50 rounded-2xl flex flex-col items-center justify-around relative group hover:cursor-pointer overflow-hidden max-[560px]:w-4/5 max-[560px]:h-[40%]"
            onClick={() => open(project.repoLink)}
          >
            <h2 className="text-2xl text-white">{project.title}</h2>
            {project.bgImage}
            <p className="flex -z-20 absolute w-4/5 h-[40%] p-5 left-0 top-10 text-secondary bg-secondary rounded-r-2xl transition-transform duration-1000 translate-x-[-110%] translate-y-[10%] group-hover:translate-x-[-2%] group-hover:translate-y-[10%] group-hover:text-tertiary group-hover:z-10">
              {project.description}
            </p>
            <div className="flex -z-20 absolute w-4/5 h-1/3 right-0 bottom-7 text-secondary bg-secondary rounded-l-2xl transition-transform duration-1000 translate-x-[100%] translate-y-[10%] group-hover:translate-x-[2%] group-hover:translate-y-[10%] group-hover:text-tertiary group-hover:z-10">
              <div className="w-full h-full p-2 hidden group-hover:flex group-hover:justify-around group-hover:items-center">
                {project.techs.map((tech) => (
                  <div key={tech.key}>{tech}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
