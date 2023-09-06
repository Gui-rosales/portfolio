import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';

export default function ContactsModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="w-36 p-2 text-secondary bg-primary border-4 border-primary border-solid rounded-2xl hover:bg-transparent hover:text-white hover:border-primary ease-in-out duration-300 max-[560px]:w-26"
      >
        Contatos
      </button>

      <Transition
        appear
        show={isOpen}
        as={Fragment}
      >
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-tertiary p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Contatos
                  </Dialog.Title>
                  <div className="mt-2 flex flex-col gap-3">
                    <div className="flex gap-3 items-center">
                      <FiMail />
                      <span>guilhermelexandre456@gmail.com</span>
                    </div>
                    <div className="flex gap-3 items-center">
                      <FiPhone />
                      <span>{`(65) 99813-6086`}</span>
                    </div>
                    {/* <div className="flex gap-3 items-center">
                      <GrLocation />
                      <span></span>
                    </div> */}
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      fechar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
