import ProjectList from "../../components/Layout/ProjectList";
import { Fragment } from "react";

import classes from "./index.module.css";

const PROJECT_LIST = [
  {
    id: "p1",
    title: "React - The Complete Guide",
    image: "/React.png",
    text: "After completing the Ruby on Rails tutorials and the art website I wanted to take on React. I instantly fell in love with how it works. I really enjoy the reusable components, working with props, hooks, state, and so much more.",
  },
  {
    id: "p2",
    title: "PhotoApp",
    image: "/PhotoAppOverview.png",
    text: "Work in progess",
    git: "https://github.com/nschroder26/photoApp",
  },
];

const ReactPage = () => {
  return (
    <Fragment>
      <div className={classes.banner}>
        <h1 className={classes.maintext}>React</h1>
      </div>
      <ProjectList list={PROJECT_LIST} />
    </Fragment>
  );
};

export default ReactPage;
