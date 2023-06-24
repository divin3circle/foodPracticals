import { AiFillHome } from "react-icons/ai";
import page from "../assets/images/Page.gif";
import face from "../assets/images/face.gif";
import { Link } from "react-router-dom";
const Nopage = () => {
  return (
    <div>
      <figure className="flex justify-center items-center">
        <img
          src={page}
          alt="nopage"
          className="w-[500px] h-[500px] object-contain"
        />
      </figure>
      <h3 className="text-xl font-title p-4 text-center">
        Sorry we couldn't find the page you are looking for
      </h3>
      <div>
        <h1 className="font-semibold font-body flex justify-center">
          <img
            src={face}
            alt="face"
            className="w-[70px] h-[70px] object-contain"
          />
          <p className="pt-6">Smells like a broken link</p>
        </h1>
      </div>
      <div className="flex justify-center">
        <Link to="/">
          <button className="border-2 border-rose-400 p-2 flex justify-center gap-2 rounded-lg hover:bg-rose-400 hover:scale-110 ease-in-out duration-200 font-bold">
            <h1>Go back Home</h1>
            <AiFillHome size={24} />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Nopage