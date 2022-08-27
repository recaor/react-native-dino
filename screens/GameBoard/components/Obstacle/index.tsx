import React from "react";
import { Image, View } from "react-native";
import Matter from "matter-js";

const smallStone = require("../../../../assets/stone.png");
const bigStone = require("../../../../assets/stone.png");

const Obstacle = (props) => {
  const width = props.size[0];
  const height = props.size[1];
  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - height / 2;

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
        style={{
          position: "absolute",
          left: x,
          top: y,
          width: width,
          height: height,
        }}
        source={bigStone}
        resizeMode="stretch"
      />
    );
  }
};

export default (world, type, pos, size) => {
  const initialObstacle = Matter.Bodies.rectangle(pos.x, pos.y, 10, 10, {
    label: "obstacle",
  });
  Matter.World.add(world, [initialObstacle]);

  return {
    body: initialObstacle,
    size: [size.width, size.height],
    type,
    renderer: <Obstacle />,
  };
};
