import  chili from "../assets/images/sauce-headline.jpg";
import yogurt from "../assets/images/yoghurt.webp";
import sauceHeadline from "../assets/images/chili.jpg";

const Headline = () => {
  return (
    <div className="mt-16">
      <h1 className="font-title font-bold md:text-3xl text-2xl text-center ease-in duration-100 ">Trending Products</h1>
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 overflow-hidden ">
      {/*cards*/}
      <div className="md:ml-2 cursor-pointer hover:scale-110 ease-in-out duration-200 hover:opacity-90 rounded-xl relative mx-auto md:mx-0">
        {/*overlay*/}
        <div className="absolute w-80 md:max-w-[100%] h-full bg-black/50 rounded-xl text-text">
          <p className="font-title font-bold text-2xl p-2">Sauce of the Day</p>
          <div className="mt-16 flex lg:justify-between xxs:justify-between md:justify-start items-baseline">
            <p className=" p-2 mt-14 font-body text-sm  ">Garlic inspired</p>
            <button className="p-2 text-sm border-2 border-text rounded-xl mr-2 md:ml-4 hover:bg-rose-300 hover:text-black hover:border-none hover:scale-75 ease-in duration-150 hover:font-bold">
              More
            </button>
          </div>
        </div>
        <img
          src={chili}
          className="rounded-xl w-80 md:max-w-[100%] object-cover h-[14rem]"
          alt="sauce-headline"
        />
      </div>
      <div className="cursor-pointer hover:scale-110 ease-in-out duration-200 hover:opacity-90 rounded-xl relative xxs:mx-auto md:mx-0">
        {/*overlay*/}
        <div className="absolute w-80 md:max-w-[100%] h-full bg-black/50 rounded-xl text-text">
          <p className="font-title font-bold text-2xl p-2">
            Today's Chilli Pick
          </p>
          <div className=" mt-16 flex lg:justify-between xxs:justify-between md:justify-start items-baseline">
            <p className="p-2 mt-14 font-body text-sm  ">Fiery Sauce</p>
            <button className="p-2 text-sm border-2 border-text rounded-xl mr-2 md:ml-4 hover:bg-rose-300 hover:text-black hover:border-none hover:scale-75 ease-in duration-150 hover:font-bold">
              More
            </button>
          </div>
        </div>
        <img
          src={sauceHeadline}
          className="rounded-xl w-80 object-cover h-[14rem]"
          alt="sauce-headline"
        />
      </div>
      <div className="cursor-pointer hover:scale-110 ease-in-out duration-200 hover:opacity-90 rounded-xl relative xxs:mx-auto md:mx-0">
        {/*overlay*/}
        <div className="absolute w-80 h-full md:max-w-[100%] bg-black/50 rounded-xl text-text">
          <p className="font-title font-bold text-2xl p-2">Trending Yogurt</p>
          <div
            className="mt-16 flex lg:justify-between 
           xxs:justify-between md:justify-start items-baseline"
          >
            <p className="p-2 mt-14 font-body text-sm  ">Creamy flavour</p>
            <button className="p-2 text-sm border-2 border-text rounded-xl mr-2 md:ml-4 hover:bg-rose-300 hover:text-black hover:border-none hover:scale-75 ease-in duration-150 hover:font-bold">
              More
            </button>
          </div>
        </div>
        <img
          src={yogurt}
          className="rounded-xl w-80 object-cover h-[14rem]"
          alt="sauce-headline"
        />
      </div>
    </div>
    </div>
  );
}

export default Headline