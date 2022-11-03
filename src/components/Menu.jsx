import React from "react";
import MenuItem from "./MenuItem";
import Starter from "./Starter";

const Menu = ({ endpoint: pizzas, starters }) => {
  return (
    <>
      <div className="2xl:px-52 lg:px-6   xl:py-24 px-4">
        <div className="m-auto text-center pb-8 flex flex-col gap-8 ">
          <h1 className="text-4xl font-bold">THE BEST PIZZA IN MANITOBA</h1>
        </div>
        {/* title */}
        <div className="items-center grid pb-12">
          <h1 className="text-[#d1411e] text-5xl lg:text-4xl md:text-3xl filter font-bold ">
            Menu
          </h1>
        </div>
        <div className="py-32">
          <h1 className="text-lg font-bold text-slate-800 uppercase">
            Starters
          </h1>
          <div className="justify-items-center items-center grid gap-7  2xl:gap-16  mt-7 md:px-12 lg:px-0  md:grid-cols-2 grid-cols-1">
            {starters?.map((app, index) => {
              return <Starter {...app} key={index} />;
            })}
          </div>
        </div>
        <h1 className="text-lg font-bold text-slate-800 uppercase">
          Specialty Pizzas
        </h1>
        <div className="justify-items-center items-center grid gap-7  lg:gap-16 xl:gap-20 mt-7 lg:px-24 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {pizzas?.map((item, index) => {
            return <MenuItem {...item} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Menu;
