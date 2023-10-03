import { useContext, useEffect, useState } from "react";
import { CardContext } from "../Layout/MainLayout";
import Card from "./Card";

const CardContainer = () => {
  const cards = useContext(CardContext);
  const [data, setData] = useState();
  useEffect(() => {
    setData(cards);
  }, []);

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-5 mb-20 px-5 xl:px-0">
      {data?.map((card) => (
        <Card key={card.id} card={card}></Card>
      ))}
    </div>
  );
};
CardContainer.propTypes = {};
export default CardContainer;
