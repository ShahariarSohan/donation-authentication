import { useContext, useEffect, useState } from "react";
import { CardContext } from "../Layout/MainLayout";
import { Pie, PieChart, Cell, ResponsiveContainer } from "recharts";

const Statistics = () => {
  const totalCards = useContext(CardContext);
  const [myDonation, setMyDonation] = useState(0);
  const [totalDonation, setTotalDonation] = useState(100);
  const storedCards = JSON.parse(localStorage.getItem("donated"));
  useEffect(() => {
    if (!storedCards) {
      setMyDonation(0);
      setTotalDonation(100);
    } else {
      const donated = parseFloat(
        ((storedCards.length / totalCards.length) * 100).toFixed(2)
      );
      setMyDonation(donated);
      setTotalDonation(100 - donated);
    }
  }, []);

  const data = [
    {
      name: "My Donation",
      value: myDonation,
      fill: "green",
    },
    {
      name: "Total Donation",
      value: totalDonation,
      colors: "red",
    },
  ];
  const colors = ["green", "red"];
  return (
    <div className="container mx-auto md:h-[500px] flex flex-col space-y-16 justify-center items-center my-5">
      <ResponsiveContainer width="100%" height="70%">
        <PieChart width={730} height={400}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-col md:flex-row gap-2 md:gap-20 justify-center items-center">
        <div className="flex gap-2 items-center justify-center">
          <p>Your Donation</p>
          <div className="bg-green-600 w-36 h-3"></div>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <p>Total Donation</p>
          <div className="bg-red-600 w-36 h-3"></div>
        </div>
      </div>
    </div>
  );
};

Statistics.propTypes = {};

export default Statistics;
