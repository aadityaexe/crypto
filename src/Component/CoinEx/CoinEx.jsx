/* eslint-disable react/no-unescaped-entities */
import yourImage from "./CoinEx-assets/Rem.jpg"; // Replace with the path to your image

const CoinEx = () => {
  return (
    <div className="text-white p-6 md:p-10 lg:p-16 flex flex-col md:flex-row items-center justify-center">
      <div className="flex-shrink-0 w-60 mb-6 md:mb-0 flex justify-center">
        <img
          src={yourImage}
          alt="Crypto"
          className="w-60 h-auto object-cover rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start md:pl-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          WHAT IS CRYPTO
        </h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-10">
          CoinEx built a platform to buy and sell shares.
        </h2>
        <p className="mb-4 text-base md:text-lg lg:text-xl">
          Here are 3 easy steps to buy & sell Bitcoin. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book.
        </p>
        <p className="mb-4 text-base md:text-lg lg:text-xl">
          Here are 3 easy steps to buy & sell Bitcoin. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105">
          Buy Token
        </button>
      </div>
    </div>
  );
};

export default CoinEx;
