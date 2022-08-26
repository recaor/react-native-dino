import Matter from "matter-js";
import Floor from "../components/Floor";

Matter.Common.isElement = () => false;

export default (width, height) => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  world.gravity.y = 0.1;

  return {
    physics: { engine: engine, world: world },
    Floor: Floor(
      world,
      "white",
      { x: 0, y: height - 90 },
      { height: 20, width: width }
    ),
  };
};
