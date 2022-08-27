import React from "react";
import { Image } from "react-native";
import Matter from "matter-js";
const Character = (props: { size: any; body: any; color: any; image: any }) => {
  const { size, body, color, image } = props;

  const width = size[0];
  const height = size[1];
  const x = body.position.x - width / 2;
  const y = body.position.y - height / 2;

  return (
    <Image
      style={[
        {
          position: "absolute",
          left: x - 80,
          top: y - 20,
          width: 100,
          height: 50,
        },
      ]}
      source={image}
      resizeMode="stretch"
    />
  );
};

export default (world, color, pos, size, image) => {
  const initialCharacter = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { label: "character", frictionAir: 0 }
  );
  Matter.World.add(world, [initialCharacter]);

  return {
    body: initialCharacter,
    size: [size.width, size.height],
    color: color,
    image,
    renderer: Character,
  };
};
