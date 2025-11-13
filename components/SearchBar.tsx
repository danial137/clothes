"use client"
import { Search, X } from 'lucide-react'
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Input } from './ui/input'

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const [Product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const [showSearch, setShowSearchh] = useState(false)
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
                        {search && <X className='w-4 h-4 absolute top-3 right-11 hover:text-red-600 hoverEffect' />}
                        <button type='submit' className='absolute right-0 top-0 bg-darkColor/10 w-10 h-full flex items-center justify-center rounded-tr-md rounded-br-md hover:bg-darkColor hover:text-white hoverEffect'>
                            <Search className='w-5 h-5' />
                        </button>
                    </form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default SearchBar