import Matter from "matter-js";
import { Dimensions } from "react-native";
import { TimeUpdate } from "react-native-game-engine";

import { getRandom } from "../utils/random";

const { width } = Dimensions.get("screen");

const UpdateFruit = (
  entities: { [x: string]: { body: Matter.Body }; physics: any },
  { time }: { time: TimeUpdate }
) => {
  let engine = entities.physics.engine;

  // Fruit element translation instead of random generation
  if (entities["Fruit"].body.position.x < -80) {
    const newPosition = getRandom(width + 200, width + 1500);
    Matter.Body.translate(entities["Fruit"].body, { x: newPosition, y: 0 });
  }

  Matter.Body.translate(entities["Fruit"].body, { x: -17, y: 0 });
  Matter.Engine.update(engine, time.delta);
  return entities;
};

export default UpdateFruit;
