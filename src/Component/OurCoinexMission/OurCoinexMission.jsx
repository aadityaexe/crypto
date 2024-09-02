/* eslint-disable react/no-unescaped-entities */
import photo from "./OurCoinexMission-assest/image.png";

const OurCoinexMission = () => {
  return (
    <div className="text-white p-6 md:p-10 flex flex-col md:flex-row items-center justify-center">
      <div className="w-full md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 transition-transform duration-300 transform hover:scale-105">
          Our Coinex Mission
        </h1>
        <p className="mb-4 text-lg md:text-xl transition-opacity duration-300 hover:opacity-75">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <p className="mb-4 text-lg md:text-xl transition-opacity duration-300 hover:opacity-75">
          Here is 3 Easy Steps to Buy & Sell Bitcoin. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book.
        </p>
        <p className="text-lg md:text-xl transition-opacity duration-300 hover:opacity-75">
          Here is 3 Easy Steps to Buy & Sell Bitcoin, Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book.
        </p>
      </div>
      <div className="w-60 flex justify-center">
        <img
          src={photo}
          alt="Coinex Chart"
          className="w-60 h-auto object-cover transition-transform duration-300 transform hover:scale-110"
        />
      </div>
    </div>
  );
};

export default OurCoinexMission;
