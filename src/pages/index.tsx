import { About } from '@/components/about';
import { Landing } from '@/components/landing';
import { Skills } from '@/components/skills';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <Skills />
    </>
  );
}
