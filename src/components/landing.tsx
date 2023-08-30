// import {Image} from "next/image"
import Image from 'next/image';
import avatar from '../assets/me.jpg';
export function Landing() {
  return (
    <section className="min-h-screen w-full flex">
      {/* <Header /> */}
      <div className="w-[35%] h-screen bg-primary"></div>

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
