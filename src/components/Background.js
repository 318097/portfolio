import React, { useState, useEffect } from "react";
import "./Background.scss";
import { Stage, Layer, Circle } from "react-konva";

const colorList = [
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
  "#FED361"
];

const darkColorList = [
  "#B9C5C5",
  "#E7E5E4",
  "#D4CFCA",
  "#AEA77C",
  "#C8D7D2",
  "#C8D7D2",
  "#EBE5DB"
];

const colorPalette = [...darkColorList];

const direction = () => (Math.random() < 0.5 ? -1 : 1);

const Background = () => {
  const [shapeInfo, setShapeInfo] = useState([]);

  useEffect(() => {
    createShapeData();
  }, []);

  const createShapeData = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const noOfBalls = 55;

    const input = Array(noOfBalls).fill(null);

    const info = input.map(() => ({
      x: Math.floor((Math.random() * 100000) % width),
      y: Math.floor((Math.random() * 100000) % height),
      speedX: ((Math.random() * 10) % 3) * direction(),
      speedY: ((Math.random() * 10) % 3) * direction(),
      radius: Math.floor(((Math.random() * 10) % 5) + 3),
      fill: colorPalette[Math.floor((Math.random() * 10) % colorPalette.length)]
    }));
    setShapeInfo(info);
    setTimeout(() => startAnimation(), 2000);
  };

  const startAnimation = () => {
    const refreshRate = 500;
    setInterval(() => {
      const updatedShapeInfo = shapeInfo.map(shape => updateBallStatus(shape));
      setShapeInfo(updatedShapeInfo);
    }, refreshRate);
  };

  const updateBallStatus = ({ x, y, speedX, speedY, ...rest }) => {
    if (x > window.innerWidth) speedX = -speedX;
    else if (x < 0) speedX = Math.abs(speedX);

    if (y > window.innerHeight) speedY = -speedY;
    else if (y < 0) speedY = Math.abs(speedY);

    x += speedX;
    y += speedY;

    return { ...rest, x, y, speedX, speedY };
  };

  return (
    <div className="background">
      <Stage
        style={{ height: "100%", width: "100%" }}
        width={window.innerWidth}
        height={window.innerHeight}
      >
        <Layer>
          {shapeInfo.map((prop, index) => (
            <Circle key={index} {...prop}></Circle>
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default Background;
