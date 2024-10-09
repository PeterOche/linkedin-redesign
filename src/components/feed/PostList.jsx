import React, { useContext } from "react";
import Post from "./Post";
import SortBy from "./SortBy";
import AppContext from "../../AppState";

const PostList = ({ posts }) => {
  const { state, dispatch } = useContext(AppContext);
  const handleSort = (sortBy) => {
    dispatch({
      type: "SORT_POSTS",
      payload: { sortBy },
    });
  };
  return (
    <div>
      <SortBy handleSort={handleSort} />
      <div className="post-list">
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
