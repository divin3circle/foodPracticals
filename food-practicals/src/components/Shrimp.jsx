import shrimp from "../assets/images/shrimp.jpg";
import recipe3 from "../assets/images/recipe3.jpg";
import { AiFillFacebook, AiFillLinkedin, AiFillMail, AiFillPhone } from "react-icons/ai";
import { Link } from "react-router-dom";

const Shrimp = () => {
  return (
    <div id="shrimp" className="px-4 font-body">
      <div className="mb-10">
        <figure className="text-center">
          <img
            src={shrimp}
            alt="shrimp"
            className="img-fluid w-full object-cover max-h-[500px]"
          />
        </figure>
        <h1 className="xxs:text-xl md:text-3xl font-title font-bold text-center mt-4">
          Grilled Shrimp Skewers with Spicy Tomato Glaze Recipe
        </h1>
        {/**ingredients */}
        <div>
          <h1 className="font-title font-bold text-3xl text-rose-600">
            Grilled Shrimp Skewers
          </h1>
          <h3 className="text-xl font-body pt-2 font-semibold">
            Ingredients:{" "}
          </h3>
          <ol className="p-2 leading-7">
            <li>500 grams large shrimp, peeled and deveined</li>
            <li>2 tablespoons olive oil</li>
            <li>2 cloves of garlic, minced</li>
            <li>1 teaspoon paprika</li>
            <li>1/2 teaspoon cayenne pepper (adjust to taste)</li>
            <li>Salt and pepper to taste</li>
            <li>
              1/4 cup{" "}
              <span className="text-rose-500 font-semibold font-cursive">
                Fingerlick
              </span>{" "}
              tomato sauce
            </li>
            <li>2 tablespoons honey</li>
            <li>1 tablespoon soy sauce</li>
            <li>Fresh cilantro for garnish</li>
          </ol>
          {/**directions */}
          <div>
            <h3 className="text-xl font-body pt-2 font-semibold">
              Instructions:{" "}
            </h3>
            <ol className="p-2 leading-7">
              <li>
                1. In a bowl, combine the olive oil, minced garlic, paprika,
                cayenne pepper, salt, and pepper. Mix well
              </li>
              <li>
                2. Add the shrimp to the bowl and toss to coat them in the
                marinade. Let the shrimp marinate for about 15-20 minutes.
              </li>
              <li>
                3. While the shrimp is marinating, preheat the grill to
                medium-high heat
              </li>
              <li>
                4. In a small saucepan, combine fingerlick tomato sauce, honey,
                and soy sauce. Heat the mixture over low heat, stirring
                occasionally, until it thickens slightly and forms a glaze
              </li>
              <li>5. Thread the marinated shrimp onto skewers.</li>
              <li>
                6. Grill the shrimp skewers for 2-3 minutes per side or until
                the shrimp are pink and cooked through
              </li>
              <li>
                7. Brush the grilled shrimp skewers with the spicy tomato glaze
                on both sides during the last minute of grilling
              </li>
              <li>
                8. Remove the skewers from the grill and transfer them to a
                serving platter.
              </li>
              <li>
                9. Garnish with fresh cilantro and serve the grilled shrimp
                skewers as an appetizer or as a main dish with rice or a salad.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src={recipe3}
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

export default Shrimp;
