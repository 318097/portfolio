import React from "react";

import ParticleJs from "./Particles";
import Stacked from "./Stacked";
// import CustomParticles from "./CustomParticles";

const Background = ({ theme }) => {
  switch (theme) {
    case "PARTICLES":
      return <ParticleJs />;
    case "STACKED":
      return <Stacked />;
    // case 'CUSTOM':
    //   return <CustomParticles />;
    default:
      return <div></div>;
  }
};

export default Background;
