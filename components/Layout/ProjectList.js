import ProjectItem from "./ProjectItem";
import classes from "./ProjectList.module.css";

const ProjectList = (props) => {
  const currentProjects = props.list.map((project) => (
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
