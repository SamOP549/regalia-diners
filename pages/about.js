import React from 'react'
import Jumbotron from '../components/Jumbotron'
import Image from 'next/image'
import aboutimg from '../public/about.jpg'
import Head from 'next/head';

const About = () => {
  return (
    <div>
      <Head>
        <title>About Regalia Diners</title>
      </Head>
      <Jumbotron title='About' bg='/Jumbotrons/about.jpg' />
      <div className="container my-24 px-6 mx-auto">
        <section data-aos="fade-up" className="mb-32 text-gray-800">
            <div className="flex flex-wrap items-center">
              <div className="hidden lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
                <Image quality="90" priority src={aboutimg}
                  className="w-full" alt="about" />
              </div>
              <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                <div className="px-6 py-12 md:px-12">
                  <h2 className="sm:text-3xl text-2xl font-bold mb-4">How Regalia Diners Came To Be?</h2>
                  <p className="text-gray-500 mb-6 sm:text-xl text-sm">
                    The roots of Regalia Diners can be contracted to old Lucknow traditions delivering our services in different sectors of event management such as corporate events, universities, weddings, and railway. Food is something we live, eat, sleep and repeat. As they normally say in India people cannot avoid Weddings and soon, we were found in this trap too. Visiting so many weddings we came across 2 things first, if family or family members are put behind the arrangements of the wedding they are deprived of joyous, blissful, overwhelming, and emotion-rich happening in life, and secondly, if the arrangements are handed to planners, they need not have the same connection with the happening as you share and often it has been observed through the lack lustre weddings. Visiting over a century of weddings and observing the missing zing, especially in the food and décor department kind of led to Regalia Diners.
                  </p>
                  <p className="text-gray-500 mb-6 sm:text-xl text-sm">
                    Regalia Diners team is an assorted team with varied individuals ranging from a few ambitious lads to our fathers and forefathers who have lived planning, wedding, and food services inside out, from elite graduates from reputed hotel management colleges to experienced and qualified event planners who have worked across India, from stylists who have worked for Bollywood projects to a bunch of photographers who knows exactly how the moment has to be captured.
                  </p>
                  <p className="text-gray-500 mb-6 sm:text-xl text-sm">
                    Regalia Diners was formed to bridge the gap between the customer and the planners so that their dream and vision for a wedding can be brought to reality. There are zillions of planners out there but for us, it is just not another wedding, we understand the emotional connection you have with happening, and on our part, we try our best just to see a smile on your face because at the end
                  </p>
                  <p className="text-gray-500 sm:text-xl text-sm">
                    …………….it's all that matters.
                  </p>
                </div>
              </div>
            </div>
        </section>
      </div>
    </div>
  )
}

export default About
