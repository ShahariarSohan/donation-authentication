import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CardContext } from "../Layout/MainLayout";
const Banner = () => {
  const [inputValue, setInputValue] = useState();
  const [categoryCards, setCategoryCards] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };
  const cards = useContext(CardContext);
  const handleSearchButton = () => {
    const categorizedCards = cards.filter(
      (categoryCard) =>
        categoryCard.category.toLowerCase() === inputValue.toLowerCase()
    );
    setCategoryCards(categorizedCards);
  };
  return (
    <div>
      <Link>
        <div
          className="hero min-h-[500px] mb-20"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/F5MFB7P/Youth-Education.jpg)",
          }}
        >
          <div className="hero-overlay bg-white bg-opacity-90"></div>
          <div>
            <div className="mx-auto">
              <h1 className="mb-5 text-4xl font-bold text-black text-center">
                I Grow By Helping People In Need
              </h1>
              <div className="text-center">
                <div>
                  <label className="input-group justify-center ">
                    <input
                      onChange={handleSubmit}
                      value={inputValue}
                      type="text"
                      placeholder="Search Here"
                      className="input input-bordered"
                      name="search"
                    />
                    <button
                      onClick={handleSearchButton}
                      className="bg-red-600 hover:bg-red-800 text-white font-bold px-5 py-2 rounded-md "
                    >
                      Search
                    </button>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Banner;
