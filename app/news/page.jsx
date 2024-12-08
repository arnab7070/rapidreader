'use client'
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import NewsDetailedCard from '@/components/NewsDetailedCard';
import { Flame } from 'lucide-react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Footer from '@/components/Footer';
import axios from 'axios';

const News = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let generalData;
      setLoading(true);
      let apiUrl = `https://gnews.io/api/v4/search?q=example&apikey=${process.env.NEXT_PUBLIC_GNEWS_API}&sortBy=publishedAt&country=in&max=30`;
      // Check if there is a search keyword
      if (searchKeyword) {
        apiUrl += `&q=${encodeURIComponent(searchKeyword.trim())}`;
      } else {
        // If no search keyword, use a default query, e.g., "trending"
        apiUrl += `&q=trending`;
      }
      const res = await axios.post('/api/getcache', {"url": apiUrl});
      const {cacheData} = res.data;
      if(cacheData) {
        generalData = cacheData;
        setData(generalData);
        setLoading(false);
        return;
      }
      const response = await fetch(apiUrl);
      const result = await response.json();
      generalData = result.articles ? result.articles : [];
      console.log(generalData);
      setData(generalData);
      await axios.put('/api/getcache', {"url": apiUrl, "data": generalData});
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchData(); // Call the fetchData function when search button is clicked
  };

  return (
    <main>
      <Navbar />
      <div className='md:flex'>
        <div className='p-4 md:w-3/4'>
          <div className='flex justify-between flex-wrap'>
            <div className='flex mb-4 p-4 font-bold text-lg bg-gray-200 rounded-lg'><Flame strokeWidth={2.25} className='mr-4' />News In Flash: Bite-sized Updates for Busy Readers</div>
            <div className="flex w-full max-w-sm mb-5 items-center space-x-2">
              <Input
                type="text"
                placeholder="Enter keyword to get related news"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
              <Button type="button" onClick={handleSearch}>Search</Button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {loading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <NewsDetailedCard key={index} />
              ))
            ) : (
              data.filter(article => article.image).map((article, index) => (
                <NewsDetailedCard key={index} articleData={article} />
              ))
            )}
          </div>
        </div>
        <Sidebar />
      </div>
      <Footer />
    </main>
  );
};

export default News;