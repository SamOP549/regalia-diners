import React, { useState } from 'react'
import Jumbotron from '../../components/Jumbotron'
import Image from 'next/image'
import Head from 'next/head'
import pw1 from '../../public/Makeup/PreWedding/1.jpg'
import pw2 from '../../public/Makeup/PreWedding/2.jpg'
import pw3 from '../../public/Makeup/PreWedding/3.jpg'
import party1 from '../../public/Makeup/Party/1.jpg'
import party2 from '../../public/Makeup/Party/2.jpg'
import party3 from '../../public/Makeup/Party/3.jpg'
import wedd1 from '../../public/Makeup/Wedding/1.jpg'
import wedd2 from '../../public/Makeup/Wedding/2.jpg'
import wedd3 from '../../public/Makeup/Wedding/3.jpg'
import engagement1 from '../../public/Makeup/Engagement/1.jpg'
import engagement2 from '../../public/Makeup/Engagement/2.jpg'
import engagement3 from '../../public/Makeup/Engagement/3.png'
import Modal from '../../components/Modal'

const Makeup = () => {
  const makeup = [
    {
      "title": "Wedding",
      "description": "It is an old saying that a lady looks the most beautiful on her wedding day. We aim to do just the same for you! We make you exude confidence and beauty on your special day.",
      "description2": "Be it natural makeup, smokey eye look or pink flushed look, we try and provide your dream look using our top quality skincare and makeup products. We take every minute detail into consideration such as your wedding outfit, your accessories, jewellery and your thoughts about your wedding makeup etc.",
      "img1Src": wedd1,
      "img2Src": wedd2,
      "img3Src": wedd3,
      "img1Alt": "Wedding Makeup Image 1",
      "img2Alt": "Wedding Makeup Image 1",
      "img3Alt": "Wedding Makeup Image 1"
    },
    {
      "title": "Engagement",
      "description": "Engagement makeup is as important as the bridal makeup itself. The bride needs to feel and therefore look like the most ravishing lady on the floor.",
      "description2": "Engagement makeups are neither as mild as party makeups nor as hefty as bridal makeup.",
      "description3": "Picking the perfect makeup and hairstyle for your outfit is very important and we make sure you do the same.",
      "img1Src": engagement1,
      "img2Src": engagement2,
      "img3Src": engagement3,
      "img1Alt": "Engagement Makeup Image 1",
      "img2Alt": "Engagement Makeup Image 1",
      "img3Alt": "Engagement Makeup Image 1"
    },
    {
      "title": "Pre-Wedding",
      "description": "Pre wedding shoots is a vital trend followed by the couples. We believe that professionally done makeup has become as crucial to the pre-wedding shoot as it has been for the big day. Here are a few reasons why a professional makeup artist is required to do the job:",
      "description2": "• To get the look right matching with different outfits. ",
      "description3": "• On the go touch ups and look changes. ",
      "description4": "• Handling the weather changes and handling makeup problems.",
      "description5": "• Makeup stays in place even after long hours and providing all the moral support.",
      "img1Src": pw1,
      "img2Src": pw2,
      "img3Src": pw3,
      "img1Alt": "Pre-Wedding Makeup Image 1",
      "img2Alt": "Pre-Wedding Makeup Image 1",
      "img3Alt": "Pre-Wedding Makeup Image 1"
    },
    {
      "title": "Party",
      "description": "Whether it's a relative's function or a friend's wedding, no matter you're a guest or a bridesmaid, to look stunning is the only option! Get yourself the best hairdos and party makeup and capture all the limelight. All eyes on you won't be a myth anymore, also you can choose amongst various options of hairstyling and different creative looks.",
      "img1Src": party1,
      "img2Src": party2,
      "img3Src": party3,
      "img1Alt": "Party Makeup Image 1",
      "img2Alt": "Party Makeup Image 1",
      "img3Alt": "Party Makeup Image 1"
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
        <title>Makeup Services - Regalia Events</title>
      </Head>
      <Jumbotron title='Makeup' bg='/Services/makeup-cover.jpg' />
      {
        makeup.map((type, index) => {
          return (
            <section className="overflow-hidden text-gray-700 " key={index}>
              <div className="container px-2 py-2 mx-auto lg:pt-12 lg:px-12">
                <div className="flex w-full mb-12 mt-12 flex-wrap items-center">
                  <h1 className="sm:text-5xl text-3xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">{type.title}</h1>
                  <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed sm:text-xl text-sm">
                    {type.description}{type.title === "Wedding" || type.title === "Engagement" || type.title === "Pre-Wedding" ? <br /> : ""}
                    {type.description2}{type.title === "Engagement" || type.title === "Pre-Wedding" ? <br /> : ""}
                    {type.description3}{type.title === "Pre-Wedding" ? <br /> : ""}
                    {type.description4}{type.title === "Pre-Wedding" ? <br /> : ""}
                    {type.description5}
                  </p>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 -m-1 md:-m-2">
                  <div className="flex flex-wrap w-full">
                    <div className="w-full p-1 md:p-2">
                      <Image onClick={showModal} alt={type.img1Alt} className="block object-cover object-center w-full h-full rounded-lg"
                        src={type.img1Src} />
                    </div>
                  </div>
                  <div className="flex flex-wrap w-full">
                    <div className="w-full p-1 md:p-2">
                      <Image onClick={showModal} alt={type.img2Alt} className="block object-cover object-center w-full h-full rounded-lg"
                        src={type.img2Src} />
                    </div>
                  </div>
                  <div className="flex flex-wrap w-full">
                    <div className="w-full p-1 md:p-2">
                      <Image onClick={showModal} alt={type.img3Alt} className="block object-cover object-center w-full h-full rounded-lg"
                        src={type.img3Src} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        })
      }
      <Modal imageSrc={imageSrc} visible={visible} closeModal={closeModal} imageAlt={imageAlt} />
    </div>
  )
}

export default Makeup
