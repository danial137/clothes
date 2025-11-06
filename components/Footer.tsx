import React from 'react'
import Container from './Container'
import FooterTop from './FooterTop'
import Logo from './Logo'
import SocialMedia from './SocialMedia'

const Footer = () => {
  return (
    <footer className='bg-white border-t'>
      <Container>
        <FooterTop />
        <div className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 '>
          <div className='space-y-4'>
            <Logo className='text-gray-600 text-sm'>Tulos</Logo>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos id et maxime similique culpa odio repudiandae</p>
            <SocialMedia className='text-darkColor/60' iconClassName='border-darkColor/60 hover:border-darkColor hover:text-darkColor' tooltipClassName='bg-darkColor text-white' />
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer