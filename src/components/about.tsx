import Image from 'next/image';
import { BoyListening } from './assets/boyListening';

export function About() {
  return (
    <section className="min-h-screen w-full flex flex-col bg-secondary">
      <div className="w-full h-[20vh] flex items-center justify-around py-5 px-10 max-[560px]:py-3 max-[560px]:px-5">
        <div className="w-3 h-3 rounded-[50%] bg-primary max-[560px]:w-2 max-[560px]:h-2"></div>
        <div className="w-3 h-3 rounded-[50%] bg-primary max-[560px]:w-2 max-[560px]:h-2"></div>
        <div className="w-[90%] h-2 bg-primary rounded-2xl max-[560px]:w-4/5"></div>
        <div className="w-3 h-3 rounded-[50%] bg-primary max-[560px]:w-2 max-[560px]:h-2"></div>
        <div className="w-3 h-3 rounded-[50%] bg-primary max-[560px]:w-2 max-[560px]:h-2"></div>
      </div>
      <div className="flex w-full h-[55vh] justify-around py-5 px-10 max-[560px]:py-3 max-[560px]:px-5 max-[560px]:justify-between max-[560px]:gap-1 max-[560px]:h-[80vh] max-[560px]:flex-col">
        <div className="h-100% w-4/12 flex items-center justify-center max-[560px]:w-1/2">
          <BoyListening />
        </div>
        <div className="h-full w-4/12 flex flex-col text-white max-[560px]:w-full gap-6">
          <h1 className="text-tertiary text-4xl max-[560px]:text-base">
            Quem eu sou
          </h1>
          <p className="max-[560px]:text-sm">
            Meu nome é Guilherme, sou um apaixonado por tecnologia e suas
            possibilidades
          </p>
          <p className="max-[560px]:text-sm">
            Hoje em dia atuando como desenvolvedor Web sou um jovem que está em
            processo de formação e aperfeiçoamento dentro da área de
            desenvolvimento. Sempre preocupado com a entrega de soluções bem
            escritas e estruturadas, sou um desenvolvedor que sempre busca a
            milha extra. Atualmente sou graduante em Sistemas de informação pelo
            Instituto Federal de Mato Grosso e atuo como estagiário em
            desenvolvimento de software
          </p>
        </div>
      </div>
    </section>
  );
}
