import DraggableToggle from './DraggableToggle';
import FeatureStack from './FeatureCardAnimation';

export default function FeatureSection() {
  return (
    <section className="py-16 px-6 bg-[#0f0f0f] text-white">
      <div>
        <h1>Feature section</h1>
        <p></p>
      </div>
      {/* ... other content ... */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <FeatureStack />

        {/* Right */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Commit your ideas to projects and <br /> <span className="text-white">Earn rewards</span>
          </h2>
          <p className="text-gray-300 mb-3">
            Have an idea? Commit it to Motren projects and see it come to life
          </p>
          <p className="text-gray-300 mb-6">
            Earn rewards while creating a <span className="text-blue-400 font-medium">meaningful impact!</span>
          </p>

          {/* 👇 Draggable toggle button here */}
          <DraggableToggle label="Start a Project" onToggle={(val) => console.log("Toggled:", val)} />
        </div>
      </div>
    </section>
  );
}
