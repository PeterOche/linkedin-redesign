import React, { useContext } from "react";
import AppContext from "../AppState";
import PostsList from "../components/feed/PostList";
import CreatePost from "../components/feed/CreatePost";
import SortBy from "../components/feed/SortBy";
import StatCard from "../components/shared/StatCard";
import VisitorCard from "../components/shared/VisitorCard";
import SideProfileCard from "../components/feed/SideProfileCard";
import NewArticleCard from "../components/feed/NewArticleCard";
import GroupsCard from "../components/feed/GroupsCard";

const Feed = () => {
  const { state, dispatch } = useContext(AppContext);
  const user = state.users[0];
  const groups = state.users[0].groups;

  return (
    <div className="container lg:grid grid-cols-4 lg:gap-[40px] mx-auto px-8 md:px-24 mt-[40px]">
      <div className="col-span-3 space-y-4">
        <CreatePost />
        {/* <SortBy handleSort={handleSort} /> */}
        <PostsList posts={state.posts} users={state.users} />
      </div>
      <div className="">
        <SideProfileCard user={user} />
        <NewArticleCard />
        <GroupsCard groups={groups} />
      </div>
    </div>
  );
};

export default Feed;
