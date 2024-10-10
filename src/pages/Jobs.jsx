import React, { useContext } from "react";
import AppContext from "../AppState";
import PostsList from "../components/feed/PostList";
import CreatePost from "../components/feed/CreatePost";
import SideProfileCard from "../components/feed/SideProfileCard";
import NewArticleCard from "../components/feed/NewArticleCard";
import GroupsCard from "../components/feed/GroupsCard";
import HashtagsCard from "../components/feed/HashtagsCard";
import TrendingArticles from "../components/feed/TrendingArticles";
import SearchJob from "../components/job/SearchJob";
import JobsList from "../components/job/JobsList";
import PostJob from "../components/job/PostJob";
import MySearch from "../components/job/MySearch";
import TrackJobs from "../components/job/TrackJobs";
import YouArticles from "../components/job/YouArticles";

const Jobs = () => {
  const { state, dispatch } = useContext(AppContext);
  const groups = state.users[0].groups;

  return (
    <div className="container lg:grid grid-cols-4 lg:gap-[40px] mx-auto px-8 md:px-24 mt-[40px]">
      <div className="col-span-3 space-y-4">
        <SearchJob />
        <JobsList />
      </div>
      <div className="">
        <PostJob />
        <MySearch />
        <TrackJobs />
        <YouArticles articles={groups} />
      </div>
    </div>
  );
};

export default Jobs;
