import React from 'react'
import ContactForm from './ContactForm'

import CompanyContact from './CompanyContact'

import locationIcon from "../../images/contact/location.png"
import phoneIcon from "../../images/contact/phone.png"
import emailIcon from "../../images/contact/mail.png"
import websiteIcon from "../../images/contact/website.png"

function Contact() {
  return (
    <div className='bg-gray-200 flex flex-1 p-8 justify-center'>

    <form action='/submit-form'>
        <div className=' bg-gray-100 p-8  w-[550px]'>
    <h1 className='text-xl font-medium'>Send Us a Message</h1>
    <ContactForm type="input" label="Full Name" placeholder="Name" id="fullName"  />
    <ContactForm type="input" label="Email Address" placeholder="Email" id="Email"  />
    <ContactForm type="input"  label="Subject" placeholder="Subject" id="subject"  />
    <ContactForm type="textarea" label="Message" id="textarea"  />

    <button className="bg-gray-800 hover:bg-gray-900 transition text-white px-4 py-2 rounded w-36 mt-4 ml-4" type="submit">
        Send Message
      </button> 
        </div>
    </form>
    <div className="bg-cyan-600 p-8">
      <h1 className='text-xl font-medium'>Contact Us</h1>
        <CompanyContact image={locationIcon} companyInfo="Suite 293 95409 Grimes Crossing"/>
        <CompanyContact image={phoneIcon} companyInfo="638 891 206 "/>
        <CompanyContact image={websiteIcon} companyInfo="www.web-site. com"/>
        <CompanyContact image={emailIcon} companyInfo="pas-uwufuba91@mail.com"/>
    </div>
    </div>
    
  )
}

export default Contact  