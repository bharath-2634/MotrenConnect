import { FaToggleOn } from 'react-icons/fa';
import StoryCard from './StoryCard';
import FundCard from './FundCard';
import EventCard from './EventCard';
import DraggableToggleButton from './DraggableToggle';

export default function StoryAndFunds() {
  return (
    <section className="bg-[#0f0f0f] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Section 1: Add your story */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div className='flex flex-col gap-2'>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Add your story and inspire others</h2>
            <p className="text-gray-300 mb-6 text-lg">
              Share your journey with the community and make a meaningful impact!
            </p>
            <DraggableToggleButton label={"Add your Story"} />
          </div>

          {/* Right card */}
          <StoryCard/>
        </div>

        {/* Section 2: Add Funds */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left card */}
          <FundCard/>

          {/* Right text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Raise investments and discover the joy they bring
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              Keep track of your contributions with ease and transparency
            </p>
            <DraggableToggleButton label={"Add Funds"} />
          </div>
        </div>

        <div className="grid md:grid-cols-1 gap-12 items-center">
          <EventCard />
        </div>

      </div>
    </section>
  );
}
