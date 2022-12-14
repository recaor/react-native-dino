import React from "react";
import { Image, ImageSourcePropType } from "react-native";
import Matter from "matter-js";

type PropsType = {
  size: number[];
  body: Matter.Body;
  image: ImageSourcePropType;
};

const Character = (props: PropsType) => {
  const { size, body, image } = props;

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

export default (
  world: Matter.World,
  pos: { x: number; y: number },
  size: { width: number; height: number },
  image: ImageSourcePropType
) => {
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
    image,
    renderer: Character,
  };
};
