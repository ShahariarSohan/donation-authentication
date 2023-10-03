import { Outlet, useLoaderData } from "react-router-dom";
import NavBar from "../Header/NavBar";
import { createContext } from "react";
export const CardContext = createContext();
const MainLayout = () => {
  const cardData = useLoaderData();

  return (
    <div>
      <NavBar></NavBar>
      <CardContext.Provider value={cardData}>
        <Outlet></Outlet>
      </CardContext.Provider>
    </div>
  );
};

export default MainLayout;
