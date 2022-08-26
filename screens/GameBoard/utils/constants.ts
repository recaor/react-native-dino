import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export const FLOOR_Y = height - 90;
export const OBSTACLE1_Y = FLOOR_Y - 30;
export const OBSTACLE2_Y = FLOOR_Y - 50;
export const BIG_OBSTACLE_WIDTH = 70;
export const BIG_OBSTACLE_HEIGHT = 70;
export const SMALL_OBSTACLE_WIDTH = 50;
export const SMALL_OBSTACLE_HEIGHT = 50;
export const OBSTACLE_PIPE_RANGE = 300;
export const OBSTACLE_MIN_DISTANCE = 200;
