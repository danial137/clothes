import React from 'react'
interface Props {
    amount: number | undefined;
    className?: string
}
const PriceFormatter = ({ amount, className }: Props) => {
    const formattedPrice = new Number(amount).toLocaleString
    return (
        <div>PriceFormatter</div>
    )
}

export default PriceFormatter