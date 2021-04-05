import React from "react";

import ParticleJs from "./Particles";
import Stacked from "./Stacked";
import CustomParticles from "./CustomParticles";

const Background = ({ theme }) => {
  switch (theme) {
    case "PARTICLES":
      return <ParticleJs />;
    case "STACKED":
      return <Stacked />;
    case "CUSTOM-PARTICLES":
      return <CustomParticles />;
    case "NEO":
    default:
      return <div className="background"></div>;
  }
};

export default Background;
