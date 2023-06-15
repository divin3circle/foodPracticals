import banner from "../assets/images/banner3.jpg";
import { data } from '../assets/data/Data';

const ChilliSauce = () => {
  return (
    /* console.log(data) */
    <div id="#chilly">
      <div className="max-w-[1640px] my-8 mx-auto p-4 hover:opacity-95 hover:scale-95 duration-150 ease-in-out ">
        <div className="max-h-[500px] relative flex justify-center items-center ">
          {/**Image overlay */}
          <div className="absolute md:w-[56rem] h-full text-white max-h-[500px] max-w-[1000px] xs:w-[24rem] xxs:w-full bg-black/75 flex flex-col justify-center rounded-2xl">
            <h1 className="font-title text-center text-3xl font-bold md:text-4xl">
              Chilli & Tomato{" "}
              <span className="text-red-500 font-cursive">Sauces</span>
            </h1>
          </div>
          <figure>
            <img
              className=" max-w-[1000px] md:h-64 xxs:w-full rounded-2xl md:w-[56rem] max-h-[500px] xs:w-[24rem] object-cover"
              src={banner}
              alt="banner-sauce"
            />
          </figure>
        </div>
      </div>
      <div className="m-auto px-4 ">
        {/**filters */}
        <div className="flex flex-col md:flex-row justify-between">
          {/** filter name */}
          <div>
            <p className="text-gray-700 font-title font-bold">Filter Type:</p>
            <div className="p-2 flex justify-start flex-wrap">
              <button className="bg-tertiary p-2 rounded-lg font-cursive font-semibold border-2 border-tertiary hover:scale-105 hover:bg-red-500 ease-in duration-150 m-1">
                All
              </button>
              <button className="bg-tertiary p-2 rounded-lg font-cursive font-semibold border-2 border-tertiary hover:scale-105 hover:bg-red-500 ease-in duration-150 m-1">
                Chilli Sauce
              </button>
              <button className="bg-tertiary p-2 rounded-lg font-cursive font-semibold border-2 border-tertiary hover:scale-105 hover:bg-red-500 ease-in duration-150 m-1">
                Tomato Sauce
              </button>
            </div>
          </div>
          {/** end of filter name */}
          {/**filter quantity*/}
          <div>
            <p className="text-gray-700 font-title font-bold">
              Filter Quantity:
            </p>
            <div className="p-2 flex justify-start flex-wrap">
              <button className="bg-tertiary p-2 rounded-lg font-cursive font-semibold border-2 border-tertiary hover:scale-105 hover:bg-red-500 ease-in duration-150 m-1">
                All
              </button>
              <button className="bg-tertiary p-2 rounded-lg font-cursive font-semibold border-2 border-tertiary hover:scale-105 hover:bg-red-500 ease-in duration-150 m-1">
                5 Liters
              </button>
              <button className="bg-tertiary p-2 rounded-lg font-cursive font-semibold border-2 border-tertiary hover:scale-105 hover:bg-red-500 ease-in duration-150 m-1">
                2 Liters
              </button>
              <button className="bg-tertiary p-2 rounded-lg font-cursive font-semibold border-2 border-tertiary hover:scale-105 hover:bg-red-500 ease-in duration-150 m-1">
                {"<"}1 Liter
              </button>
            </div>
          </div>
          {/**end of filter quantity*/}
        </div>
        {/** ed of filters */}
      </div>
    </div>
  );
}

export default ChilliSauce