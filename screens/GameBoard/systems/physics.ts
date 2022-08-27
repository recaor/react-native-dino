import Matter from "matter-js";

const Physics = (entities, { time, dispatch }) => {
  let engine = entities.physics.engine;
  Matter.Engine.update(engine, time.delta);

  Matter.Events.on(engine, "collisionStart", (event) => {
    const collisionA = event.pairs[0].bodyA.label;
    const collisionB = event.pairs[0].bodyB.label;
    if (collisionB === "floor" || collisionA === "floor") {
    } else {
      dispatch({ type: "game_over" });
    }
  });

  return entities;
};

export default Physics;
