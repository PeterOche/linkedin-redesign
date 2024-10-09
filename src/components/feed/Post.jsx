import React, { useContext } from "react";
import More from "../../assets/more-horizontal.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faDownload } from "@fortawesome/free-solid-svg-icons";
import Share from "../../assets/share-2.svg";
import AppContext from "../../AppState";

const Post = ({ post }) => {
  const { state, dispatch } = useContext(AppContext);
  const currentUser = state.users[0];

  const { user, content, likes, comments, interactions, attachments, image } =
    post;

  const likedByCurrentUser = interactions.likedBy.includes(currentUser.id);

  const handleLike = () => {
    dispatch({
      type: "LIKE_POST",
      payload: {
        postId: post.id,
        userId: currentUser.id,
        liked: !likedByCurrentUser,
      },
    });
  };

  return (
    <div className="post bg-white p-5 mb-5 rounded ">
      {/* Post Interactions */}
      <div className="flex justify-between">
        {interactions?.likedBy?.length > 0 && (
          <div className="post-interactions mb-4">
            <p className="text-[10px] text-[#0275B1] mb-2">
              {interactions.likedBy[0]
                ? interactions.likedBy.length === 1
                  ? `${interactions.likedBy[0]} liked this`
                  : interactions.likedBy.length === 2
                  ? `${interactions.likedBy[0]} and ${interactions.likedBy[1]} liked this`
                  : `${interactions.likedBy.slice(0, 2).join(", ")} and ${
                      interactions.likedBy.length - 2
                    } others liked this`
                : "You liked this"}
            </p>
          </div>
        )}
        <img src={More} />
      </div>

      {/* User Information */}
      <div className="user-info flex items-center mb-4 py-2 border-t">
        <img
          src={user.profileImage}
          alt={`${user.name}'s profile`}
          className="w-[52px] h-[52px] rounded-full mr-4"
        />
        <div>
          <h4 className="font-bold text-[14px] text-[#181818]">{user.name}</h4>
          <p className="text-[10px] text-[#181818] font-light">
            {user.occupation}
          </p>
        </div>
      </div>

      {/* Post Content */}
      <p className="text-[14px] text-[#181818] leading-[21px]  mb-4">
        {content}
      </p>

      {/* Post Meta Data */}
      {/* <div className="post-meta text-sm text-gray-500 mb-4">
        <p className="mb-1">Date Posted: {datePosted}</p>
        <p className="mb-1">Trending Score: {trending}</p>
        <p className="mb-1">Likes: {likes}</p>
        <p>Comments: {comments}</p>
      </div> */}

      {/* Render Attachments or Image */}
      {attachments?.length > 0 && !image ? (
        <div className="post-attachments mt-3">
          <div className="space-y-2 py-2">
            {attachments?.map((attachment, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-[#E9F0F8] text-[#181818] p-4  rounded"
              >
                <div className="flex items-center">
                  {/* Icon on the left (PDF icon) */}
                  <div className="mr-3">
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      className="text-[#0077B5] text-2xl"
                    />
                  </div>

                  {/* Attachment title */}
                  <div className="space-y-1">
                    <a
                      href={attachment.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#181818] text-[14px] font-medium"
                    >
                      {attachment.title}
                    </a>
                    <p className="text-gray-600 text-xs">
                      {attachment.fileType}, {attachment.fileSize}
                    </p>
                  </div>
                </div>

                {/* Download icon on the right */}
                <div>
                  <a
                    href={attachment.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faDownload}
                      className="text-[#0077B5] text-xl"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : image ? (
        <div className="post-image mt-4">
          <img src={image} alt="Post" className="w-full h-[300px] rounded-lg" />
        </div>
      ) : null}

      {/* Interaction Buttons */}
      {/* Interaction Buttons */}
      <div className="interaction-buttons flex justify-between items-center mt-4 border-t pt-3 text-sm text-[#181818]">
        <div className="flex gap-12 items-center">
          <button
            onClick={handleLike}
            className={`flex items-center gap-1 text-[11px] ${
              likedByCurrentUser ? "text-[#0275B1]" : ""
            } hover:text-[#0275B1]`}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.33337 5.00004V2.33337C8.33337 1.80294 8.12266 1.29423 7.74759 0.919161C7.37252 0.544088 6.86381 0.333374 6.33337 0.333374L3.66671 6.33337V13.6667H11.1867C11.5083 13.6703 11.8203 13.5576 12.0653 13.3494C12.3103 13.1411 12.4718 12.8513 12.52 12.5334L13.44 6.53337C13.469 6.34228 13.4562 6.14716 13.4023 5.96154C13.3484 5.77592 13.2548 5.60424 13.1279 5.45838C13.0011 5.31253 12.8441 5.196 12.6678 5.11685C12.4914 5.03771 12.3 4.99785 12.1067 5.00004H8.33337ZM3.66671 13.6667H1.66671C1.31309 13.6667 0.973947 13.5262 0.723898 13.2762C0.47385 13.0261 0.333374 12.687 0.333374 12.3334V7.66671C0.333374 7.31309 0.47385 6.97395 0.723898 6.7239C0.973947 6.47385 1.31309 6.33337 1.66671 6.33337H3.66671"
                fill={likedByCurrentUser ? "#0275B1" : "none"}
                stroke="#0275B1"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {likes}
          </button>
          {/* Comments Button */}
          <button className="flex items-center text-[11px] gap-1 hover:text-[#0275B1]">
            {/* Comment icon and logic */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 6.66669C13.0023 7.5466 12.7967 8.41461 12.4 9.20002C11.9296 10.1412 11.2065 10.9328 10.3116 11.4862C9.41677 12.0396 8.3855 12.3329 7.33333 12.3334C6.45342 12.3356 5.58541 12.1301 4.8 11.7334L1 13L2.26667 9.20002C1.86995 8.41461 1.66437 7.5466 1.66667 6.66669C1.66707 5.61452 1.96041 4.58325 2.51381 3.68839C3.06722 2.79352 3.85884 2.0704 4.8 1.60002C5.58541 1.20331 6.45342 0.997725 7.33333 1.00002H7.66667C9.05623 1.07668 10.3687 1.66319 11.3528 2.64726C12.3368 3.63132 12.9233 4.94379 13 6.33335V6.66669Z"
                stroke="#0275B1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            {comments}
          </button>
        </div>
        <button className="flex gap-1 items-center text-[11px] hover:text-[#0275B1]">
          <img src={Share} alt="" />
          Share
        </button>
      </div>
    </div>
  );
};

export default Post;
