import { MapPinCheck, PhoneCall, NotebookPen, Handshake, MapPinned } from 'lucide-react';
import { Link } from 'react-router'
import Button from '../components/Button.jsx';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Facebook from './../assets/facebook.png';
import Instagram from '../assets/insta.png'
import Linkedin from '../assets/linkedin.png';
import Youtube from '../assets/youtube.png';
import Twitter from '../assets/twitters.png'
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

function Contact() {

  const [fromData, setFromData] = useState({
    name: "",
    email: "",
    contactNo: "",
    message: "",
    error: ""
  })

  useEffect(() => {
    if (fromData.name.length > 0 && fromData.name.length < 6) {
      setFromData({ ...fromData, error: "Name must be 6 character long" })
    } else {
      setFromData({ ...fromData, error: "" })
    }
  }, [fromData.name]);

  const submitBtn = () => {
    const emailId = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phone = /^[6-9]\d{9}$/;

    if (!fromData.name) {
      toast.error("Enter Your Name")
    } else if (!emailId.test(fromData.email)) {
      toast.error("Please enter valid Email Address")
      return;
    } else if (!phone.test(fromData.contactNo)) {
      toast.error("Contact number is required only 10 digit")
      return;
    } else if (!fromData.message) {
      toast.error("Message is required")
    }

    localStorage.setItem("userData", JSON.stringify(fromData));

    setTimeout(() => {
      toast.success("Enquiry submit Successfully 🎉");
    }, 1000)

    setFromData({
      name: "",
      email: "",
      contactNo: "",
      message: ""
    })
  }

  return (
    <>
      <Navbar />
      <div className='bg-[#F8FAFF] font-sans '>

        <h1 className='text-black font-extrabold text-4xl text-center'>Our Contact details</h1>

        <p className="text-center max-w-3xl mx-auto mt-4 text-gray-700 md:text-lg">
          We are here to help you with any questions, enquiries, or support related to
          our college. Feel free to reach out using the details below.
        </p>

        <div className='md:flex md:justify-center'>

          {/* LEFT SECTION */}
          <div className='md:w-140 rounded-2xl py-9 px-12 md:m-10 m-4 md:text-lg shadow-xl'>

            {/* Address */}
            <div className='mb-5'>
              <h3 className='text-xl font-bold flex items-center gap-2 mb-1'>
                <MapPinCheck /> Address :
              </h3>
              <p>
                <Link to="#">
                  Pravara Rural Engineering College,  
                  Tal-Rahata, Dist. Ahmednagar - 413736  
                  (DTE Code: EN5139)
                </Link>
              </p>
            </div>

            <hr className='text-gray-400' />

            {/* Admission */}
            <div className='mt-9 mb-5'>
              <h3 className='text-xl font-bold flex items-center gap-2 mb-1'>
                <PhoneCall /> College Contact :
              </h3>
              <p>
                <Link to="tel:02422273204">
                  Phone: 02422-273204
                </Link>
              </p>
              <p>
                <Link to="mailto:principal.precloni@pravara.in">
                  Email: principal.precloni@pravara.in
                </Link>
              </p>
            </div>

            <hr className='text-gray-400' />

            {/* Principal */}
            <div className='mt-9 mb-5'>
              <h3 className='text-xl font-bold flex items-center gap-2 mb-1'>
                <NotebookPen /> Principal :
              </h3>
              <p>Dr. S. M. Gulhane</p>
              <p>
                <Link to="tel:9423787338">
                  Mobile: +91 9423787338
                </Link>
              </p>
            </div>

            <hr className='text-gray-400' />

            {/* Website */}
            <div className='mt-9 mb-5'>
              <h3 className='text-xl font-bold flex items-center gap-2 mb-1'>
                <Handshake /> Website :
              </h3>
              <p>
                <Link to="https://www.pravara.in">www.pravara.in</Link>
              </p>
              <p>
                <Link to="https://www.pravaraengg.org.in">
                  www.pravaraengg.org.in
                </Link>
              </p>
            </div>

            <hr />

            {/* Social Icons */}
            <div className="flex gap-4 justify-center mt-6">
              <Link to="https://www.facebook.com/"><img src={Facebook} className='w-10 hover:scale-110' /></Link>
              <Link to="https://www.instagram.com/"><img src={Instagram} className='w-10 hover:scale-110' /></Link>
              <Link to="https://in.linkedin.com/"><img src={Linkedin} className='w-10 hover:scale-110' /></Link>
              <Link to="https://x.com/"><img src={Twitter} className='w-10 hover:scale-110' /></Link>
              <Link to="https://www.youtube.com/"><img src={Youtube} className='w-10 hover:scale-110' /></Link>
            </div>

          </div>

          {/* MAP */}
          <div className='mt-10 mx-5'>
            <h2 className='text-2xl font-bold flex items-center mb-3 gap-3'>
              <MapPinned color='green' /> Our Location in Map
            </h2>

            <iframe
              src="https://www.google.com/maps?q=Pravara+Rural+Engineering+College&output=embed"
              loading="lazy"
              className="rounded-xl shadow-xl w-90 h-100 md:w-150 md:h-163"
            ></iframe>
          </div>

        </div>

        {/* FORM (same as before) */}
        <div className='flex justify-center my-10 mx-4'>
          <div className='w-200 md:p-10 p-5 rounded-xl shadow-xl'>
            <h2 className='text-4xl font-bold text-center mb-10'>Enquiry</h2>

            <div>

              <div className='mb-3'>
                <label className='text-xl font-semibold'>*Full Name :</label>
                <input type="text"
                  className='w-full border text-2xl py-1 px-4 mt-1 rounded-xl'
                  value={fromData.name}
                  onChange={(e) => setFromData({ ...fromData, name: e.target.value })}
                />
                <span className='text-red-600'>{fromData.error}</span>
              </div>

              <div>
                <label className='text-xl font-semibold'>*Email :</label>
                <input type="text"
                  className='w-full border text-2xl py-1 px-4 mt-1 mb-3 rounded-xl'
                  value={fromData.email}
                  onChange={(e) => setFromData({ ...fromData, email: e.target.value })}
                />
              </div>

              <div>
                <label className='text-xl font-semibold'>*Contact No :</label>
                <input type="number"
                  className='w-full border text-2xl py-1 px-4 mt-1 mb-3 rounded-xl'
                  value={fromData.contactNo}
                  onChange={(e) => setFromData({ ...fromData, contactNo: e.target.value })}
                />
              </div>

              <div>
                <label className='text-xl font-semibold'>*Message :</label>
                <textarea
                  className='w-full border text-2xl py-1 px-3 mt-1 mb-4 rounded-xl'
                  value={fromData.message}
                  onChange={(e) => setFromData({ ...fromData, message: e.target.value })}
                />
              </div>

              <Button title="Submit" button_variant="danger" button_sizes="large" onClick={submitBtn} />

            </div>
          </div>
        </div>

        <Toaster />
        <Footer />
      </div>
    </>
  )
}

export default Contact;