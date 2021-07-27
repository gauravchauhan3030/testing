import React from "react";
import { mount } from "enzyme";
import Root from "../../Root";

import CommentBox from "../CommentBox";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

it("has a textarea and 2 buttons", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});

describe("textarea when user interacts", () => {
  beforeEach(() => {
    wrapped
      .find("textarea")
      .simulate("change", { target: { value: "new comment" } });
    wrapped.update();
  });
  it("has a text area that user can type in", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("has a text area with empty string when submit button click", () => {
    wrapped.find("form").simulate("submit");
    wrapped.update();

    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});

afterEach(() => {
  wrapped.unmount();
});
