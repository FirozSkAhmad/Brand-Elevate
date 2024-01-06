import { useState } from "react";
import SharedContext from "./SharedContext";

const SharedState = (props) => {
  const [blogsData, setBlogsData] = useState([]);
  const [projectsData, setProjectsData] = useState([]);

  return (
    <SharedContext.Provider
      value={{
        blogsData: blogsData,
        setBlogsData: setBlogsData,
        projectsData: projectsData,
        setProjectsData: setProjectsData,
      }}
    >
      {props.children}
    </SharedContext.Provider>
  );
};

export default SharedState;
