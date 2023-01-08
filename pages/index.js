import Head from 'next/head'
import Jumbotron from '../components/Jumbotron'
import Image from 'next/image'
import cardCorporate from '../public/Events/corporate.jpg'
import cardWedding from '../public/Events/wedding.jpg'
import cardBirthday from '../public/Events/birthday.jpg'
import cardParty from '../public/Events/party.jpg'
import vision from '../public/vision.jpg'
import philosophy from '../public/philosophy.jpg'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Pulse from 'react-reveal/Pulse';

export default function Home() {

  const heros = [
    {
      imageSrc: vision,
      imageAlt: "Vision of Regalia Diners",
      title: "Our Vision",
      desc: "Our sole purpose is to deliver the best version of our customer's vision. We understand the  importance of the event and the responsibilities it carries. We bring your vision into reality on your auspicious day."
    },
    {
      imageSrc: philosophy,
      imageAlt: "Philosophy of Regalia Diners",
      title: "Our Philosophy",
      desc: "We are a catering company based out of Lucknow and specialize in vegetarian delicacies. We believe in giving the dishes a remarkable taste & innovative presentation. Our diverse range of menu ensures our event hosts can make all their guest feel delighted. Every detail matters when it comes to your special day. Our only aim - to brighten every moment of the event that you have dreamt, planned, waited, and visualised of for years."
    },
  ]

  const specialities = [
    {
      desc: "One Stop destination for all your events"
    },
    {
      desc: "Customer satisfaction"
    },
    {
      desc: "Authentic 'Purana' Lucknowala Taste"
    },
    {
      desc: "Innovative Decors"
    },
    {
      desc: "Nothing but Perfection"
    },
    {
      desc: "Matching your vision"
    },
    {
      desc: "Desserts"
    }
  ]
  const events = [
    {
      name: "Corporate",
      imageSrc: cardCorporate,
      imageAlt: "Corporate Event Catering"
    },
    {
      name: "Weddings",
      imageSrc: cardWedding,
      imageAlt: "Wedding Catering"
    },
    {
      name: "Birthdays",
      imageSrc: cardBirthday,
      imageAlt: "Birthday Catering"
    },
    {
      name: "Parties",
      imageSrc: cardParty,
      imageAlt: "Party Catering"
    }]
  return (
    <div>
      <Head>
        <title>Best Caterers in Lucknow || Top Caterers in Lucknow - Regalia Diners</title>
        <link rel='canonical' href='https://www.regaliadiners.com' />
        <meta name="description" content="The best caterers in Lucknow who excel in preparing vegetarian delecacies for all cuisines. Complete catering solution for your intimate Wedding, Parties, Home and Corporate events. Devoted Chefs. Highly professional. We will help you throw the best parties ever. Get the quote now!" />
        <meta name='keywords' content='Best Caterers in Lucknow, Veg Caterers in Lucknow, Book the best vegetarian food catering services in Lucknow for indoor, outdoor wedding functions, party, special occasions, corporate events with affordable price. Get veg food menus, catering cost per plate, number of guests serve, ratings and reviews, Best rated Veg Caterers in Lucknow, Vegetarian Catering menu, Food menu for occasion, Caterer for corporate events, Caterer for wedding, Caterer for birthday party, Caterer for parties, Caterer for house parties, Get quote for wedding food menu, Book your caterer today, Best event planner in Lucknow' />
        <link rel="icon" href="/regalia-logo.png" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Jumbotron title='Home' bg='/Jumbotrons/home.jpg' />

      {
        heros.map((section, index) => {
          return (
            <Fade key={index} bottom>
              <section className="text-gray-600 body-font mb-10 mt-10">
                <div className={`container mx-auto flex md:flex-${index % 2 ? "row-reverse" : "row"} flex-col items-center`}>
                  <div className="lg:max-w-lg w-full md:mb-0 mb-8">
                    <Image className="object-cover object-center rounded" src={section.imageSrc} height={316 * 2} width={316 * 2} alt={section.imageAlt} />
                  </div>
                  <div className="lg:flex-grow md:w-1/2 lg:px-20 sm:px-12 px-12 flex flex-col text-center items-center">
                    <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900">{section.title}</h1>
                    <p className="sm:text-xl text-sm mb-8 leading-relaxed">{section.desc}</p>
                    <div className="flex justify-center">
                    </div>
                  </div>
                </div>
              </section>
            </Fade>
          )
        })
      }


      <section style={{ height: "100vh" }} className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-12">
            <h1 className="sm:text-5xl text-3xl font-medium text-center title-font text-gray-900 mb-4">Our Speciality</h1>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 justify-center">
            {
              specialities.map((speciality, index) => {
                return (
                  <Flip top left key={index}>
                    <div className="p-2 sm:w-1/2 w-full">
                      <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                        <svg fill="none" stroke="#DAA520" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                          <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span className="title-font sm:text-2xl text-sm decorate"><p>{speciality.desc}</p></span>
                      </div>
                    </div>
                  </Flip>
                )
              })
            }
          </div>
        </div>
      </section>


      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-12">
            <h1 className="sm:text-5xl text-3xl font-medium text-center title-font text-gray-900 mb-4">Events</h1>
          </div>
          <div className="flex flex-wrap -m-4 justify-center">
            {
              events.map((event, index) => {
                return (
                  <Pulse key={index}>
                    <div className="flex rounded-lg  justify-center xl:w-1/4 md:w-1/2 p-6">
                      <div className="rounded-lg shadow-lg bg-white max-w-md card">
                        <Image className="rounded-t-lg" src={event.imageSrc} alt={event.imageAlt} />
                        <div className="p-6">
                          <h5 className="text-gray-900 sm:text-2xl text-xl text-center font-medium mb-2">{event.name}</h5>
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
    </div>
  )
}
