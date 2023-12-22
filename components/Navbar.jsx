'use client'
import Link from 'next/link'
export default function Navbar() {
    return (
        <nav className="flex items-center justify-between bg-slate-800 p-3">
            <div className="w-full block flex-grow flex-col lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow flex justify-center items-center">
                    <Link href="/" className="block mt-2 lg:inline-block lg:mt-0 text-xl text-slate-200 hover:text-white mr-4">Home</Link>
                    <Link href="/news" className="block mt-2 lg:inline-block lg:mt-0 text-xl text-slate-200 hover:text-white mr-4">News</Link>
                    <Link href="/books" className="block mt-2 lg:inline-block lg:mt-0 text-xl text-slate-200 hover:text-white">Books</Link>
                </div>
            </div>

        </nav>
    )
}