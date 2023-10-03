import PropTypes from "prop-types";
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../Provider/AuthProvider";

const CardDetail = ({ card }) => {
  const { user } = useContext(AuthContext);
  const { id, picture, title, text_button_bg_color, price, description } =
    card || {};
  const handleDonateButton = () => {
    if (!user) {
      return <Navigate to="/login"></Navigate>;
    }
    const cardStore = [];
    const donatedCard = JSON.parse(localStorage.getItem("donated"));
    if (!donatedCard) {
      cardStore.push(card);
      localStorage.setItem("donated", JSON.stringify(cardStore));
      swal("Good job!", "You have successfully donated", "success");
    } else {
      const duplicate = donatedCard?.find((store) => store.id === id);
      if (duplicate) {
        return swal("Sorry!", "You have already donated", "error");
      } else {
        cardStore.push(...donatedCard, card);
        localStorage.setItem("donated", JSON.stringify(cardStore));
        swal("Good job!", "You have successfully donated", "success");
      }
    }
  };
  return (
    <div className="px-5">
      <div
        className="hero h-[600px]  relative"
        style={{
          backgroundImage: `url(${picture})`,
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-50 h-[150px] absolute bottom-0 ">
          <div className="absolute bottom-12 left-5">
            <Link to="/donation">
              <button
                onClick={handleDonateButton}
                className="rounded-md font-bold text-white px-5 py-2"
                style={{ backgroundColor: text_button_bg_color }}
              >
                Donate ${price}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-bold my-5">{title}</h1>
      <p className="">{description}</p>
    </div>
  );
};

CardDetail.propTypes = {
  card: PropTypes.object.isRequired,
};

export default CardDetail;
