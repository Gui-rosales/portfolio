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
      <div className="flex w-full h-[55vh] justify-around py-5 px-10 max-[560px]:py-3 max-[560px]:px-5 max-[560px]:justify-between max-[560px]:gap-1">
        <div className="h-full w-4/12 flex flex-col justify-around text-white max-[560px]:w-1/2">
          <h1 className="text-tertiary text-4xl max-[560px]:text-base">
            Quem eu sou
          </h1>
          <p className="max-[560px]:text-sm">
            Meu nome é Guilherme, sou um apaixonado por tecnologia e suas
            possibilidades
          </p>
          <p className="max-[560px]:text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            assumenda nesciunt eum quae non sed iste alias, dicta qui voluptatem
            sit sapiente repudiandae voluptas libero dolorem molestias ut velit.
            Veritatis!
          </p>
        </div>
        <div className="h-100% w-4/12 items-center justify-center max-[560px]:w-1/2">
          <BoyListening />
        </div>
      </div>
    </section>
  );
}
