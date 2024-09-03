import { useGSAP } from "@gsap/react";
import gsap from "gsap";

/* eslint-disable react/prop-types */
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="p-4 rounded-lg shadow-lg bg-gray-800">
      <div className="flex justify-center mb-4">
        <img src={icon} alt={title} className="w-16 h-16" />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

const CryptoFeatures = () => {
  useGSAP(() => {
    gsap.to("#featuH1", {
      opacity: 0,
      duration: 5,

      scrollTrigger: {
        trigger: "#featuH1",
        scrub: true,
        start: "top 25%",
        end: "bottom 20%",
        markers: true,
      },
    }),
      gsap.to("#card", {
        x: 3000,
        duration: 3,
        stagger: {
          from: "center",
          each: 1,
          duration: 6,
        },
        scrollTrigger: {
          trigger: "#card",
          scrub: true,
          start: "top 15%",
          end: "bottom 20%",
          markers: true,
        },
      });
  }, []);

  const features = [
    {
      icon: "https://img.icons8.com/color/48/000000/mining.png",
      title: "Safe & Secure",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: "https://img.icons8.com/color/48/000000/bitcoin.png",
      title: "Excerpt Tokens",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: "https://img.icons8.com/color/48/000000/coins.png",
      title: "Easy Payment",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: "https://img.icons8.com/color/48/000000/currency-exchange.png",
      title: "Daily Cash Out",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
    <section className="container mx-auto py-16">
      <h2
        id="featuH1"
        className="text-3xl font-bold text-center text-white mb-10"
      >
        The Crypto Features
      </h2>
      <div
        id="card"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default CryptoFeatures;
