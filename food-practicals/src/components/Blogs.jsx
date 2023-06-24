import { Link } from "react-router-dom";
import food1 from "../assets/images/food1.jpg";
import food2 from "../assets/images/food2.jpg";
import food3 from "../assets/images/food3.jpg";

const Blogs = () => {
  return (
    <div id="blogs" className="my-0 mx-auto">
      <h1 className="font-bold text-3xl text-center font-title mt-16">
        Our Top Blogs
      </h1>
      {/**Blogs container */}
      <div className="flex justify-center gap-6 xxs:flex-col md:flex-row p-6">
        {/**Blog 1 */}
        <div className="mx-auto relative hover:scale-95 ease-in duration-150 cursor-pointer">
          <div className="">
            <figure>
              <img
                src={food1}
                alt="food1"
                className="rounded-xl hover:opacity-90"
              />
            </figure>
          </div>
          <div className="absolute top-0 p-2 flex gap-16">
            <h1 className="font-bold text-white text-[1rem] flex justify-center font-title">
              Savor the Flavor
            </h1>
            <button className="text-text font-cursive font-bold text-[1rem] border-2 rounded-lg p-1">
              <Link to="/blog1">Read more</Link>
            </button>
          </div>
        </div>
        {/**Blog 1 end */}

        {/**Blog 2 */}
        <div className="mx-auto relative hover:scale-95 ease-in duration-150 cursor-pointer">
          <div className="">
            <figure>
              <img
                src={food2}
                alt="food1"
                className="rounded-xl hover:opacity-90"
              />
            </figure>
          </div>
          <div className="absolute top-0 p-2 flex gap-16">
            <h1 className="font-bold text-white text-[1rem] flex justify-center font-title">
              Heat's Up!
            </h1>
            <button className="text-text font-cursive font-bold text-[1rem] border-2 rounded-lg p-1">
              <Link to="/blog2">Read more</Link>
            </button>
          </div>
        </div>
        {/**Blog 2 end */}

        {/**Blog 3 */}
        <div className="mx-auto relative hover:scale-95 ease-in duration-150 cursor-pointer">
          <div className="">
            <figure>
              <img
                src={food3}
                alt="food1"
                className="rounded-xl hover:opacity-90"
              />
            </figure>
          </div>
          <div className="absolute top-0 p-2 flex gap-16">
            <h1 className="font-bold text-white text-[1rem] flex justify-center font-title">
             A Creamy Delight
            </h1>
            <button className="text-text font-cursive font-bold text-[1rem] border-2 rounded-lg p-1">
              <Link to="/blog3">Read more</Link>
            </button>
          </div>
        </div>
        {/**Blog 3 end */}
      </div>
    </div>
  );
}

export default Blogs