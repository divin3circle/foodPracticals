import sweet from "../assets/images/sweet.jpg";
import recipe2 from "../assets/images/recipe2.webp";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";

const Sweet = () => {
  return (
    <div className="px-2" id="sweet">
      <div className="flex justify-center mb-10">
        <img
          src={sweet}
          alt="Sweet and Spicy Mango Glaze Salsa"
          className="rounded-xl object-cover h-[450px] w-full"
        />
      </div>
      <h1 className="xxs:text-xl md:text-3xl font-title font-bold text-center">
        Sweet and Spicy Mango Salsa Ultimate Recipe
      </h1>
      {/**ingredients */}
      <div>
        <h1 className="font-title font-bold text-3xl text-rose-600">
          Sweet Mango
        </h1>
        <h3 className="text-xl font-body pt-2 font-semibold">Ingredients: </h3>
        <ol className="p-2 leading-7">
          <li>2 ripe mangoes, peeled and diced</li>
          <li>1/2 red bell pepper, finely chopped</li>
          <li>1/2 red onion, finely chopped</li>
          <li>1 jalapeño pepper, seeded and minced</li>
          <li>2 tablespoons fresh lime juice</li>
          <li>2 tablespoons chopped fresh cilantro</li>
          <li>
            1 tablespoon{" "}
            <span className="font-semibold font-cursive text-red-500 ">
              <Link to="/">Fingerlick</Link>
            </span>{" "}
            chili sauce
          </li>
          <li>Salt to taste and Tortilla chips for serving</li>
        </ol>
      </div>
      {/**directions */}
      <div>
        <h3 className="text-xl font-body pt-2 font-semibold">Instructions: </h3>
        <ol className="p-2 leading-7">
          <li>
            1. In a bowl, combine the diced mangoes, red bell pepper, red onion,
            jalapeño pepper, fresh lime juice, chopped cilantro, Fingerlick
            chili sauce, and salt. Mix well.
          </li>
          <li>
            2. Let the salsa sit for about 15-20 minutes to allow the flavors to
            blend together.
          </li>
          <li>
            3. Taste and adjust the seasonings according to your preference.
          </li>
          <li>
            4. Serve the sweet and spicy mango salsa with tortilla chips as a
            refreshing appetizer or as a topping for grilled fish or chicken.
          </li>
        </ol>
      </div>
      <div className="flex justify-center">
        <img
          src={recipe2}
          alt="recipe"
          className="md:w-[30%] xxs:w-full rounded-lg"
        />
      </div>
      {/**socials */}
      <div className="flex justify-center items-center">
        <div className="flex gap-2 mt-8">
          <div className="cursor-pointer">
            <Link to="https://www.facebook.com/profile.php?id=100062944525692&refid=52&paipv=0&eav=AfYCxmA5AWrHrVkAzMZPm3qU-ySaBz9ItnpeUQNZj66M3kbDrgRwpX8FQdDlyIJcbo0">
              <AiFillFacebook
                size={30}
                className="hover:scale-110 ease-in duration-150"
              />
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link to="https://www.linkedin.com/in/philip-soita-8864bb11a/">
              <AiFillLinkedin
                size={30}
                className="hover:scale-110 ease-in duration-150"
              />
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link to="/contact">
              <AiFillMail
                size={30}
                className="hover:scale-110 ease-in duration-150"
              />
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link to="/contact">
              <AiFillPhone
                size={30}
                className="hover:scale-110 ease-in duration-150"
              />
            </Link>
          </div>
        </div>
      </div>
      <p className="font-semibold text-2xl font-cursive text-center mt-4">
        Powered by{" "}
        <span className="text-rose-500 text-lg font-cursive">
          <Link to="/">Fingerlick Sauce</Link>
        </span>
      </p>
    </div>
  );
};

export default Sweet;
