import React, { useState, useContext } from "react";
import AppContext from "../../AppState";
import Card from "./Card";

const ProjectsCard = () => {
  const { state } = useContext(AppContext);
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const displayedProjects = showAll
    ? state.users[0].projects
    : state.users[0].projects.slice(0, 3);

  return (
    <Card>
      <div className="px-4 space-y-2">
        <h3 className="text-[18px] font-semibold">
          Projects
          <span className="ml-1 text-[#747474] font-light">
            {displayedProjects.length} of {state.users[0].projects.length}
          </span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {displayedProjects.map((project, index) => (
            <div key={index} className="space-y-2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[150px]"
              />
              <h4 className="text-[14px] leading-3 font-semibold">
                {project.title}
              </h4>
              <p className="text-[10px] leading-3 font-light">
                {project.description}, <span>{project.date}</span>
              </p>
            </div>
          ))}
        </div>
        <button
          className="text-[#0275B1] text-[12px] font-medium"
          onClick={handleToggle}
        >
          {showAll ? "Show Less" : "Show All (12)"}
        </button>
      </div>
    </Card>
  );
};

export default ProjectsCard;
