import React from 'react';
import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { HeartIcon, Newspaper, BookOpen, Settings } from 'lucide-react'; // Import Lucide icons
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from './ui/button';

const getIconComponent = (color) => {
    switch (color) {
        case 'red':
            return <HeartIcon size={64} color={color} className='animate-bounce bg-red-100 rounded-3xl p-2' />;
        case 'violet':
            return <Newspaper size={64} color={color} className='animate-bounce bg-purple-100 rounded-3xl p-2' />;
        case 'teal':
            return <BookOpen size={64} color={color} className='animate-bounce bg-teal-100 rounded-3xl p-2' />;
        case 'lime':
            return <Settings size={64} color={color} className='animate-bounce bg-lime-100 rounded-3xl p-2' />;
        default:
            return null;
    }
};

const FeatureCard = ({ cardDetails }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-in-out', // Easing type
        });
    }, []);
    return (
        <div data-aos={cardDetails.animation} className="lg:w-full sm:w-full flex justify-center">
            <Card className={`my-5 max-w-screen-sm mx-auto shadow-lg hover:shadow-2xl border-b-slate-800 border-b-8`}>
                <CardHeader>
                    <div className={`bg-${cardDetails.color}-300 text-white rounded-full p-2 flex items-center justify-center`}>
                        {getIconComponent(cardDetails.color)}
                    </div>
                    <CardTitle>{cardDetails.title}</CardTitle>
                    <CardDescription className='font-sans'>{cardDetails.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className='font-serif'>{cardDetails.content}</p>
                </CardContent>
                <CardFooter className='flex justify-center items-center'>
                    <Link href={cardDetails.url}>
                        <Button className={`shadow-lg mt-4 text-white font-mono font-bold`}>
                            {cardDetails.footer}
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
};

export default FeatureCard;
