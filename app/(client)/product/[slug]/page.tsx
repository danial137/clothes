import Container from '@/components/Container'
import ImageView from '@/components/ImageView';
import { getProductBySlug } from '@/sanity/helper/queries';
import { Divide } from 'lucide-react';
import { notFound } from 'next/navigation';
import React from 'react'

const SingleProduct = async ({ params, }: { params: Promise<{ slug: string }>; }) => {
    const { slug } = await params;
    const product = await getProductBySlug(slug);
    if (!product) {
        return notFound()
    }
    return (
        <Container>
            {product?.images && <ImageView images={product?.images} />}
            <div>right</div>
        </Container>

    )
}

export default SingleProduct