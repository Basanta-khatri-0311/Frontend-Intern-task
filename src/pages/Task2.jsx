import React from "react";
import Heading from "../components/Task2/Heading";
import Card3 from "../components/Task2/Card3";
import Card4 from "../components/Task2/Card4";
import FinalCard1 from "../components/Task2/FinalCard1";
import FinalCard2 from "../components/Task2/FinalCard2";

const Task2 = () => {
  return (
    <section className="w-7xl h-[90%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-12">
      <Heading/>
      <div className="grid grid-cols-2 gap-12">
        {/* Card 1 */}
        <FinalCard1 />

        {/* Card 2 */}
        <FinalCard2 />

        {/* Card 3 */}
        <Card3 />

        {/* Card 4 */}
        <Card4 />
        
      </div>
    </section>
  );
};

export default Task2;
