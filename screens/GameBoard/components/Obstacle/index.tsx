import React from "react";
import { Image } from "react-native";
import Matter from "matter-js";

const smallStone = require("../../../../assets/stone.png");
const bigStone = require("../../../../assets/stone.png");

type PropsType = {
  size: number[];
  body: Matter.Body;
  type: string;
};

const Obstacle = (props: PropsType) => {
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

export default (
  world: Matter.World,
  type: any,
  pos: { x: number; y: number },
  size: { width: number; height: number }
) => {
  const initialObstacle = Matter.Bodies.rectangle(pos.x, pos.y, 10, 20, {
    label: "obstacle",
  });
  Matter.World.add(world, [initialObstacle]);

  return {
    body: initialObstacle,
    size: [size.width, size.height],
    type,
    renderer: Obstacle,
  };
};
