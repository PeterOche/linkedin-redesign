import React, { useContext } from "react";
import AppContext from "../AppState";
import PostsList from "../components/feed/PostList";

const Feed = () => {
  const { state } = useContext(AppContext);
  return (
    <div>
      <h1>Social Feed</h1>
      {/* Pass posts and users to PostsList */}
      <PostsList posts={state.posts} users={state.users} />
    </div>
  );
};

export default Feed;
