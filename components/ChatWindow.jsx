'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from './ui/separator';
import { BrainCircuit, BookIcon, Search, Wand2 } from 'lucide-react';
import axios from 'axios';
import { toast } from "sonner"
export function InputWithButton({ onGetSummaryClick }) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleButtonClick = () => {
        onGetSummaryClick(inputValue);
    };

    return (
        <div className="flex w-full max-w-sm items-center space-x-2 absolute bottom-0 left-0 p-2">
            <Input type="text" placeholder="Enter book title for summary" value={inputValue} onChange={handleInputChange} />
            <Button type="submit" onClick={handleButtonClick}><Wand2 className='mr-2' size={20} />Summary</Button>
        </div>
    );
}
const ChatWindow = () => {
    const [showIcons, setShowIcons] = useState(true); // State variable to manage icon visibility
    const [answer, setAnswer] = useState('');
    const [question, setQuestion] = useState('');
    const handleGetSummaryClick = async (inputValue) => {
        try {
            toast.loading('AI is typing...', { position: 'top-right', duration: 7000 })
            console.log('Input value:', inputValue);
            const response = await axios.post('/api', {
                question: inputValue, // Adjust the property name based on your API expectations
            });
            if (response.data.success) {
                toast.success('Your response has been generated.', { position: 'top-right', style: { background: '#99f6e4' } });
                setShowIcons(false); // Hide icons when data arrives
                setAnswer(response.data.result)
                setQuestion(response.data.question);
            }
            else throw new Error(response.data.result);
        } catch (error) {
            toast.error('This is a free trial. Please wait 10 min to generate another response.', { position: 'top-right', style: { background: '#fecdd3' } });
        }

    };
    return (
        <div style={{ position: 'relative', height: '60vh' }}>
            <div className='p-4' style={{ overflowY: 'auto', height: 'calc(100% - 50px)' }}>
                <span className='flex justify-center font-mono font-semibold mb-2 '>Enrich Your Knowledge with AI <BrainCircuit className='ml-4 transform rotate-90' /></span>
                <Separator className='mb-5 bg-black' />
                <div className='flex-col'>
                    {/* Icon with text when there is no messages */}
                    {showIcons ? ( // Conditionally render the icons
                        <div>
                            <div className='flex justify-center items-center mt-20'><BookIcon size={64} className='animate-bounce' /><Search size={32} className='animate-ping absolute' /></div>
                            <div className='flex flex-col justify-center items-center mt-5 text-center'>
                                <p className='text-md font-semibold mb-2 capitalize'>
                                    Get quick insights into your favorite books
                                </p>
                                <p className='text-sm text-gray-500'>
                                    Enhance your knowledge - retrieve a concise summary of your preferred book now
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className='flex justify-center font-serif text-lg font-bold mb-2'> AI generated Summary</div>
                            <div className='flex justify-center font-sans text-gray-600 font-semibold mb-2 capitalize'>{question}</div>
                            <div className='flex justify-center' ><Separator className=' max-w-24 bg-black mb-3' /></div>
                            <div className='font-serif font-medium'><strong>Summary: </strong>{answer}</div>
                        </div>
                    )}
                </div>
            </div>
            {/* Fixed position input with button */}
            <InputWithButton onGetSummaryClick={handleGetSummaryClick} />
        </div>
    );
}
export default ChatWindow;