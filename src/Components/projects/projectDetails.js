import React from "react";

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title -{id}</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus,
            cumque? Sed maiores voluptates, similique quas accusamus et iste
            nisi nesciunt, expedita ipsum culpa laudantium animi omnis
            consequatur magnam quibusdam doloribus?
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <p>Posted by The net samurai</p>
          <p>2nd September 2020,3am</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
