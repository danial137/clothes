import CategoryProducts from '@/components/CategoryProducts';
import Container from '@/components/Container'
import Title from '@/components/Title';
import { getAllCategories } from '@/sanity/helper/queries';
import React from 'react'

const CategoryPage = async ({ params, }: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;
    const categories = await getAllCategories()
    return <Container className='py-10'>
        <Title className='text-xl'>Product by category <span className='font-bold text-green-600 capitalize tracking-wide'>{slug && slug}</span></Title>
        <CategoryProducts categories={categories} slug={slug} />
    </Container>
}

export default CategoryPage