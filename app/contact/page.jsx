'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import Image from 'next/image'
import ContactImage from '../../assets/svg/contact.svg'
const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="p-2 m-3 md:flex items-center justify-around my-10">
        <Image src={ContactImage} height={500} width="auto" className='my-8 md:max-w-max' alt='Contact Us Image'></Image>
        <ContactForm />
      </div>
      <Footer />
    </div>
  )
}

export default ContactUs