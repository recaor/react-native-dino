import React from "react";
import { Image } from "react-native";
import Matter from "matter-js";

const fruit = require("../../../../assets/fruit.png");

type PropsType = {
  size: number[];
  body: Matter.Body;
};

const Fruit = (props: PropsType) => {
  const width = props.size[0];
  const height = props.size[1];
  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - height / 2;

  return (
    <Image
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: width,
        height: height,
      }}
      source={fruit}
      resizeMode="stretch"
    />
  );
};

export default (
  world: Matter.World,
  pos: { x: number; y: number },
  size: { width: number; height: number }
) => {
  const initialFruit = Matter.Bodies.circle(pos.x, pos.y, size.width, {
    label: "fruit",
    isSensor: true,
    isStatic: true,
  });
  Matter.World.add(world, [initialFruit]);

  return {
    body: initialFruit,
    size: [size.width, size.height],
    renderer: Fruit,
  };
};
