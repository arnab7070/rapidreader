'use client'
import React, { useEffect, useState } from 'react'
import { LibraryBigIcon, SearchIcon } from 'lucide-react'
import BookCard from './BookCard'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from 'sonner'

const BookGallery = () => {
  const [searchKeyword, setsearchKeyword] = useState('')
  const [data, setdata] = useState([])
  useEffect(() => {
    fetchData();
  }, [])

  const handleSearch = () => {
    fetchData(); // Call the fetchData function when search button is clicked
  };


  const fetchData = async () => {
    try {
      let apiUrl = `https://www.googleapis.com/books/v1/volumes?maxResults=20`;
      // Check if there is a search keyword
      if (searchKeyword) {
        apiUrl += `&q=${encodeURIComponent(searchKeyword.trim())}`;
      } else {
        // If no search keyword, use a default query, e.g., "coding"
        apiUrl += `&q=coding`;
      }
      const response = await fetch(apiUrl);
      const result = await response.json();
      if (result && result.items && result.items.length > 0) {
        setdata(result.items);
        if(apiUrl != 'https://www.googleapis.com/books/v1/volumes?maxResults=20&q=coding') toast.success('Searching Successfully Done'); 
      } else {
        toast.error("No results found");
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className='bg-slate-200 p-2 md:p-4 flex justify-between font-bold font-mono text-xl flex-wrap gap-2'>
        <div className='flex'>
          <LibraryBigIcon className='mr-2' />
          Digital Library Corner
        </div>

        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="text"
            placeholder="Search Books"
            value={searchKeyword}
            onChange={(e) => setsearchKeyword(e.target.value)}
          />
          <Button type="submit" onClick={handleSearch}>
            <SearchIcon className='mr-2' />
            Search
          </Button>
        </div>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-2 p-2 md:p-5'>
        {data.filter(book => book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail).map((book, index) => (
          <BookCard key={index} item={book} />
        ))}
      </div>
    </div>

  )
}

export default BookGallery