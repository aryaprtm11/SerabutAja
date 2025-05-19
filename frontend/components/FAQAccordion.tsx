'use client';

import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  return (
    <div className="mx-auto w-full max-w-2xl divide-y divide-gray-200">
      {faqs.map((faq, index) => (
        <Disclosure as="div" key={index} className="group py-6">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-white/50 px-4 py-4 text-left backdrop-blur-sm transition-all duration-300 hover:bg-white group-hover:shadow-md">
                <span className="text-lg font-semibold leading-7 text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {faq.question}
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-300 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="relative mt-4 px-4 pt-4 pb-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-red-600/5 rounded-lg"></div>
                  <p className="relative text-base leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
} 