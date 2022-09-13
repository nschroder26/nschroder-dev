import ProjectList from "../../components/Layout/ProjectList";
import { Fragment } from "react";

import classes from "./index.module.css";

const PROJECT_LIST = [
  {
    id: "p1",
    title: "React - The Complete Guide",
    image: "/React.png",
    text: "After completing the Ruby on Rails tutorials and the art website I wanted to take on React. I instantly fell in love with how it works. I really enjoy the reusable components, working with props, hooks, state, redux, and so much more.",
    website:
      "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
  },
  {
    id: "p2",
    title: "PhotoApp",
    image: "/PhotoAppOverview.png",
    text: "This is currently the project I am working on. The idea behind this is to have something that my family could use to share and also view photos that we have taken. My wife and I just had our first baby and we are constantly sending pictures back and forth to all of our family. At the time of writing this I’ve setup a login through Firebase, and have setup state to handle some very basic rendering if the user is logged in. In the end, the goal is to allow a user to login and view any recent photos that have been added. As well as to be able to search by a variety of different tags, and to save or favorite different photos.",
    git: "https://github.com/nschroder26/photoApp",
  },
  {
    id: "p3",
    title: "Portfolio Website",
    image: "/DevWebsiteOverview.png",
    text: "This is currently the site you are on! As mentioned on the main page I created this site to put all of my projects in one place. I created this with React, and used Bootstrap for web and mobile formatting.",
    git: "https://github.com/nschroder26/nschroder-dev",
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
