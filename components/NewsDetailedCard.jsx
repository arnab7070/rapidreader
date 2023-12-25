import React from 'react';
import { format } from 'date-fns';
import { AlignLeft } from 'lucide-react';
import { CalendarDays } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SkeletonLoader = () => (
  <div className="animate-pulse bg-gray-200 rounded-lg p-4">
    <div className="w-full h-48 bg-gray-300 rounded-lg mb-2"></div>
    <div className="h-4 bg-gray-300 w-3/4 my-2"></div>
    <div className="h-4 bg-gray-300 w-1/2 my-2"></div>
  </div>
);

const NewsDetailedCard = ({ articleData }) => {
  if (!articleData) {
    // Render skeleton loader if data is not available
    return <SkeletonLoader />;
  }

  const { title, image, url, publishedAt, description, source } = articleData;
  const formattedDate = format(new Date(publishedAt), 'MM/dd/yyyy, h:mm:ss a');

  return (
    <Card className='h-max hover:shadow-2xl transition duration-300 ease-in-out shadow-lg'>
      <CardHeader>
        <img className="w-full h-48 object-cover object-center rounded-lg" src={image} alt={title} />
        <CardTitle className='line-clamp-3 px-3'>{title}</CardTitle>
      </CardHeader>
      <CardDescription className='mt-4'>
          <span className="flex-wrap ml-3 bg-pink-100 text-pink-800 text-md font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{source.name}</span>
      </CardDescription>
      <CardContent className='px-3'>
        <Accordion type="single" collapsible>
          <AccordionItem value={title}>
            <AccordionTrigger> <AlignLeft />Read the Summary</AccordionTrigger>
            <AccordionContent>
              {description}
             <span>...</span> <a className='text-blue-600' href={url}>Read More</a>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter>
      <CalendarDays className='text-gray-600 mr-4 mt-4'/> <p className='text-gray-400'>{formattedDate}</p>
      </CardFooter>
    </Card>
  );
};

export default NewsDetailedCard;
