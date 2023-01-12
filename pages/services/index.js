import React from 'react'
import Jumbotron from '../../components/Jumbotron'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import decor from '../../public/Services/decoration.jpg'
import makeup from '../../public/Services/makeup.webp'
import photography from '../../public/Services/photography.jpeg'
import catering from '../../public/Services/catering.jpg'

const Services = () => {

  const heros = [
    {
      imageSrc: catering,
      imageAlt: "Catering Service",
      title: "Catering",
      btnHref: '/services/catering',
      desc: "Catering is the most important aspect of any event. Your guests, colleagues, contemporaries, friends or executives will have a lasting impression of your event if you satisfy their taste buds. Nobody remembers what songs DJ was playing or which flower were used to welcome them what they do remember is the Food. Catering is something you don't want to take chance with."
    },
    {
      imageSrc: decor,
      imageAlt: "Decoration Service",
      title: "Decoration",
      btnHref: '/services/decoration',
      desc: "Its your day, so you should be the last person to make any adjustments to your design. We provide specific decorations as per the need of our clients. Most of our brides and grooms already have in their mind what they want their day to look like, and we are here to provide it with the designs similar to the most minute details."
    },
    {
      imageSrc: makeup,
      imageAlt: "Makeup Service",
      title: "Makeup",
      btnHref: '/services/makeup',
      desc: "We believe in perfection, makeup is not a layer to hide one's imperfections but to highlight one's features. Your big day is important to us.",
      desc2: "We offer you with best makeup services, transforming your look and making sure that you looking stunning on your big day and throughout the wedding ceremonies. Artist here understands your requirements and provides you with the makeup that goes along well with your look, making sure that you slay  the day!",
      desc3: "Services provided - Our services include makeup on venue for the bride and guests,  hairstyling, draping, men's grooming, nail extensions for all occasions."
    },
    {
      imageSrc: photography,
      imageAlt: "Photography Service",
      title: "Photography",
      btnHref: '/services/photography',
      desc: "Photographs that communicate: Capture those life-cherishing moments with never seen before photography concepts. Make those traditional, candid, bride and groom moments even more rustic, authentic and vivid."
    },
  ]

  return (
    <div>
      <Head>
        <title>Services Provided - Regalia Diners</title>
        <meta name="description" content="The best event planners in Lucknow. We provide complete solutions for wedding, parties home and corporate events. Highly professional staff. We help you throw the best parties ever. Get the quote now!" />
        <meta name='keywords' content='Best wedding planner in Lucknow, Veg Caterers in Lucknow, Book the best event services in Lucknow for indoor, outdoor wedding functions, party, special occasions, corporate events with affordable price. Best rated event manager in Lucknow, Caterer for corporate events, Caterer for wedding, Caterer for birthday party, Caterer for parties, Caterer for house parties, Get quote for wedding planning, Best event planner in Lucknow' />
        <Link rel='canonical' href='https://www.regaliadiners.com' />
        <meta name="robots" content="index, follow" />
      </Head>
      <Jumbotron title='Services' bg='/Jumbotrons/services.jpeg' />

      {
        heros.map((hero, index) => {
          return (
            <section data-aos="fade-up" key={index} className="text-gray-600 body-font">
              <div className={`container mx-auto flex px-8 py-24 ${index % 2 ? "md:flex-row" : "md:flex-row-reverse"} flex-col items-center`}>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0">
                  <Image quality="90" loading="lazy" className="object-cover object-center rounded" src={hero.imageSrc} alt={hero.imageAlt} />
                </div>
                <div className={`lg:flex-grow md:w-1/2 ${index % 2 ? "lg:pl-24 md:pl-16" : "lg:pr-24 md:pr-16"} flex flex-col md:items-start md:text-left items-center text-center`}>
                  <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900">{hero.title}</h1>
                  <p className="mb-8 leading-relaxed sm:text-xl text-sm" id='desc' >
                    {hero.desc}{hero.title === "Makeup" ? <br /> : null}
                    {hero.desc2}{hero.title === "Makeup" ? <br /> : null}
                    {hero.desc3}
                  </p>
                  <div className="flex justify-center">
                    <Link rel="preload" href={hero.btnHref}>
                      <button className="learn-more">
                        <span className="circle" aria-hidden="true">
                          <span className="icon arrow"></span>
                        </span>
                        <span className="button-text"><p>Know More</p></span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )
        })
      }
    </div>
  )
}

export default Services