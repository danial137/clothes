"use client"
import React from 'react'
import Logo from './Logo'
import { motion } from 'motion/react'
import { Loader2 } from 'lucide-react'
const Loading = () => {
    return (
        <div className='fixed min-h-screen w-full bg-white left-0 top-0 flex items-center  justify-center z-50'>
            <div className='flex flex-col justify-center items-center gap-1'>
                <Logo>Tulos</Logo>
                <motion.div transition={{ repeat: Infinity, duration: 1.5 }} animate={{ scale: [1, 1, 1, 1] }} className='flex items-center space-x-2 text-green-800'>
                    <Loader2 className='aniamte-spin' /> <span className='font-semibold tracking-wider'>Tulos is loading...</span>
                </motion.div>
            </div>
        </div>
    )
}

export default Loading