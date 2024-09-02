import logo from "./WhitePaper-assets/image.png";
const WhitePaper = () => {
  return (
    <div className=" text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">White Paper</h1>
        <p className="text-lg text-center mb-8">
          Lorem Ipsum is simply dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {/* Images with hover effect and transition */}
          <img
            src={logo}
            alt="Meetass Logo"
            className="h-12 w-auto hover:scale-105 transition-transform duration-300"
          />
          <img
            src={logo}
            alt="Mars Logo"
            className="h-12 w-auto hover:scale-105 transition-transform duration-300"
          />
          <img
            src={logo}
            alt="A Logo"
            className="h-12 w-auto hover:scale-105 transition-transform duration-300"
          />
          <img
            src={logo}
            alt="NS Logo"
            className="h-12 w-auto hover:scale-105 transition-transform duration-300"
          />
          <img
            src={logo}
            alt="Risksceper Logo"
            className="h-12 w-auto hover:scale-105 transition-transform duration-300"
          />
          <img
            src={logo}
            alt="Meetoss Logo"
            className="h-12 w-auto hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default WhitePaper;
