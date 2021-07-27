import React from "react";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions/index";

function App(props) {
  const renderButton = () => {
    if (props.auth) {
      return (
        <button
          onClick={() => {
            props.changeAuth(false);
          }}
        >
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            props.changeAuth(true);
          }}
        >
          Sign In
        </button>
      );
    }
  };

  const renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a comment</Link>
        </li>
        <li>{renderButton()}</li>
      </ul>
    );
  };
  return (
    <div>
      {renderHeader()}
      <Route path="/post" component={CommentBox} />
      <Route path="/" exact component={CommentList} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, actions)(App);
