import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import requireAuth from "./requireAuth";

function CommentBox(props) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.saveComment(comment);
    setComment("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Add a comment</h4>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <button className="fetch-button" onClick={props.fetchComment}>
        Fetch Comment
      </button>
    </div>
  );
}

export default connect(null, actions)(requireAuth(CommentBox));
