import Marquee from 'react-fast-marquee';
import { TypescriptSvg } from './assets/skills/typescript';
import { GitSvg } from './assets/skills/git';
import { HtmlSvg } from './assets/skills/html';
import { DockerSvg } from './assets/skills/docker';
import { NextSvg } from './assets/skills/next';
import { ReactSVG } from './assets/skills/react';
import { ISkillData } from '@/types/skillData';
import { NestSVG } from './assets/skills/nest';
import { NodeSVG } from './assets/skills/node';
import { PostGresSVG } from './assets/skills/postgres';
import { PrismaSVG } from './assets/skills/prisma';

export const skillData: ISkillData[] = [
  {
    logo: <TypescriptSvg />,
    skillName: 'TypeScript',
  },
  {
    logo: <GitSvg />,
    skillName: 'Git',
  },
  {
    logo: <HtmlSvg />,
    skillName: 'HTML',
  },
  {
    logo: <DockerSvg />,
    skillName: 'Docker',
  },
  {
    logo: <NextSvg />,
    skillName: 'NextJs',
  },
  {
    logo: <ReactSVG />,
    skillName: 'ReactJs',
  },
  {
    logo: <NestSVG />,
    skillName: 'NestJs',
  },
  {
    logo: <NodeSVG />,
    skillName: 'NodeJs',
  },
  {
    logo: <PrismaSVG />,
    skillName: 'Prisma',
  },
  {
    logo: <PostGresSVG />,
    skillName: 'Postegresql',
  },
];

export function Skills() {
  return (
    <section className="min-h-screen w-full flex flex-col bg-secondary items-center">
      <div className="w-full h-[20vh] flex items-center justify-around py-5 px-10">
        <div className="w-3 h-3 rounded-[50%] bg-primary"></div>
        <div className="w-3 h-3 rounded-[50%] bg-primary"></div>
        <div className="w-[90%] h-2 bg-primary rounded-2xl"></div>
        <div className="w-3 h-3 rounded-[50%] bg-primary"></div>
        <div className="w-3 h-3 rounded-[50%] bg-primary"></div>
      </div>
      <div className="flex w-full h-[28vh] justify-around py-5 px-10">
        <h1 className="text-5xl text-primary">Skills</h1>
      </div>
      <div className="flex w-full h-[28vh] justify-around py-5 px-10">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={false}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
          className="h-full w-full"
        >
          {skillData.map((skill, key) => (
            <div
              key={key}
              className="h-32 w-32 bg-secondary rounded-2xl flex flex-col p-3 items-center justify-between shadow-custom m-8 hover:scale-125 ease-in-out duration-500"
            >
              {skill.logo}
              <span className="text-white text-lg">{skill.skillName}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
