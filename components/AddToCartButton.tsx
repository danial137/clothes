import { Product } from '@/sanity.types'
import React from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
interface Props {
    product: Product
    className?: string
}
const AddToCartButton = ({ product, className }: Props) => {
    const isOutOfStock = product?.stock === 0;
    const itemCount = 4
    return <div>
        {itemCount ? <div>item</div> : (
            <Button disabled={isOutOfStock} className={cn("w-full", className)}>

                Add to cart
            </Button>
        )}
    </div>
}

export default AddToCartButton