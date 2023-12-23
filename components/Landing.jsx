'use client'
import Head from 'next/head';
import Link from 'next/link';
import Lottie from "lottie-react";
import animationData from '../assets/lottie/icon.json';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import { TrendingUp } from 'lucide-react';
import LandingImage from '../assets/svg/landing.svg';
import Image from 'next/image';
import FeatureCard from './FeatureCard';
import AboutUs from './AboutUs';
import FAQ from './FAQ';
import featureCards from '@/assets/static/features';
import faqData from '@/assets/static/faq';
import NewsPaperSVG from '../assets/svg/newspaper.svg';
const Landing = () => {
  return (
    <div className="landing-container">
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Welcome to Rapid Reader" />
      </Head>
      <div className="glass-background"></div>
      <div className="landing-content">
        <div className='flex justify-center font-bold text-xl text-white mt-16'>Your 🫂 Buddy in 🚵 Speedy Life </div>
        <Image className='flex justify-center' priority={false} src={LandingImage} height={600} width="auto" alt='Landing Image'></Image>
        <h1 className="landing-title">Welcome to <span className='font-bold text-white'>Rapid Reader</span></h1>
        <p className="landing-description">
          Daily Source for News and Books
        </p>
        <p className="landing-description">
          Stay Informed, Read Smart
        </p>
        <Link href={'/news'}>
          <Button className="mt-5 text-yellow-400 text-lg"><TrendingUp strokeWidth={2.5} className='mr-2' />Let's Explore</Button>
        </Link>
        <div className='flex justify-center'><Separator className='my-5 w-24' /></div>
        <Lottie
          animationData={animationData}
          className="flex justify-center items-center mb-5"
          loop={true}
        />
        <p className='flex justify-center text-white font-extrabold text-4xl'>Features Section</p>
        <div className='h-auto p-5'>
          {featureCards.map((value, index) => (
            <FeatureCard cardDetails={value} key={index} />
          ))}
        </div>
        <div className="flex justify-center my-5"><AboutUs /></div>
        <div className="flex justify-center my-5"><Image alt='faq' src={NewsPaperSVG} height={300} width="auto"></Image></div>
          <div className="flex justify-center my-5">
        <div className="md:w-3/4">
          <p className='text-white text-4xl font-bold font-sans'>FAQ Section</p>
          <div className='flex justify-center'><Separator className='my-5 max-w-24 text-center' /></div>
          {faqData.map((item, index) => (
            <FAQ faq={item} key={index} />
          ))}
        </div>
      </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .landing-container {
          position: relative;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden; /* Ensure the blur effect doesn't overflow */
        }

        .glass-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, rgba(255, 140, 0, 0.8), rgba(128, 0, 128, 0.8)); /* Orangish-Purplish gradient with transparency */
          backdrop-filter: blur(10px); /* Apply the blur effect */
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); /* Very light shadow */
          z-index: 0;
        }

        .landing-content {
          text-align: center;
          z-index: 1;
          color: #000; /* Black font color */
        }

        .landing-title {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .landing-description {
          font-size: 1.5rem;
          max-width: 600px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default Landing;