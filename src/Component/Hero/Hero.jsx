import { useState, useEffect } from "react";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 160,
    hours: 6,
    minutes: 51,
    seconds: 34,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const { days, hours, minutes, seconds } = timeLeft;
      if (seconds > 0) {
        setTimeLeft({ ...timeLeft, seconds: seconds - 1 });
      } else if (minutes > 0) {
        setTimeLeft({ ...timeLeft, minutes: minutes - 1, seconds: 59 });
      } else if (hours > 0) {
        setTimeLeft({
          ...timeLeft,
          hours: hours - 1,
          minutes: 59,
          seconds: 59,
        });
      } else if (days > 0) {
        setTimeLeft({
          ...timeLeft,
          days: days - 1,
          hours: 23,
          minutes: 59,
          seconds: 59,
        });
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <div className=" text-white font-sans flex flex-col justify-center items-center h-screen overflow-hidden">
      <h1 className="text-4xl font-bold mb-8">
        Token creative of CoinEX Theme
      </h1>
      <p className="mb-8">Coinex on the ethereum ERC20 blockchain</p>
      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col items-center">
          <span className="text-6xl font-bold">{timeLeft.days}</span>
          <span>Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-6xl font-bold">{timeLeft.hours}</span>
          <span>Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-6xl font-bold">{timeLeft.minutes}</span>
          <span>Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-6xl font-bold">{timeLeft.seconds}</span>
          <span>Seconds</span>
        </div>
      </div>
      <div className="mt-8 flex space-x-4">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
          Buy Tokens
        </button>
        <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          White Paper
        </button>
      </div>
    </div>
  );
};

export default Hero;
