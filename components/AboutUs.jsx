import React from 'react';
import Image from 'next/image';
import { Separator } from './ui/separator';
import FeatureImage from '../assets/svg/features.svg';

const AboutUs = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-screen-sm p-5">
            <div className="flex justify-center items-center mb-8">
                <Image src={FeatureImage} alt="About Us Image" height={500} width="auto" />
            </div>
            <Separator className='mb-5' />
            <div className="text-center bg-white rounded-xl p-5 shadow-lg">
                <h2 className="text-3xl font-bold mb-4">About <span className='text-orange-500'>Rapid Reader</span></h2>
                <Separator className='mb-5' />
                <p className="text-black text-left font-serif mb-6">
                    Welcome to Rapid Reader, where knowledge meets curiosity. We are dedicated to providing a personalized and engaging experience for seekers of information.
                </p>

                <p className="text-black text-left font-serif mb-6">
                    Our journey began with the vision of making information accessible and enjoyable. Rapid Reader is not just a platform; it's a community of individuals passionate about continuous learning.
                </p>

                <p className="text-black text-left font-serif mb-6">
                    From personalized recommendations to real-time news updates and curated book suggestions, we strive to offer a seamless and user-friendly experience. Join us in shaping the future of knowledge!
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
