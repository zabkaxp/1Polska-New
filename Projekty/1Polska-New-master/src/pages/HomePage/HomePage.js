import React from "react";
import Highlights from "./Highlights";
import Demands from "./Demands";
import Poll from "./Poll";
import Representatives from "./Representatives";

const HomePage = () => {
  return (
    <div>
      <section>{<Highlights />}</section>
      <section>{<Demands />}</section>
      <section>{<Poll />}</section>
      <section>{<Representatives />}</section>
    </div>
  );
};

export default HomePage;
