import React from "react";
import Heading from "../components/Task2/Heading";
import Card1 from "../components/Task2/Card1";
import Card2 from "../components/Task2/Card2";
import Card3 from "../components/Task2/Card3";
import Card4 from "../components/Task2/Card4";

const Task2 = () => {
  return (
    <section className="w-7xl h-[90%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-12">
      <Heading/>
      <div className="grid grid-cols-2 gap-8">
        {/* Card 1 */}
        <Card1 />

        {/* Card 2 */}
        <Card2 />

        {/* Card 3 */}
        <Card3 />

        {/* Card 4 */}
        <Card4 />
        
      </div>
    </section>
  );
};

export default Task2;
