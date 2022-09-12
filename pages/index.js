import { Fragment } from "react";
import ProjectList from "../components/Layout/ProjectList";

import classes from "./index.module.css";

const Home = () => {
  return (
    <Fragment>
      <div className={classes.banner}>
        <h1 className={classes.maintext}>Nick Schroder</h1>
        <div className={classes.subtext}>Self-taught Web Developer</div>
      </div>
      <div className={classes.introtext}>
        To start, I would like to thank you for taking the time to look at some
        of the projects I've created. I know that for the most part they are
        straightforward, but I'm really proud of what I've been able to
        accomplish. Below is a brief summary of the 2 main projects I've spent
        time on. 3 actually, including this website! Further information and
        source code on GitHub is available under the project pages. There is
        also a bit more information about me and my journey so far in the About
        page!
      </div>
      <ProjectList />
    </Fragment>
  );
};

export default Home;
