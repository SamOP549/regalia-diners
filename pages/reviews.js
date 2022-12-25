import React from 'react'
import Jumbotron from '../components/Jumbotron'
import Image from 'next/image'
import Head from 'next/head'
import ts1 from '../public/Testimonials/testi01.webp'
import ts2 from '../public/Testimonials/testi02.webp'
import ts3 from '../public/Testimonials/testi03.webp'
import ts4 from '../public/Testimonials/testi04.png'
import ts5 from '../public/Testimonials/testi05.png'
import ts6 from '../public/Testimonials/testi06.png'
import Slide from 'react-reveal/Slide';

const Reviews = () => {
  const testimonials = [
    [{
      name: "Om Gupta",
      review: "The services and the quality provided by the Team of Ansh and Riya is undoubtedly amazing. To make you special day more special and to keep the Fufajis happy with the lip smacking food, one must go for the Regalia Events and they won't leave a single stone unturned to amaze you with their service !!",
      imgSrc: ts1,
      imgAlt: "Om's Testimonial"
    },
    {
      name: "Mithlesh S.",
      review: "You don't have to think twice before booking them..they are too good in there work .. Kudos to the team ✌🏼",
      imgSrc: ts2,
      imgAlt: "Mithlesh's Testimonial"
    },
    {
      name: "Shruti",
      review: "I would want to thank the team. The food was delicious and the service you provide is outstanding. Thank you for providing a delicious meal.",
      imgSrc: ts3,
      imgAlt: "Shruti's Testimonial"
    }
    ],
    [
      {
        name: "Sumit K.",
        review: "They serve you Yummiest Food! The services start well in time👍🏻 The spread is Beautiful. They are flexible enough to Rock along. I would strongly Recommend Ansh & Riya for your any kinda Catering Needs🤩 They are Perfectly Priced too",
        imgSrc: ts4,
        imgAlt: "Sumit's Testimonial"
      },
      {
        name: "Rashmi",
        review: "My family had a great time eating delicious food at their services for my daughter's wedding. Their staff were committed to great services and very friendly, and more importantly every food and drink on their menu tasted great.",
        imgSrc: ts5,
        imgAlt: "Rashmi's Testimonial"
      },
      {
        name: "Urvashi S.",
        review: "It was my brother’s wedding and I really loved der way of dealing its customers. High quality food and excellent services.",
        imgSrc: ts6,
        imgAlt: "Urvashi's Testimonial"
      }
    ]
  ]
  return (
    <div>
      <Head>
        <title>Customer Reviews - Regalia Events</title>
      </Head>
      <Jumbotron title='Reviews' bg='/Jumbotrons/reviews.jpg' />
      <section className="text-gray-600 body-font mt-24">
        <h1 className="sm:text-5xl text-3xl font-medium text-center title-font text-gray-900 mb-4">What Others Think About Us</h1>
        <div className="container px-5 py-12 mx-auto">
          {
            testimonials.map((data, index) => {
              return (
                <Slide key={index} bottom cascade>
                  <div className="flex flex-wrap -m-4 sm:mb-8">
                    {
                      data.map((testimonial, index) => {
                        return (
                          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4" key={index}>
                            <div className="h-full text-center">
                              <Image width={80} height={80} alt={testimonial.imgAlt} className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={testimonial.imgSrc} />
                              <p className="leading-relaxed sm:text-lg text-sm">{testimonial.review}</p>
                              <span style={{ backgroundColor: "#DAA520" }} className="inline-block h-1 w-10 rounded mt-6 mb-4"></span>
                              <h2 className="text-gray-900 font-medium title-font tracking-wider sm:text-xl text-lg">{testimonial.name}</h2>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </Slide>
              )
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Reviews
