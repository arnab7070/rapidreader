import React, { useState } from 'react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { SendHorizontal, MailOpenIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from "sonner"

const ContactForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        question: '', // Add the question field to the form data
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const [isLoading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            // Display loading toast
            toast.loading('Sending Message...', {
                duration: 5000, // Set duration to 0 for indefinite loading
                style: {
                    border: '2px solid black',
                },
            });
            emailjs.sendForm('service_ibmenr9', 'template_d4qgib4', e.target, 'i2ChaDuNxOT_Ky9sO').then(
                (result) => {
                    setLoading(false);
                    const successMessage = 'Message Sent Successfully!';
                    toast.success(successMessage, {
                        title: 'Success',
                        description: 'Your message has been sent successfully.',
                        duration: 5000, // You can customize the duration in milliseconds
                        position: 'top-center',
                        style: {
                            border: '2px solid black',
                        },
                        action: {
                            label: "Done",
                            onClick: () => console.log("Done"),
                        },
                    });
                },
                (error) => {
                    const errorMessage = 'Something went wrong!';
                    toast.error(errorMessage, {
                        title: 'Failed',
                        description: error.text,
                        duration: 6000, // You can customize the duration in milliseconds
                        position: 'top-center',
                        style: {
                            border: '2px solid black',
                        },
                        action: {
                            label: "Done",
                            onClick: () => console.log("Done"),
                        },
                    });
                }
            );
        } catch (error) {
            const errorMessage = 'Something went wrong!';
            toast.error(errorMessage, {
                title: 'Failed',
                description: error.text,
                duration: 10000, // You can customize the duration in milliseconds
                position: 'top-center',
                style: {
                    border: '2px solid black',
                },
                action: {
                    label: "Done",
                    onClick: () => console.log("OK"),
                },
            });
        } finally {
            toast.dismiss();
        }

        // Clear the form after successful submission
        setFormData({
            email: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            question: '',
        });
    };


    return (
        <div>
            <p className='flex justify-center font-mono font-bold text-4xl'><MailOpenIcon size={32} className='mt-1 mr-3' /> Contact Form</p>
            <span className='flex justify-center'><Separator className='max-w-36 mt-5' /></span>
            <form
                className="w-full max-w-md mx-auto p-6 my-16 border border-black bg-white shadow-lg rounded-lg"
                onSubmit={handleSubmit}
            >
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Email address
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring ring-gray-400 focus:border-gray-400"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="mb-6">
                        <label
                            htmlFor="firstName"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring ring-gray-400 focus:border-gray-400"
                            placeholder="Enter first name"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="lastName"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Last Name
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring ring-gray-400 focus:border-gray-400"
                            placeholder="Enter last name"
                            required
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="phoneNumber"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring ring-gray-400 focus:border-gray-400"
                        placeholder="Expected Format (1234567890)"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="question"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Ask a Question
                    </label>
                    <textarea
                        name="question"
                        value={formData.question}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring ring-gray-400 focus:border-gray-400"
                        placeholder="Enter your question"
                        required
                    />
                </div>
                <div className="flex justify-center"><Button className="w-full text-lg"><SendHorizontal className='mr-3 text-sm' />Submit</Button></div>
            </form>
        </div>

    );
};

export default ContactForm;
