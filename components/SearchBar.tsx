"use client"
import { Search } from 'lucide-react'
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'

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
                    <form className='relative'></form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default SearchBar