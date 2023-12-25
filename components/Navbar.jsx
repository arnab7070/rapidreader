'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import Image from 'next/image';
import { LeftSheet } from "@/components/LeftSheet"
export default function Navbar() {
  const routepathname = usePathname()
  const isActive = (pathname) => routepathname === pathname;
  return (
    <nav className="flex items-center justify-between p-3 bg-slate-800">
      {/* Centered logo and name on mobile */}
      <div className="md:hidden flex items-center">
        <Image src={'/favicon.ico'} alt={'Favicon'} height={30} width={30} />
        <p className="ml-3 text-white font-sans text-lg font-bold whitespace-nowrap">Rapid Reader</p>
      </div>

      {/* Hide on tablet or larger screens, but show on mobile */}
      <div className="lg:hidden">
        <LeftSheet />
      </div>

      <div className="hidden md:flex items-center">
        <Image src={'/favicon.ico'} alt={'Favicon'} height={30} width={30} />
        <p className="ml-3 text-white font-sans text-2xl font-semibold whitespace-nowrap">Rapid Reader</p>
      </div>

      
      <div className="hidden lg:w-full lg:block flex-grow flex-col lg:items-center">
        <div className="text-sm lg:flex-grow flex justify-center items-center">
          {/* Your navigation links go here */}
          <Link href="/" className={`block lg:inline-block lg:mt-0 text-xl  ${isActive('/') ? 'text-white' : 'text-gray-400'} mr-4`}>
            Home
          </Link>
          <Link href="/news" className={`block lg:inline-block lg:mt-0 text-xl  ${isActive('/news') ? 'text-white' : 'text-gray-400'} mr-4`}>
            News
          </Link>
          <Link href="/books" className={`block lg:inline-block lg:mt-0 text-xl  ${isActive('/books') ? 'text-white' : 'text-gray-400'} mr-4`}>
            Books
          </Link>
          <Link href="/contact" className={`block lg:inline-block lg:mt-0 text-xl  ${isActive('/contact') ? 'text-white' : 'text-gray-400'} mr-4`}>
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
