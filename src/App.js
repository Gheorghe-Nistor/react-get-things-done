import { Fragment } from "react";

import Header from "./components/Layout/Header/Header";
import Greetings from "./components/Layout/Greetings/Greetings";
import TasksMenu from "./components/TasksMenu/TasksMenu";
import Footer from "./components/Layout/Footer/Footer";
import classes from "./App.module.css";

function App() {
  return (
    <Fragment>
      <Header />
      <main className={classes.main}>
        <Greetings />
        <TasksMenu />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
