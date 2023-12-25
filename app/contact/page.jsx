'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import Lottie from "lottie-react";
import animationData from '../../assets/lottie/contact.json';
const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="p-2 m-3 md:flex items-center justify-around my-10">
        <Lottie
          animationData={animationData}
          className="my-8 flex max-w-md justify-center items-center mb-5"
          loop={true}
        />
        <ContactForm />
      </div>
      <Footer />
    </div>
  )
}

export default ContactUs