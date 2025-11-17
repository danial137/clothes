import Container from '@/components/Container'
import React from 'react'

const CategoryPage = async ({ params, }: {
    params: Promise<{ slug: string }>;
}) => {
    console.log(params)
    return <Container className='py-10'>categorypage</Container>
}

export default CategoryPage