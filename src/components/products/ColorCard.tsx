import React from "react";
import { motion } from "framer-motion";

interface ColorCardProps {
  image: string;
  text: string;
  selected: boolean;
  onclick: () => void;
  color: string;
}

const ColorCard: React.FC<ColorCardProps> = ({
  image,
  text,
  selected,
  onclick,
  color,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`flex items-center rounded-lg px-1 py-2 shadow-md h-[50px] mt-10 cursor-pointer ${
        selected ? "bg-blue-200 border-2 border-blue-700" : "bg-white"
      }`}
      onClick={onclick}
    >
      <img src={image} alt={text} className="h-24 w-16 object-contain mb-12" />
      <div className="flex flex-row w-full justify-between">
        <p className="text-md font-small text-black">{text}</p>
        <div className={`w-6 h-6 mx-1 ${color} rounded-xl align-end`}></div>
      </div>
    </motion.div>
  );
};

export default ColorCard;
