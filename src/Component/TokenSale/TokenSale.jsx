/* eslint-disable react/no-unescaped-entities */
const TokenSale = () => {
  return (
    <div className="text-white p-8 flex flex-col justify-center">
      <div>
        <h1 className="text-4xl font-bold mb-6 text-center">Token Sale</h1>
        <p className="text-lg mb-8 text-center md:text-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. It has been the industry's standard dummy text ever since
          the 1500s, when an unknown printer took a galley of type and scrambled
          it to make a type specimen book.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="text-black rounded-lg border-2	">
          <div className="bg-yellow-500 rounded-sm">
            <h2 className="text-2xl font-bold mb-4">Pre-Sale Stage 1</h2>
            <p className="text-lg mb-2">15-31 May 2019</p>
          </div>
          <p className="text-xl font-bold mb-4">1 ETH = 150 REC</p>
          <p className="mb-2">40% bonus, 1 CoinEX ~ $14</p>
          <p className="font-bold mb-2">21,000,000 STMX</p>
          <p>(up to $0.75 million)</p>
        </div>
        <div className="text-black rounded-lg border-2	">
          <div className="bg-yellow-500 rounded-sm">
            <h2 className="text-2xl font-bold mb-4">Pre-Sale Stage 2</h2>
            <p className="text-lg mb-2">1-15 June 2019</p>
          </div>
          <p className="text-xl font-bold mb-4">1 ETH = up to 41,000 STMX</p>
          <p className="mb-2">40% bonus, 1 CoinEX ~ $14</p>
          <p className="font-bold mb-2">21,000,000 STMX</p>
          <p>(up to $0.75 million)</p>
        </div>
        <div className="text-black rounded-lg border-2	">
          <div className="bg-yellow-500 rounded-sm">
            <h2 className="text-2xl font-bold mb-4">Pre-Sale Stage 3</h2>
            <p className="text-lg mb-2">16-31 June 2019</p>
          </div>
          <p className="text-xl font-bold mb-4">1 ETH = up to 41,000 STMX</p>
          <p className="mb-2">40% bonus, 1 CoinEX ~ $14</p>
          <p className="font-bold mb-2">21,000,000 STMX</p>
          <p>(up to $0.75 million)</p>
        </div>
      </div>
      <h2 className="text-4xl font-bold mt-12 mb-6 text-center">
        Token Sale Proceeds
      </h2>
      <p className="text-lg mb-8 text-center md:text-left">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. It has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </p>
    </div>
  );
};

export default TokenSale;
