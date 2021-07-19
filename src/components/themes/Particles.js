import React from "react";
import Particles from "react-particles-js";

const DARK = {
  balls: "#242424",
  line: "#454545",
  background: "#f7f7f7",
};

const LIGHT = {
  balls: "#fff",
  line: "#fff",
  background: "#171717",
};

const THEMES = [DARK, LIGHT];

const particlesColorScheme = THEMES[0];

const ParticleJs = () => (
  <div className="background">
    <Particles
      style={{ background: particlesColorScheme.background }}
      height="100vh"
      width="100vw"
      params={{
        particles: {
          number: {
            value: 70,
          },
          size: {
            value: 5,
          },
          color: {
            value: particlesColorScheme.balls,
          },
          line_linked: {
            color: particlesColorScheme.line,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "bubble",
            },
          },
        },
      }}
    />
  </div>
);

export default ParticleJs;
