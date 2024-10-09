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
  sortOption: "TRENDING",
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      if (
        action.payload &&
        !state.posts.find((post) => post.id === action.payload.id)
      ) {
        return { ...state, posts: [action.payload, ...state.posts] };
      } else {
        return state;
      }
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

    case "SET_SORT_OPTION":
      return {
        ...state,
        sortOption: action.payload,
      };

    case "SORT_POSTS":
      const { sortBy } = action.payload;

      const sortedPosts = [...state.posts].sort((a, b) => {
        switch (sortBy) {
          case "TRENDING":
            return b.trending - a.trending; // Sort by trending score
          case "NEW":
            return new Date(b.datePosted) - new Date(a.datePosted); // Sort by newest date
          case "MOST LIKED":
            return b.likes - a.likes; // Sort by most likes
          default:
            return 0;
        }
      });

      return {
        ...state,
        posts: sortedPosts,
      };
    //other cases

    default:
      return state;
  }
};

export default appReducer;
