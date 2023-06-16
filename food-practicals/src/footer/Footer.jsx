import { AiOutlineGithub } from "react-icons/ai";
import footer from "../assets/images/banner21.jpg";

const Footer = () => {
  return (
    <div className="max-w-[1640px] mt-24 overflow-hidden">
      <div className="relative h-[300px] ">
        <img
          src={footer}
          alt="footer"
          className="w-full h-[370px] object-cover"
        />
        <div className="absolute top-0 text-text/80 p-4 xxs:mt-4 md:mt-16 xxs:mx-auto leading-10 md:flex justify-between w-full">
          <div className="md:mt-4">
            <h1 className="text-2xl font-title font-bold mb-4 xxs:text-center md:text-left">
              Food Practicals LTD
            </h1>
            <p className="text-xl font-body text-center ">
              Nairobi, Nairobi KE
            </p>
            <p className="text-xl font-body text-center ">
              P.O Box 101044 - Nairobi
            </p>
          </div>
          <div className="xxs:flex justify-center items-center">
            <button className="bg-rose-300 flex justify-center gap-2 rounded-lg text-black font-cursive hover:bg-tertiary hover:scale-110 duration-150 ease-in-out p-2 font-bold mt-3 md:mr-4">
              Source Code Labs
              <AiOutlineGithub size={24} className="mt-2" />
            </button>
          </div>
          <p className="absolute bottom-0 md:right-7 mt-24 xxs:hidden md:flex">
            Copyright ©2023 Food Practicals LTD{" "}
          </p>
        </div>
        <p className="absolute bottom-0 mt-24 md:hidden text-center font-semibold text-text/50">
          Copyright ©2023 Food Practicals LTD{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
