// import {Image} from "next/image"
import Image from 'next/image';
import avatar from '../assets/me.jpg';
import { ImLinkedin, ImGithub, ImMail } from 'react-icons/im';
import ContactsModal from './contactModal';

export function Landing() {
  return (
    <section className="min-h-screen w-full flex max-[560px]:flex-col">
      {/* <Header /> */}
      <div className="w-[35%] h-screen bg-primary flex justify-center items-end max-[560px]:w-full max-[560px]:h-[30vh]">
        <div className="w-full h-[30%] flex items-center justify-center gap-4 ">
          <div
            onClick={() =>
              open(
                'https://www.linkedin.com/in/guilherme-rosales-alexandre-a269751b0/'
              )
            }
            className="w-[15%] h-[15%] flex items-center justify-center hover:cursor-pointer hover:scale-125 ease-in-out duration-300 max-[560px]:hidden"
          >
            <ImLinkedin style={{ width: '100%', height: '100%' }} />
          </div>
          <div
            onClick={() => open('https://github.com/Gui-rosales')}
            className="w-[15%] h-[15%] flex items-center justify-center hover:cursor-pointer hover:scale-125 ease-in-out duration-300 max-[560px]:hidden"
          >
            <ImGithub style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>

      <div className="w-[65%] h-screen bg-secondary flex flex-col items-center justify-center max-[560px]:w-full max-[560px]:h-[70vh] max-[560px]:w-[full]">
        <Image
          src={avatar}
          alt="foto-perfil"
          className="absolute left-[35%] -translate-x-1/2  rounded-[50%] object-cover max-[560px]:left-[50%] max-[560px]:top-[20%] max-[560px]:border-4 max-[560px]:border-secondary max-[560px]:w-[150px] max-[560px]:h-[150px] 2xl:w-[400px] 2xl:h-[400px] lg:w-[300px] lg:h-[300px] md:w-[240px] md:h-[240px] max-[767px]:w-[200px] max-[767px]:h-[200px]"
        />
        <div className="w-2/4 min-h-fit text-white p-2 flex flex-col gap-5 max-[560px]:gap-2 max-[560px]:w-4/5 max-[560px]:p-1">
          <span className="text-tertiary">FullStack Web Developer</span>
          <h1 className="text-white text-2xl">Guilherme Rosales</h1>
          <p className="block">
            Desenvolvedor fullstack, apaixonado por tecnologia e suas
            possibilidades Sempre buscando novos desafios e maneiras de expandir
            meus horizontes dentro da carreira de desenvolvimento.
          </p>

          <div className="w-full mt-10 flex justify-around items-center">
            <a
              href="/Guilherme_Rosales_CV.pdf"
              download={'Guilherme_Rosales_CV.pdf'}
              title="Guilherme_Rosales_CV"
            >
              <button className="w-36 p-2 text-primary bg-transparent border-4 border-solid border-primary rounded-2xl hover:bg-primary hover:text-secondary hover:border-primary ease-in-out duration-300 max-[560px]:w-26">
                Download CV
              </button>
            </a>
            <a href="#contact">
              <ContactsModal />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
