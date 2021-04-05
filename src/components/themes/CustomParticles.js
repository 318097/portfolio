import React, { Component } from "react";
import { Stage, Layer, Circle } from "react-konva";

const RANDOM_COLORS = [
  "#BE2623",
  "#FFCE4D",
  "#C0EB6A",
  "#43E8E4",
  "#FFA45B",
  "#FFDA77",
  "#8A4C55",
  "#FFAC1D",
  "#BBD38B",
  "#FF6838",
  "#524545",
  "#8BAFED",
  "#FF7100",
  "#AAD1D9",
  "#FF7B2D",
  "#4A50B2",
  "#354739",
  "#CE8523",
  "#B35417",
  "#FED361",
];

const LIGHT_SHADES = [
  "#B9C5C5",
  "#E7E5E4",
  "#D4CFCA",
  "#AEA77C",
  "#C8D7D2",
  "#C8D7D2",
  "#EBE5DB",
];

const THEMES = [RANDOM_COLORS, LIGHT_SHADES];

const colorPalette = THEMES[0];

const direction = () => (Math.random() < 0.5 ? -1 : 1);

class CustomParticles extends Component {
  state = { shapeInfo: [] };

  componentDidMount() {
    this.createShapeData();
  }

  createShapeData = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const noOfBalls = 100;

    const input = Array(noOfBalls).fill(null);

    const info = input.map(() => ({
      x: Math.floor((Math.random() * 100000) % width),
      y: Math.floor((Math.random() * 100000) % height),
      speedX: ((Math.random() * 10) % 3) * direction(),
      speedY: ((Math.random() * 10) % 3) * direction(),
      radius: Math.floor(((Math.random() * 10) % 5) + 3),
      fill:
        colorPalette[Math.floor((Math.random() * 10) % colorPalette.length)],
    }));
    this.setState({ shapeInfo: info });
    setTimeout(this.startAnimation, 1000);
  };

  startAnimation = () => {
    const refreshRate = 30;
    setInterval(() => {
      const updatedShapeInfo = this.state.shapeInfo.map(this.updateBallStatus);
      this.setState({ shapeInfo: updatedShapeInfo });
    }, refreshRate);
  };

  updateBallStatus = ({ x, y, speedX, speedY, ...rest }) => {
    if (x > window.innerWidth) speedX = -speedX;
    else if (x < 0) speedX = Math.abs(speedX);

    if (y > window.innerHeight) speedY = -speedY;
    else if (y < 0) speedY = Math.abs(speedY);

    x += speedX;
    y += speedY;

    return { ...rest, x, y, speedX, speedY };
  };

  render() {
    return (
      <div className="background">
        <Stage
          style={{ height: "100%", width: "100%" }}
          width={window.innerWidth}
          height={window.innerHeight}
        >
          <Layer>
            {this.state.shapeInfo.map((prop, index) => (
              <Circle key={index} {...prop}></Circle>
            ))}
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default CustomParticles;
