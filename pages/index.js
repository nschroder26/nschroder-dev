import { Fragment } from "react";
import ProjectList from "../components/Layout/ProjectList";

import classes from "./index.module.css";

const PROJECT_LIST = [
  {
    id: "p1",
    title: "KHS Artworks",
    image: "/KHSOverview.png",
    text: "My initial project built with Ruby on Rails. This is a basic website that hosts the artworks created by my mom. It also includes an Admin login to allow for updating and customizing various parts of the site.",
  },
  {
    id: "p2",
    title: "Photo App",
    image: "/PhotoAppOverview.png",
    text: "This is still a work in progress. But it is currently the foundation of a photo storage and sharing site. The end goal is to have individual family members have their own logins where they can view and save family photos.",
  },
  {
    id: "p3",
    title: "My Portfolio Site",
    image: "/DevWebsiteOverview.png",
    text: "This is currently the site you are on! I created this site to centralize and organize the projects I've made. It was becoming cumbersome to list the different projects I've made on my cover letter while providing enough information about each of them.",
  },
];

const Home = () => {
  return (
    <Fragment>
      <div className={classes.banner}>
        <h1 className={classes.maintext}>Nick Schroder</h1>
        <div className={classes.subtext}>Self-taught Web Developer</div>
      </div>
      <div className={classes.introtext}>
        To start, I would like to thank you for taking the time to look at some
        of the projects I&apos;ve created. I know that for the most part they
        are straightforward, but I&apos;m really proud of what I&apos;ve been
        able to accomplish. Below is a brief summary of the 2 main projects
        I&apos;ve spent time on. 3 actually, including this website! Further
        information and source code on GitHub is available under the project
        pages. There is also a bit more information about me and my Web
        Development journey so far in the About page!
      </div>
      <ProjectList list={PROJECT_LIST} />
    </Fragment>
  );
};

export default Home;
