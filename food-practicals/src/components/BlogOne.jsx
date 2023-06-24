import { Link } from "react-router-dom";
import food1banner from "../assets/images/food1banner.jpg";
import headline1 from "../assets/images/headline1.webp";
import { AiFillFacebook, AiFillLinkedin, AiFillMail, AiFillPhone } from "react-icons/ai";

const BlogOne = () => {
  return (
    <div id="blog1">
      <div>
        <figure>
          <img
            src={food1banner}
            alt="food1banner"
            className="rounded-xl object-cover w-full h-[300px]"
          />
        </figure>
      </div>
      {/**meta header */}
      <div className="m-2 p-6">
        <div>
          <h1 className="text-gray-600">JUNE 20TH 2023</h1>
          <p>
            Powered by{" "}
            <span className="text-rose-500 text-lg font-cursive">
              <Link to="/">Fingerlick Sauce</Link>
            </span>
          </p>
        </div>
        {/**socials */}
        <div className="flex gap-2 mt-4">
          <div>
            <Link to="https://www.facebook.com/profile.php?id=100062944525692&refid=52&paipv=0&eav=AfYCxmA5AWrHrVkAzMZPm3qU-ySaBz9ItnpeUQNZj66M3kbDrgRwpX8FQdDlyIJcbo0">
              <AiFillFacebook
                size={30}
                className="hover:scale-110 ease-in duration-150"
              />
            </Link>
          </div>
          <div>
            <Link to="https://www.linkedin.com/in/philip-soita-8864bb11a/">
              <AiFillLinkedin
                size={30}
                className="hover:scale-110 ease-in duration-150"
              />
            </Link>
          </div>
          <div>
            <Link to="/contact">
              <AiFillMail
                size={30}
                className="hover:scale-110 ease-in duration-150"
              />
            </Link>
          </div>
          <div>
            <Link to="/contact">
              <AiFillPhone
                size={30}
                className="hover:scale-110 ease-in duration-150"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="p-2 leading-7 font-body">
        <h1 className="font-bold text-3xl text-center font-title mb-6">
          Savor the Flavor: Exploring the Versatility of Tomato Sauce in Italian
          Cuisine
        </h1>
        <p>
          <span className="ml-6"> When</span> it comes to Italian cuisine,
          tomato sauce is an essential ingredient that adds depth and richness
          to a variety of dishes. Its versatility and mouthwatering flavor make
          it a staple in many kitchens. In this blog post, we'll dive into the
          world of tomato sauce and explore how it can elevate your favorite
          Italian recipes.
        </p>
        <p>
          <span className="ml-6">From</span> classic pasta dishes like spaghetti
          Bolognese to homemade pizzas and lasagnas, tomato sauce forms the
          foundation of these iconic dishes. Made from ripe tomatoes, herbs, and
          seasonings, tomato sauce brings a burst of tangy sweetness to every
          bite. It serves as a base for countless recipes, allowing you to
          create rich and satisfying meals that are loved by all.
        </p>
        <p>
          <span className="ml-6"> One</span> of the best things about tomato
          sauce is its ability to accommodate different tastes and preferences.
          If you enjoy a little heat, you can spice up your sauce with chili
          flakes or incorporate your favorite chili sauce for an added kick. For
          those who prefer a milder flavor, a touch of creamy yogurt can provide
          a delightful balance.
        </p>
        <div className="m-4">
          <img
            src={headline1}
            alt="headline1"
            className="rounded-xl object-cover w-full h-[350px]"
          />
        </div>
        <p>
          <span className="ml-6">The</span> beauty of tomato sauce lies in its
          adaptability. You can customize it by adding ingredients like fresh
          basil, garlic, onions, or even a splash of red wine for a deeper
          flavor profile. With a jar of quality tomato sauce in your pantry, you
          have the foundation for countless culinary creations.
        </p>
        <p>
          <span className="ml-6">Beyond</span> pasta and pizza, tomato sauce can
          be a versatile companion for other dishes as well. Use it as a dipping
          sauce for crispy mozzarella sticks or as a topping for meatballs and
          sandwiches. It can even be incorporated into soups, stews, and
          simmered dishes for an extra punch of flavor.
        </p>
        <p>
          <span className="ml-6">Next</span> time you're in the kitchen, let
          your imagination run wild with tomato sauce. Experiment with different
          herbs, spices, and your favorite chili sauces or yogurts to create
          unique and delicious recipes that showcase the incredible versatility
          of this beloved sauce. Whether you're a seasoned chef or an aspiring
          home cook, tomato sauce is an ingredient that can elevate your
          culinary skills. Its rich flavors and adaptability allow you to
          explore the vast world of Italian cuisine and create dishes that will
          impress your family and friends.
        </p>
        <p>
          In conclusion, tomato sauce is not just a condiment; it's a
          cornerstone of Italian cooking. So, go ahead and embrace the
          versatility of tomato sauce in your kitchen. Let its flavors transport
          you to the picturesque streets of Italy, where every bite is a
          celebration of food and life.
        </p>
      </div>
      Food Practicals Limited🧪
      <p className="text-center font-bold font-cursive text-gray-400">
        Food Practicals Limited🧪
      </p>
      <p className="text-center md:text-xl xxs:text-lg font-body font-semibold opacity-70 mt-1">
        Home to fiery flavours
      </p>
    </div>
  );
}

export default BlogOne