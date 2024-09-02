function Roadmap() {
  const steps = [
    {
      title: "Rinks Cooper",
      subtitle: "Web Developer",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis justo id pulvinar suscipit. Pellentesque rutrum vehicula erat sed dictum. Integer quis turpis magna. Suspendisse tincidunt elit at erat tincidunt, vel vulputate arcu dapibus. Etiam accumsan ornare posuere.",
    },
    {
      title: "JD Scot",
      subtitle: "CoinEx",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis justo id pulvinar suscipit. Pellentesque rutrum vehicula erat sed dictum. Integer quis turpis magna. Suspendisse tincidunt elit at erat tincidunt, vel vulputate arcu dapibus. Etiam accumsan ornare posuere.",
    },
    {
      title: "Rinks Cooper",
      subtitle: "Web Developer",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis justo id pulvinar suscipit. Pellentesque rutrum vehicula erat sed dictum. Integer quis turpis magna. Suspendisse tincidunt elit at erat tincidunt, vel vulputate arcu dapibus. Etiam accumsan ornare posuere.",
    },
    {
      title: "JD Scot",
      subtitle: "CoinEx",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis justo id pulvinar suscipit. Pellentesque rutrum vehicula erat sed dictum. Integer quis turpis magna. Suspendisse tincidunt elit at erat tincidunt, vel vulputate arcu dapibus. Etiam accumsan ornare posuere.",
    },
    {
      title: "Rinks Cooper",
      subtitle: "Web Developer",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis justo id pulvinar suscipit. Pellentesque rutrum vehicula erat sed dictum. Integer quis turpis magna. Suspendisse tincidunt elit at erat tincidunt, vel vulputate arcu dapibus. Etiam accumsan ornare posuere.",
    },
    {
      title: "JD Scot",
      subtitle: "CoinEx",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis justo id pulvinar suscipit. Pellentesque rutrum vehicula erat sed dictum. Integer quis turpis magna. Suspendisse tincidunt elit at erat tincidunt, vel vulputate arcu dapibus. Etiam accumsan ornare posuere.",
    },
  ];

  return (
    <div className=" text-white p-10 relative">
      <h1 className="text-3xl font-bold mb-4 text-center">Company Roadmap</h1>
      <p className="mb-8 text-center">
        Lorem Ipsum is simply dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen
        book. It has survived not only five centuries.
      </p>

      {/* Steps */}
      <div className="relative">
        {/* Central line */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1 h-full bg-gray-800 mt-8 mb-8"></div>{" "}
          {/* Margin added here */}
        </div>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center mb-8 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
            style={{ position: "relative", width: "100%" }}
          >
            {index % 2 === 0 && (
              <div className="w-1/2 flex justify-end pr-4">
                <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
              </div>
            )}
            <div className="w-1/2 px-4">
              <div className="bg-gray-900 p-4 rounded-md">
                <h2 className="text-xl font-bold mb-2">{step.title}</h2>
                <p className="text-sm">{step.subtitle}</p>
                <p className="text-sm mt-2">{step.content}</p>
              </div>
            </div>
            {index % 2 !== 0 && (
              <div className="w-1/2 flex justify-start pl-4">
                <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Roadmap;
