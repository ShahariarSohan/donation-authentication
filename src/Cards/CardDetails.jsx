import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CardContext } from "../Layout/MainLayout";
import CardDetail from "./CardDetail";

const CardDetails = () => {
  const params = useParams();
  const cards = useContext(CardContext);
  const card = cards?.find((card) => card.id === parseInt(params.id));
  return (
    <div className="container mx-auto my-10">
      <CardDetail card={card}></CardDetail>
    </div>
  );
};

CardDetails.propTypes = {};

export default CardDetails;
