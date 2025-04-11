import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHandHoldingUsd } from "react-icons/fa";

const EventCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex text-white rounded-2xl p-6 w-full items-center shadow-xl "
    >
      {/* Left: Text Section */}
      <div className="flex-1 pr-6 flex flex-col gap-2">
        <h3 className="text-3xl font-bold mb-2">Participate in Events</h3>
        <p className="text-lg text-gray-300 mb-4">
          Join engaging events that connect you with like-minded individuals and meaningful causes
        </p>
        <button className="bg-[#6A5AE0] hover:bg-[#5849c9] text-white px-4 py-2 rounded-full text-lg font-medium w-fit">
          Join us now !
        </button>
      </div>

      {/* Right: Map and Funding Button */}
      <div className="flex flex-col items-center justify-between bg-[#b3e5fc] rounded-xl p-4 w-52 h-52">
        <motion.img
          src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
          alt="Map"
          className="w-full h-28 object-contain rounded-md"
          animate={isHovered ? { scale: 1.1, rotate: 2 } : { scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        />

        <button className="bg-[#121212] hover:bg-[#1e1e1e] text-white flex items-center gap-2 px-3 py-2 rounded-md mt-4 text-sm">
          <FaHandHoldingUsd className="text-blue-400" />
          Fund this Event
        </button>
      </div>
    </div>
  );
};

export default EventCard;
