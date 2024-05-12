"use client";
import React from "react";
import { FAQ_QUESTIONS } from "./Dropdown/contants";
import { Dropdown } from "./Dropdown/Dropdown";


const Menu = () => {
  return (
    <div className="py-8 bg-gradient-to-b from-gray-800 to-gray-950">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-7xl max-md:text-5xl font-bold text-white mb-12">Frequently Asked Questions</h1>
      </div>
      <div className="flex flex-col ml-5 mb-10 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          {FAQ_QUESTIONS.map((item, index) => (
            <Dropdown
              key={item.key}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;