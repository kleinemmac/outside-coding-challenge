import { SET_USERNAME } from "./user-types";

export function setUsername(name) {
  return {
    type: SET_USERNAME,
    name
  };
}
