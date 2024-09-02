import { useState } from "react";

const PieChart = () => {
  const [hoveredSlice, setHoveredSlice] = useState(null);

  const data = [
    { label: "Lithuania", value: 501.9, color: "red" },
    { label: "Czech Republic", value: 301.9, color: "brown" },
    { label: "Ireland", value: 201.1, color: "orange" },
    { label: "Germany", value: 165.8, color: "yellow" },
    { label: "Australia", value: 139.9, color: "yellow" },
    { label: "Austria", value: 128.3, color: "greenyellow" },
    { label: "UK", value: 99, color: "green" },
    { label: "Belgium", value: 60, color: "deepskyblue" },
    { label: "The Netherlands", value: 50, color: "lightsteelblue" },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  // Calculate the angle and start angle for each slice
  const calculatePath = (startAngle, endAngle) => {
    const radius = 40;
    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
    const startX = 50 + radius * Math.cos((Math.PI / 180) * startAngle);
    const startY = 50 + radius * Math.sin((Math.PI / 180) * startAngle);
    const endX = 50 + radius * Math.cos((Math.PI / 180) * endAngle);
    const endY = 50 + radius * Math.sin((Math.PI / 180) * endAngle);

    return `M 50 50 L ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY} Z`;
  };

  const slices = data.reduce(
    (acc, item, index) => {
      const percentage = (item.value / total) * 100;
      const angle = (percentage / 100) * 360;
      const startAngle = index === 0 ? 0 : acc.lastAngle;
      const endAngle = startAngle + angle;

      acc.paths.push(
        <path
          key={index}
          d={calculatePath(startAngle, endAngle)}
          fill={item.color}
          onMouseEnter={() => setHoveredSlice(index)}
          onMouseLeave={() => setHoveredSlice(null)}
          className={`transition-transform duration-300 ${
            hoveredSlice === index ? "scale-105" : ""
          }`}
        />
      );

      acc.lastAngle = endAngle;
      return acc;
    },
    { paths: [], lastAngle: 0 }
  ).paths;

  return (
    <div className="flex flex-row items-center justify-center">
      <svg width="200" height="200" viewBox="0 0 100 100" className="mb-4">
        <circle cx="50" cy="50" r="40" fill="black" />
        {slices}
      </svg>
      <div className="text-center">
        <ul className="list-none p-0">
          {data.map((item, index) => (
            <li
              key={index}
              className={`flex items-center justify-center mb-2 ${
                hoveredSlice === index ? "font-bold" : ""
              }`}
            >
              <div
                className="w-4 h-4 rounded-full mr-2"
                style={{ backgroundColor: item.color }}
              />
              {item.label}
              <span className="ml-4">{item.value.toFixed(1)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PieChart;
