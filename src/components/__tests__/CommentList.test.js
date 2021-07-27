import React from "react";
import CommentList from "../CommentList";
import { mount } from "enzyme";
import Root from "../../Root";

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ["comment1", "comment2"],
  };
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("creates one li per comment", () => {
  expect(wrapped.find("li").length).toEqual(2);
});

it("renders every comment", () => {
  expect(wrapped.render().text()).toContain("comment1");
  expect(wrapped.render().text()).toContain("comment2");
});

afterEach(() => {
  wrapped.unmount();
});
