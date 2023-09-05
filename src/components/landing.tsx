// import {Image} from "next/image"
import Image from 'next/image';
import avatar from '../assets/me.jpg';
import { ImLinkedin, ImGithub, ImMail } from 'react-icons/im';
export function Landing() {
  return (
    <section className="min-h-screen w-full flex">
      {/* <Header /> */}
      <div className="w-[35%] h-screen bg-primary flex justify-center items-end">
        <div className="w-full h-[30%] flex items-center justify-center gap-4 ">
          <div
            onClick={() =>
              open(
                'https://www.linkedin.com/in/guilherme-rosales-alexandre-a269751b0/'
              )
            }
            className="w-[15%] h-[15%] flex items-center justify-center hover:cursor-pointer hover:scale-125 ease-in-out duration-300"
          >
            <ImLinkedin style={{ width: '100%', height: '100%' }} />
          </div>
          <div
            onClick={() => open('https://github.com/Gui-rosales')}
            className="w-[15%] h-[15%] flex items-center justify-center hover:cursor-pointer hover:scale-125 ease-in-out duration-300"
          >
            <ImGithub style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="w-[15%] h-[15%] flex items-center justify-center no-underline hover:cursor-pointer hover:scale-125 ease-in-out duration-300">
            <ImMail style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>

      <div className="w-[65%] h-screen bg-secondary flex flex-col items-center justify-center">
        <Image
          src={avatar}
          alt="foto-perfil"
          className="absolute left-[35%] -translate-x-1/2  rounded-[50%] object-cover w-[400px] h-[400px];"
        />
        <div className="w-2/4 min-h-fit text-white p-2 flex flex-col gap-5">
          <span className="text-tertiary">FullStack Web Developer</span>
          <h1 className="text-white text-2xl">Guilherme Rosales</h1>
          <p className="block ">
            Desenvolvedor fullstack, prociente em inglês e apaixonado por
            tecnologia. Sempre buscando novos desafios e ainda buscando novos
            horizontes dentro da carreira de desenvolvimento
          </p>

          <div className="w-full mt-10 flex justify-around items-center">
            <a href="">
              <button className="w-36 p-2 text-primary bg-transparent border-4 border-solid border-primary rounded-2xl">
                Download CV
              </button>
            </a>
            <a href="#contact">
              <button className="w-36 p-2 text-secondary bg-primary border-4 border-primary border-solid rounded-2xl">
                Contact
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
