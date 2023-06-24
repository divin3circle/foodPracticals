import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
import food3banner from "../assets/images/food3banner.jpg";
import { Link } from "react-router-dom";
import food3 from "../assets/images/food3.jpg";

const BlogThree = () => {
  return (
    <div id="blog3" className="px-2">
      <div className="px-auto ">
        <figure>
          <img
            src={food3banner}
            alt="blog3"
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
            A Creamy Delight with Endless Culinary Possibilities
          </h1>
          <div>
            <h3 className="font-title md:text-xl xxs:text-lg font-semibold py-2">
              A Creamy Delight
            </h3>
            <p>
              <span className="ml-6"> Yogurt, </span>with its smooth and creamy
              texture, is not only a delicious snack but also a versatile
              ingredient that can elevate a wide range of dishes. From breakfast
              to dessert, yogurt offers a world of culinary possibilities. In
              this blog post, we'll delve into the wonders of yogurt, exploring
              its origins, health benefits, and creative applications in the
              kitchen. Whether you enjoy it on its own or incorporate it into
              your recipes, yogurt is sure to delight your taste buds and bring
              a touch of creaminess to your culinary creations. Yogurt has a
              long and rich history that dates back thousands of years. Its
              origins can be traced to ancient civilizations such as Mesopotamia
              and India, where it was cherished for its nutritional value and
              probiotic properties. Over time, yogurt spread across different
              cultures and became a staple in various cuisines. From the tangy
              Greek yogurt to the lassi of South Asia, each culture has its
              unique take on this creamy delight. Today, yogurt is enjoyed all
              over the world and is always available at{" "}
              <span className="font-bold text-rose-500 font-cursive">
                <Link to="/"></Link>{" "}
              </span>
              . delight. Today, yogurt is enjoyed all over the world and is
              always available at{" "}
              <span className="font-bold text-rose-500 font-cursive">
                <Link to="/">FoodPracticals Limited</Link>{" "}
              </span>
            </p>
          </div>
          <div>
            <div className="my-4 mx-auto">
              <img
                src={food3}
                alt="food3"
                className="w-full object-cover h-[450px] rounded-xl"
              />
            </div>
            <h3 className="font-title md:text-xl xxs:text-lg font-semibold py-2">
              The Nutritional Power-house
            </h3>
            <p>
              <span className="ml-6">Yogurt </span>is a nutritional powerhouse,
              offering a combination of essential nutrients that contribute to
              overall health and well-being. One of the key benefits of yogurt
              is its high protein content. Protein is essential for building and
              repairing tissues, supporting muscle growth, and maintaining a
              strong immune system. In addition to protein, yogurt is an
              excellent source of calcium, which is crucial for maintaining
              strong bones and teeth. Adequate calcium intake can help prevent
              bone loss and reduce the risk of fractures, making yogurt a
              valuable addition to a bone-healthy diet. Yogurt is also rich in B
              vitamins, including riboflavin (vitamin B2), vitamin B12, and
              pantothenic acid (vitamin B5). These vitamins play important roles
              in energy metabolism, red blood cell production, and nerve
              function. By including yogurt in your diet, you can ensure a
              well-rounded intake of these essential B vitamins. One of the
              standout features of yogurt is its content of probiotics, which
              are live and active cultures of beneficial bacteria. These
              probiotics help maintain a healthy balance of gut bacteria,
              supporting digestive health and aiding in nutrient absorption. The
              presence of probiotics in yogurt is particularly beneficial for
              individuals experiencing digestive issues such as diarrhea or
              constipation.
            </p>
            <p>
              <span className="ml-6">Furthermore,</span> yogurt contains enzymes
              that assist in the digestion and absorption of nutrients, ensuring
              optimal nutrient utilization by the body. It also provides
              antioxidants, which help protect cells from damage caused by
              harmful free radicals, contributing to overall cellular health and
              reducing the risk of chronic diseases. By incorporating yogurt
              into your daily diet, you can enjoy the combined benefits of
              protein, calcium, B vitamins, probiotics, enzymes, and
              antioxidants. Whether enjoyed on its own as a satisfying snack or
              used as a versatile ingredient in various recipes, yogurt provides
              a delicious and nutritious way to support your overall health and
              well-being. Remember to choose plain or minimally sweetened
              varieties to maximize the health benefits while minimizing added
              sugars. Feel free to browse at some of our handcrafted{" "}
              <span className="font-bold">Yogurt and Maziwa Lala</span>{" "}
              products, at{" "}
              <span className="font-bold text-rose-500 font-cursive">
                <Link to="/new">FoodPracticals Limited</Link>.
              </span>
            </p>
          </div>
          <div>
            <h3 className="font-title md:text-xl xxs:text-lg font-semibold py-2">
              Creative Culinary Uses of Yogurt
            </h3>
            <ul className="list-disc list-inside">
              <li>
                Creamy Breakfast Delights: Start your day on a nutritious note
                by adding yogurt to your breakfast routine. Enjoy it as a
                topping for granola, mix it into smoothies, or use it as a base
                for overnight oats. The creamy texture and tangy flavor of
                yogurt will add a delightful twist to your morning meals.
              </li>
              <li>
                Flavorful Salad Dressings: Yogurt can be used as a base for
                creamy and tangy salad dressings. Combine it with herbs, lemon
                juice, and spices to create a refreshing dressing that
                complements a variety of salads. The creaminess of yogurt adds a
                luscious texture while keeping the dressing light and
                nutritious.
              </li>
              <li>
                Delectable Marinades: Yogurt-based marinades are a game-changer
                for tenderizing and flavoring meats and vegetables. The natural
                acidity of yogurt helps to break down proteins, resulting in
                juicy and flavorful dishes. Add herbs, garlic, and spices to
                your yogurt marinade for an extra burst of flavor
              </li>
              <li>
                Irresistible Desserts: Yogurt is a fantastic ingredient for
                creating light and creamy desserts. Use it as a base for fruit
                parfaits, whip it into a tangy mousse, or freeze it into a
                refreshing frozen yogurt treat. The possibilities are endless
                when it comes to indulging in yogurt-based desserts.
              </li>
              <li>
                Savory Dips and Sauces: Yogurt-based dips and sauces are a hit
                at parties and gatherings. Combine yogurt with herbs, garlic,
                and lemon juice to create a flavorful dip for fresh veggies or a
                zesty sauce for grilled meats. The creamy texture of yogurt adds
                a luxurious element to these appetizers.
              </li>
            </ul>
            <p>
              <span className="ml-6">In </span>
              conclusion yogurt is a versatile and nutritious ingredient that
              adds a creamy touch to countless recipes. From breakfast to
              dessert, yogurt offers a wide range of culinary possibilities.
              Whether you're seeking a healthy snack, a refreshing dip, or a
              creamy base for your favorite dishes, yogurt is a delightful
              choice. Explore the rich history, nutritional benefits, and
              creative uses of yogurt in your kitchen. Embrace its creamy
              delight and discover the endless culinary adventures that yogurt
              has to offer at{" "}
              <span className="font-bold text-rose-500 font-cursive">
                <Link to="/">FoodPracticals Limited</Link>
              </span>
              .
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

export default BlogThree;
