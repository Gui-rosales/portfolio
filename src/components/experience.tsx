import { ExperienceSVG } from './assets/experience';
import { BriefcaseSVG } from './assets/briefcase';
import { Fade } from 'react-awesome-reveal';

interface IExperience {
  period: string;
  function: string;
  company: string;
}

const experiences: IExperience[] = [
  {
    period: '2020 - 2022',
    function: 'Professor de inglês',
    company: 'Wizard Idiomas',
  },
  {
    period: '2023 - Atualmente',
    function: 'Estagiário em desenvolvimento de software',
    company: 'Canex Exportação',
  },
];

export function Experience() {
  return (
    <section className="w-full h-screen min-h-screen bg-secondary flex flex-col">
      <div className="w-4/5 h-[15%] flex justify-center items-center p-5 m-auto">
        <h1 className="text-4xl text-primary ">Experiência</h1>
      </div>
      <div className="w-4/5 h-3/4 flex justify-between p-5 m-auto max-[560px]:w-full ">
        <div className="w-[45%] flex items-center justify-center max-[560px]:hidden">
          <ExperienceSVG />
        </div>
        <div className="w-[45%] h-full flex p-3 max-[560px]:w-full">
          <div className="w-full h-full flex flex-col gap-[5%] p-3 items-end">
            {experiences.map((experience, key) => (
              <div
                key={key}
                className="w-full min-h-fit h-1/4 bg-primary30 flex gap-3 p-5 rounded-2xl transition ease-in-out hover:bg-primary50 hover:scale-105 duration-500 2xl:w-[90%] max-[560px]:w-full max-[560px]:h-[30%]"
              >
                <div className="w-[10%] h-full max-[560px]:w-[15%]">
                  <div className="w-full h-1/2 bg-primary flex justify-center items-center rounded-[50%] ">
                    <BriefcaseSVG />
                  </div>
                </div>
                <div className="w-3/5 h-full flex flex-col gap-2 max-[560px]:w-4/5 max-[560px]:gap-1">
                  <span className="text-primary">{experience.period}</span>
                  <h2 className="text-tertiary">{experience.function}</h2>
                  <h3 className="text-tertiary80">{experience.company}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
