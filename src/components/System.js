import React, { Component } from "react";
import "./System.scss";
import { Route, Redirect } from 'react-router-dom';
import Window from "./Window";
import { Stage, Layer, Circle } from 'react-konva';
// import Konva from 'konva';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shapeInfo: [],
      colorList: ['#BE2623', '#FFCE4D', '#C0EB6A', '#43E8E4', '#FFA45B', '#FFDA77', '#8A4C55', '#FFAC1D', '#BBD38B', '#FF6838', '#524545', '#8BAFED', '#FF7100', '#AAD1D9', '#FF7B2D', '#4A50B2', '#354739', '#CE8523', '#B35417', '#FED361'],
      darkColorList: ['#B9C5C5', '#E7E5E4', '#D4CFCA', '#AEA77C', '#C8D7D2', '#C8D7D2', '#EBE5DB'],
    };
  }
  componentDidMount = () => {
    this.createShapeData();
    this.startAnimation();
  }
  startAnimation = () => {
    // var amplitude = 1;
    // var period = 500;

    // var anim = new Konva.Animation(frame => {
    console.log(window.innerWidth, window.innerHeight);
    setInterval(() => {
      const { shapeInfo } = this.state;
      const updatedShapeInfo = shapeInfo.map((el) => {
        const mod = this.detectCollision(el);
        return {
          ...mod
        };
      });
      this.setState({
        shapeInfo: updatedShapeInfo
      });
    }, 50);
    // });
    // anim.start();
  }
  detectCollision = (el) => {
    let { x, y, speedX, speedY } = el;
    if (x > window.innerWidth) {
      speedX = -speedX;
    } else if (x < 0) {
      speedX = Math.abs(speedX);
    }
    if (y > window.innerHeight) {
      speedY = -speedY;
    } else if (y < 0) {
      speedY = Math.abs(speedY);
    }
    x += speedX;
    y += speedY;
    return { ...el, x, y, speedX, speedY };
  }
  createShapeData = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const arr = Array(55).fill(null);
    const sign = () => Math.random() < .5 ? -1 : 1;
    const colorList = this.state.colorList;
    const info = arr.map((el, ind) => {
      return {
        x: Math.floor((Math.random() * 100000) % width),
        y: Math.floor((Math.random() * 100000) % height),
        speedX: ((Math.random() * 10) % 3) * sign(),
        speedY: ((Math.random() * 10) % 3) * sign(),
        radius: Math.floor(((Math.random() * 10) % 5) + 3),
        fill: colorList[Math.floor((Math.random() * 10) % colorList.length)],
      };
    });
    this.setState({
      shapeInfo: info
    });
  }
  generateRandomCircles = () => {
    const shapeInfo = this.state.shapeInfo;
    return shapeInfo.map((prop, ind) => <Circle key={ind} {...prop} ></Circle >);
  }

  render() {
    return (
      <div className="system">
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer ref={node => this.layer = node}>
            {this.generateRandomCircles()}
          </Layer>
        </Stage>
        <Route path='/:type' component={Window} />
      </div>
    );
  }
}
export default Header;
