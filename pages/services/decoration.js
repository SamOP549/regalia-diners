import React , { useState } from 'react'
import Jumbotron from '../../components/Jumbotron'
import Image from 'next/image'
import Head from 'next/head'
import wedding1 from '../../public/Wedding/1.jpeg'
import wedding2 from '../../public/Wedding/2.jpeg'
import wedding3 from '../../public/Wedding/3.jpeg'
import wedding4 from '../../public/Wedding/4.jpeg'
import wedding5 from '../../public/Wedding/51.jpeg'
import wedding6 from '../../public/Wedding/6.jpg'
import haldi1 from '../../public/Haldi/1.jpg'
import haldi2 from '../../public/Haldi/2.jpg'
import haldi3 from '../../public/Haldi/3.jpg'
import haldi4 from '../../public/Haldi/4.jpeg'
import haldi5 from '../../public/Haldi/5.jpeg'
import haldi6 from '../../public/Haldi/6.jpg'
import mehndi1 from '../../public/Mehndi/1.jpg'
import mehndi2 from '../../public/Mehndi/2.jpg'
import mehndi3 from '../../public/Mehndi/3.jpg'
import mehndi4 from '../../public/Mehndi/41.jpg'
import mehndi5 from '../../public/Mehndi/5.jpg'
import mehndi6 from '../../public/Mehndi/6.jpg'
import sangeet1 from '../../public/Sangeet/1.jpg'
import sangeet2 from '../../public/Sangeet/2.jpg'
import sangeet3 from '../../public/Sangeet/3.jpg'
import sangeet4 from '../../public/Sangeet/4.jpg'
import sangeet5 from '../../public/Sangeet/5.jpg'
import sangeet6 from '../../public/Sangeet/6.png'
import engagement1 from '../../public/Engagement/1.jpeg'
import engagement2 from '../../public/Engagement/2.jpeg'
import engagement3 from '../../public/Engagement/3.jpeg'
import engagement4 from '../../public/Engagement/4.jpeg'
import engagement5 from '../../public/Engagement/5.jpeg'
import engagement6 from '../../public/Engagement/6.jpeg'
import Modal from '../../components/Modal'

