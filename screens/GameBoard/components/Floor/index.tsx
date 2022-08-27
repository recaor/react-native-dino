import React from "react";
import { View, Image } from "react-native";
import Matter from "matter-js";

const Floor = (props: { size: any; body: any; color: any }) => {
  const { size, body, color } = props;

  const width = size[0];
  const height = size[1];
  const x = body.position.x - width / 2;
  const y = body.position.y - height / 2;

  return (
    <View
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: width,
        height: height,
        backgroundColor: color || "pink",
        opacity: 0.5,
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
    { isStatic: true, label: "floor" }
  );
  Matter.World.add(world, [initialFloor]);

  return {
    body: initialFloor,
    size: [size.width, size.height],
    color: color,
    renderer: Floor,
  };
};
