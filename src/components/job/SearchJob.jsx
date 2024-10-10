import React, { useState } from "react";
import slider from "../../assets/sliders.svg";
import search from "../../assets/search.svg";
import Card from "../shared/Card";

const SearchJob = () => {
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <Card>
      <div>
        <h3 className="text-[12px] px-2 font-semibold leading-3 w-full pb-4 border-b border-[#F4F4F4]">
          YOUR DREAM JOB IS HERE
        </h3>
        <div className="flex items-end p-2">
          <textarea
            className="resize-none w-full h-20 py-4 text-sm bg-transparent border-none outline-none placeholder:text-[18px] placeholder:text-[#18181833]"
            placeholder="Search Jobs"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <div className="flex items-center justify-between gap-2 mt-2">
            <div className="flex justify-between gap-4 ">
              <img src={slider} />
            </div>
            <div>
              <button
                className="text-white bg-[#0077B5] p-2  rounded"
                disabled={loading}
              >
                {loading ? (
                  <span>Loading...</span>
                ) : (
                  <img src={search} alt="" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SearchJob;