const Decoration = () => {

    const decor = [
        {
            "title": "Wedding",
            "description": "The typical tradition in which a couple obeys all the customs to be with each other. For us, wedding is something which is felt from within and stays forever in your heart. The essence, vibe and all the positive energies combine to form a wedding.",
            "description2": "The Purity of Wedding can be seen in couples throughout there life.",
            "description3": "We help you to create memories that turn into lifetime.",
            "Image1Src": wedding1,
            "Image2Src": wedding2,
            "Image3Src": wedding3,
            "Image4Src": wedding4,
            "Image5Src": wedding5,
            "Image6Src": wedding6,
            "Image1Alt": "Wedding Decoration Image 1",
            "Image2Alt": "Wedding Decoration Image 2",
            "Image3Alt": "Wedding Decoration Image 3",
            "Image4Alt": "Wedding Decoration Image 4",
            "Image5Alt": "Wedding Decoration Image 5",
            "Image6Alt": "Wedding Decoration Image 6"
        },
        {
            "title": "Engagement",
            "description": "The mutual promise of two people to marry, is called an engagement. With an engagement, the couple testifies to their desire to marry.",
            "description2": "Getting engaged is an official announcement of the intention to marry. With the acceptance of the marriage proposal, both partners express their will to marry each other.",
            "Image1Src": engagement1,
            "Image2Src": engagement2,
            "Image3Src": engagement3,
            "Image4Src": engagement4,
            "Image5Src": engagement5,
            "Image6Src": engagement6,
            "Image1Alt": "Engagement Decoration Image 1",
            "Image2Alt": "Engagement Decoration Image 2",
            "Image3Alt": "Engagement Decoration Image 3",
            "Image4Alt": "Engagement Decoration Image 4",
            "Image5Alt": "Engagement Decoration Image 5",
            "Image6Alt": "Engagement Decoration Image 6"
        },
        {
            "title": "Sangeet",
            "description": "The Sangeet is unique because it is where the party starts. Sangeet is not considered a religious pre-wedding ceremony. Instead, it is an avenue to partake in the joy and happiness surrounding the couple.",
            "Image1Src": sangeet1,
            "Image2Src": sangeet2,
            "Image3Src": sangeet3,
            "Image4Src": sangeet4,
            "Image5Src": sangeet5,
            "Image6Src": sangeet6,
            "Image1Alt": "Sangeet Decoration Image 1",
            "Image2Alt": "Sangeet Decoration Image 2",
            "Image3Alt": "Sangeet Decoration Image 3",
            "Image4Alt": "Sangeet Decoration Image 4",
            "Image5Alt": "Sangeet Decoration Image 5",
            "Image6Alt": "Sangeet Decoration Image 6"
        },
        {
            "title": "Haldi",
            "description": "Warmed to the very core with the color of sunshine, a Haldi ceremony is one tradition of many that brings a unique feel to an Indian wedding. It is a time of cleansing where the bride and groom's families join the individuals at their respective homes to help prepare for the big wedding day.",
            "Image1Src": haldi3,
            "Image2Src": haldi2,
            "Image3Src": haldi6,
            "Image4Src": haldi4,
            "Image5Src": haldi5,
            "Image6Src": haldi1,
            "Image1Alt": "Haldi Decoration Image 1",
            "Image2Alt": "Haldi Decoration Image 2",
            "Image3Alt": "Haldi Decoration Image 3",
            "Image4Alt": "Haldi Decoration Image 4",
            "Image5Alt": "Haldi Decoration Image 5",
            "Image6Alt": "Haldi Decoration Image 6"
        },
        {
            "title": "Mehndi",
            "description": "For thousands of years, Mehndi has been used as a form of body art. This is why the Mehndi party is often held the day before the wedding—to beautify and bless the bride before their big day. In the Hindu tradition, mehndi is part of the Solah Shringar, or sixteen bridal adornments, which is a ritual for the beautification of the bride from head to toe at the time of their wedding.",
            "Image1Src": mehndi3,
            "Image2Src": mehndi4,
            "Image3Src": mehndi1,
            "Image4Src": mehndi2,
            "Image5Src": mehndi5,
            "Image6Src": mehndi6,
            "Image1Alt": "Mehndi Decoration Image 1",
            "Image2Alt": "Mehndi Decoration Image 2",
            "Image3Alt": "Mehndi Decoration Image 3",
            "Image4Alt": "Mehndi Decoration Image 4",
            "Image5Alt": "Mehndi Decoration Image 5",
            "Image6Alt": "Mehndi Decoration Image 6"
        }
    ]

    const [imageSrc, setImageSrc] = useState('')
    const [imageAlt, setImageAlt] = useState('')
    const [visible, setVisible] = useState(false)

    const showModal = (e) => {
        setImageAlt(e.target.alt)
        setImageSrc(e.target.src)
        setVisible(true)
    }

    const closeModal = () => {
        setVisible(false)
    }

    return (
        <div>
            <Head>
                <title>Decoration Services - Regalia Diners</title>
            </Head>
            <Jumbotron title='Decoration' bg='/Services/decor-cover.jpg' />
            {decor.map((event, index) => {
                return (<section className="text-gray-600 body-font" key={index}>
                    <div className="container lg:pt-12 lg:px-12 px-2 py-2 mt-12 mx-auto flex flex-wrap">
                        <div className="flex w-full mb-12 flex-wrap items-center">
                            <h1 className="sm:text-5xl text-3xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">{event.title}</h1>
                            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed sm:text-xl text-sm">
                                {event.description}{event.title === "Wedding" || event.title === "Engagement" ? <br /> : ""}
                                {event.description2}{event.title === "Wedding" ? <br /> : ""}
                                {event.description3}
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1">
                            <div className="flex flex-wrap w-full">
                                <div className="md:p-2 p-1 cursor-pointer w-1/2">
                                    <Image quality="90" loading="lazy" onClick={showModal} alt={event.Image3Alt} className="w-full object-cover h-full object-center block rounded-lg" src={event.Image3Src} />
                                </div>
                                <div className="md:p-2 p-1 cursor-pointer w-1/2">
                                    <Image quality="90" loading="lazy" onClick={showModal} alt={event.Image2Alt} className="w-full object-cover h-full object-center block rounded-lg" src={event.Image2Src} />
                                </div>
                                <div className="md:p-2 p-1 cursor-pointer w-full">
                                    <Image quality="90" loading="lazy" onClick={showModal} alt={event.Image1Alt} className="w-full h-full object-cover object-center block rounded-lg" src={event.Image1Src} />
                                </div>
                            </div>
                            <div className="flex flex-wrap w-full">
                                <div className="md:p-2 p-1 cursor-pointer w-full">
                                    <Image quality="90" loading="lazy" onClick={showModal} alt={event.Image4Alt} className="w-full h-full object-cover object-center block rounded-lg" src={event.Image4Src} />
                                </div>
                                <div className="md:p-2 p-1 cursor-pointer w-1/2">
                                    <Image quality="90" loading="lazy" onClick={showModal} alt={event.Image5Alt} className="w-full object-cover h-full object-center block rounded-lg" src={event.Image5Src} />
                                </div>
                                <div className="md:p-2 p-1 cursor-pointer w-1/2">
                                    <Image quality="90" loading="lazy" onClick={showModal} alt={event.Image6Alt} className="w-full object-cover h-full object-center block rounded-lg" src={event.Image6Src} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>)
            })
            }
            <Modal imageSrc={imageSrc} visible={visible} closeModal={closeModal} imageAlt={imageAlt} />
        </div>
    )
}

export default Decoration
