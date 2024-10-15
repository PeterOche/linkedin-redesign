import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const OtherModal = ({ isOpen, onClose }) => {
  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-start justify-end p-4 text-center">
            {/* Close Button - Floating outside the modal */}
            <button
              onClick={onClose}
              className="absolute top-4 left-[calc(100%-440px)] bg-white  p-2  "
            >
              <XMarkIcon
                className="h-6 w-6 text-gray-400 hover:text-gray-500"
                aria-hidden="true"
              />
            </button>

            {/* Modal Panel */}
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-sm transform overflow-hidden  bg-white p-6 text-left align-middle shadow-xl transition-all relative">
                {/* Modal Header */}
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  More from LinkedIn
                </Dialog.Title>

                {/* Modal Body */}
                <div className="mt-2">
                  {/* Learning with LinkedIn */}
                  <div className="bg-[#0275B1] text-white p-3 rounded-md mb-4">
                    <h4 className="font-semibold">Learning with LinkedIn</h4>
                    <p className="text-sm">Courses, lectures, workshops</p>
                  </div>

                  {/* Grid of buttons */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {[
                      "INSIGHTS",
                      "ADVERTISE",
                      "GROUPS",
                      "PROFINDER",
                      "SALARY",
                      "SLIDESHARE",
                    ].map((item) => (
                      <button
                        key={item}
                        className="text-left text-sm font-medium text-gray-700"
                      >
                        {item}
                      </button>
                    ))}
                  </div>

                  {/* Business Services */}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Business services</h4>
                    {[
                      "Talent Solutions",
                      "Sales Solutions",
                      "Post a job",
                      "Marketing Solutions",
                      "Learning Solutions",
                    ].map((service) => (
                      <div key={service} className="mb-2">
                        <h5 className="font-medium text-sm">{service}</h5>
                        <p className="text-xs text-gray-500">
                          {service === "Talent Solutions" &&
                            "Find, attract and recruit talent"}
                          {service === "Sales Solutions" &&
                            "Unlock sales opportunities"}
                          {service === "Post a job" &&
                            "Get your job in front of quality candidates"}
                          {service === "Marketing Solutions" &&
                            "Acquire customers and grow your business"}
                          {service === "Learning Solutions" &&
                            "Develop talent across your organization"}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* LinkedIn Premium */}
                  <button
                    className="w-full text-white p-3 rounded-md font-semibold"
                    style={{
                      background:
                        "linear-gradient(180deg, #D8C281 0%, #AC9B69 100%)",
                    }}
                  >
                    LinkedIn Premium
                    <span className="block text-sm font-normal">
                      Special features for premium users
                    </span>
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default OtherModal;
