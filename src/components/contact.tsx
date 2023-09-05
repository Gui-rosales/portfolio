import { ContactsSVG } from './assets/contacts';

export function Contacts() {
  return (
    <section className="relative w-full h-screen flex flex-col bg-secondary">
      <div className="w-full h-[20vh]">
        <h1 className="text-primary">Contatos</h1>
      </div>
      <div className="w-full h-[50vh]"></div>
      <div className="absolute right-0 bottom-0 w-1/5 h-1/2 flex justify-end items-center">
        <ContactsSVG />
      </div>
    </section>
  );
}
