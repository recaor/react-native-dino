import Matter from "matter-js";
import { Dimensions } from "react-native";
import { TimeUpdate } from "react-native-game-engine";

import { getRandom } from "../utils/random";
import Character from "../components/Character";
import { runningAnimation } from "../../../assets/animations/runningAnimation";

const { width } = Dimensions.get("screen");

type GameEngineEvents = {
  touches: Array<TouchEvent>;
  dispatch: (event: any) => void;
  time: TimeUpdate;
};

let isFlying = false;
let collisionNo = 0;
let characterImageNo = 0;

const UpdateCharacter = (
  entities: {
    [x: string]: { body: Matter.Body };
    physics: any;
    Character: { body: Matter.Body };
  },
  { dispatch, touches, time }: GameEngineEvents
) => {
  if (entities["Fruit"].body.position.x > width) collisionNo = 0;

  const engine = entities.physics.engine;
  let world = entities.physics.world;

  characterImageNo++;
  // Character Animation
  if ([0, 6].includes(characterImageNo % 12) && !isFlying) {
    const newY = entities["Character"].body.position.y;
    Matter.World.remove(world, entities["Character"].body);
    entities["Character"] = Character(
      world,
      { x: 150, y: newY },
      { height: 30, width: 10 },
      runningAnimation[(characterImageNo % 12) / 6]
    );
  }

  touches
    .filter((t: { type: string }) => t.type === "press")
    .forEach(() => {
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
    }

    // Calculate score
    if (
      (collisionB === "character" &&
        collisionA === "fruit" &&
        collisionNo === 0) ||
      (collisionA === "character" &&
        collisionB === "fruit" &&
        collisionNo === 0)
    ) {
      const newPosition = getRandom(width + 200, width + 1500);
      Matter.Body.translate(entities["Fruit"].body, { x: newPosition, y: 0 });
      collisionNo++;
      dispatch({ type: "score" });
    }
  });

  return entities;
};

export default UpdateCharacter;
