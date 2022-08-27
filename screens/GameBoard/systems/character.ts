import Matter from "matter-js";

const UpdateCharacter = (entities, { touches, time }) => {
  const engine = entities.physics.engine;
  touches
    .filter((t) => t.type === "press")
    .forEach((t) => {
      Matter.Body.setVelocity(entities.Character.body, {
        x: entities.Character.body.velocity.x,
        y: -8,
      });
    });
  Matter.Engine.update(engine, time.delta);
  return entities;
};

export default UpdateCharacter;
