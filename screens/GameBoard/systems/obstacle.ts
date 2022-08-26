import { Dimensions } from "react-native";
import Matter from "matter-js";
import { getRandom } from "../utils/random";
import {
  BIG_OBSTACLE_HEIGHT,
  BIG_OBSTACLE_WIDTH,
  OBSTACLE1_Y,
  OBSTACLE2_Y,
  OBSTACLE_MIN_DISTANCE,
  OBSTACLE_PIPE_RANGE,
  SMALL_OBSTACLE_HEIGHT,
  SMALL_OBSTACLE_WIDTH,
} from "../utils/constants";
import Obstacle from "../components/Obstacle";

const { width, height } = Dimensions.get("screen");

const UpdateObstacle = (entities, { time, dispatch }) => {
  let engine = entities.physics.engine;
  let world = entities.physics.world;
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

      const newObstacleY =
        newObstacleType === "small" ? OBSTACLE1_Y : OBSTACLE2_Y;
      const newObstacleWidth =
        newObstacleType === "small" ? SMALL_OBSTACLE_WIDTH : BIG_OBSTACLE_WIDTH;
      const newObstacleHeight =
        newObstacleType === "small"
          ? SMALL_OBSTACLE_HEIGHT
          : BIG_OBSTACLE_HEIGHT;

      entities["Obstacle" + i] = Obstacle(
        world,
        newObstacleType,
        { x: newObstacleX, y: newObstacleY },
        { height: newObstacleHeight, width: newObstacleWidth }
      );
    }

    Matter.Body.translate(entities["Obstacle" + i].body, { x: -14, y: 0 });
    Matter.Engine.update(engine, time.delta);
  }

  return entities;
};

export default UpdateObstacle;
