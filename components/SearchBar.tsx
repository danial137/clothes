"use client"
import { Search, X } from 'lucide-react'
import React, { useCallback, useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Input } from './ui/input'
import { client } from '@/sanity/lib/client'

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const [showSearch, setShowSearchh] = useState(false)
    const fetchProduct = useCallback(async () => {
        if (!search) {
            setProduct([])

            return;

        }
        setLoading(true)

        try {
            const query = `*[_type == "product" && name match $search] | order(name asc)`;
            const params = { search: `${search}*` }
            const response = await client.fetch(query, params);
            setProduct(response);
        } catch (error) {
            console.log('error fetching product:', error)
        } finally {
            setLoading(false)
        }

    }, [search]);

    useEffect(() => {
        const deboundceTimer = setTimeout(() => {
            fetchProduct()
        }, 300);
        return () => clearTimeout(deboundceTimer)
    }, [search, fetchProduct])
    return (
        <Dialog open={showSearch} onOpenChange={() => setShowSearchh(!showSearch)}>
            <DialogTrigger onClick={() => setShowSearchh(!showSearch)}>
                <Search className='w-5 h-5 hover:text-darkColor hoverEffect' />
            </DialogTrigger>
            <DialogContent className='max-w-5xl min-h-[90vh] max-h-[90vh] flex flex-col overflow-hidden '>
                <DialogHeader>
                    <DialogTitle className='mb-1'>
                        Product SearchBar
                    </DialogTitle>
                    <form className='relative' onSubmit={(e) => e.preventDefault()}>
                        <Input placeholder='search your product here .... ' className='flex-1 rounded-md py-5' value={search} onChange={(e) => setSearch(e.target.value)} />
                        {search && <X className='w-4 h-4 absolute top-3 right-11 hover:text-red-600 hoverEffect' onClick={() => setSearch("")} />}
                        <button type='submit' className={`absolute right-0 top-0  w-10 h-full flex items-center justify-center rounded-tr-md rounded-br-md hover:bg-darkColor hover:text-white hoverEffect ${search ? 'bg-darkColor text-white' : 'bg-darkColor/10'}`}>
                            <Search className='w-5 h-5' />
                        </button>
                    </form>
                </DialogHeader>
                <div className='w-full h-full overflow-y-scroll border-darkColor/20 rounded-md'>
                    <div>
                        {loading ? <p> searching on progress...</p> : product.length ? <div>products available</div> : <div>no product</div>}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default SearchBar