import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ScrollArea } from "@/components/ui/scroll-area"
import ChatWindow from '@/components/ChatWindow'

const Books = () => {
  return (
    <div>
      <Navbar />
      <div className='w-full h-screen md:flex'>
        <ScrollArea  className='md:w-2/3 lg:w-9/12 bg-yellow-100'>Trending Books</ScrollArea >
        <div className='flex-col md:w-1/3 lg:w-3/12'>
          <ScrollArea className='h-3/5 bg-lime-200'><ChatWindow/></ScrollArea>
          <ScrollArea className='h-2/5 bg-lime-100'>Recomended Books</ScrollArea>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Books