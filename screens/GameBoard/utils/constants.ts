import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export const FLOOR_Y = height - 60;
export const BIG_OBSTACLE_WIDTH = 70;
export const BIG_OBSTACLE_HEIGHT = 35;
export const SMALL_OBSTACLE_WIDTH = 50;
export const SMALL_OBSTACLE_HEIGHT = 25;
export const OBSTACLE_PIPE_RANGE = 500;
export const OBSTACLE_MIN_DISTANCE = 350;
