import React from 'react';
import banner from "../assets/images/banner2.jpg";

const Home= () => {
  return (
    <div className="max-w-[1640px] my-8 mx-auto p-4 hover:opacity-95 hover:scale-95 duration-150 ease-in-out ">
      <div className="max-h-[500px] relative flex justify-center items-center ">
        {/**Image overlay */}
        <div className="absolute w-full h-full text-white max-h-[500px] max-w-[1000px] bg-black/75 flex flex-col justify-center rounded-2xl">
          <h1 className="font-title text-center text-3xl font-bold md:text-4xl">
            Home of <span className="text-red-500 font-cursive">fiery</span> flavours
          </h1>
          <p className="md:leading-10 xxs:text-sm xs:text-[18px] xs:leading-7  md:text-lg  font-body font-semibold text-center px-2 md:mt-8 xxs:mt-5">
            Experience the fiery flavors of our handcrafted chili and tomato
            sauces as you elevate your taste buds with our unique blends that
            bring the perfect balance of heat and tang.
            <span className='xxs:hidden md:block'>
              {" "}
              Discover the secret to culinary delight and add a burst of
              excitement to every meal courtesy of{" "}
              <span className="text-red-700 text-xl font-bold hover:text-red-700/80 cursor-pointer">
                <a href="#contact"> FoodPRACTICALS</a>
              </span>
              . Shop now and ignite your palate with our award-winning sauces!
            </span>
          </p>
        </div>
        <figure>
          <img className="rounded-2xl w-full max-h-[500px] object-cover" src={banner} alt="banner-sauce" />
        </figure>
      </div>
    </div>
  );
}

export default Home;
