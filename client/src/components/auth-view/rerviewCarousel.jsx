import React, { useState, useEffect } from "react";
import Profile from "../../assets/man_look.webp";

const reviews = [
  {
    text: "Explore the inspiring work created by our community",
    name: "Kumar",
    role: "Entrepreneur",
    face: Profile,
  },
  {
    text: "This platform has helped me find the best talents",
    name: "Bharath",
    role: "Startup Founder",
    face: Profile,
  },
  {
    text: "The funding opportunities here are incredible",
    name: "Sahana",
    role: "Investor",
    face: Profile,
  },
];

const ReviewCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((i) => (i + 1) % reviews.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[80%] max-w-md bg-[#121212] p-6 text-white rounded-[.5rem] shadow-lg font-poppins">
      <p className="text-[.9rem] text-gray-300">{reviews[index].text}</p>
      <div className="flex items-center gap-3 mt-4">
        <img
          src={reviews[index].face}
          alt="motren"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h4 className="font-medium text-white font-poppins text-[.8rem]">{reviews[index].name}</h4>
          <span className="text-gray-400 flex items-center gap-1 text-[.7rem]">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            {reviews[index].role}
          </span>
        </div>
      </div>

      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {reviews.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full transition-all ${
              index === i ? "bg-blue-500" : "bg-gray-600"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;
