import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonatedCard = ({ storedCard }) => {
  const {
    id,
    picture,
    title,
    text_button_bg_color,
    price,
    category_bg_color,
    category,
    card_bg_color,
  } = storedCard || {};
  return (
    <div>
      <div
        className="relative flex  w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md "
        style={{ backgroundColor: card_bg_color }}
      >
        <div className="relative m-0 w-2/5 h-auto shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={picture}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6 space-y-2">
          <div
            className="w-28 py-1 shadow-xl rounded-md font-bold text-center"
            style={{ backgroundColor: category_bg_color }}
          >
            <span style={{ color: text_button_bg_color }}>{category}</span>
          </div>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h4>
          <p
            className="mb-8 block   font-bold leading-relaxed  antialiased"
            style={{ color: text_button_bg_color }}
          >
            ${price}
          </p>
          <Link className="inline-block" to={`/card-details/${id}`}>
            <button
              className="w-36  px-4 py-2  font-bold text-center text-white shadow-xl rounded-md"
              style={{ backgroundColor: text_button_bg_color }}
            >
              View details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

DonatedCard.propTypes = {
  storedCard: PropTypes.object.isRequired,
};

export default DonatedCard;
