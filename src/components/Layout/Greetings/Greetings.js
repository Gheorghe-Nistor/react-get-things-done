import { Fragment, useState, useEffect } from "react";

import Modal from "../../UI/Modal/Modal";
import classes from "./Greetings.module.css";

const Greetings = () => {
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    const firstNameLS = localStorage.getItem("firstName");
    if (firstNameLS != null) setFirstName(firstNameLS);
  }, []);

  const onSubmitHandler = (firstName) => {
    const firstNameCapitalised =
      firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
    setFirstName(firstNameCapitalised);
    localStorage.setItem("firstName", firstNameCapitalised);
  };

  return (
    <Fragment>
      {firstName === "" ? (
        <Modal
          title={"Your first name"}
          description={
            "With your name saved we will know how to greet you every time you visit us. Enjoy your stay!"
          }
          onSubmit={onSubmitHandler}
        />
      ) : (
        <div className={classes.greetings}>
          <p>
            Hi, <span>{firstName}</span>!
          </p>
          <p>What's your plans for today?</p>
        </div>
      )}
    </Fragment>
  );
};

export default Greetings;
