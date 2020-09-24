import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
const ProjectDetails = (props) => {
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to="/signIn" />;
  let proj = (
    <div className="container center">
      <p>Loading Project.....</p>
    </div>
  );
  if (project) {
    proj = (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Project Title -{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <p>
              Posted by {project.authorFirstName + " " + project.authorLastName}
            </p>
            <p>2nd September 2020,3am</p>
          </div>
        </div>
      </div>
    );
  }
  return <div>{proj}</div>;
};
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "projects",
    },
  ])
)(ProjectDetails);
