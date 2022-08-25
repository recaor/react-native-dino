import React from "react";
import { Image } from "react-native";
import Matter from "matter-js";

const clouds = require("../../assets/clouds.png");

const Ceiling = (props: { size: any; body: any }) => {
  const { size, body } = props;

  const width = size[0];
  const height = size[1];
  const x = body.position.x - width / 2;
  const y = body.position.y - height / 2;

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
      source={clouds}
      resizeMode="stretch"
    />
  );
};

const Cell = (
  world: Matter.World,
  color: any,
  pos: { x: number; y: number },
  size: { width: number; height: number }
) => {
  const initialCeiling = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { isStatic: true, friction: 1 }
  );
  Matter.World.add(world, [initialCeiling]);

  return {
    body: initialCeiling,
    size: [size.width, size.height],
    color: color,
    renderer: Ceiling,
  };
};

export default Cell;
