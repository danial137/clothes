"use client"
import Loading from '@/components/Loading'
import useCartStore from '@/store'
import { useUser, useAuth } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'


const CartPage = () => {
  const [isClient, setIsClient] = useState(false)
  const { isSignedIn } = useAuth()
  const { deleteCartProduct, getTotalPrice, getItemCount, getSubtotalPrice, resetCart } = useCartStore()
  const user = useUser()
  useEffect(() => {
    setIsClient(true)
  }, [])
  if (!isClient) {
    return <Loading />
  }
  return (
    <div>{isSignedIn}</div>
  )
}

export default CartPage