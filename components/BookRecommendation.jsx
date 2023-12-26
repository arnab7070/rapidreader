'use client'
import React, { useState } from 'react'
import Lottie from "lottie-react";
import animationData from '../assets/lottie/recomended.json';
import { Separator } from './ui/separator';
import axios from 'axios';
import { Button } from './ui/button';
import { toast } from 'sonner';
import { Atom } from 'lucide-react';

const BookRecommendation = () => {
    const [recommendation, setrecommendation] = useState('')
    const getRecommendation = async (inputValue) => {
        try {
            if (inputValue === null) {
                toast.error("Please generate a summary for a book before requesting recommendations.");
                return;
            }
            toast.loading('Generating your personalized recommedation...', { position: 'top-right', duration: 10000 })
            const response = await axios.post('/api/getrecommendation', {
                question: inputValue, // Adjust the property name based on your API expectations
            });
            if (response.data.success) {
                toast.success('Your response has been generated.', { position: 'top-right', style: { background: '#99f6e4' } });
                const jsonString = response.data.result;
                const jsonObject = JSON.parse(jsonString);
                setrecommendation(jsonObject);
            }
            else throw new Error(response.data.result);
        } catch (error) {
            toast.error('This is a free trial. Please try again later.', { position: 'top-right', style: { background: '#fecdd3' } });
        }
    };
    return (
        <div>
            <div className='flex justify-center mt-10 lg:mt-5 md:mt-40 font-bold text-lg font-mono mb-2'>AI Book Recommendation</div>
            <div className="flex justify-center"><Separator className='w-32 bg-black mb-5' /></div>
            {
                recommendation == ''
                    ?
                    <div>
                        <div className='flex justify-center capitalize mt-3 text-sm text-gray-500 px-5 text-center'>Ask AI about some book to get recommendation</div>
                        <div className='flex justify-center capitalize font-serif mt-3 text-sm text-gray-700 px-5 text-center'> 🔽 Scroll Down To Generate 🔽</div>
                        <div className='p-5 -mt-20'>
                            <Lottie
                                animationData={animationData}
                                className="max-w-md"
                                loop={true}
                            />
                        </div>
                        <div className='flex justify-center'><Button className='-mt-20 z-10 shadow-lg bg-blue-500 hover:bg-blue-600' onClick={() => getRecommendation(sessionStorage.getItem("Book"))}><Atom className='mr-2' />Generate Now</Button></div>
                    </div>
                    :
                    <div className='flex-col p-4 space-y-2'>
                        {recommendation.books.map((book, index) => (
                            <div key={index}>
                                <p className='text-sm font-semibold'>{`${index + 1}. ${book.title}`}</p>
                                <Separator/>
                            </div>
                        ))}
                        <p className='font-medium font-sans text-gray-600 mt-10'>As you embark on your literary journey 🚀, I hope these recommendations become cherished companions 📚💖. Happy reading! 🌟✨</p>
                    </div>
            }
        </div>
    )
}

export default BookRecommendation