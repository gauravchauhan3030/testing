import commentsReducer from "../comments";
import { SAVE_COMMENT } from "../../actions/types";

it("handles the save comment action", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New Comment",
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual(["New Comment"]);
});
