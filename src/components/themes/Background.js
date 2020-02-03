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
    case "CUSTOM_PARTICLES":
      return <CustomParticles />;
    default:
      return <div></div>;
  }
};

export default Background;
