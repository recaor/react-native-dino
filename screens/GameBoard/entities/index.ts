import Matter from "matter-js";
import { Dimensions } from "react-native";
import Character from "../components/Character";

import Floor from "../components/Floor";
import Obstacle from "../components/Obstacle";
import {
  BIG_OBSTACLE_HEIGHT,
  BIG_OBSTACLE_WIDTH,
  FLOOR_Y,
  OBSTACLE1_Y,
  OBSTACLE2_Y,
  SMALL_OBSTACLE_HEIGHT,
  SMALL_OBSTACLE_WIDTH,
} from "../utils/constants";

const { width, height } = Dimensions.get("screen");

Matter.Common.isElement = () => false;

export default () => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  world.gravity.y = 0.002;

  return {
    physics: { engine: engine, world: world },
    Character: Character(
      world,
      "black",
      { x: 0, y: height / 2 },
      { height: 60, width: 60 }
    ),
    Floor: Floor(
      world,
      "white",
      { x: 0, y: FLOOR_Y },
      { height: 60, width: width }
    ),
    Obstacle1: Obstacle(
      world,
      "small",
      { x: width + 380, y: OBSTACLE1_Y },
      { height: SMALL_OBSTACLE_HEIGHT, width: SMALL_OBSTACLE_WIDTH }
    ),
    Obstacle2: Obstacle(
      world,
      "big",
      { x: width + 680, y: OBSTACLE2_Y },
      { height: BIG_OBSTACLE_HEIGHT, width: BIG_OBSTACLE_WIDTH }
    ),
    Obstacle3: Obstacle(
      world,
      "small",
      { x: width + 880, y: OBSTACLE1_Y },
      { height: SMALL_OBSTACLE_HEIGHT, width: SMALL_OBSTACLE_WIDTH }
    ),
  };
};
