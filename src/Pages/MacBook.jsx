import React, { useState } from "react";
import { macbookModels } from "../data";

const MacBook = () => {
  const [selectedChip, setSelectedChip] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);

  const currentMb = macbookModels[selectedChip];
  const currentColor = currentMb.colors[selectedColor];

  const handleSelectChip = (index) => {
    setSelectedChip(index);
    setSelectedColor(0);
  };

  return (
    <div className="flex flex-col items-center justify-around bg-white p-8 h-full">
      <h1 className="2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-gray-800 mb-8">
        Choose your new MacBook Air.
      </h1>

      <div className="flex">
        {macbookModels?.map((mac, index) => (
          <button
            key={index}
            className={`2xl:w-36 md:w-28 w-28 2xl:h-18 md:h-12 h-12 flex flex-col justify-evenly items-center border cursor-pointer ${
              index === 0 ? "rounded-l-xl" : "rounded-r-xl"
            } ${
              index === selectedChip
                ? "border-[3px] border-blue-500"
                : "border-2 border-gray-800"
            }`}
            onClick={() => handleSelectChip(index)}
          >
            <span className="2xl:text-lg xl:text-sm text-xs font-bold text-gray-800">
              with {mac.chip} chip
            </span>
            <span className="2xl:text-base xl:text-sm text-xs text-gray-600">
              {mac.price}
            </span>
          </button>
        ))}
      </div>

      <div className="flex flex-col 2xl:p-4 md:items-start items-center">
        <div className="w-80 h-64 2xl:mb-0 -mb-8 -mt-2">
          <img
            src={currentColor.img}
            alt={`MacBook Air wiht ${currentMb.chip}`}
            className="2xl:w-72 xl:w-52 w-48 h-[70%] 2xl:mt-0 sm:mt-6 object-contain mx-auto"
          />
        </div>
        <span className="2xl:text-lg xl:text-sm font-medium text-gray-800 mb-2 text-center md:text-left -mt-4">
          {currentColor.label}
        </span>
        <div className="flex space-x-2 mb-4 md:text-left justify-center md:justify-start">
          {currentMb.colors?.map((color, index) => (
            <button
              key={index}
              style={{ backgroundColor: color.bg }}
              className={`2xl:w-6 sm:w-5 w-4 2xl:h-6 sm:h-5 h-4 rounded-full hover:border-blue-500 hover:border-2 ${
                selectedColor === index
                  ? "border-2 border-blue-400"
                  : "border-transparent"
              }`}
              onClick={() => setSelectedColor(index)}
            ></button>
          ))}
        </div>
        <img
          src={currentMb.icon}
          alt={`Apple ${currentMb.chip} icon`}
          className="w-12 h-12 2xl:mb-4 xl:mb-2"
        />
        <div className="2xl:mb-4 xl:mb-2 text-center md:text-left">
          {currentMb.specs?.map((spec, index) => (
            <p className="2xl:text-lg xl:text-base font-semibold text-gray-800 mb-0.5">
              {spec}
            </p>
          ))}
        </div>
        <button
          type="button"
          className="w-min text-sm py-1 px-3 bg-blue-400 rounded-full text-white mt-4 mad:mt-0"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default MacBook;
