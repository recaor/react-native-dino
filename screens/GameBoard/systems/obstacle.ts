import { Dimensions } from "react-native";
import Matter from "matter-js";

import { getRandom } from "../utils/random";
import Obstacle from "../components/Obstacle";
import {
  BIG_OBSTACLE_HEIGHT,
  BIG_OBSTACLE_WIDTH,
  OBSTACLE_MIN_DISTANCE,
  OBSTACLE_PIPE_RANGE,
  SMALL_OBSTACLE_HEIGHT,
  SMALL_OBSTACLE_WIDTH,
} from "../utils/constants";

const { height } = Dimensions.get("screen");

const UpdateObstacle = (entities, { time }) => {
  let engine = entities.physics.engine;
  let world = entities.physics.world;

  // Obstacle Random Generation
  let highestX = [
    entities.Obstacle1.body.position.x,
    entities.Obstacle2.body.position.x,
    entities.Obstacle3.body.position.x,
  ].sort((a, b) => parseInt(b) - parseInt(a))[0];

  for (let i = 1; i <= 3; i++) {
    if (entities["Obstacle" + i].body.position.x < -80) {
      //Remove the old obstacle
      Matter.World.remove(world, entities["Obstacle" + i].body);

      // Create new obstacle
      const newObstacleType = !!getRandom(0, 1) ? "small" : "big";
      const newObstacleX =
        highestX +
        getRandom(
          OBSTACLE_MIN_DISTANCE,
          OBSTACLE_MIN_DISTANCE + OBSTACLE_PIPE_RANGE
        );

      const newObstacleWidth =
        newObstacleType === "small" ? SMALL_OBSTACLE_WIDTH : BIG_OBSTACLE_WIDTH;

      const newObstacleHeight =
        newObstacleType === "small"
          ? SMALL_OBSTACLE_HEIGHT
          : BIG_OBSTACLE_HEIGHT;

      entities["Obstacle" + i] = Obstacle(
        world,
        newObstacleType,
        { x: newObstacleX, y: -height },
        { height: newObstacleHeight, width: newObstacleWidth }
      );
    }

    Matter.Body.translate(entities["Obstacle" + i].body, { x: -17, y: 0 });
    Matter.Engine.update(engine, time.delta);
  }

  return entities;
};

export default UpdateObstacle;
