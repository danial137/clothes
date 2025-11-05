import { cn } from '@/lib/utils';
import React from 'react'
interface Props {
    amount: number | undefined;
    className?: string
}
const PriceFormatter = ({ amount, className }: Props) => {
    const formattedPrice = new Number(amount).toLocaleString('en-US', {
        currency: "USD",
        style: "currency",
        minimumFractionDigits: 2,
    })


    return (
        <div className={cn('text-sm font-semibold text-darkColor', className)}>{formattedPrice}</div>
    )
}

export default PriceFormatter