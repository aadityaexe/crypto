import faxImg from "./EcosystemKeyFeatures-assets/fax.png"; // Replace with the actual path

const cards = [
  {
    imgSrc: faxImg, // Use the imported image
    title: "Fax Service",
  },
  {
    imgSrc: faxImg,
    title: "Easy Payment",
  },
  {
    imgSrc: faxImg,
    title: "Daily Cash Out",
  },
  {
    imgSrc: faxImg,
    title: "No Dilution",
  },
  {
    imgSrc: faxImg,
    title: "Smart App",
  },
  {
    imgSrc: faxImg,
    title: "Easy Payment",
  },
];

const EcosystemKeyFeatures = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        Ecosystem Key Features
      </h2>
      <p className="text-lg text-center mb-12">
        Lorem Ipsum is simply dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen
        book. It has survived not only five centuries.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center text-center"
          >
            <img
              src={card.imgSrc}
              alt={card.title}
              className="mb-4 w-16 h-16 object-contain"
            />
            <h3 className="text-xl font-bold text-white">{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcosystemKeyFeatures;
