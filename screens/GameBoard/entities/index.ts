import Matter from "matter-js";
import { Dimensions } from "react-native";

import Floor from "../components/Floor";
import Fruit from "../components/Fruit";
import Obstacle from "../components/Obstacle";
import Character from "../components/Character";
import { runningAnimation } from "../../../assets/animations/runningAnimation";
import {
  BIG_OBSTACLE_HEIGHT,
  BIG_OBSTACLE_WIDTH,
  FLOOR_Y,
  FRUIT_RADIUS,
  SMALL_OBSTACLE_HEIGHT,
  SMALL_OBSTACLE_WIDTH,
} from "../utils/constants";

const { width, height } = Dimensions.get("screen");

Matter.Common.isElement = () => false;

export default () => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  world.gravity.y = 0.015;

  return {
    physics: { engine: engine, world: world },
    Character: Character(
      world,
      { x: 150, y: -height },
      { height: 30, width: 10 },
      runningAnimation[0]
    ),
    Floor: Floor(world, { x: 0, y: FLOOR_Y }, { height: 60, width: 4000 }),
    Obstacle1: Obstacle(
      world,
      "small",
      { x: width + 480, y: -height },
      { height: SMALL_OBSTACLE_HEIGHT, width: SMALL_OBSTACLE_WIDTH }
    ),
    Obstacle2: Obstacle(
      world,
      "big",
      { x: width + 780, y: -height },
      { height: BIG_OBSTACLE_HEIGHT, width: BIG_OBSTACLE_WIDTH }
    ),
    Obstacle3: Obstacle(
      world,
      "small",
      { x: width + 1100, y: -height },
      { height: SMALL_OBSTACLE_HEIGHT, width: SMALL_OBSTACLE_WIDTH }
    ),
    Fruit: Fruit(
      world,
      { x: width + 300, y: height / 2 - 10 },
      { height: FRUIT_RADIUS, width: FRUIT_RADIUS }
    ),
  };
};
