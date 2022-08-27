import Matter from "matter-js";
import { Dimensions } from "react-native";
import { getRandom } from "../utils/random";

const { width } = Dimensions.get("screen");
let isFlying = false;

const UpdateCharacter = (entities, { dispatch, touches, time }) => {
  const engine = entities.physics.engine;
  touches
    .filter((t) => t.type === "press")
    .forEach((t) => {
      if (!isFlying) {
        Matter.Body.setVelocity(entities.Character.body, {
          x: entities.Character.body.velocity.x,
          y: -8,
        });
        isFlying = true;
      }
    });
  Matter.Engine.update(engine, time.delta);

  Matter.Events.on(engine, "collisionStart", (event) => {
    const collisionA = event.pairs[0].bodyA.label;
    const collisionB = event.pairs[0].bodyB.label;

    if (
      (collisionB === "floor" && collisionA === "character") ||
      (collisionA === "floor" && collisionB === "character")
    ) {
      isFlying = false;
    } else if (
      (collisionB === "character" && collisionA === "obstacle") ||
      (collisionA === "character" && collisionB === "obstacle")
    ) {
      dispatch({ type: "game_over" });
    } else if (
      (collisionB === "character" && collisionA === "fruit") ||
      (collisionA === "character" && collisionB === "fruit")
    ) {
      const newPosition = getRandom(width + 200, width + 1500);
      Matter.Body.translate(entities["Fruit"].body, { x: newPosition, y: 0 });
      dispatch({ type: "score" });
    }
  });

  return entities;
};

export default UpdateCharacter;
