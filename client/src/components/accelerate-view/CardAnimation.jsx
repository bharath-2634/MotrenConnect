import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { FaWhatsapp, FaUsers, FaUpload } from 'react-icons/fa';

const cards = [
  {
    title: "Gemma's Design Space",
    description:
      'Join my community of gals who are crazy about design. We share learning resources, design news, and help each other with projects.',
  },
  {
    title: 'Dev Club',
    description:
      'Join the developers hub to level up your code. We host events, review each other’s work and grow together.',
  },
  {
    title: 'Creative Space',
    description:
      'A vibrant community for content creators to network, collaborate, and grow together.',
  },
  {
    title: 'Business Circle',
    description:
      'Network with business minds, learn new strategies, and level up your entrepreneurship.',
  },
  {
    title: 'FBA Sellers Group',
    description:
      'Master Amazon FBA with tips, templates, and success stories from real sellers.',
  },
  {
    title: 'Fitness Gang',
    description:
      'Stay motivated and fit with workout routines, diet advice, and community support.',
  },
];

export default function CardAnimation() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollStep = 1;
    const speed = 20;

    const scrollInterval = setInterval(() => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += scrollStep;
      }
    }, speed);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/70 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#0f0f0f] via-[#0f0f0f]/70 to-transparent z-10" />

      <div
        ref={scrollRef}
        className="w-full overflow-x-scroll whitespace-nowrap no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <motion.div
          className="flex gap-6 px-10 py-10"
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
          whileTap={{ cursor: 'grabbing' }}
        >
          {[...cards, ...cards].map((card, i) => (
            <motion.div
              key={i}
              className="min-w-[320px] max-w-[320px] h-auto px-6 py-5 rounded-3xl bg-white shadow-xl text-center text-gray-800 flex flex-col justify-between transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0.7, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img
                src={`https://picsum.photos/id/${i+180}/200`}
                alt={card.title}
                className="w-14 h-14 mx-auto mb-3 rounded-full object-cover shadow-md"
              />
              <h2 className="text-base font-semibold text-purple-700 mb-1">{card.title}</h2>
              <p className="text-sm text-gray-600 mb-3 line-clamp-3">{card.description}</p>

              <div className="mb-3">
                <p className="text-xs text-purple-700 font-medium">Access to</p>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <span className="text-white bg-green-500 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <FaWhatsapp size={13} /> WhatsApp
                  </span>
                </div>
              </div>

              <div className="text-left text-sm space-y-2 mb-4">
                <div className="flex gap-2 items-start">
                  <span className="text-yellow-500 mt-1"><FaUsers size={14} /></span>
                  <div>
                    <p className="font-medium text-purple-700 text-sm">Learn with friends</p>
                    <p className="text-gray-500 text-xs">Feedback & improvement together.</p>
                  </div>
                </div>

                <div className="flex gap-2 items-start">
                  <span className="text-yellow-500 mt-1"><FaUpload size={14} /></span>
                  <div>
                    <p className="font-medium text-purple-700 text-sm">Share your work</p>
                    <p className="text-gray-500 text-xs">Get visibility & feedback.</p>
                  </div>
                </div>
              </div>

              <button className="bg-green-500 hover:bg-green-600 text-white text-sm py-2 rounded-full w-full font-medium">
                Subscribe • $22 USD / month
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
