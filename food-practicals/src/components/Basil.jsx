import { Link } from "react-router-dom";
import basil from "../assets/images/basil.jpg"
import recipe1 from "../assets/images/recipe1.jpg";
import { AiFillFacebook, AiFillLinkedin, AiFillMail, AiFillPhone } from "react-icons/ai";

const Basil = () => {
  return (
    <div className="px-4" id="basil">
      <div className="mb-6">
        <figure>
          <img
            src={basil}
            alt="Basil"
            className="block w-full h-auto object-cover rounded-lg"
          />
        </figure>
      </div>
      <h1 className="xxs:text-xl md:text-3xl font-title font-bold text-center">
        Preparing Spicy Tomato and Basil Pasta
      </h1>
      {/**ingredients */}
      <div>
        <h1 className="font-title font-bold text-3xl text-rose-600">
          Basil Pasta
        </h1>
        <h3 className="text-xl font-body pt-2 font-semibold">Ingredients: </h3>
        <ol className="p-2 leading-7">
          <li>250grams of pasta (your choice of shape)</li>
          <li>2 tablespoons olive oil</li>
          <li>1 onion, finely chopped</li>
          <li>3 cloves of garlic, minced</li>
          <li>1 can (400 grams) diced tomatoes</li>
          <li>
            2 tablespoons{" "}
            <span className="text-rose-500 font-bold font-cursive">
              <Link to="/">Fingerlick</Link>
            </span>{" "}
            tomato sauce
          </li>
          <li>1 teaspoon dried basil</li>
          <li>Salt and pepper to taste</li>
          <li>Grated Parmesan cheese (optional)</li>
        </ol>
      </div>
      {/**directions */}
      <div>
        <h3 className="text-xl font-body pt-2 font-semibold">Instructions: </h3>
        <ol className="p-2 leading-7">
          <li>
            1. Preheat the oven to 200°C (400°F) and line a baking sheet with
            foil.
          </li>
          <li>
            2. In a bowl, combine{" "}
            <span className="text-rose-500 font-cursive font-semibold">
              <Link to="/">Fingerlick</Link>
            </span>{" "}
            chili sauce, soy sauce, honey, apple cider vinegar, minced garlic,
            smoked paprika, salt, and pepper. Mix well to make the marinade.
          </li>
          <li>
            3. Place the chicken wings in a large resealable bag or a bowl and
            pour the marinade over them. Make sure the wings are well coated in
            the marinade. Marinate for at least 30 minutes, or overnight in the
            refrigerator for best results.
          </li>
          <li>
            4. Arrange the marinated chicken wings on the prepared baking sheet
            in a single layer. Bake for 30-35 minutes or until the wings are
            cooked through and crispy, flipping them halfway through.
          </li>
          <li>
            5. Serve the BBQ chicken wings hot, garnished with chopped fresh
            cilantro if desired
          </li>
        </ol>
        <h1 className="font-title font-bold text-3xl text-rose-600 mt-6">
          Spicy Tomato Salsa
        </h1>
        <h3 className="text-xl font-body pt-2 font-semibold">Ingredients: </h3>
        <ol className="p-2 leading-7">
          <li>4 ripe tomatoes</li>
          <li>1 small red onion, finely chopped</li>
          <li>1 jalapeño pepper, seeded and minced</li>
          <li>2 tablespoons fresh lime juice</li>
          <li>2 tablespoons chopped fresh cilantro</li>
          <li>1 tablespoon Fingerlick tomato sauce</li>
          <li>Salt and pepper to taste</li>
          <li>Tortilla chips for serving</li>
        </ol>
        <h3 className="text-xl font-body pt-2 font-semibold">Instructions: </h3>
        <ol className="p-2 leading-7">
          <li>
            1. In a bowl, combine the diced tomatoes, red onion, minced jalapeño
            pepper, fresh lime juice, chopped cilantro, Fingerlick tomato sauce,
            salt, and pepper. Mix well.
          </li>
          <li>
            2. Let the salsa sit for about 15-20 minutes to allow the flavors to
            meld together
          </li>
          <li>
            3. Taste and adjust the seasonings according to your preference.
          </li>
          <li>
            4. Serve the spicy tomato salsa with tortilla chips as an appetizer
            or as a condiment for other dishes.
          </li>
          <li>5. Enjoy!</li>
        </ol>
      </div>
      <div className="flex justify-center">
        <img
          src={recipe1}
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
}

export default Basil