import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = ({ faq }) => {
  return (
    <div className='max-w-screen-md px-5'>
      <Accordion type="single" collapsible>
        <AccordionItem value="question">
          <AccordionTrigger className='text-left font-serif font-semibold'>{faq.question}</AccordionTrigger>
          <AccordionContent className='text-left'>{faq.answer}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
