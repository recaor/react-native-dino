import React from "react";
import { Animated } from "react-native";
import Matter from "matter-js";

const airplane = require("../../assets/airplane.png");

function Plane(props: any) {
  let animatedValue = new Animated.Value(props.body.velocity.y);

  const width = props.size[0];
  const height = props.size[1];
  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - height / 2;

  animatedValue.setValue(props.body.velocity.y);

  let rotation = animatedValue.interpolate({
    inputRange: [-10, 0, 10, 20],
    outputRange: ["-30deg", "10deg", "20deg", "45deg"],
    extrapolate: "clamp",
  });

  return (
    <Animated.Image
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: width,
        height: height,
        transform: [{ rotate: rotation }],
      }}
      source={airplane}
      resizeMode="stretch"
    />
  );
}

export default (world, color, pos, size) => {
  const initialPlane = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height
  );
  Matter.World.add(world, [initialPlane]);

  return {
    body: initialPlane,
    size: [size.width, size.height],
    color: color,
    renderer: <Plane />,
  };
};
