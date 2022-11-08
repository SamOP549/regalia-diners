import React, { useState, useRef } from 'react'
import Jumbotron from '../components/Jumbotron'
import Slide from 'react-reveal/Slide';
import Head from 'next/head';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const forum = useRef();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  async function handleOnSubmit(e) {
    e.preventDefault();
    const form = e.target
    const scriptURL = "https://script.google.com/macros/s/AKfycbwstmNAE_Nb5lxImQNDe5zVcM0J9giGM8adHVn9_aFrl6IQ6MWdZdHXa34aJdryPsN-9w/exec"
    let t = await fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    let res = await t.json()

    if (res.result == 'success') {
      toast.success("We'll contact you soon! ❤️", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    else {
      toast.error('Some error occured!', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    const emailMsg = `
    Name: ${name}
    <br />
    Email: ${email}
    <br />
    Phone Number: ${phone}
    <br />
    Message: ${message}
    `
    const subject = 'Data from Contact Form'

    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'api-key': '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'
      },
      body: JSON.stringify({
        sender: { name: name, email: email },
        to: [{ email: 'jainsamarth549@gmail.com' }],
        params: { name: name, email: email, phone: phone, message: message },
        subject: subject,
        textContent: `${emailMsg}`,
        htmlContent: `${emailMsg}`
      })
    };

    fetch('https://api.sendinblue.com/v3/smtp/email', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));

    var whatsappURL = "https://wa.me/918874247420?text="
      + "*Name :* " + name + "%0a"
      + "*Email :* " + email + "%0a"
      + "*Phone :* " + phone + "%0a"
      + "*Message :* " + message;
    if (whatsappURL) {
      window.open(whatsappURL, '_blank').focus();
    }
    setName('')
    setPhone('')
    setEmail('')
    setMessage('')
  }

  return (
    <div>
      <Head>
        <title>Contact Us - Regalia Diners</title>
      </Head>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Jumbotron title='Get In Touch' bg="/Jumbotrons/contact.jpg" />
      <div className="container my-24 px-6 mx-auto">

        <section className="mb-32 text-gray-800">
          <div className="flex flex-wrap">
            <Slide bottom>
              <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                <h2 className="sm:text-5xl text-3xl font-bold mb-6">Contact us</h2>
                <p className="text-gray-500 mb-6 sm:text-xl text-sm">
                  Connect with us to make your event wonderful.
                </p>
                <p className="text-gray-500 mb-2 sm:text-xl text-sm">E3/7, Awas Vikas Yojna, IIM Road, Lucknow-226101.</p>
                <p className="text-gray-500 mb-2 sm:text-xl text-sm">+91 8874247420</p>
                <p className="text-gray-500 mb-2 sm:text-xl text-sm">regaliadiners@gmail.com</p>
              </div>
            </Slide>
            <Slide bottom>
              <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                <form className='flex flex-col gform' ref={forum} method='post' name='contactform' onSubmit={handleOnSubmit} id='sheetdb-form'>
                  <div className="form-group mb-6">
                    <input required type="text" className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name"
                      placeholder="Name" name='Name' onChange={(e) => setName(e.target.value)} value={name} />
                  </div>
                  <div className="form-group mb-6">
                    <input required type="tel" className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="number"
                      placeholder="Contact Number" name='Phone' onChange={(e) => setPhone(e.target.value)} value={phone} />
                  </div>
                  <div className="form-group mb-6">
                    <input required type="email" className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="email"
                      placeholder="Email address" name='Email' onChange={(e) => setEmail(e.target.value)} value={email} />
                  </div>
                  <div className="form-group mb-6">
                    <textarea className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="message" rows="3" placeholder="Message" name='Message' onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                  </div>
                  <button className='send-btn'>
                    <div className="svg-wrapper-1">
                      <div className="svg-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                        </svg>
                      </div>
                    </div>
                    <span><p>Send</p></span>
                  </button>
                </form>
              </div>
            </Slide>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact
