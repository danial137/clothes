"use client"
import { CATEGORIES_QUERYResult } from '@/sanity.types'
import React, { useState } from 'react'
import { Button } from './ui/button';
interface props {
    categories: CATEGORIES_QUERYResult;
    slug: string
}
const CategoryProducts = ({ categories, slug }: props) => {
    const [currentSlug, setCurrentSlug] = useState(slug)
    return (
        <div className='py-5 flex flex-col md:flex-row items-start gap-5'>
            <div className='flex flex-col md:min-w-40 border'>
                {categories?.map((item) => (
                    <Button key={item?._id} className={`bg-transparent border-0 rounded-none text-darkColor shadow-none hover:bg-darkColor hover:text-white font-semibold hoverEffect border-b last:border-b-0 ${item?.slug?.current === currentSlug && 'bg-darkColor text-white border-darkColor'}`}>
                        {item?.title}
                    </Button>
                ))}
            </div>
            <div className='w-full bg-red-200'>products</div>
        </div>
    )
}

export default CategoryProducts