import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTelephoneFill, BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='max-padd-container mt-10'>
        <div className='max-padd-container bg-black text-white py-10 rounded-tr-3xl rounded-tl-3xl'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
                {/* Logo */}
            <div>
                <Link to='/'>
                <h4 className='bold-24 text-secondary'>Shoppire</h4>
                </Link>
            <p className='text-white mt-5'>
               Crafted with care and dedication. Brining quality and style right to your doorstep. Your satisfaction is our promise!
                </p>    
            </div>
            {/* Quick Links */}
            <div className=''>
                <h4 className='h4 mb-4'>Quick Links</h4>
             <ul className='space-y-2 regular-15'>
                <li className='text-gray-10'>
                    <a href='/about'>About Us</a>
                </li>
                <li className='text-gray-10'>
                    <a href='/properties'>products</a>
                </li>
                <li className='text-gray-10'>
                    <a href='/services'>Services</a>
                </li>
                <li className='text-gray-10'>
                    <a href='/contact'>Contact</a>
                </li>
                <li className='text-gray-10'>
                    <a href='/privacy-policy'>Privacy Policy</a>
                </li>
                </ul>    
            </div>
            {/* Contact Info */}
            <div>
                <h4 className='h4 mb-4'>Contact Us</h4>
                <p className='text-gray-10 mb-2'>
                   <BsTelephoneFill className='inline-block mr-2'/> +1 (123) 456-7890 
                </p>
                <p className='text-gray-10 mb-2'>
                   <BsTelephoneFill className='inline-block mr-2'/> 
                   {" "} support@shoppire.com
                </p>
                <p className='text-gray-10 mb-2'>
                   <BsTelephoneFill className='inline-block mr-2'/> 123 shoppire, Suit 100, New York , NY
                </p>
            </div>
            {/* Social media Links */}
            <div>
                <h4 className='h4 mb-4'>Follow Us</h4>
             <div className='flex space-x-4 text-secondary'>
                <a href='#'>
                    <BsFacebook />
                </a>
                <a href='#'>
                    <BsTwitter />
                </a>
                <a href='#'>
                    <BsInstagram />
                </a>
                <a href='#'>
                    <BsLinkedin />
                </a>
                </div>   
            </div>
            </div>
            <div className='mt-10 text-center text-gray-100'>
                <p>
                    Powerd by <a href='#'>shoppire Team</a>
                </p>
            </div>
        </div>
      
    </footer>
  )
}

export default Footer
