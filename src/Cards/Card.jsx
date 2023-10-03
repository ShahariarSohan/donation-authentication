import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const {
    id,
    picture,
    category,
    title,
    card_bg_color,
    category_bg_color,
    text_button_bg_color,
  } = card || {};
  return (
    <div>
      <Link to={`/card-details/${id}`}>
        <div
          className="card card-compact lg:w-72 bg-base-100 shadow-xl"
          style={{ backgroundColor: card_bg_color }}
        >
          <figure>
            <img className="h-48 w-full" src={picture} alt="picture" />
          </figure>
          <div className="card-body">
            <div className="card-actions ">
              <div
                className="shadow-xl px-4 py-2 rounded-md font-bold"
                style={{ backgroundColor: category_bg_color }}
              >
                <span style={{ color: text_button_bg_color }}>{category}</span>
              </div>
            </div>
            <h2 className="card-title" style={{ color: text_button_bg_color }}>
              {title}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Card;
