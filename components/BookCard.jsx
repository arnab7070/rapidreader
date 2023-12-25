import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from './ui/button'
import { Badge } from "@/components/ui/badge"
import { ScrollArea, ScrollBar } from './ui/scroll-area'
import { ZapIcon, ChevronRightCircle } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Link from 'next/link'

const BookCard = ({ item }) => {
    return (
        <div>
            <Card className='shadow-md flex-grow min-h-full justify-end'>
                <CardHeader>
                    <img
                        src={item.volumeInfo.imageLinks.thumbnail}
                        alt={item.volumeInfo.title}
                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }}
                    />
                    <ScrollArea  className='mx-2 font-medium text-lg whitespace-nowrap py-2'>{item.volumeInfo.title}<ScrollBar orientation="horizontal" /></ScrollArea >
                    <CardDescription>
                        <Dialog>
                            <DialogTrigger className='flex ml-2 mb-2'>
                                <p className='font-bold text-blue-600' >Details</p>
                                <ChevronRightCircle color='blue' size={15} className='mt-1 ml-1' />
                            </DialogTrigger>
                            <DialogContent className='rounded-lg'>
                                <DialogHeader>
                                    <DialogTitle>Description</DialogTitle>
                                    <DialogDescription>
                                        <div className='text-left'>
                                            <p className='line-clamp-6'>{item.volumeInfo.description}</p>
                                            <p className='mt-2'><strong>Publisher: </strong>{item.volumeInfo.publisher}</p>
                                            <p><strong>Author Name: </strong>{item.volumeInfo.authors[0]}</p>
                                            <p><strong>Published Date: </strong>{item.volumeInfo.publishedDate}</p>
                                            <p><strong>Total Pages: </strong>{item.volumeInfo.pageCount}</p>
                                            <p><strong>Language: </strong>{item.volumeInfo.language}</p>
                                        </div>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </CardDescription>
                </CardHeader>
                <CardContent className='p-2 space-x-2'>
                    {/* {
                        item.volumeInfo.categories.map((category, categoryIndex) => (
                            <Badge variant="outline" key={categoryIndex}>
                                {`${category}`}
                            </Badge>
                        ))
                    } */}
                </CardContent>
                <CardFooter className='flex justify-center items-end p-2 min-h-full'>
                    <Link href={item.volumeInfo.previewLink}><Button className='mt-3' > <ZapIcon className='mr-2' /> See Preview</Button></Link>
                </CardFooter>
            </Card>
        </div>
    )
}

export default BookCard