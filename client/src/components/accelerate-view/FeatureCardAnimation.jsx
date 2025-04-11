import { FaPlus, FaPhone, FaDiscord, FaGift } from 'react-icons/fa';
import { useState } from 'react';

export default function FeatureStack() {
  const [hovered, setHovered] = useState(false);

  const cards = [
    {
      icon: <FaPlus />,
      text: 'Commit a project',
    },
    {
      icon: <FaPhone className="text-green-400" />,
      text: 'Connect with controller',
    },
    {
      icon: <FaDiscord className="text-indigo-400" />,
      text: 'Discord server',
    },
    {
      icon: <FaGift className="text-yellow-400" />,
      text: 'Earn rewards',
    },
  ];

  return (
    <div
      className="bg-[#8edbff] p-6 rounded-xl w-fit mx-auto relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-[260px] h-[220px]">
        {cards.map((card, index) => {
          const baseTop = 60;
          const baseLeft = 15;

          return (
            <div
              key={index}
              className="absolute bg-[#1a1a1a] text-white px-3 py-3 rounded shadow flex items-center gap-3 transition-all duration-500 ease-in-out w-56"
              style={{
                top: hovered ? `${index * baseTop}px`:index*44,
                left: hovered ? 0 : `${index * baseLeft}px`,
              }}
            >
              {card.icon}
              <span className="text-sm font-medium">{card.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
