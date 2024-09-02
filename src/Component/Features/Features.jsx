/* eslint-disable react/no-unescaped-entities */
import photo from "./Features-assets/image.png";

const Features = () => {
  return (
    <div className="text-white py-20 px-6 lg:px-10">
      <h1 className="text-4xl font-bold mb-10 text-center">Features</h1>
      <h2 className="text-3xl font-bold mb-5 text-center">Trending Platform</h2>
      <p className="mb-10 text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. It has been the industry's standard dummy text ever since the
        1500s.
      </p>
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
          <img
            src={photo}
            alt="Screenshot of CoinEx platform"
            className="rounded-lg w-full max-w-md h-auto"
          />
        </div>
        <div className="w-full lg:w-1/2 ">
          <h3 className="text-2xl font-bold mb-5">CoinEx: Token Usage</h3>
          <p className="mb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. It has been the industry's standard dummy text ever since
            the 1500s.
          </p>
          <ul className="list-disc ml-5">
            <li>Dummy text of the printing and typesetting industry.</li>
            <li>
              Simply dummy text of the Lorem Ipsum is printing and typesetting.
            </li>
            <li>
              Text of the printing and typesetting industry Lorem Ipsum has
              been.
            </li>
            <li>
              Ipsum has been the industry's standard dummy text since the 1500s.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
