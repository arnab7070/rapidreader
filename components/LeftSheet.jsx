import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { Separator } from "@/components/ui/separator"
import { Home, Book, Newspaper, Menu, Mail } from "lucide-react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

export function LeftSheet() {
    // Replace this with your actual isActive implementation
    const routepathname = usePathname()
    const isActive = (pathname) => routepathname === pathname;
    const menuItems = [
        { href: "/", label: "Home", icon:<Home /> },
        { href: "/news", label: "News", icon: <Newspaper /> },
        { href: "/books", label: "Books", icon: <Book /> },
        { href: "/contact", label: "Contact Us", icon: <Mail/>}
        // Add more menu items as needed
    ];
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline"><Menu/></Button>
            </SheetTrigger>
            <SheetContent side={'left'}>
                <SheetHeader>
                    <SheetTitle>
                        <div className="grid place-items-center">
                            <Image src={'/favicon.ico'} alt={'Favicon'} height={50} width={50} />
                            <p className="ml-2">Rapid Reader</p>
                        </div>
                    </SheetTitle>
                    <SheetDescription>
                        Your Shortcut to Wisdom
                        <Separator className='mt-2' />
                    </SheetDescription>
                    {/* Render dynamic menu items */}
                    <div className="flex flex-col mt-4">
                        {menuItems.map((menuItem) => (
                            <Link key={menuItem.href} href={menuItem.href} className={`flex gap-4 text-lg ${isActive(menuItem.href) ? 'text-black' : 'text-gray-500'} mb-4`}>
                            {menuItem.icon}{menuItem.label}
                            </Link>
                        ))}
                    </div>
                </SheetHeader>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Close Menu</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
