import ProjectList from "../../components/Layout/ProjectList";
import { Fragment } from "react";
import useHttp from "../../components/hooks/use-http";
import { getProjects } from "../../lib/api";
import { useEffect } from "react";

import classes from "./index.module.css";

const ReactPage = () => {
  const {
    sendRequest,
    status,
    data: loadedProjects,
    error,
  } = useHttp(getProjects, true);

  const language = "react";

  useEffect(() => {
    sendRequest(language);
  }, [sendRequest, language]);

  if (status === "pending") {
    return <div className="centered">Loading.....</div>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (
    status === "completed" &&
    (!loadedProjects || loadedProjects.length === 0)
  ) {
    return <div>Nothing found</div>;
  }

  return (
    <Fragment>
      <div className={classes.banner}>
        <h1 className={classes.maintext}>React</h1>
      </div>
      <ProjectList list={loadedProjects} />
    </Fragment>
  );
};

export default ReactPage;
