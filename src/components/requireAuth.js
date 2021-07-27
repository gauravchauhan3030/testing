import React, { useEffect } from "react";
import { connect } from "react-redux";

export default (ChildComponent) => {
  function ComposedComponent(props) {
    useEffect(() => {
      if (!props.auth) {
        props.history.push("/");
      }
    });
    return <ChildComponent {...props} />;
  }

  function mapStateToProps(state) {
    return {
      auth: state.auth,
    };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
