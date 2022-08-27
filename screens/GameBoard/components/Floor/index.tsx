import React from "react";
import { View } from "react-native";
import Matter from "matter-js";

type PropsType = {
  size: number[];
  body: Matter.Body;
};

const Floor = (props: PropsType) => {
  const { size, body } = props;

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
        opacity: 0,
      }}
    />
  );
};

export default (
  world: Matter.World,
  pos: { x: number; y: number },
  size: { width: number; height: number }
) => {
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
    renderer: Floor,
  };
};
