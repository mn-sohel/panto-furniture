import React from "react";
import Button from "../../components/Button";
import materialImg1 from "../../assets/material1.png";
import materialImg2 from "../../assets/material2.png";
import materialImg3 from "../../assets/material3.png";

const Materials = () => {
  return (
    <section className="section-container my-24 flex flex-col md:flex-row items-center justify-between md:gap-20 gap-8">
      <div className="md:w-1/2 mx-auto">
        <h3 className="uppercase text-lg font-semibold text-[#E58411] mb-4">
          Materials
        </h3>
        <h2 className="capitalize text-4xl font-bold mb-4 lg:w-1/2">
          Very serious materials for making furniture
        </h2>
        {/* <p className='text-[#1E1E1E] dark:text-white mb-5 lg:w-2/3'>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials  </p> */}
        <p className="text-[#1E1E1E] mb-5 lg:w-1/2">
          Because panto was very serious about designing furniture for our
          environment, using a very expensive and famous capital but at a
          relatively low price
        </p>
        <Button text="More Info" />
      </div>
      <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 md:items-end items-center">
        <div>
          <img src={materialImg1} alt="" />
          <img src={materialImg2} alt="" />
        </div>
        <div className="md:col-span-2 col-span-1">
          <img src={materialImg3} alt="" className="w-full md:h-[541px]"/>
        </div>
      </div>
    </section>
  );
};

export default Materials;
