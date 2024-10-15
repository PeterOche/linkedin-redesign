// import { initialState } from "./AppState";
import { generateUsers } from "./data/generateUsers";
import { generatePosts } from "./data/generatePosts";
import { generateJobs } from "./data/generateJobs";
import { generateMessages } from "./data/generateMessages";
import profilePhoto from "./assets/profilePhoto.svg";
import profilePhoto2 from "./assets/Photo2.svg";

export const initialState = {
  users: generateUsers(),
  posts: generatePosts(),
  jobs: generateJobs(),
  messages: [
    {
      id: 1, // contact ID
      name: "Darlene Black",
      img: profilePhoto,
      isActive: false,
      messages: [
        {
          position: "left",
          text: "Hey Darlene! Project is going great!",
          date: new Date(),
        },
        { position: "right", text: "Not bad", date: new Date() },
        {
          position: "left",
          text: "Awesome",
          date: new Date(),
        },
        { position: "right", text: "What are you doing?", date: new Date() },
        {
          position: "left",
          text: "Hey, how is Project going?",
          date: new Date(),
        },
      ],
    },
    {
      id: 2, // contact ID
      name: "Kyle Fisher",
      img: profilePhoto2,
      isActive: true,
      messages: [
        {
          position: "right",
          text: "Hi, Kyle. How are you doing?",
          date: new Date(),
        },
        {
          position: "left",
          text: "Nope, they kicked me out of the office!",
          date: new Date(),
        },
      ],
    },
    {
      id: 3, // contact ID
      name: "Audrey Alexander",
      img: profilePhoto,
      isActive: false,
      messages: [
        {
          position: "left",
          text: "Hey, The project is moving forward.",
          date: new Date(),
        },
        { position: "right", text: "Great job!", date: new Date() },
        {
          position: "left",
          text: "Let me know if you need something else",
          date: new Date(),
        },
        { position: "right", text: "Sure, thank you!", date: new Date() },
      ],
    },
    {
      id: 4,
      name: "Brandon Wilson",
      img: profilePhoto2,
      isActive: false,
      messages: [
        {
          position: "left",
          text: "Hey Brandon! The project is moving forward.",
          date: new Date(),
        },
        { position: "right", text: "Great job!", date: new Date() },
      ],
    },
  ],
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
            return b.trending - a.trending;
          case "NEW":
            return new Date(b.datePosted) - new Date(a.datePosted);
          case "MOST LIKED":
            return b.likes - a.likes;
          default:
            return 0;
        }
      });

      return {
        ...state,
        posts: sortedPosts,
      };

    case "SEND_MESSAGE": {
      const { contactId, message } = action.payload;
      const updatedContacts = state.messages.map((contact) => {
        if (contact.id === contactId) {
          return {
            ...contact,
            messages: [
              ...contact.messages,
              { ...message, position: "right", date: new Date() },
            ],
          };
        }
        return contact;
      });
      return {
        ...state,
        messages: updatedContacts,
      };
    }
    //other cases

    default:
      return state;
  }
};

export default appReducer;
