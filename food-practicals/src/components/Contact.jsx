import { AiFillFire, AiFillRest, AiOutlineBgColors, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone } from "react-icons/ai"
import { GiKiwiFruit } from "react-icons/gi"

const Contact = () => {
  //socials
   const sendEmail = () => {
     window.location.href = "mailto:foodpracticals@yahoo.com";
   };
   const makePhoneCall = () => {
     window.location.href = "tel:+254734372448";
   };

  return (
    <div
      className="max-w-[1640px] px-4 py-12"
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      <h1 className="text-center md:text-4xl mt-24 font-title font-bold xxs:text-3xl text-rose-500 ">
        Elevate Your Taste buds Today
      </h1>
      <h1 className="text-3xl font-title font-bold text-center mt-10 mb-16 ">
        Our Main Products
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        <div className="bg-rose-200 py-2 flex justify-center  rounded-lg hover:scale-110 duration-150 ease-in-out m-2 hover:font-bold hover:text-xl cursor-pointer" onClick={makePhoneCall}>
          <h2>Chilli Sauce</h2>
          <AiFillFire className="mt-1 ml-1" />
        </div>
        <div className="bg-rose-200 py-2 flex justify-center  rounded-lg hover:scale-110 duration-150 ease-in-out m-2 hover:font-bold hover:text-xl cursor-pointer" onClick={makePhoneCall}>
          <h2>Tomato Sauce</h2>
          <GiKiwiFruit className="mt-1 ml-1" />
        </div>
        <div className="bg-rose-200 py-2 flex justify-center  rounded-lg hover:scale-110 duration-150 ease-in-out m-2 hover:font-bold hover:text-xl cursor-pointer" onClick={makePhoneCall}>
          <h2>Yogurt</h2>
          <AiFillRest className="mt-1 ml-1" />
        </div>
        <div className="bg-rose-200 py-2 flex justify-center  rounded-lg hover:scale-110 duration-150 ease-in-out m-2 hover:font-bold hover:text-xl cursor-pointer" onClick={makePhoneCall}>
          <h2>Maziwa Lala</h2>
          <AiOutlineBgColors className="mt-1 ml-1" />
        </div>
      </div>
      <div className="mt-10 w-full h-[.1rem] bg-rose-500"></div>
      <h1 className="font-body text-center text-xl font-semibold m-5">
        Reach Out
      </h1>
      <div className="flex justify-center gap-2">
        <div
          className="m-1 cursor-pointer hover:scale-110 duration-100 ease-in-out"
          onClick={sendEmail}
        >
          <AiOutlineMail size={30} />
        </div>
        <div className="m-1 cursor-pointer hover:scale-110 duration-100 ease-in-out">
          <a href="https://www.linkedin.com/in/philip-soita-8864bb11a/">
            <AiOutlineLinkedin size={30} />
          </a>
        </div>
        <div className="m-1 cursor-pointer hover:scale-110 duration-100 ease-in-out">
          <a href="https://www.facebook.com/profile.php?id=100062944525692&refid=52&paipv=0&eav=AfYCxmA5AWrHrVkAzMZPm3qU-ySaBz9ItnpeUQNZj66M3kbDrgRwpX8FQdDlyIJcbo0">
            <AiOutlineFacebook size={30} />
          </a>
        </div>
        <div
          className="m-1 cursor-pointer hover:scale-110 duration-100 ease-in-out"
          onClick={makePhoneCall}
        >
          <AiOutlinePhone size={30} />
        </div>
      </div>
    </div>
  );
}

export default Contact