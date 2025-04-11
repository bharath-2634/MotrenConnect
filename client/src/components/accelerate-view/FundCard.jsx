import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";

const FundCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Add Icon Button */}
      <div className="z-10 w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center shadow-lg cursor-pointer">
        <FaPlus className="text-white text-2xl" />
      </div>

      {/* Animated Fund Card */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isHovered ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 20 }}
        className="absolute left-16 origin-left bg-white rounded-2xl shadow-2xl overflow-hidden p-4 flex flex-col gap-2"
        style={{
          width: 300,
          minHeight: 180,
          transformOrigin: "left",
        }}
      >
        <div className="text-lg font-semibold text-gray-800">Add Funds</div>
        <div className="text-sm text-gray-600">
          Easily top up your wallet to stay ready for new subscriptions.
        </div>

        <div className="mt-2">
          <span className="text-gray-500 text-sm">Current Balance:</span>
          <div className="text-xl font-bold text-green-600">₹500</div>
        </div>

        <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
          Add Funds
        </button>
      </motion.div>
    </div>
  );
};

export default FundCard;
  