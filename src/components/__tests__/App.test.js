import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import App from "../App";
import CommentBox from "../CommentBox";
import CommentList from "../CommentList";

let wrapper;
beforeEach(() => {
  wrapper = shallow(<App />);
});

it("shows the comment box", () => {
  expect(wrapper.find(CommentBox).length).toEqual(1);
});

it("shows the comment list", () => {
  expect(wrapper.find(CommentList).length).toEqual(1);
});
