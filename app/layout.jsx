import { Gentium_Book_Plus } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/components/ui/sonner"

const gbp = Gentium_Book_Plus({subsets: ['latin'], weight: ['400']})

export const metadata = {
  title: 'Rapid Reader',
  description: 'Your Buddy in Speedy Life',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gbp.className}><Toaster />{children}</body>
    </html>
  )
}
