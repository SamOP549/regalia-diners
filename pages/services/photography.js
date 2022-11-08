import React, { useState } from 'react'
import Jumbotron from '../../components/Jumbotron'
import Image from 'next/image'
import Head from 'next/head'
import p1 from '../../public/Photography/1.jpeg'
import p2 from '../../public/Photography/2.jpeg'
import p3 from '../../public/Photography/3.jpeg'
import p4 from '../../public/Photography/4.jpeg'
import p5 from '../../public/Photography/5.jpeg'
import p6 from '../../public/Photography/6.jpeg'
import p7 from '../../public/Photography/7.jpeg'
import p8 from '../../public/Photography/8.jpeg'
import p9 from '../../public/Photography/9.jpeg'
import p10 from '../../public/Photography/10.jpeg'
import p11 from '../../public/Photography/11.jpeg'
import p12 from '../../public/Photography/12.jpeg'
import p13 from '../../public/Photography/13.jpeg'
import p14 from '../../public/Photography/14.jpeg'
import p15 from '../../public/Photography/15.jpeg'
import p16 from '../../public/Photography/16.jpeg'
import p17 from '../../public/Photography/17.jpeg'
import p18 from '../../public/Photography/18.jpeg'
import p19 from '../../public/Photography/19.jpeg'
import p20 from '../../public/Photography/20.jpeg'
import p21 from '../../public/Photography/21.jpeg'
import p22 from '../../public/Photography/22.jpeg'
import p23 from '../../public/Photography/23.jpeg'
import p24 from '../../public/Photography/24.jpeg'
import p25 from '../../public/Photography/25.jpeg'
import p26 from '../../public/Photography/26.jpeg'
import p27 from '../../public/Photography/27.jpeg'
import p28 from '../../public/Photography/28.jpeg'
import p29 from '../../public/Photography/29.jpeg'
import p30 from '../../public/Photography/30.jpeg'
import Modal from '../../components/Modal'



const Photography = () => {

  const photos = [
    {
      "img1Src": p1,
      "img2Src": p2,
      "img3Src": p3,
      "img4Src": p4,
      "img5Src": p12,
      "img6Src": p6,
      "img1Alt": "Photography Image 1",
      "img2Alt": "Photography Image 2",
      "img3Alt": "Photography Image 3",
      "img4Alt": "Photography Image 4",
      "img5Alt": "Photography Image 5",
      "img6Alt": "Photography Image 6"
    },
    {
      "img1Src": p7,
      "img2Src": p8,
      "img3Src": p9,
      "img4Src": p10,
      "img5Src": p11,
      "img6Src": p5,
      "img1Alt": "Photography Image 1",
      "img2Alt": "Photography Image 2",
      "img3Alt": "Photography Image 3",
      "img4Alt": "Photography Image 4",
      "img5Alt": "Photography Image 5",
      "img6Alt": "Photography Image 6"
    },
    {
      "img1Src": p13,
      "img2Src": p14,
      "img3Src": p15,
      "img4Src": p16,
      "img5Src": p17,
      "img6Src": p18,
      "img1Alt": "Photography Image 1",
      "img2Alt": "Photography Image 2",
      "img3Alt": "Photography Image 3",
      "img4Alt": "Photography Image 4",
      "img5Alt": "Photography Image 5",
      "img6Alt": "Photography Image 6"
    },
    {
      "img1Src": p19,
      "img2Src": p20,
      "img3Src": p21,
      "img4Src": p22,
      "img5Src": p23,
      "img6Src": p24,
      "img1Alt": "Photography Image 1",
      "img2Alt": "Photography Image 2",
      "img3Alt": "Photography Image 3",
      "img4Alt": "Photography Image 4",
      "img5Alt": "Photography Image 5",
      "img6Alt": "Photography Image 6"
    },
    {
      "img1Src": p25,
      "img2Src": p29,
      "img3Src": p27,
      "img4Src": p28,
      "img5Src": p26,
      "img6Src": p30,
      "img1Alt": "Photography Image 1",
      "img2Alt": "Photography Image 2",
      "img3Alt": "Photography Image 3",
      "img4Alt": "Photography Image 4",
      "img5Alt": "Photography Image 5",
      "img6Alt": "Photography Image 6"
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
        <title>Photography Services - Regalia Diners</title>
      </Head>
      <Jumbotron title='Photography' bg='/Services/photography-cover.jpg' />
      <section className="overflow-hidden text-gray-700 ">
        <div className="container px-2 py-2 mx-auto lg:pt-12 lg:px-12">
          <div className="flex w-full mb-10 mt-10 flex-wrap justify-center">
            <h1 className="sm:text-5xl text-3xl font-medium title-font text-gray-900 lg:mb-0">Our Work</h1>
          </div>
          {
            photos.map((set, index) => {
              return (
                <div className="grid md:grid-cols-2 grid-cols-1" key={index}>
                  <div className="flex flex-wrap w-full">
                    <div className="md:p-2 p-1 w-1/2">
                      <Image onClick={showModal} alt={set.img1Alt} className="w-full rounded-lg object-cover h-full object-center block zoom" src={set.img1Src} />
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                      <Image onClick={showModal} alt={set.img2Alt} className="w-full rounded-lg object-cover h-full object-center block zoom" src={set.img2Src} />
                    </div>
                    <div className="md:p-2 p-1 w-full">
                      <Image onClick={showModal} alt={set.img3Alt} className="w-full rounded-lg h-full object-cover object-center block zoom" src={set.img3Src} />
                    </div>
                  </div>
                  <div className="flex flex-wrap w-full">
                    <div className="md:p-2 p-1 w-full">
                      <Image onClick={showModal} alt={set.img4Alt} className="w-full rounded-lg h-full object-cover object-center block zoom" src={set.img4Src} />
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                      <Image onClick={showModal} alt={set.img5Alt} className="w-full rounded-lg object-cover h-full object-center block zoom" src={set.img5Src} />
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                      <Image onClick={showModal} alt={set.img6Alt} className="w-full rounded-lg object-cover h-full object-center block zoom" src={set.img6Src} />
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </section>
      <Modal imageSrc={imageSrc} visible={visible} closeModal={closeModal} imageAlt={imageAlt} />
    </div>
  )
}

export default Photography
