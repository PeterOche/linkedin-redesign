import React, { useContext, useState } from "react";
import AppContext from "../../AppState";

const TrendingArticles = ({ articles }) => {
  const displayedArticle = articles.slice(0, 3);
  return (
    <div className="flex flex-col relative bg-[#FCFDFD] rounded overflow-hidden mt-8 mb-4 p-6 mx-auto">
      <div className=" flex justify-around whitespace-nowrap pb-2 border-b border-[#f4f4f4]">
        <p className="text-[12px] text-[#181818] font-[500]">
          TRENDING ARTICLES
        </p>
      </div>
      <ul className="pt-2 mt-4">
        {displayedArticle.map((article, index) => (
          <li
            key={index}
            className="flex bg-white rounded[6px] border border-[#F4F4F4] items-center  mb-3"
          >
            <img
              className="w-[80px] h-[52px]  mr-3"
              src={article.image}
              alt={article.name}
            />
            <div>
              <p className="relative text-[14px] font-bold text-[#181818] clamp-text">
                {article.article}
              </p>
              <p className="text-[10px] font-light text-[#181818]">
                6,340 viewers
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingArticles;
