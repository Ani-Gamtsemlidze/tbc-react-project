import CompanyContact from "@/components/contact/CompanyContact";
import ContactForm from "@/components/contact/ContactForm";

export default function Contact() {
    return (
        <div className='bg-gray-200 flex flex-1 p-8 justify-center'>
    
        <form action='/submit-form'>
            <div className=' bg-gray-100 p-8  w-[550px]'>
        <h1 className='text-xl font-medium'>Send Us a Message</h1>
        <ContactForm type="text" label="Full Name" placeholder="Name" id="fullName"  />
        <ContactForm type="text" label="Email Address" placeholder="Email" id="Email"  />
        <ContactForm type="text"  label="Subject" placeholder="Subject" id="subject"  />
        <ContactForm type="textarea" label="Message" id="textarea"  />
    
        <button className="bg-gray-800 hover:bg-gray-900 transition text-white px-4 py-2 rounded w-36 mt-4 ml-4" type="submit">
            Send Message
          </button> 
            </div>
        </form>
        <div className="bg-cyan-600 p-8">
          <h1 className='text-xl font-medium'>Contact Us</h1>
            <CompanyContact image="/images/contact/location.png" companyInfo="Suite 293 95409 Grimes Crossing"/>
            <CompanyContact image="/images/contact/phone.png" companyInfo="638 891 206 "/>
            <CompanyContact image="/images/contact/website.png" companyInfo="www.web-site. com"/>
            <CompanyContact image="/images/contact/mail.png" companyInfo="pas-uwufuba91@mail.com"/>
        </div>
        </div>
        
      )
}

