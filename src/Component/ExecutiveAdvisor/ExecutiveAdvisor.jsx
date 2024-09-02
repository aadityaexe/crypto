import { useState } from "react";

const ExecutiveAdvisor = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const advisors = [
    {
      name: "Rinks Cooper",
      role: "CEO, Qwilo",
      imgSrc:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      alt: "Photo of Rinks Cooper, CEO of Qwilo",
    },
    {
      name: "JD Scot",
      role: "CEO, Qwilo",
      imgSrc:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      alt: "Photo of JD Scot, CEO of Qwilo",
    },
    {
      name: "Haris Morgan",
      role: "CEO, Qwilo",
      imgSrc:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      alt: "Photo of Haris Morgan, CEO of Qwilo",
    },
  ];

  return (
    <div
      className="relative w-full max-w-screen-xl mx-auto px-4 py-16"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white mb-4">
          Executive Advisor
        </h2>
        <p className="text-gray-400 text-lg">
          Lorem Ipsum is simply dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {advisors.map((advisor, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-8 text-center transition-transform transform hover:scale-105"
          >
            <img
              src={advisor.imgSrc}
              alt={advisor.alt}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-white mb-2">
              {advisor.name}
            </h3>
            <p className="text-gray-400 text-sm">{advisor.role}</p>
          </div>
        ))}
      </div>

      {/* Hover effect */}
      {hovered && (
        <div className="absolute bottom-0 left-0 right-0 p-4 text-center bg-black bg-opacity-70 rounded-md opacity-0 animate-fadeIn">
          <p className="text-white text-sm">
            Learn more about our executive advisors
          </p>
        </div>
      )}
    </div>
  );
};

export default ExecutiveAdvisor;
