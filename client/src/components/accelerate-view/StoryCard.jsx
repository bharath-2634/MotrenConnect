import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUserAlt } from "react-icons/fa";

const StoryCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Circle Button */}
      <div className="z-10 w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center shadow-lg cursor-pointer">
        <FaUserAlt className="text-white text-2xl" />
      </div>

      {/* Animated Story Card */}
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
        {/* Profile Info */}
        <div className="flex items-center gap-3">
          <img
            src="https://picsum.photos/200"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <div className="text-md font-semibold text-gray-800">Alex Johnson</div>
            <div className="text-sm text-gray-500">"Learner. Creator. Dreamer."</div>
          </div>
        </div>

        {/* Story Snippet */}
        <p className="text-sm text-gray-700 mt-2">
          "Joining this community helped me grow as a developer. I started with zero
          confidence but now I’ve built two full-stack apps!"
        </p>

        {/* View Story Button */}
        <button className="mt-3 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition">
          View Full Story
        </button>
      </motion.div>
    </div>
  );
};

export default StoryCard;
