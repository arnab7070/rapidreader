'use client'
import React, { useState, useEffect } from 'react';
import { Calendar } from "@/components/ui/calendar"
import { CalendarDays, ListChecks } from "lucide-react"
import NewsCard from './NewsCard';
import { ScrollArea } from "@/components/ui/scroll-area"
const Sidebar = () => {
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&max=10&apikey=${process.env.NEXT_PUBLIC_GNEWS_API}`)
        // https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=5ed9ec229b76ebdc896ba8bd10f13b9b
        const result = await response.json();
        const generalData = result.articles ? result.articles : [];
        setData(generalData);
        setLoading(false); // Set loading to false when data is received
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full md:w-1/3 p-4 mb-5">
      {/* Calendar */}
      <div className='flex rounded-md font-bold mb-3 p-4 text-lg bg-gray-200'><CalendarDays className='mr-3' />Calendar</div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border mb-5 text-black"
      />
      {/* Most Recent Stories */}
      <div className="flex rounded-md font-bold mb-3 p-4 text-lg bg-gray-200"> <ListChecks className='mr-3' />Top Stories</div>
      <ScrollArea className='h-[600px] border-black border rounded-lg shadow-lg p-5'>
        {
          loading ?
            // Render skeleton loaders while data is loading
            Array.from({ length: 6 }).map((_, index) => (
              <NewsCard key={index} />
            ))
            :
            // Render actual data once it's available
            data.map((element, index) => (
              <NewsCard key={index} articleData={element} />
            ))
        }
      </ScrollArea>
    </div>
  );
};

export default Sidebar;
