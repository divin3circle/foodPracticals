import { useState } from "react";
import { yogurtData } from "../assets/data/YogurtData";
import banner from "../assets/images/yoghurt.webp";


const Yogurt = () => {
  const [food, setFood] = useState(yogurtData);

  //filter tomato and chilli sauces
  const filterName = (name) => {
    setFood(
      yogurtData.filter((item) => {
        return item.name === name;
      })
    );
  };

  //by quantity
  const filterQuantity = (quantity) => {
    setFood(
      yogurtData.filter((item) => {
        return item.quantity === quantity;
      })
    );
  };

  return (
    <div id="#new">
      <div className="max-w-[1640px] my-8 mx-auto p-4 hover:opacity-95 hover:scale-95 duration-150 ease-in-out cursor-pointer ">
        <div className="max-h-[500px] relative flex justify-center items-center ">
          {/**Image overlay */}
          <div className="absolute md:w-[56rem] h-full text-white max-h-[500px] max-w-[1000px] xs:w-[24rem] xxs:w-full bg-black/75 flex flex-col justify-center rounded-2xl">
            <h1 className="font-title text-center text-3xl font-bold md:text-4xl">
              Yogurt & Maziwa{" "}
              <span className="text-red-500 font-cursive">Lala</span>
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
        <div className="flex flex-col 2xl:flex-row justify-between">
          {/** filter name */}
          <div>
            <p className="text-gray-700 font-title font-bold">Filter Type:</p>
            <div className="p-2 flex justify-start flex-wrap">
              <button
                className="bg-tertiary p-2 rounded-lg font-cursive font-semibold border-2 border-tertiary hover:scale-105 hover:bg-red-500 ease-in duration-150 m-1"
                onClick={() => setFood(yogurtData)}
              >
                All
              </button>
              <button
                className="bg-tertiary p-2 rounded-lg font-cursive font-semibold border-2 border-tertiary hover:scale-105 hover:bg-red-500 ease-in duration-150 m-1"
                onClick={() => filterName("Yogurt")}
              >
                Yogurt
              </button>
              <button
                className="bg-tertiary p-2 rounded-lg font-cursive font-semibold border-2 border-tertiary hover:scale-105 hover:bg-red-500 ease-in duration-150 m-1"
                onClick={() => filterName("Maziwa Lala")}
              >
                Maziwa Lala
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
              <button
                className="bg-tertiary p-2 rounded-lg font-cursive font-semibold border-2 border-tertiary hover:scale-105 hover:bg-red-500 ease-in duration-150 m-1"
                onClick={() => setFood(yogurtData)}
              >
                All
              </button>
              <button
                className="bg-tertiary p-2 rounded-lg font-cursive font-semibold border-2 border-tertiary hover:scale-105 hover:bg-red-500 ease-in duration-150 m-1"
                onClick={() => filterQuantity("5 Liters")}
              >
                5 Liters
              </button>
              <button
                className="bg-tertiary p-2 rounded-lg font-cursive font-semibold border-2 border-tertiary hover:scale-105 hover:bg-red-500 ease-in duration-150 m-1"
                onClick={() => filterQuantity("2 Liters")}
              >
                2 Liters
              </button>
              <button
                className="bg-tertiary p-2 rounded-lg font-cursive font-semibold border-2 border-tertiary hover:scale-105 hover:bg-red-500 ease-in duration-150 m-1"
                onClick={() => filterQuantity("250 grams")}
              >
                {"<"}1 Liter
              </button>
            </div>
          </div>
          {/**end of filter quantity*/}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 ">
            {/**display data(sauces)}*/}
            {food.map((item, index) => (
              <div
                key={index}
                className="border shadow-xl hover:scale-105 ease-in duration-300 rounded-t-xl "
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[250px] object-cover rounded-t-xl"
                />
                <div className="flex justify-between px-2 py-4">
                  <p className="font-bold font-body">{item.name}</p>
                  <p className="font-semibold font-body">{item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Yogurt