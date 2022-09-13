import { Card } from "react-bootstrap";

import classes from "./ProjectItem.module.css";

const ProjectItem = (props) => {
  const hasRepo = props.git;
  const hasWebsite = props.website;

  return (
    <Card bg="dark" text="light" className={classes.projectcard}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <div className={classes.container}>
          <Card.Img
            variant="top"
            src={props.image}
            className={classes.projectimage}
          />
          <Card.Text className={classes.projecttext}>{props.text}</Card.Text>
        </div>
        <div className={classes.linkbox}>
          {hasRepo && (
            <a href={props.git} target="_blank" className={classes.link}>
              GitHub Repo
            </a>
          )}
          {hasWebsite && (
            <a href={props.website} target="_blank" className={classes.link}>
              Website
            </a>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectItem;
