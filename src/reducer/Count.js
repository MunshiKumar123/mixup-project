import React from "react";
import { useReducer } from "react";

const initialValue = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };

    case "SUBMIT":
      return {
        ...initialValue,
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

const Count = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const inputAction = (event) => {
    dispatch({
      type: "update",
      payload: { key: event.target.name, value: event.target.value },
    });
  };

  const add = (e) => {
    console.log(state);

    e.preventDefault();

    dispatch({
      type: "SUBMIT",
    });
  };

  return (
    <>
      <div>
        <input
          value={state.firstName}
          type="text"
          name="firstName"
          onChange={inputAction}
        />
        <br />

        <input
          value={state.lastName}
          type="text"
          name="lastName"
          onChange={inputAction}
        />
        <br />
        <input
          value={state.username}
          type="text"
          onChange={inputAction}
          name="username"
        />
        <br />
        <input
          value={state.email}
          type="email"
          name="email"
          onChange={inputAction}
        />
        <hr />
        <input type="button" value="CLICK HERE" onClick={add} />
      </div>
    </>
  );
};
export default Count;
