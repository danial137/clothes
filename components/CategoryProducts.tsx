"use client"
import { CATEGORIES_QUERYResult, Product } from '@/sanity.types'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { client } from '@/sanity/lib/client';
import { Loader2 } from 'lucide-react';
import NoProductsAvailable from './NoProductsAvailable';
import { motion, AnimatePresence } from "motion/react";
import ProductCart from './ProductCart';
interface props {
    categories: CATEGORIES_QUERYResult;
    slug: string
}
const CategoryProducts = ({ categories, slug }: props) => {
    const [currentSlug, setCurrentSlug] = useState(slug)
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchProducts = async (categorySlug: string) => {

        try {
            setLoading(true)
            const query = `*[_type == 'product' && references(*[_type == 'category' && slug.current == $categorySlug]._id)] | order(name asc)`;
            const data = await client.fetch(query, { categorySlug })
            setProduct(data)
        } catch (error) {
            console.error('error fetching product', error)
        } finally {
            setLoading(false)
        }


    };

    useEffect(() => {

        fetchProducts(currentSlug)

    }, [currentSlug])

    return (
        <div className='py-5 flex flex-col md:flex-row items-start gap-5'>
            <div className='flex flex-col md:min-w-40 border'>
                {categories?.map((item) => (
                    <Button onClick={() => setCurrentSlug(item?.slug?.current as string)} key={item?._id} className={`bg-transparent border-0 rounded-none text-darkColor shadow-none hover:bg-darkColor/80 hover:text-white font-semibold hoverEffect border-b last:border-b-0 ${item?.slug?.current === currentSlug && 'bg-darkColor text-white border-darkColor'}`}>
                        {item?.title}
                    </Button>
                ))}
            </div>
            <div className='w-full'>
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full mt-10">
                        <div className="flex items-center space-x-2 text-blue-600">
                            <Loader2 className="animate-spin" />
                            <span className="text-lg font-semibold">Product is loading...</span>
                        </div>
                    </div>
                ) : (
                    <>
                        {product?.length ? (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 w-full">
                                {product?.map((product: Product) => (
                                    <AnimatePresence key={product?._id}>
                                        <motion.div
                                            layout
                                            initial={{ opacity: 0.2 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <ProductCart product={product} />
                                        </motion.div>
                                    </AnimatePresence>
                                ))}
                            </div>
                        ) : (
                            <NoProductsAvailable selectedTab={currentSlug} className='mt-0 w-full' />
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default CategoryProducts