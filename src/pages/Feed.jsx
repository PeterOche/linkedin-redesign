import React, { useContext } from "react";
import AppContext from "../AppState";
import PostsList from "../components/feed/PostList";

const Feed = () => {
  const { state } = useContext(AppContext);
  return (
    <div className="container lg:grid grid-cols-4 lg:gap-[40px] mx-auto px-8 md:px-24 mt-[40px]">
      <div className="col-span-3">
        <PostsList posts={state.posts} users={state.users} />
      </div>
    </div>
  );
};

export default Feed;
