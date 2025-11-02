"use client"
import React, { useState } from 'react'
import HomeTbbar from './HomeTbbar'

const ProductGrid = () => {
    const [selectdTab, setSelectedTab] = useState('')
    return (
        <div className='mt-10 flex flex-col items-center'>
            <HomeTbbar selectedTab={selectdTab} onTabSelect={setSelectedTab} />
        </div>
    )
}

export default ProductGrid