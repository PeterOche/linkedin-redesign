// import { initialState } from "./AppState";
import { generateUsers } from "./data/generateUsers";
import { generatePosts } from "./data/generatePosts";
import { generateJobs } from "./data/generateJobs";
import { generateMessages } from "./data/generateMessages";

export const initialState = {
  users: generateUsers(),
  posts: generatePosts(),
  jobs: generateJobs(),
  messages: generateMessages(),
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return { ...state, posts: [action.payload, ...state.posts] };
    // Other cases
    default:
      return state;
  }
};

export default appReducer;
