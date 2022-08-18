import { Fragment } from "react";

import image from "../../../assets/react.png";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img src={image} alt="react logo" />
        <span>Get Things Done.</span>
      </header>
      <div className={classes.blue}> </div>
    </Fragment>
  );
};

export default Header;
