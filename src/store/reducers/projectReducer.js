const initialState = {
  projects: [
    { id: 1, title: "help me find peach", content: "blah.. blah .. blah" },
    { id: 2, title: "collect all the stars", content: "blah.. blah .. blah" },
    { id: 3, title: "egg hunt with yoshi", content: "blah.. blah .. blah" },
  ],
};

const ProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return {
        ...state,
      };
    case "CREATE_PROJECT_ERROR":
      console.log("Create Project Error", action.err);
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default ProjectReducer;
