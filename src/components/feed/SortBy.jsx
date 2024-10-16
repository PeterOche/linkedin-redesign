import { useContext, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import AppContext from "../../AppState";

const SortBy = ({ handleSort }) => {
  const { state, dispatch } = useContext(AppContext);
  const { sortOption } = state;

  const handleSelection = (option) => {
    dispatch({
      type: "SET_SORT_OPTION",
      payload: option,
    });

    handleSort(option);
  };

  return (
    <div className="py-4 z-20">
      <div className="divider text-[#181818] text-[12px]">
        <span className="font-medium">SORT BY:</span>
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="cursor-pointer text-[#0275B1] font-semibold"
          >
            {sortOption} <FaChevronDown className="inline " />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40 z-40"
          >
            <li>
              <button onClick={() => handleSelection("TRENDING")}>
                TRENDING
              </button>
            </li>
            <li>
              <button onClick={() => handleSelection("NEW")}>NEW</button>
            </li>
            <li>
              <button onClick={() => handleSelection("MOST LIKED")}>
                MOST LIKED
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SortBy;
