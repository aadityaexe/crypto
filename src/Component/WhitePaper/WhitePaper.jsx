import { useGSAP } from "@gsap/react";
import logo from "./WhitePaper-assets/image.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const WhitePaper = () => {
  const whiteRef = useRef();

  useGSAP(() => {
    gsap.from("#whiteH1", {
      x: -1200,
      opacity: 0,
      scrollTrigger: {
        trigger: "#whiteH1",
        start: "top 100%",
        end: "bottom 10%",
        scrub: true,
        ease: "power1.inOut",
      },
    });

    gsap.from("#whitePara", {
      x: 1200,
      opacity: 0,
      scrollTrigger: {
        trigger: "#whitePara",
        start: "top 100%",
        end: "bottom 10%",
        scrub: true,
        ease: "power1.inOut",
      },
    });

    const boxes = gsap.utils.toArray("#logos");
    boxes.forEach((logos) => {
      gsap.fromTo(
        logos,
        {
          opacity: 0,
          duration: 10,
        },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: logos,

            scrub: true,
            start: "top center",
            end: "bottom 10%",
          },
        }
      );
    });
  }, []);
  return (
    <div className=" text-white py-12">
      <div className="container mx-auto px-4">
        <h1 id="whiteH1" className="text-4xl font-bold text-center mb-6">
          White Paper
        </h1>
        <p id="whitePara" className="text-lg text-center mb-8">
          Lorem Ipsum is simply dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries.
        </p>
        <div ref={whiteRef} className="flex flex-wrap justify-center gap-4">
          {/* Images with hover effect and transition */}
          <img
            id="logos"
            src={logo}
            alt="Meetass Logo"
            className="h-12 w-auto hover:scale-105 transition-transform duration-300"
          />
          <img
            id="logos"
            src={logo}
            alt="Mars Logo"
            className="h-12 w-auto hover:scale-105 transition-transform duration-300"
          />
          <img
            id="logos"
            src={logo}
            alt="A Logo"
            className="h-12 w-auto hover:scale-105 transition-transform duration-300"
          />
          <img
            id="logos"
            src={logo}
            alt="NS Logo"
            className="h-12 w-auto hover:scale-105 transition-transform duration-300"
          />
          <img
            id="logos"
            src={logo}
            alt="Risksceper Logo"
            className="h-12 w-auto hover:scale-105 transition-transform duration-300"
          />
          <img
            id="logos"
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
