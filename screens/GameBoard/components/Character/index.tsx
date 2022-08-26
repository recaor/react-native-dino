import React from "react";
import { View, Image } from "react-native";
import Matter from "matter-js";

const Character = (props: { size: any; body: any; color: any }) => {
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
      }}
    />
  );
};

export default (world, color, pos, size) => {
  const initialCharacter = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height
  );
  Matter.World.add(world, [initialCharacter]);

  return {
    body: initialCharacter,
    size: [size.width, size.height],
    color: color,
    renderer: Character,
  };
};
