import React from "react";
import LeftCard from "../components/network/LeftCard";
import NetworkTabs from "../components/network/NetworkTabs";

const Network = () => {
  return (
    <div className="container lg:grid grid-cols-4 lg:gap-[40px] mx-auto px-8 md:px-24 mt-[40px]">
      <div className="">
        <LeftCard />
        {/* <SortBy handleSort={handleSort} />
        <PostsList posts={state.posts} users={state.users} /> */}
      </div>
      <div className="col-span-3 space-y-4">
        {/* <SideProfileCard user={user} />
        <NewArticleCard />
        <GroupsCard groups={groups} />
        <HashtagsCard />
        <TrendingArticles articles={groups} /> */}
        <NetworkTabs />
      </div>
    </div>
  );
};

export default Network;
