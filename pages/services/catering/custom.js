import React from "react"
import Head from "next/head";
import { useState, useRef, useEffect } from "react"
import Jumbotron from "../../../components/Jumbotron";
import Checkbox from "../../../components/Checkbox";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Custom = () => {
  const forum = useRef();
  const [menu, setMenu] = useState({})
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [peopleCount, setPeopleCount] = useState('');

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    let t = await fetch(`/api/menu`)
    let menu = await t.json()
    setMenu(menu)
  }

  async function handleOnSubmit(e) {
    e.preventDefault();
    const scriptURL = "https://script.google.com/macros/s/AKfycbxewIKfddnnDLWguKYvs5Ay7mzh7uNkUdyGlyNUo0nJWx7pl1QcPsfYYvdHJ43EfGceaw/exec"
    const form = e.target
    let selected = []
    let idx = 4
    Object.keys(menu).map((section) => {
      let temp = []
      menu[section].items.map((item) => {
        if (item.isSelected) {
          temp.push(item.dish)
        }
      })
      form[idx].value = temp
      selected.push(temp)
      idx += 1
    })
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
    No. of People: ${peopleCount}
    <br />
    Chinese: ${selected[0]}
    <br />
    Chilla: ${selected[1]}
    <br />
    Lucknowi Chat: ${selected[2]}
    <br />
    South Indian: ${selected[3]}
    <br />
    Tawa Sabzi Indian: ${selected[4]}
    <br />
    American Tawa: ${selected[5]}
    <br />
    Hot Tawa Chat: ${selected[6]}
    <br />
    Pulses(Dal): ${selected[7]}
    <br />
    Kadhi: ${selected[8]}
    <br />
    Veggies(Gravy): ${selected[9]}
    <br />
    Veggies(Dry): ${selected[10]}
    <br />
    Breads(Roti): ${selected[11]}
    <br />
    Poori and Kachori: ${selected[12]}
    <br />
    Pulao: ${selected[13]}
    <br />
    Curd: ${selected[14]}
    <br />
    Salad: ${selected[15]}
    <br />
    Sauces: ${selected[16]}
    <br />
    Parantha: ${selected[17]}
    <br />
    Kebab Parantha: ${selected[18]}
    <br />
    Traditional: ${selected[19]}
    <br />
    Sweets: ${selected[20]}
    <br />
    Ice Creams: ${selected[21]}
    <br />
    Milk: ${selected[22]}
    <br />
    Breakfast: ${selected[23]}
    <br />
    Bayna: ${selected[24]}
    <br />
    Children Section: ${selected[25]}
    <br />
    Starters: ${selected[26]}
    <br />
    Non Veg Starters: ${selected[27]}
    <br />
    Breads(Roti) - Non Veg: ${selected[28]}
    <br />
    Biryani: ${selected[29]}
    <br />
    Main Course - Non Veg: ${selected[30]}
    `
    const subject = 'Data from Custom Menu'
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
        params: { name: name, email: email, phone: phone, peopleCount: peopleCount },
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
      + "*No. of people :* " + peopleCount + "%0a"
      + "*Chinese :* " + selected[0] + "%0a"
      + "*Chilla :* " + selected[1] + "%0a"
      + "*Lucknowi Chat :* " + selected[2] + "%0a"
      + "*South Indian :* " + selected[3] + "%0a"
      + "*Tawa Sabzi Indian :* " + selected[4] + "%0a"
      + "*American Tawa :* " + selected[5] + "%0a"
      + "*Hot Tawa Chat :* " + selected[6] + "%0a"
      + "*Pulses(Dal) :* " + selected[7] + "%0a"
      + "*Kadhi :* " + selected[8] + "%0a"
      + "*Veggies(Gravy) :* " + selected[9] + "%0a"
      + "*Veggies(Dry) :* " + selected[10] + "%0a"
      + "*Breads(Roti) :* " + selected[11] + "%0a"
      + "*Poori and Kachori :* " + selected[12] + "%0a"
      + "*Pulao :* " + selected[13] + "%0a"
      + "*Curd :* " + selected[14] + "%0a"
      + "*Salad :* " + selected[15] + "%0a"
      + "*Sauces :* " + selected[16] + "%0a"
      + "*Parantha :* " + selected[17] + "%0a"
      + "*Kebab Parantha :* " + selected[18] + "%0a"
      + "*Traditional :* " + selected[19] + "%0a"
      + "*Sweets :* " + selected[20] + "%0a"
      + "*Ice Creams :* " + selected[21] + "%0a"
      + "*Milk :* " + selected[22] + "%0a"
      + "*Breakfast :* " + selected[23] + "%0a"
      + "*Bayna :* " + selected[24] + "%0a"
      + "*Children Section :* " + selected[25] + "%0a"
      + "*Starters :* " + selected[26] + "%0a"
      + "*Non Veg Starters :* " + selected[27] + "%0a"
      + "*Breads(Roti) - Non Veg :* " + selected[28] + "%0a"
      + "*Biryani :* " + selected[29] + "%0a"
      + "*Main Course - Non Veg :* " + selected[30];
    if (whatsappURL) {
      window.open(whatsappURL, '_blank').focus();
    }
    setName('')
    setEmail('')
    setPhone('')
    setPeopleCount('')
    fetchData()
  }

  const handleChange = (e) => {
    const { id, name } = e.target
    menu[name].items.map(item => {
      if (item.dish == id) {
        item.isSelected = !item.isSelected
      }
    })
    setMenu(menu)
  }

  return (

    <div>
      <Head>
        <title>Create Your Own Menu - Regalia Diners</title>
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
      <Jumbotron title="Custom Menu" bg="/Jumbotrons/custom.jpg" />
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center sm:text-4xl text-3xl font-bold text-gray-900">Create your custom menu</h2>
        </div>

        <div className="mt-8 w-full">
          <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <form ref={forum} method='post' name='contactform' onSubmit={handleOnSubmit} id='sheetdb-form'>
              <div className="grid md:grid-cols-3 gap-12 sm:grid-cols-2 mb-10">
                <div className="form-group">
                  <label style={{ color: "#DAA520" }} className="label">Name</label>
                  <input required autoComplete="off" name="Name" id="Name" className="input" type="text" placeholder="Enter Name"
                    onChange={(e) => setName(e.target.value)} value={name}
                  />
                </div>
                <div className="form-group">
                  <label style={{ color: "#DAA520" }} className="label">Contact Number</label>
                  <input required autocomplete="off" name="Phone" id="MobileNumber" className="input" type="tel" placeholder="Enter Number"
                    onChange={(e) => setPhone(e.target.value)} value={phone}
                  />
                </div>
                <div className="form-group">
                  <label style={{ color: "#DAA520" }} className="label">Email Address</label>
                  <input required autocomplete="off" name="Email" id="Email" className="input" type="email" placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)} value={email}
                  />
                </div>
                <div className="form-group">
                  <label style={{ color: "#DAA520" }} className="label">Number of People</label>
                  <input required autocomplete="off" name="People Count" id="PeopleCount" className="input" type="number" placeholder="Enter Number of People"
                    onChange={(e) => setPeopleCount(e.target.value)} value={peopleCount}
                  />
                </div>
                <div className="form-group hidden">
                  <input autocomplete="off" name="Chinese" id="chinese" className="input" type="text" placeholder="menu items"
                    defaultValue=""
                  />
                </div>
                <div className="form-group hidden">
                  <input autocomplete="off" name="Chilla" id="chilla" className="input" type="text" placeholder="menu items"
                    defaultValue=""
                  />
                </div>
                <div className="form-group hidden">
                  <input autocomplete="off" name="Lucknowi Chat" id="lucknowiChat" className="input" type="text" placeholder="menu items"
                    defaultValue=""
                  />
                </div>
                <div className="form-group hidden">
                  <input autocomplete="off" name="South Indian" id="southIndian" className="input" type="text" placeholder="menu items"
                    defaultValue=""
                  />
                </div>
                <div className="form-group hidden">
                  <input autocomplete="off" name="Tawa Sabzi Indian" id="tawaSabziIndian" className="input" type="text" placeholder="menu items"
                    defaultValue=""
                  />
                </div>
                <div className="form-group hidden">
                  <input autocomplete="off" name="American Tawa" id="americanTawa" className="input" type="text" placeholder="menu items"
                    defaultValue=""
                  />
                </div>
                <div className="form-group hidden">
                  <input autocomplete="off" name="Hot Tawa Chat" id="hotTawaChat" className="input" type="text" placeholder="menu items"
                    defaultValue=""
                  />
                </div>
                <div className="form-group hidden">
                  <input autocomplete="off" name="Pulses(Dal)" id="pulsesDal" className="input" type="text" placeholder="menu items"
                    defaultValue=""
                  />
                </div>
                <div className="form-group hidden">
                  <input autocomplete="off" name="Kadhi" id="kadhi" className="input" type="text" placeholder="menu items"
                    defaultValue=""
                  />
                </div>
                <div className="form-group hidden">
                  <input autocomplete="off" name="Veggies(Gravy)" id="veggiesGravy" className="input" type="text" placeholder="menu items"
                    defaultValue=""
                  />
                </div>
                <div className="form-group hidden">
                  <input autocomplete="off" name="Veggies(Dry)" id="veggiesDry" className="input" type="text" placeholder="menu items"
                    defaultValue=""
                  />
                </div>
                <div className="form-group hidden">
                  <input autocomplete="off" name="Breads(Roti)" id="breadsRoti" className="input" type="text" placeholder="menu items"
                    defaultValue=""
                  />
                </div>
                <div className="form-group hidden">
                  <input autocomplete="off" name="Poori and Kachori" id="pooriAndKachori" className="input" type="text" placeholder="menu items"
                    defaultValue=""
                  />
                </div>
                <div className="form-group hidden">
                  <input autocomplete="off" name="Pulao" id="pulao" className="input" type="text" placeholder="menu items"
                    defaultValue=""
                  />
                </div>
                <div className="form-group hidden">
                  <input autocomplete="off" name="Curd" id="curd" className="input" type="text" placeholder="menu items"
                    defaultValue=""
                  />
                </div>
                <div className="form-group hidden">
                  <input autocomplete="off" name="Salad" id="salad" className="input" type="text" placeholder="menu items"
                    defaultValue=""
                  />
                </div>
                <div className="form-group hidden">
                  <input autocomplete="off" name="Sauces" id="sauces" className="input" type="text" placeholder="menu items"
                    defaultValue=""
                  />
                </div>
                <div className="form-group hidden">
                  <input autocomplete="off" name="Parantha" id="parantha" className="input" type="text" placeholder="menu items"
                    defaultValue=""
                  />
                </div>
                <div className="form-group hidden">
                  <input autocomplete="off" name="Kebab Parantha" id="kebabParantha" className="input" type="text" placeholder="menu items"
                    defaultValue=""
                  />
                </div>
                <div className="form-group hidden">
                  <input autocomplete="off" name="Traditional" id="traditional" className="input" type="text" placeholder="menu items"
                    defaultValue=""
                  />
                </div>
                <div className="form-group hidden">
                  <input autocomplete="off" name="Sweets" id="sweets" className="input" type="text" placeholder="menu items"
                    defaultValue=""
                  />
                </div>
                <div className="form-group hidden">
                  <input autocomplete="off" name="Ice Creams" id="iceCreams" className="input" type="text" placeholder="menu items"
                    defaultValue=""
                  />
                </div>
                <div className="form-group hidden">
                  <input autocomplete="off" name="Milk" id="milk" className="input" type="text" placeholder="menu items"
                    defaultValue=""
                  />
                </div>
                <div className="form-group hidden">
                  <input autocomplete="off" name="Breakfast" id="breakfast" className="input" type="text" placeholder="menu items"
                    defaultValue=""
                  />
                </div>
                <div className="form-group hidden">
                  <input autocomplete="off" name="Bayna" id="bayna" className="input" type="text" placeholder="menu items"
                    defaultValue=""
                  />
                </div>
                <div className="form-group hidden">
                  <input autocomplete="off" name="Children Section" id="childrenSection" className="input" type="text" placeholder="menu items"
                    defaultValue=""
                  />
                </div>
                <div className="form-group hidden">
                  <input autocomplete="off" name="Starters" id="starters" className="input" type="text" placeholder="menu items"
                    defaultValue=""
                  />
                </div>
                <div className="form-group hidden">
                  <input autocomplete="off" name="Non Veg Starters" id="nonVegStarters" className="input" type="text" placeholder="menu items"
                    defaultValue=""
                  />
                </div>
                <div className="form-group hidden">
                  <input autocomplete="off" name="Breads(Roti) - Non Veg" id="breadsRotiNonVeg" className="input" type="text" placeholder="menu items"
                    defaultValue=""
                  />
                </div>
                <div className="form-group hidden">
                  <input autocomplete="off" name="Biryani" id="biryani" className="input" type="text" placeholder="menu items"
                    defaultValue=""
                  />
                </div>
                <div className="form-group hidden">
                  <input autocomplete="off" name="Main Course - Non Veg" id="mainCourseNonVeg" className="input" type="text" placeholder="menu items"
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="block">
                {
                  Object.keys(menu).map((section) => {
                    return (
                      <Checkbox key={section} title={menu[section].title} items={menu[section].items} handleChange={handleChange} />
                    )
                  })
                }
              </div>
              <div className="flex items-center justify-center md:gap-x-12 md:flex-row flex-col gap-y-6">
                <button style={{ width: "9.5rem" }} className='send-btn'>
                  <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                      </svg>
                    </div>
                  </div>
                  <span><p>Get Quote</p></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Custom