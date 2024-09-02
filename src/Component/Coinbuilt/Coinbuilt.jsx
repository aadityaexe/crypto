/* eslint-disable react/no-unescaped-entities */
import photo from "./Coinbuilt-assets/image.png";

const Coinbuilt = () => {
  return (
    <div className="text-white font-sans">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-center gap-0">
        {/* Text section */}
        <div className="w-full md:w-1/2 order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 animate-fadeIn">
            What is Crypto?
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold animate-slideInLeft">
            Coinex built a platform to buy and sell shares.
          </h2>
          <p className="text-base md:text-lg lg:text-xl mb-4 md:mb-6 animate-fadeIn delay-100">
            Here are 3 easy steps to buy & sell Bitcoin. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>
          <p className="text-base md:text-lg lg:text-xl mb-4 md:mb-6 animate-fadeIn delay-200">
            Here are 3 easy steps to buy & sell Bitcoin. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 animate-bounce">
            Buy Token
          </button>
        </div>
        {/* Image section */}
        <div className="w-60  order-1 md:order-2 flex justify-center animate-slideInRight">
          <img
            src={photo}
            alt="Crypto Platform"
            className="w-60 h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Coinbuilt;
