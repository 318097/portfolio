import React from "react";

// import ParticleJs from "./Particles";
import CustomParticles from "./CustomParticles";
import Stacked from "./Stacked";

const Background = ({ theme }) => {
  switch (theme) {
    // case "PARTICLES":
    //   return <ParticleJs />;
    case "CUSTOM-PARTICLES":
      return <CustomParticles />;
    case "STACKED":
      return <Stacked />;
    case "NEO":
    default:
      return <div className="background"></div>;
  }
};

export default Background;
