import React from "react";
import { View, Image } from "react-native";
import Matter from "matter-js";

const Floor = (props: { size: any; body: any; color: any }) => {
  const { size, body, color } = props;

  const width = size[0];
  const height = size[1];
  const x = body.position.x;
  const y = body.position.y;

  return (
    <View
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: width,
        height: height,
        backgroundColor: color || "pink",
        opacity: 0.1,
      }}
    />
  );
};

export default (world, color, pos, size) => {
  const initialFloor = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { isStatic: true, friction: 1 }
  );
  Matter.World.add(world, [initialFloor]);

  return {
    body: initialFloor,
    size: [size.width, size.height],
    color: color,
    renderer: Floor,
  };
};
