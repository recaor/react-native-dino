import React from "react";
import { Image } from "react-native";
import Matter from "matter-js";

const rocket = require("../../assets/rocket.png");

const Obstacle = (props) => {
  const width = props.size[0];
  const height = props.size[1];
  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - height / 2;

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
      source={rocket}
      resizeMode="stretch"
    />
  );
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
    type: type,
    scored: false,
    renderer: <Obstacle />,
  };
};
