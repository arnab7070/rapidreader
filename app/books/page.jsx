import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ScrollArea } from "@/components/ui/scroll-area"
import ChatWindow from '@/components/ChatWindow'
import BookGallery from '@/components/BookGallery'
import BookRecommendation from '@/components/BookRecommendation'

const Books = () => {
  return (
    <div>
      <Navbar />
      <div className='w-full md:flex'>
        <ScrollArea  className='bg-slate-200 h-screen md:w-2/3 lg:w-9/12'><BookGallery/></ScrollArea >
        <div className='flex-col md:w-1/3 lg:w-3/12'>
          <ScrollArea className='h-3/5 bg-orange-100'><ChatWindow/></ScrollArea>
          <ScrollArea className='h-[400px] md:h-2/5 lg:h-[290px] bg-blue-50'><BookRecommendation/></ScrollArea>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Books