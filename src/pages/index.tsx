import { About } from '@/components/about';
import { Contacts } from '@/components/contact';
import { Experience } from '@/components/experience';
import { Landing } from '@/components/landing';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <Skills />
      <Experience />
      <Projects />
      {/* <Contacts /> */}
    </>
  );
}
