import React from 'react'
import Jumbotron from '../../../components/Jumbotron';
import Link from 'next/link'
import Head from 'next/head';
import Slide from 'react-reveal/Slide';
import Pulse from 'react-reveal/Pulse';
import Roll from 'react-reveal/Roll';


const Menu = () => {
    const mostOrdered = [
        {
            key: 1,
            name: "Bronze",
            desc: "Keeping it short, keeping it crisp. Budget friendly menu with  selected dishes. Ideal for events like Birthdays and Small Parties.",
            url: "/Menus/Bronze.pdf",
            bg: "#E3AF66"
        },
        {
            key: 2,
            name: "Silver",
            desc: "Going a notch higher, a menu meeting both budget and variety. Ideal for events like Haldi, Mehndi and Tilak.",
            url: "/Menus/Silver.pdf",
            bg: "#C0C0C0"
        },
        {
            key: 3,
            name: "Gold",
            desc: "As the name suggest, Gold in every aspect. Full of varieties and taste. Ideal for Small Wedding, Engagement, Sangeet etc.",
            url: "/Menus/Gold.pdf",
            bg: "#D4AF37"
        },
        {
            key: 4,
            name: "Platinum",
            desc: "Heavily loaded with lip smacking starters, royal main course and blissful desserts, it's got all. Ideal for Weddings and Engagements with large gathering.",
            url: "/Menus/Platinum.pdf",
            bg: "#d8d8d8"
        }
    ]
    return (
        <div>
            <Head>
                <title>Catering Service - Regalia Diners</title>
            </Head>
            <Jumbotron title='Catering' bg="/Jumbotrons/menu.jpeg" />

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-20 mx-auto">
                    <h1 className="title-font sm:text-5xl text-3xl mb-8 font-medium text-gray-900 text-center">Most Ordered</h1>
                    <div className="flex flex-wrap -m-4">
                        {
                            mostOrdered.map((menu, index) => {
                                return (
                                    <Pulse key={menu.key}>
                                        <div className="xl:w-1/4 md:w-1/2">
                                            <div className="p-6 rounded-lg">
                                                <div className="flex justify-center">
                                                    <div className="bg-white max-w-sm">
                                                        <div style={{ backgroundColor: `${menu.bg}` }} className="p-6 card rounded-lg">
                                                            <h5 className="text-gray-900 sm:text-2xl text-xl font-medium mb-2">{menu.name}</h5>
                                                            <p className="text-gray-700 sm:text-lg text-sm mb-4 lg:h-40 md:h-28">
                                                                {menu.desc}
                                                            </p>
                                                            <Link href={menu.url} ><a target='_blank' rel="noopener noreferrer" >
                                                                <button className="viewmenu-btn">
                                                                    <p>View</p>
                                                                </button>
                                                            </a></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Pulse>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <div className='book-btn-container flex items-center justify-center mb-10 mt-10'>
                <a href='https://api.whatsapp.com/send?phone=+918874247420&text=Hi, I would like to enquire and get quote for my event.' rel="noopener noreferrer" target='_blank'><button className='book-btn'><span className="text"><h4>Get Quote!</h4></span><span><h4>Thanks!</h4></span></button></a>
            </div>
            <Roll left>
                <div className="flex items-center justify-center mx-auto px-4 py-16 text-justify">
                    <h1 className="title-font md:text-5xl sm:text-4xl text-3xl mb-4 text-gray-900 text-center decorate">Not satisfied with the above menu?</h1>
                </div>
            </Roll>
            <Slide bottom>
                <section className="text-gray-600 body-font mb-20">
                    <div className="container mx-auto flex px-5 items-center justify-center flex-col">
                        <div className="text-center lg:w-2/3 w-full mt-20">
                            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900">Customize it youself</h1>
                            <div className="flex justify-center">
                                <Link href="/services/catering/custom">
                                    <button className="learn-more">
                                        <span className="circle" aria-hidden="true">
                                            <span className="icon arrow"></span>
                                        </span>
                                        <span className="button-text"><p>Customize</p></span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </Slide>
        </div>
    )
}

export default Menu