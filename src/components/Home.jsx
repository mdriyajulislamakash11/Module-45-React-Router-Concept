import React from "react";
import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";

const Home = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header />
      {navigation.state === "loading" ? <p>Loading...</p> : <Outlet />}
    </div>
  );
};

export default Home;
