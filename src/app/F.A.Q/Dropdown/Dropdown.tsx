'use client'
import React, { FC, useState } from "react";

interface Props {
  title: string;
  description: string;
  index: number;
}

export const Dropdown: FC<Props> = ({ title, description, index }) => {
  const [open, setOpen] = useState(index === 0 || false);
  return (
    <div className="flex justify-center">
      <div>
        <div
          className="flex gap-1 justify-between items-center bg-[#000000] pl-5 pr-4 py-3 rounded-2xl text-white font-bold cursor-pointer md:text-2xl"
          onClick={() => setOpen(!open)}
        >
          <div>{title}</div>
          <span className="flex items-center justify-center min-w-6 min-h-6 max-w-6 max-h-6 bg-black rounded-full">
            <div className="text-lg">{open ? "-" : "+"}</div>
          </span>
        </div>
        <div
          className={`description-container overflow-hidden transition-all duration-500 ${
            open ? "max-h-48" : "max-h-0"
          }`}
        >
          <div className="p-3 ml-2">
            <p className="text-white text-base md:text-xl">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};