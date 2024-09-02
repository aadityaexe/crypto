import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Navbar = () => {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.fromTo(
      "#navBar",
      {
        y: -55,
        opacity: 1,
      },
      {
        y: 0,
        duration: 4,
      }
    );
    gsap.fromTo(
      "#logo",
      {
        x: -55,
      },
      {
        x: 0,
        duration: 6,
      }
    );
    gsap.fromTo(
      "#login",
      {
        x: 55,
        opacity: 1,
      },
      {
        x: 0,
        duration: 4,
      }
    );
  }, []);
  return (
    <nav
      id="navBar"
      className=" opacity-0 fixed top-0 w-full bg-transparent backdrop-blur-md z-50"
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-yellow-500 flex font-bold text-xl">
          <a id="logo" href="/">
            COIN<span className="text-white">EX</span>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-white hover:text-yellow-500">
            Home
          </a>
          <a href="#what-is-ico" className="text-white hover:text-yellow-500">
            What is ICO
          </a>
          <a href="#product" className="text-white hover:text-yellow-500">
            Product
          </a>
          <a href="#token" className="text-white hover:text-yellow-500">
            Token
          </a>
          <a href="#roadmap" className="text-white hover:text-yellow-500">
            Road Map
          </a>
          <a href="#team" className="text-white hover:text-yellow-500">
            Team
          </a>
          <a href="#contact-us" className="text-white hover:text-yellow-500">
            Contact Us
          </a>
          <a href="#language" className="text-white hover:text-yellow-500">
            English
          </a>
        </div>

        {/* Login Button */}
        <div>
          <button
            id="login"
            className="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
