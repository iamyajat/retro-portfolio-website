import Intro from "./components/Splash/Intro";
import ParticleBackground from "./components/Splash/ParticleBackground";
import Portfolio from "./components/Portfolio/Portfolio";
import { useState } from "react";

const App = () => {
  const [portfolio, setPortfolio] = useState(false);
  const openPortfolio = () => {
    setPortfolio(!portfolio);
  };

  return (
    <>
      <ParticleBackground />
      <Intro
        name="Yajat Malhotra"
        designation="Software Developer"
        onExplore={openPortfolio}
      />
      {portfolio ? <Portfolio onClose={openPortfolio} /> : ""}
    </>
  );
};

export default App;
