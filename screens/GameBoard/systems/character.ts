import Matter from "matter-js";

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
      (collisionB === "floor" && collisionA === "obstacle") ||
      (collisionA === "floor" && collisionB === "obstacle")
    ) {
    } else {
      dispatch({ type: "game_over" });
    }
  });

  return entities;
};

export default UpdateCharacter;
