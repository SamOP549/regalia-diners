import React from 'react'
import Image from 'next/dist/client/image'
import Link from 'next/link'
import weddingWire from '../public/Social/weddingwire.png'
import wedlogo from '../public/Social/wedlogo.png'

const Footer = ({ pathname }) => {
    return (
        <div>
            {
                pathname != '/services/catering' &&
                <div className='book-btn-container flex items-center justify-center mb-10 mt-10'>
                    <a href='https://api.whatsapp.com/send?phone=+918874247420&text=Hi, I would like to enquire and get quote for my event.' rel="noopener noreferrer" target='_blank'><button className='book-btn'><span className="text"><h4>Get Quote!</h4></span><span><h4>Thanks!</h4></span></button></a>
                </div>
            }
            <footer className="text-white body-font bg-black">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-center md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-center typewriter">
                        <Link rel="preload" href='/' className="flex title-font font-medium items-center  justify-center">
                            <Image quality="90" loading="lazy" src='/regalia-logo.png' width="150" height="134" alt="footerLogo" />
                        </Link>
                        <h4 style={{ color: "#DAA520" }} className="mt-2 text-lg text-white">...where feast begins</h4>
                    </div>
                    <div className="flex-grow flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-3 text-center">
                            <h2 className="title-font text-white tracking-widest sm:text-lg text-md mb-3">LINKS</h2>
                            <ul className="list-none mb-10">
                            
                                <li>
                                    <Link rel="preload" href='/services/catering' className="text-white"><p className='cursor-pointer sm:text-lg text-md'>Menu</p></Link>
                                </li>
                                <li>
                                    <Link rel="preload" href='/services' className="text-white"><p className='cursor-pointer sm:text-lg text-md'>Services</p></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-3 text-center">
                            <h2 className="title-font text-white tracking-widest sm:text-lg text-md mb-3">CONTACT</h2>
                            <ul className="list-none mb-10">
                                <li>
                                    <Link rel="preload" href="tel: +918874247420" className="text-white"><p className='cursor-pointer sm:text-lg text-md'>+91 8874247420</p></Link>
                                </li>
                                <li>
                                    <Link rel="preload" href="mailto: regaliadiners@gmail.com" className="text-white"><p className='cursor-pointer sm:text-lg text-md'>regaliadiners@gmail.com</p></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-3 text-center">
                            <h2 className="title-font text-white tracking-widest sm:text-lg text-md mb-3">TIMINGS</h2>
                            <div className="mb-10">
                                <p className="text-white sm:text-lg text-md">Monday - Sunday</p>
                                <p className="text-white sm:text-lg text-md">9 am - 9 pm</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-3 text-center">
                            <h2 className="title-font text-white tracking-widest sm:text-lg text-md mb-3">LOCATION</h2>
                            <div className="mb-10">
                                <p className="text-white sm:text-lg text-md">E3/7, Awas Vikas Yojna, IIM Road, Lucknow-226101.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-zinc-900">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row icons-tray">
                        <p className="text-gray-400 sm:text-md text-sm text-center sm:text-left">© 2005-2022 Regalia Diners. All Rights Reserved. Made with ❤️ by
                            <a href="mailto: jainsamarth549@gmail.com" rel="noopener noreferrer" style={{ color: "#DAA520" }} className="ml-1" target="_blank">Samarth Jain.</a>
                        </p>
                        <span className="flex space-x-3 sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start icons-tray">
                            <a className='hover:scale-125' href='https://www.facebook.com/regaliadiners/' target='_blank' rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: "6px" }} viewBox="0 0 48 48" width="48px" height="48px"><path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z" /><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z" /></svg></a>
                            <a className='hover:scale-125' href='https://www.instagram.com/regaliadiners/' target='_blank' rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: "6px" }} viewBox="0 0 48 48" width="48px" height="48px"><radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fd5" /><stop offset=".328" stopColor="#ff543f" /><stop offset=".348" stopColor="#fc5245" /><stop offset=".504" stopColor="#e64771" /><stop offset=".643" stopColor="#d53e91" /><stop offset=".761" stopColor="#cc39a4" /><stop offset=".841" stopColor="#c837ab" /></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z" /><radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4168c9" /><stop offset=".999" stopColor="#4168c9" stopOpacity="0" /></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z" /><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z" /><circle cx="31.5" cy="16.5" r="1.5" fill="#fff" /><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z" /></svg></a>
                            <a className='hover:scale-125' href='mailto: regaliadiners@gmail.com' target='_blank' rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: "6px" }} viewBox="0 0 48 48" width="48px" height="48px"><path fill="#1e88e5" d="M34,42H14c-4.411,0-8-3.589-8-8V14c0-4.411,3.589-8,8-8h20c4.411,0,8,3.589,8,8v20 C42,38.411,38.411,42,34,42z" /><path fill="#fff" d="M35.926,17.488L29.414,24l6.511,6.511C35.969,30.347,36,30.178,36,30V18 C36,17.822,35.969,17.653,35.926,17.488z M26.688,23.899l7.824-7.825C34.347,16.031,34.178,16,34,16H14 c-0.178,0-0.347,0.031-0.512,0.074l7.824,7.825C22.795,25.38,25.205,25.38,26.688,23.899z M24,27.009 c-1.44,0-2.873-0.542-3.99-1.605l-6.522,6.522C13.653,31.969,13.822,32,14,32h20c0.178,0,0.347-0.031,0.512-0.074l-6.522-6.522 C26.873,26.467,25.44,27.009,24,27.009z M12.074,17.488C12.031,17.653,12,17.822,12,18v12c0,0.178,0.031,0.347,0.074,0.512 L18.586,24L12.074,17.488z" /></svg></a>
                            <a className='hover:scale-125' href='https://www.weddingwire.in/caterers/regalia-diners--e402421' target='_blank' rel="noopener noreferrer"><Image quality="90" loading="lazy" height={39} width={39} className='weddingwire' src={weddingWire} alt='social icon' /></a>
                            <a className='hover:scale-125' href='https://www.wedmegood.com/profile/regalia-diners-2844142' target='_blank' rel="noopener noreferrer"><Image quality="90" loading="lazy" height={39} width={50} className='wedmegood' src={wedlogo} alt='social icon' /></a>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer