'use client'
import emptycart from "@/images/emptyCart.png"
import Image from "next/image"
import { easeInOut, motion } from 'motion/react'
const EmptyCart = () => {
    return (
        <div className="py-10 md:py-20 bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 20 }} transition={{ duration: 0.5 }} className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full space-y-8">
                <motion.div animate={{ scale: [1, 1, 1, 1], rotate: [0, 5, -5, 0] }} transition={{ repeat: Infinity, duration: 5, ease: easeInOut }}>
                    <Image src={emptycart} alt="emptycart" />
                </motion.div>
            </motion.div>
        </div>

    )
}

export default EmptyCart