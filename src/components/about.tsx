import Image from 'next/image';
import { BoyListening } from './assets/boyListening';

export function About() {
  return (
    <section className="min-h-screen w-full flex flex-col bg-secondary">
      <div className="w-full h-[20vh] flex items-center justify-around py-5 px-10">
        <div className="w-3 h-3 rounded-[50%] bg-primary"></div>
        <div className="w-3 h-3 rounded-[50%] bg-primary"></div>
        <div className="w-[90%] h-2 bg-primary rounded-2xl"></div>
        <div className="w-3 h-3 rounded-[50%] bg-primary"></div>
        <div className="w-3 h-3 rounded-[50%] bg-primary"></div>
      </div>
      <div className="flex w-full h-[55vh] justify-around py-5 px-10">
        <div className="h-100% w-4/12 flex flex-col justify-around text-white">
          <h1 className="text-tertiary text-4xl">Quem eu sou</h1>
          <p>
            Meu nome é Guilherme, sou um apaixonado por tecnologia e suas
            possibilidades
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            assumenda nesciunt eum quae non sed iste alias, dicta qui voluptatem
            sit sapiente repudiandae voluptas libero dolorem molestias ut velit.
            Veritatis!
          </p>
        </div>
        <div className="h-100% w-4/12 items-center justify-center">
          <BoyListening />
        </div>
      </div>
    </section>
  );
}
