import React from "react";
import { Image, View } from "react-native";
import Matter from "matter-js";
import { JumpingAnimation } from "../../../../assets/animations/JumpingAnimation";

const Character = (props: { size: any; body: any; color: any }) => {
  const { size, body, color } = props;

  const width = size[0];
  const height = size[1];
  const x = body.position.x;
  const y = body.position.y;

  return (
    <View
      style={[
        {
          position: "absolute",
          left: x,
          top: y,
          width: width,
          height: height,
          backgroundColor: "black",
        },
      ]}
      // source={JumpingAnimation}
      // resizeMode="stretch"
    />
  );
};

export default (world, color, pos, size) => {
  const initialCharacter = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { label: "character" }
  );
  Matter.World.add(world, [initialCharacter]);

  return {
    body: initialCharacter,
    size: [size.width, size.height],
    color: color,
    renderer: Character,
  };
};
