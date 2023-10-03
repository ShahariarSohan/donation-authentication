import { useState } from "react";
import DonatedCard from "../Cards/DonatedCard";

const Donation = () => {
  const storedCards = JSON.parse(localStorage.getItem("donated"));
  const [show, setShow] = useState(false);
  const handleShowAllButton = () => {
    setShow(!show);
  };
  return (
    <div className="flex flex-col-reverse mb-5">
      {!storedCards && <h1 className="text-center font-bold">No Data Found</h1>}

      {storedCards?.length > 4 && (
        <div
          className="mx-auto"
          style={show ? { display: "none" } : { display: "block" }}
        >
          <button
            onClick={handleShowAllButton}
            className=" w-36 px-4 py-2 bg-green-600 hover:bg-green-800 font-bold text-center text-white shadow-xl rounded-md "
          >
            Show All
          </button>
        </div>
      )}

      <div className=" container mx-auto grid grid-cols-1 px-5 xl:px-0  xl:grid-cols-2 gap-5 my-5">
        {show
          ? storedCards?.map((storedCard) => (
              <DonatedCard
                key={storedCard.id}
                storedCard={storedCard}
              ></DonatedCard>
            ))
          : storedCards
              ?.slice(0, 4)
              ?.map((storedCard) => (
                <DonatedCard
                  key={storedCard.id}
                  storedCard={storedCard}
                ></DonatedCard>
              ))}
      </div>
    </div>
  );
};

Donation.propTypes = {};

export default Donation;
