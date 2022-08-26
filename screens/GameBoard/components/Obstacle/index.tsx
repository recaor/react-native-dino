import React from "react";
import { Image, View } from "react-native";
import Matter from "matter-js";

const smallStone = require("../../../../assets/stone.png");
const bigStone = require("../../../../assets/stone.png");

const Obstacle = (props) => {
  const width = props.size[0];
  const height = props.size[1];
  const x = props.body.position.x;
  const y = props.body.position.y;

  if (props.type === "small") {
    return (
      <Image
        style={[
          {
            position: "absolute",
            left: x,
            top: y,
            width: width,
            height: height,
          },
        ]}
        source={smallStone}
        resizeMode="stretch"
      />
    );
  } else {
    return (
      <Image
        style={[
          {
            position: "absolute",
            left: x,
            top: y,
            width: width,
            height: height,
          },
        ]}
        source={bigStone}
        resizeMode="stretch"
      />
    );
  }
};

export default (world, type, pos, size) => {
  const initialObstacle = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { isStatic: true, friction: 1 }
  );
  Matter.World.add(world, [initialObstacle]);

  return {
    body: initialObstacle,
    size: [size.width, size.height],
    type,
    renderer: <Obstacle />,
  };
};
