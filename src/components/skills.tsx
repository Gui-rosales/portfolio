import Marquee from 'react-fast-marquee';
import { TypescriptSvg } from './assets/skills/typescript';
import { GitSvg } from './assets/skills/git';
import { HtmlSvg } from './assets/skills/html';
import { DockerSvg } from './assets/skills/docker';
import { NextSvg } from './assets/skills/next';
import { ReactSVG } from './assets/skills/react';
import { ISkillData } from '@/types/skillData';

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
      <div className="flex w-[80%] h-[28vh] justify-around py-5 px-10">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
          className="h-full w-full"
        >
          {skillData.map((skill, key) => (
            <div
              key={key}
              className="h-32 w-32 bg-secondary rounded-2xl flex flex-col p-3 items-center justify-between shadow-custom m-8"
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
