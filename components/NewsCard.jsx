import React from 'react';
import { format } from 'date-fns';
import Link from 'next/link';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Newspaper } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton"

const SkeletonLoader = () => (
  <div className="flex items-center space-x-4">
    <Skeleton className="h-24 w-auto rounded-full" />
    <div className="space-y-2">
      <div className='flex'>
        <Skeleton className="h-6 w-6 rounded-full mr-3" />
        <Skeleton className="h-5 w-[300px]" />
      </div>
      <Skeleton className="ml-10 h-5 w-[250px]" />
    </div>
  </div>
);
const NewsCard = ({ articleData }) => {
  if (!articleData) {
    return <SkeletonLoader />;
  }
  const { title, description, url, publishedAt } = articleData;
  const formattedDate = format(new Date(publishedAt), 'MM/dd/yyyy, h:mm:ss a');

  return (
    <div className="max-w-md bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-400 ease-in-out mb-5">
      <Alert>
        <Newspaper className="h-4 w-4" />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription className="text-gray-700 text-base">{description}</AlertDescription>
        <AlertDescription>
          <div className="flex items-center justify-between">
          <p className="text-gray-400 text-sm mt-4">{formattedDate}</p>
          <Link href={url}><p className='font-bold text-blue-500  mt-4'>Read More...</p></Link>
        </div></AlertDescription>
      </Alert>
    </div>
  );
};

export default NewsCard;
