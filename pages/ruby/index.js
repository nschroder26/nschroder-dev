import { Fragment } from "react";
import ProjectList from "../../components/Layout/ProjectList";
import useHttp from "../../components/hooks/use-http";
import { getProjects } from "../../lib/api";
import { useEffect } from "react";

import classes from "./index.module.css";

const RubyPage = () => {
  const {
    sendRequest,
    status,
    data: loadedProjects,
    error,
  } = useHttp(getProjects, true);

  const language = "ruby";

  useEffect(() => {
    sendRequest(language);
  }, [sendRequest, language]);

  if (status === "pending") {
    return <div className={classes.loadingtext}>Loading.....</div>;
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
        <h1 className={classes.maintext}>Ruby on Rails</h1>
      </div>
      <ProjectList list={loadedProjects} />
    </Fragment>
  );
};

export default RubyPage;
