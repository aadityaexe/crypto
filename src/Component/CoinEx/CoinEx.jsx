/* eslint-disable react/no-unescaped-entities */
import { useGSAP } from "@gsap/react";
import yourImage from "./CoinEx-assets/Rem.jpg";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
const CoinEx = () => {
  const infoRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to("#infoH1", {
      opacity: 0,
      delay: 2,
      scrollTrigger: {
        trigger: "#infoH1",
        start: "top 15%",
        end: "bottom 10%",
        scrub: true,
        ease: "power2.inOut",
      },
      stagger: {
        each: 1,
        duration: 6,
      },
    });

    gsap.fromTo(
      "#CoinExImg",
      {
        opacity: 0,
        duration: 5,

        scrollTrigger: {
          trigger: "#CoinExImg",
          scrub: true,
          start: "top 40%",
          end: "bottom 100%",
        },
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: "#CoinExImg",
          scrub: true,
          start: "top 50%",
          end: "bottom 100%",
        },
      }
    ),
      gsap.to("#info", {
        x: 2000,
        duration: 6,
        stagger: {
          each: 1,
          duration: 6,
        },
        scrollTrigger: {
          trigger: "#info",
          start: "top 20%",
          end: "bottom 10%",
          scrub: true,
          ease: "power2.inOut",
        },
      }),
      gsap.to("#btn", {
        opacity: 0,
        scrollTrigger: {
          trigger: "#btn",
          start: "top 75%",
          end: "bottom 20%",
          scrub: true,
          markers: true,
        },
      });
  }, []);

  return (
    <div className="text-white p-6 md:p-10 lg:p-16 flex flex-col md:flex-row items-center justify-center">
      <div className="flex-shrink-0 w-60 mb-6 md:mb-0 flex justify-center">
        <img
          id="CoinExImg"
          src={yourImage}
          alt="Crypto"
          className="w-60 h-auto object-cover rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start md:pl-10">
        <h1
          id="infoH1"
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
        >
          WHAT IS CRYPTO
        </h1>
        <h2
          id="infoH1"
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-10"
        >
          CoinEx built a platform to buy and sell shares.
        </h2>
        <p
          id="info"
          ref={infoRef}
          className="mb-4 text-base md:text-lg lg:text-xl overflow-hidden"
        >
          Here are 3 easy steps to buy & sell Bitcoin. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book.
        </p>
        <p id="info" className="mb-4 text-base md:text-lg lg:text-xl">
          Here are 3 easy steps to buy & sell Bitcoin. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book.
        </p>
        <button
          id="btn"
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105"
        >
          Buy Token
        </button>
      </div>
    </div>
  );
};

export default CoinEx;
