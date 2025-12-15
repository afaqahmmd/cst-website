import React from "react";
import { faqs } from "@/data/mockFaqs";
import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import { Plus } from "lucide-react";
import Loop from "@/components/svgs/icons/Loop";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

interface FAQsAccordionProps {
  faqs: any[];
}

const FAQsAccordion: React.FC<FAQsAccordionProps> = ({ faqs }) => {
  return (
    <div className='lg:w-1/2 w-full flex gap-3 items-center'>
      {/* Decorative Element */}
      <div>
        <Loop />
      </div>

      {/* FAQ Accordion */}
      <div className='space-y-4 max-h-80 overflow-y-auto pr-2 scrollbar-custom'>
        <Accordion type='single' collapsible className='w-full'>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className='border rounded-lg my-3 border-gray-200 bg-white hover:border-gray-300 transition-all duration-200'
            >
              <AccordionPrimitive.Header className='flex'>
                <AccordionPrimitive.Trigger className='flex flex-1 items-center justify-between px-6 py-4 text-left font-medium transition-all hover:no-underline focus:outline-none'>
                  <span className='font-semibold text-gray-900 text-sm lg:text-base text-left'>
                    {faq.question}
                  </span>
                  <Plus className='h-4 w-4 shrink-0 transition-transform duration-200 text-gray-400 data-[state=open]:rotate-45' />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className='px-6 pb-4'>
                <p className='text-gray-600 text-sm leading-relaxed'>{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQsAccordion;
