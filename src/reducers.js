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
    case "LIKE_POST":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.postId
            ? {
                ...post,
                likes: post.likes + (action.payload.liked ? 1 : -1),
                interactions: {
                  ...post.interactions,
                  likedBy: action.payload.liked
                    ? [...post.interactions.likedBy, action.payload.userId]
                    : post.interactions.likedBy.filter(
                        (userId) => userId !== action.payload.userId
                      ),
                },
              }
            : post
        ),
      };

    //other cases

    default:
      return state;
  }
};

export default appReducer;
