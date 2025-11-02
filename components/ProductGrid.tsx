"use client"
import React, { useEffect, useState } from 'react'
import HomeTbbar from './HomeTbbar'
import { productType } from '@/constants'
import { client } from '@/sanity/lib/client'

const ProductGrid = () => {
    const [selectdTab, setSelectedTab] = useState(productType[0]?.title || "")

    const [products, setProduct] = useState([]);

    const [loading, setLoading] = useState(false)

    const query = `*[_type == "product" && variant == $variant] | order(name asc)`;

    const Params = { variant: selectdTab.toLocaleLowerCase() };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await client.fetch(query, Params)
                setProduct(await response)
            } catch (error) {
                console.log('Product Fetching Error', error)
            } finally {
                setLoading(false)
            }
        };

        fetchData();
    }, [selectdTab])

    return (
        <div className='mt-10 flex flex-col items-center'>
            <HomeTbbar selectedTab={selectdTab} onTabSelect={setSelectedTab} />
            {loading ? <div><span>Procut is loading...</span></div> : products?.map((item) => (
                <p>{item?.name}</p>
            ))}
        </div>
    )
}

export default ProductGrid