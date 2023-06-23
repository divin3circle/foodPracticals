import recipe1 from "../assets/images/recipe1.jpg"
import recipe2 from "../assets/images/recipe2.webp"
import recipe3 from "../assets/images/recipe3.jpg"
import { Link } from "react-router-dom";

const Recipes = () => {
  return (
    <div className="mt-16 mx-auto">
      .
      <h1
        className="text-center font-title font-bold text-3xl"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        Best Sauce Recipes
      </h1>
      {/* recipes container*/}
      <div className="flex xxs:flex-col md:flex-row justify-between mt-10 gap-6 ">
        {/* recipe one container*/}
        <div
          className="hover:scale-x-110 ease-in duration-150 hover:cursor-pointer mx-6 xxs:px-10 md:px-4"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="">
            <img src={recipe1} alt="Recipe 1" className="rounded-xl" />
          </div>
          <div className="mt-1 my-0 mx-auto p-4">
            <h1 className="text-rose-400 font-cursive font-bold text-2xl text-center md:text-xl">
              Spicy Tomato and Basil Pasta
            </h1>
            <div className="flex justify-center items-center">
              <button className="border-2 border-rose-300 px-4 py-4 my-2 rounded-lg hover:text-text hover:bg-rose-300  font-bold ease-in duration-150">
                <Link to="/basil">Learn more</Link>
              </button>
            </div>
          </div>
        </div>
        {/*  end of recipe one container*/}

        {/* recipe two container*/}
        <div
          className="hover:scale-x-110 ease-in duration-150 hover:cursor-pointer mx-6 xxs:px-10 md:px-4"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div>
            <img src={recipe2} alt="Recipe 2" className="rounded-xl" />
          </div>
          <div className="mt-1 my-0 mx-auto p-4">
            <h1 className="text-rose-400 font-cursive font-bold text-2xl md:text-xl text-center">
              Sweet and Spicy Mango Glaze Salsa
            </h1>
            <div className="flex justify-center items-center">
              <button className="border-2 border-rose-300 px-4 py-4 my-2 rounded-lg hover:text-text hover:bg-rose-300  font-bold ease-in duration-150">
                <Link to="/sweet">Learn more</Link>
              </button>
            </div>
          </div>
        </div>
        {/* end of recipe two container*/}

        {/* recipe three container*/}
        <div
          className="hover:scale-x-110 ease-in duration-150 hover:cursor-pointer mx-6 xxs:px-10 md:px-4"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div>
            <img src={recipe3} alt="Recipe 3" className="rounded-xl" />
          </div>
          <div className="mt-1 my-0 mx-auto p-4">
            <h1 className="text-rose-400 font-cursive font-bold text-2xl text-center md:text-xl">
              Grilled Shrimp with Spicy Glaze
            </h1>
            <div className="flex justify-center items-center">
              <button className="border-2 border-rose-300 px-4 py-4 my-2 rounded-lg hover:text-text hover:bg-rose-300  font-bold ease-in duration-150">
                <Link to="/shrimp">Learn more</Link>
              </button>
            </div>
          </div>
        </div>
        {/* end  recipe three container*/}
      </div>
    </div>
  );
}

export default Recipes