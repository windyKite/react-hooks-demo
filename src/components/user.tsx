import React, { useReducer, useContext, useEffect } from "react";
import ajax from "../api/ajax";
import Context from '../Context/context'


function User() {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    ajax("/user").then((user: UserState) => {
      dispatch({ type: "setUser", user: user });
    });
  }, []);
  return (
    <div>
      <h1>个人信息</h1>
      <div>name: {state.user ? state.user.name : ""}</div>
    </div>
  );
}

export default User;
