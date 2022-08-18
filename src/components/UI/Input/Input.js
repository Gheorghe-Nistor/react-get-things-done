import React, { useState } from "react";

import classes from "./Input.module.css";

const Input = (props, ref) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
    props.onChange(e.target.value);
  };

  return (
    <input
      className={classes.input}
      type={props.type}
      onChange={onChangeHandler}
    />
  );
};

export default Input;
