import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
import chili from "../assets/images/chili.jpg";
import { Link } from "react-router-dom";
import chiliheat from "../assets/images/chiliheat.jpg";

const BlogTwo = () => {
  return (
    <div id="blog2" className="px-4">
      <div className="px-auto ">
        <figure>
          <img
            src={chili}
            alt="blog2"
            className="w-full object-cover h-[450px] rounded-xl"
          />
        </figure>
      </div>
      <div className="m-2 p-6">
        <div>
          <h1 className="text-gray-600">MAY 28TH 2023</h1>
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
        <div className="font-body leading-7 p-2 md:text-lg xxs:text-[1rem]">
          <h1 className="font-bold md:text-3xl xxs:text-xl text-center mb-6">
            Heat Up Your Tastebuds: The Fiery World of Chili Sauce and its
            Culinary Applications
          </h1>
          <div>
            <h3 className="font-title md:text-xl xxs:text-lg font-semibold py-2">
              Heat's up
            </h3>
            <p>
              <span className="ml-6">In </span>the world of culinary delights,
              there's a special ingredient that has the power to ignite your
              taste buds and add a fiery kick to your dishes: chili sauce. From
              its vibrant flavors to its intense heat, chili sauce has become a
              beloved condiment for spice enthusiasts and food lovers alike. In
              this blog post, we'll take you on a journey through the fiery
              world of chili sauce, exploring its origins, the different types
              of chili peppers used, and its diverse culinary applications. Get
              ready to heat up your tastebuds and discover the endless
              possibilities of chili sauce!
            </p>
          </div>
          <div>
            <h3 className="font-title md:text-xl xxs:text-lg font-semibold py-2">
              The Chili Spectrum
            </h3>
            <img
              src={chiliheat}
              alt="chili heat"
              className="mx-auto rounded-lg mb-4"
            />
            <p>
              <span className="ml-6">Chili </span>sauce has a rich history that
              spans across cultures and continents. It originated in regions
              such as Mexico, Southeast Asia, and the Caribbean, where chili
              peppers have long been an integral part of the local cuisine. Each
              culture has its own unique take on chili sauce, resulting in a
              wide variety of flavors and spice levels. From the smoky chipotle
              sauce of Mexico to the piquant sambal of Indonesia, chili sauce
              showcases the diverse culinary traditions around the world.It
              derives its heat and flavor from different varieties of chili
              peppers. These peppers range from mild to extra hot, offering a
              spectrum of spice for every palate. The Scoville scale is commonly
              used to measure the heat level of chili peppers, with milder
              peppers like jalapeno ranking lower and fiery peppers like the
              Carolina Reaper reaching the top of the scale. Chili sauces can be
              made from a single type of chili pepper or a blend of different
              peppers, allowing for a customized heat level and flavor profile
            </p>
            <p>
              <span className="ml-6">Chili </span>sauce is a versatile condiment
              that can elevate a wide range of dishes. Its bold flavor and heat
              can be used to enhance both savory and sweet recipes. Here are
              some exciting culinary applications of chili sauce:
            </p>
            <ul className="leading-7 px-4 py-2 list-disc text-black/90">
              <li>
                Marinades and Glazes: Chili sauce makes an excellent base for
                marinades and glazes. Its spicy notes infuse meats, seafood, and
                vegetables with a tantalizing flavor. Whether you're grilling,
                baking, or stir-frying, a chili sauce marinade will take your
                dishes to new heights of deliciousness
              </li>
              <li>
                Dipping Sauces: Chili sauce shines as a dipping sauce, adding a
                zesty and fiery kick to appetizers and snacks. From spring rolls
                and dumplings to chicken wings and fries, a chili sauce dip
                creates a burst of flavor that will leave your taste buds
                craving for more.
              </li>
              <li>
                Stir-fries and Curries: When added to stir-fries and curries,
                chili sauce adds depth and complexity to the dish. It brings a
                delightful heat that complements the other ingredients, creating
                a harmonious balance of flavors
              </li>
              <li>
                Condiments and Spreads: Chili sauce can be used to create
                homemade condiments and spreads. Mix it with mayonnaise for a
                spicy sandwich spread, blend it into cream cheese for a tangy
                dip, or drizzle it over grilled vegetables for an extra kick
              </li>
              <li>
                Fusion Cuisine: Chili sauce is widely used in fusion cuisine,
                where it adds an exciting twist to traditional dishes.
                Experiment with incorporating chili sauce into tacos, pizzas,
                burgers, and even desserts to create unique flavor combinations
                that will impress your guests
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-title md:text-xl xxs:text-lg xxs:min-h-full font-semibold py-2">
              The Art of balancing the "Heat"
            </h3>
            <p>
              <span className="ml-6">One</span>
              of the secrets to using chili sauce effectively in your cooking is
              mastering the art of balancing heat. It's essential to understand
              that a little goes a long way when it comes to chili sauce. Start
              with a small amount and gradually increase it according to your
              tolerance. Remember to consider the preferences of your diners and
              find the right balance between spice and flavor. Adding
              complementary ingredients such as citrus juices, herbs, or even a
              touch of sweetness can help mellow the heat while enhancing the
              overall taste of the dish. Chili sauce is a culinary gem that adds
              a fiery dimension to your meals. From its diverse origins to its
              versatile applications, chili sauce has become a beloved condiment
              in kitchens worldwide. Whether you're a spice enthusiast or
              someone looking to explore new flavors, incorporating chili sauce
              into your cooking opens up a world of possibilities. So, let your
              taste buds embark on a thrilling journey as you discover the fiery
              world of chili sauce and its culinary applications. Get creative,
              be adventurous, and savor the vibrant flavors that chili sauce
              brings to your table.
            </p>
          </div>
        </div>
      </div>
      <p className="md:text-3xl xxs:text-xl text-center font-bold font-cursive text-gray-400">
        Food Practicals Limited🧪
      </p>
      <p className="text-center md:text-xl xxs:text-lg font-body font-semibold opacity-70 mt-1">
        Home to fiery flavours
      </p>
    </div>
  );
};

export default BlogTwo;
