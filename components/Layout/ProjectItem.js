import { Card } from "react-bootstrap";

import classes from "./ProjectItem.module.css";

const ProjectItem = (props) => {
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
      </Card.Body>
    </Card>
  );
};

export default ProjectItem;
