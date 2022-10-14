import { Fragment } from "react";
import ProjectList from "../components/Layout/ProjectList";
import useHttp from "../components/hooks/use-http";
import { getProjects } from "../lib/api";
import { useEffect } from "react";

import classes from "./index.module.css";

const Home = () => {
  const {
    sendRequest,
    status,
    data: loadedProjects,
    error,
  } = useHttp(getProjects, true);

  const page = "home";

  useEffect(() => {
    sendRequest(page);
  }, [sendRequest, page]);

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
        <h1 className={classes.maintext}>Nick Schroder</h1>
        <div className={classes.subtext}>Self-taught Web Developer</div>
      </div>
      <ProjectList list={loadedProjects} />
    </Fragment>
  );
};

export default Home;
