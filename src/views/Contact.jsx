import { MapPinCheck, PhoneCall, NotebookPen, Handshake, MapPinned } from 'lucide-react';
import { Link } from 'react-router'
import Button from '../components/Button.jsx';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Facebook from './../assets/facebook.png';
import Instagram from './../assets/insta.png'
import Linkedin from './../assets/linkedin.png';
import Youtube from './../assets/youtube.png';
import Twitter from './../assets/twitters.png'
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
    <div className='bg-[#F8FAFF] font-sans mt-2'>
      <h1 className='text-black font-extrabold text-4xl md:text-4xl text-center'>Our Contact details</h1>

      <p className="text-center max-w-3xl mx-auto mt-4 text-gray-700 md:text-lg">
        We are here to help you with any questions, enquiries, or support related to
        Smart Campus. Feel free to reach out using the details or enquiry form below.
      </p>

      <div className='md:flex md:justify-center'>

        <div className='md:w-140 rounded-2xl py-9 px-12 md:m-10 m-4 md:text-lg shadow-xl'>
          <div className='mb-5'>
            <h3 className='md:text-2xl text-xl font-bold flex items-center gap-2 mb-1'><MapPinCheck />Address :</h3>
            <p><Link to="https://maps.app.goo.gl/7PxquLgZVgsXZ2MH7">
              Smart Engineering and Technology College, At+Post: Butibori, Ta: Nagpur, Dist: Nagpur (Maharashtra-India),
              Pin:441122</Link>
            </p>
          </div><hr className='text-gray-400' />

          <div className='mt-9 mb-5'>
            <h3 className='md:text-2xl text-xl font-bold flex items-center gap-2 mb-1'><PhoneCall />Addmission Helpline :</h3>
            <p><Link to="tel:+919387435423">Phone no.: +91 9387435423 </Link></p>
            <p><Link to="mailto:smartcollege@smartcampus.com">Email: smartcollege@smartcampus.com</Link></p>
          </div><hr className='text-gray-400' />

          <div className='mt-9 mb-5'>
            <h3 className='md:text-2xl text-xl font-bold flex items-center gap-2 mb-1'><NotebookPen />Examination Section :</h3>
            <p><Link to="mailto:smartcollege@smartcampus.com">Email: smartexamination@gmail.com </Link></p>
          </div><hr className='text-gray-400' />

          <div className='mt-9 mb-5'>
            <h3 className='md:text-2xl text-xl font-bold flex items-center gap-2 mb-1'><Handshake />Training and Placement Cell :</h3>
            <p><Link to="tel:+919387435423">Phone no.: +91 9387435423 </Link></p>
            <p><Link to="mailto:tpcsmart@smartcampus.com">Email: tpcsmart@smartcampus.com </Link></p>
          </div><hr />

          <div className="flex gap-4 justify-center mt-6">
            <Link to="https://www.facebook.com/"><img src={Facebook} alt='facebook' className='w-10 hover:scale-110 transition' /></Link>
            <Link to="https://www.instagram.com/"><img src={Instagram} alt='Instagram' className='w-10 hover:scale-110 transition' /></Link>
            <Link to="https://in.linkedin.com/"><img src={Linkedin} alt='Linkedin' className='w-10 hover:scale-110 transition' /></Link>
            <Link to="https://x.com/"><img src={Twitter} alt='Twitter' className='w-10 hover:scale-110 transition' /></Link>
            <Link to="https://www.youtube.com/"><img src={Youtube} alt='Youtube' className='w-10 hover:scale-110 transition' /></Link>
          </div>
        </div>

        <div className='mt-10 mx-5'>
          <h2 className='text-2xl font-bold flex items-center mb-3 gap-3 '><MapPinned color='green' />Our Location in Map</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2324.1775166363295!2d75.88192121741487!3d22.746672384970033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0008a13b99%3A0xeab4bf2dc0088826!2sSmartCamps!5e0!3m2!1sen!2sin!4v1767419040013!5m2!1sen!2sin"
            loading="lazy"
            className="rounded-xl shadow-xl w-90 h-100 md:w-150 md:h-163"
          ></iframe>
        </div>
      </div>

      <div className='flex justify-center my-10 mx-4'>
        <div className='w-200 md:p-10 p-5  rounded-xl shadow-xl'>
          <h2 className='text-4xl font-bold text-center mb-10'>Enquiry</h2>
          <div>
            <div className='mb-3'>
              <label className='text-xl font-semibold'>*Full Name :</label>
              <input type="text" placeholder='Enter your Full Name'
                className='w-full border text-2xl py-1 px-4 mt-1 rounded-xl'
                value={fromData.name}
                onChange={(e) => {
                  setFromData({ ...fromData, name: e.target.value })
                }}
              />
              <span className='text-red-600 ml-3'>{fromData.error}</span>

            </div>

            <div>
              <label className='text-xl font-semibold'>*Email Address :</label>
              <input type="text" placeholder='Enter your Email'
                className='w-full border text-2xl py-1 px-4 mt-1 mb-3 rounded-xl'
                value={fromData.email}
                onChange={(e) => {
                  setFromData({ ...fromData, email: e.target.value })
                }}
              />
              <span>{fromData.error}</span>
            </div>

            <div>
              <label className='text-xl font-semibold'>*Contact No. :</label>
              <input type="number" placeholder='Enter your Contact'
                className='w-full border text-2xl py-1 px-4 mt-1 mb-3 rounded-xl'
                value={fromData.contactNo}
                onChange={(e) => {
                  setFromData({ ...fromData, contactNo: e.target.value })
                }}
              />
            </div>

            <div>
              <label className='text-xl font-semibold'>*Message</label>
              <textarea type="message" placeholder='Your Message' maxLength={200}
                className='w-full border text-2xl py-1 px-3 mt-1 mb-4 rounded-xl'
                value={fromData.message}
                onChange={(e) => {
                  setFromData({ ...fromData, message: e.target.value })
                }}
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

export default Contact
