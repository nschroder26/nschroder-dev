import ProjectItem from "./ProjectItem";
import classes from "./ProjectList.module.css";

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

const ProjectList = () => {
  const currentProjects = PROJECT_LIST.map((project) => (
    <ProjectItem
      key={project.id}
      title={project.title}
      text={project.text}
      image={project.image}
    />
  ));
  return <ul className={classes.projectlist}>{currentProjects}</ul>;
};

export default ProjectList;
