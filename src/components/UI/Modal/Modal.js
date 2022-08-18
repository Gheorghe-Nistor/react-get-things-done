import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";

import Input from "../Input/Input";
import Button from "../Button/Button";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props, inputRef) => {
  let value;
  const [disabledButton, setDisabledButton] = useState(true);

  const onChangeHandler = (inputValue) => {
    value = inputValue;
    setDisabledButton(inputValue.length === 0);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onSubmit(value);
  }
  return (
    <div className={classes.modal}>
      <div>
        <h3> {props.title}</h3>
      </div>
      <p>{props.description}</p>
      <form onSubmit={onSubmitHandler}>
        <Input onChange={onChangeHandler} type="text" />
        <Button
          content="DONE"
          disabled={disabledButton}
          alignSelf={'flex-end'}
        />
      </form>
    </div>
  );
};

const Modal = (props, inputRef) => {
  const portalElement = document.getElementById("overlays");
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          description={props.description}
          onSubmit={(inputValue) => props.onSubmit(inputValue)}
        />,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
