import { useState } from "react";
import { AiFillCloseCircle, AiOutlineCaretDown } from "react-icons/ai";

const Faq = () => {
  const [questionTwo, setQuestionTwo] = useState(false);
  const [questionThree, setQuestionThree] = useState(false);
  const [questionOne, setQuestionOne] = useState(false);

  const showQuestionTwo = () =>{
    setQuestionTwo(!questionTwo);
  }
  const showQuestionThree = () =>{
    setQuestionThree(!questionThree);
  }
  const showQuestionOne = () =>{
    setQuestionOne(!questionOne);
  }


  return (
    <div id="faq" data-aos="fade-right" data-aos-duration="1500">
      <h1
        className="font-bold text-3xl text-center font-title mt-16"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        Frequently Asked Questions
      </h1>
      {/**FAQ container */}
      <div className="my-4 mx-auto">
        {/*Question 1*/}
        <div className="my-16">
          <div className="flex justify-center items-center md:gap-6 xxs:gap-4">
            {/*text div*/}
            <div className="px-2">
              <h1 className="md:text-2xl xxs:text-lg text-gray-800 px-4">
                What sets your tomato sauce and chili sauce apart from other
                sauce providers in the market?
              </h1>
            </div>
            {/*icon div*/}
            <div>
              {questionOne ? (
                <AiFillCloseCircle
                  size={30}
                  className="cursor-pointer text-center"
                  onClick={showQuestionOne}
                />
              ) : (
                <AiOutlineCaretDown
                  size={30}
                  className="cursor-pointer text-center"
                  onClick={showQuestionOne}
                />
              )}
              {/* <AiOutlineCaretDown
                size={30}
                className="cursor-pointer text-center"
                onClick={showQuestionOne}
              /> */}
            </div>
          </div>
          {/*answer div*/}
          <div
            className={
              questionOne ? "my-0 mx-auto px-4 flex justify-center" : "hidden"
            }
            /*  data-aos="zoom-in"
            data-aos-duration="1500" */
          >
            <p className="p-2 md:text-lg leading-7">
              Our tomato sauce and chili sauce are crafted with utmost care and
              attention to detail. We use only the finest quality tomatoes and
              chili peppers, sourced locally from trusted growers. Our sauces
              are carefully prepared in small batches to ensure consistent
              flavor and superior taste. Additionally, we do not use any
              artificial preservatives or additives, allowing the natural
              flavors to shine through. The result is a tomato sauce and chili
              sauce that is rich, flavorful, and unrivaled in quality.
            </p>
          </div>
        </div>
        {/* End of Question 1*/}
        {/*Question 2*/}
        <div className="my-16 ease-in duration-150">
          <div className="flex justify-center items-center md:gap-6 xxs:gap-4">
            {/*text div*/}
            <div className="px-2">
              <h1 className="md:text-2xl xxs:text-lg text-gray-800 px-4">
                Are your products gluten-free and suitable for individuals with
                dietary restrictions?
              </h1>
            </div>
            {/*icon div*/}
            <div>
              {questionTwo ? (
                <AiFillCloseCircle
                  size={30}
                  className="cursor-pointer text-center"
                  onClick={showQuestionTwo}
                />
              ) : (
                <AiOutlineCaretDown
                  size={30}
                  className="cursor-pointer text-center"
                  onClick={showQuestionTwo}
                />
              )}
              {/*  <AiOutlineCaretDown
                size={30}
                className="cursor-pointer text-center"
                onClick={showQuestionTwo}
              /> */}
            </div>
          </div>
          {/*answer div*/}
          <div
            className={
              questionTwo ? "my-0 mx-auto px-4 flex justify-center" : "hidden"
            }
            /*  data-aos="zoom-in"
            data-aos-duration="1500" */
          >
            <p className="p-2 md:text-lg leading-7">
              Yes, our tomato sauce and chili sauce are gluten-free, making them
              suitable for individuals with gluten intolerance or those
              following a gluten-free diet. We understand the importance of
              catering to different dietary needs, and we take pride in offering
              products that can be enjoyed by a wide range of consumers. Rest
              assured that our sauces are free from gluten-containing
              ingredients, ensuring a delicious and worry-free dining experience
              for everyone.
            </p>
          </div>
        </div>
        {/* End of Question 2*/}
        {/*Question 3*/}
        <div className="my-16">
          <div className="flex justify-center items-center md:gap-6 xxs:gap-4">
            {/*text div*/}
            <div className="px-2">
              <h1 className="md:text-2xl xxs:text-lg text-gray-800 px-4">
                How do you ensure the freshness and shelf life of your tomato
                sauce and chili sauce?
              </h1>
            </div>
            {/*icon div*/}
            <div>
              {questionThree ? (
                <AiFillCloseCircle
                  size={30}
                  className="cursor-pointer text-center"
                  onClick={showQuestionThree}
                />
              ) : (
                <AiOutlineCaretDown
                  size={30}
                  className="cursor-pointer text-center"
                  onClick={showQuestionThree}
                />
              )}
              {/* <AiOutlineCaretDown
                size={30}
                className="cursor-pointer text-center"
                onClick={showQuestionThree}
              /> */}
            </div>
          </div>
          {/*answer div*/}
          <div
            className={
              questionThree ? "my-0 mx-auto px-4 flex justify-center" : "hidden"
            }
            /*  data-aos="zoom-in"
            data-aos-duration="1500" */
          >
            <p className="p-2 md:text-lg leading-7">
              Ensuring the freshness and extended shelf life of our sauces is a
              top priority for us. We follow strict quality control measures
              throughout the manufacturing process. Our sauces undergo rigorous
              testing and adhere to industry standards to guarantee their safety
              and quality. We also employ efficient packaging techniques, such
              as air-tight jars and bottles, to maintain freshness and prevent
              spoilage. Additionally, we provide clear guidelines for proper
              storage and usage to help customers maximize the shelf life of our
              sauces. With our commitment to quality and freshness, you can
              confidently enjoy our tomato sauce and chili sauce for an extended
              period.
            </p>
          </div>
        </div>
        {/* End of Question 3*/}
      </div>
    </div>
  );
};

export default Faq;
