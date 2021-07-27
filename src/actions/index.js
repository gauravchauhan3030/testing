import { SAVE_COMMENT, FETCH_COMMENT, AUTH_CHANGE } from "./types";
import axios from "axios";

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}

export function fetchComment() {
  const response = axios.get("http://jsonplaceholder.typicode.com/comments");
  return {
    type: FETCH_COMMENT,
    payload: response,
  };
}

export function changeAuth(isLoggedIn) {
  return {
    type: AUTH_CHANGE,
    payload: isLoggedIn,
  };
}
