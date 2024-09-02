import logo from "./PartnersSupporters-assets/fax.png";

const partners = [
  { id: 1, name: "Partner 1", logo },
  { id: 2, name: "Partner 2", logo },
  { id: 3, name: "Partner 3", logo },
  { id: 4, name: "Partner 4", logo },
  { id: 5, name: "Partner 5", logo },
  { id: 6, name: "Partner 6", logo },
];

const PartnersSupporters = () => (
  <div className="py-16">
    <div className="text-center mb-12">
      <h2 className="text-white text-4xl font-bold">Partners & Supporters</h2>
      <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
        Lorem Ipsum is simply dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen
        book. It has survived not only five centuries.
      </p>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
      {partners.map(({ id, name, logo }) => (
        <div key={id} className="flex justify-center items-center p-1">
          <img
            src={logo}
            alt={`Logo of ${name}`}
            className="opacity-70 hover:opacity-100 w-10 transition-opacity duration-300"
          />
        </div>
      ))}
    </div>
  </div>
);

export default PartnersSupporters;
