import { Heart, Newspaper, BookOpen, Settings } from 'lucide-react';
const featureCards = [
    {
        title: "Personalized Recommendations",
        description: "Discover content tailored to your interests",
        content: "Our advanced algorithms analyze your preferences to provide personalized recommendations for news articles and books that match your tastes.",
        footer: "Contact Us",
        url: "/contact",
        icon: <Heart />,
        color: "red",
        animation: "fade-right",
    },
    {
        title: "Fast News Updates",
        description: "Stay informed with real-time news updates",
        content: "Receive instant updates on latest news from various reliable sources. Our platform ensures you're always in the know, keeping you ahead of the curve.",
        footer: "Explore News",
        url: "/news",
        icon: <Newspaper />,
        color: "violet",
        animation: "fade-left",
    },
    {
        title: "Book Recommendations",
        description: "Explore curated book suggestions",
        content: "Whether you're a fiction enthusiast or a non-fiction lover, our curated book recommendations cater to all genres. Dive into captivating insightful reads.",
        footer: "Discover Books",
        url: "/books",
        icon: <BookOpen />,
        color: "teal",
        animation: "fade-up",
    },
    {
        title: "User-Friendly Interface",
        description: "Enjoy a seamless and intuitive user experience",
        content: "Our platform is designed with you in mind. Navigate effortlessly, customize your preferences, & access all features through a user-friendly interface.",
        footer: "Start Exploring",
        url: "/",
        icon: <Settings />,
        color: "lime",
        animation: "fade-down",
    },
];
export default featureCards