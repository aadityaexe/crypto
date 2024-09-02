import BackgroundVideo from "./Component/BackgroundVideo/BackgroundVideo";
import BlogSlider from "./Component/BlogSlider/BlogSlider";
import Coinbuilt from "./Component/Coinbuilt/Coinbuilt";
import CoinEx from "./Component/CoinEx/CoinEx";
import CoinexMission from "./Component/CoinexMission/CoinexMission";
import EcosystemKeyFeatures from "./Component/EcosystemKeyFeatures/EcosystemKeyFeatures";
import ExecutiveAdvisor from "./Component/ExecutiveAdvisor/ExecutiveAdvisor";
import Faq from "./Component/Faq/Faq";
import CryptoFeatures from "./Component/FeatureCard/FeatureCard";
import Features from "./Component/Features/Features";
import Footer from "./Component/Footer/Footer";
import Hero from "./Component/Hero/Hero";
import Navbar from "./Component/Navbar/Navbar";
import OurCoinexMission from "./Component/OurCoinexMission/OurCoinexMission";
import PartnersSupporters from "./Component/PartnersSupporters/PartnersSupporters";
import PieChart from "./Component/PieChart/PieChart";
import Roadmap from "./Component/Roadmap/Roadmap";
import TeamMembers from "./Component/TeamMembers/TeamMembers";
import TokenSale from "./Component/TokenSale/TokenSale";
import WhitePaper from "./Component/WhitePaper/WhitePaper";

function App() {
  return (
    <>
      <div className="hello overflow-hidden">
        <BackgroundVideo />
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Navbar />
        <Hero />
        <WhitePaper />
        <CoinEx />
        <CryptoFeatures />
        <CoinexMission />
        <Coinbuilt />
        <OurCoinexMission />
        <EcosystemKeyFeatures />
        <TokenSale />
        <PieChart />
        <Roadmap />

        <Features />
        <TeamMembers />
        <ExecutiveAdvisor />
        <BlogSlider />
        <PartnersSupporters />
        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default App;
