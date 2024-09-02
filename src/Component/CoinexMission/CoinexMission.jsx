/* eslint-disable react/no-unescaped-entities */
import photo from "./CoinexMission-assets/ss.png";

const CoinexMission = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:space-x-0">
        {/* Text Section */}
        <div className="lg:w-1/2 lg:pr-4 mb-0 lg:mb-0 order-2 lg:order-1">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Our Coinex Mission
          </h2>
          <p className="text-lg mb-4 text-gray-300">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p className="text-lg mb-4 text-gray-300">
            Here is 3 Easy Steps to Buy & Sell Bitcoin. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book.
          </p>
          <p className="text-lg mb-4 text-gray-300">
            Here is 3 Easy Steps to Buy & Sell Bitcoin. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book.
          </p>
        </div>
        {/* Image Section */}
        <div className="order-1 lg:order-2 flex items-center justify-center">
          <img
            src={photo}
            alt="Mission"
            className="w-60 h-auto object-cover rounded-lg drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CoinexMission;
