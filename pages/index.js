import { Fragment } from "react";
import classes from "./index.module.css";

const Home = () => {
  return (
    <Fragment>
      <div className={classes.banner}>
        <h1 className={classes.maintext}>Nick Schroder</h1>
        <div className={classes.subtext}>Self-taught Web Developer</div>
      </div>
    </Fragment>
  );
};

export default Home;
