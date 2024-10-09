import React, { useContext } from "react";
import More from "../../assets/more-horizontal.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faDownload } from "@fortawesome/free-solid-svg-icons";
import Share from "../../assets/share-2.svg";
import AppContext from "../../AppState";

const Post = ({ post }) => {
  const { state, dispatch } = useContext(AppContext);
  const currentUser = state.users[0];

  const {
    user,
    content,
    likes,
    comments,
    datePosted,
    trending,
    interactions,
    attachments,
    image,
  } = post;

  const likedByCurrentUser = interactions.likedBy?.includes(currentUser.id); // Use optional chaining

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
    <div className="post bg-white p-5 mb-5 rounded">
      {/* Post Interactions */}
      <div className="flex justify-between">
        {interactions.likedBy && interactions.likedBy.length > 0 ? ( // Check if likedBy is defined and not empty
          <div className="post-interactions mb-4">
            <p className="text-[10px] text-[#0275B1] mb-2">
              {interactions.likedBy.length === 1
                ? `${interactions.likedBy[0]} liked this`
                : interactions.likedBy.length === 2
                ? `${interactions.likedBy[0]} and ${interactions.likedBy[1]} liked this`
                : `${interactions.likedBy.slice(0, 2).join(", ")} and ${
                    interactions.likedBy.length - 2
                  } others liked this`}
            </p>
          </div>
        ) : (
          <p className="text-[10px] text-[#999] mb-2">No likes yet</p> // Fallback message for no likes
        )}
        <img src={More} alt="More options" />
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
      <p className="text-[14px] text-[#181818] leading-[21px] mb-4">
        {content}
      </p>

      {/* Render Attachments or Image */}
      {attachments.length > 0 && !image ? (
        <div className="post-attachments mt-3">
          <div className="space-y-2 py-2">
            {attachments.map((attachment, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-[#E9F0F8] text-[#181818] p-4 rounded"
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
                d="M13 6.66669C13.0023 7.5466 12.7967 8.41461 12.4 9.20002C11.9296 10.1412 11.2065 10.9328 10.3116 11.4862C9.41677 12.0396 8.3855 12.3329 7.33333 12.3334C6.45342 12.3356 5.58541 12.1301 4.8 11.7334L1 13L2.26667 9.20002C1.86995 8.41461 1.66437 7.5466 1.66667 6.66669C1.66915 5.26174 2.30802 3.95787 3.43333 3.06669C4.55864 2.17551 6.22439 1.75971 7.7 2.00002C9.17562 2.24033 10.2974 3.00062 11.1 4.20002C11.6595 5.25788 12.0029 6.49465 12.1 7.80002C12.1 7.08002 12.0212 6.38186 11.9 5.70002C11.7788 5.01818 11.5758 4.39016 11.3333 3.80002C11.1341 3.28379 10.9317 2.80539 10.7333 2.36669C10.5133 1.89406 10.2788 1.47061 10.0667 1.10002C9.87807 0.807095 9.60489 0.56554 9.29074 0.4C8.97659 0.234458 8.61576 0.150313 8.26667 0.133356C7.91758 0.116398 7.57699 0.267885 7.33333 0.600021C7.05245 1.02477 6.60002 1.16669 6 1.16669C5.6999 1.16669 5.38062 1.04687 5.1 0.900021C4.61942 0.616818 4.34949 0.0981567 4.4 0.133356C4.81324 0.335287 5.21531 0.666689 5.53333 1.16669C5.80345 1.62652 6 1.85232 6.26667 2.00002C7.23869 2.52914 8.07844 2.89512 8.73333 3.06669C9.38822 3.23826 10.0133 3.26669 10.5333 3.16669C10.6843 3.13366 10.8279 3.13035 10.9667 3.16669C11.2452 3.27534 11.5483 3.36587 11.8667 3.46669C12.186 3.56635 12.5667 3.66669 13 4.20002"
                fill="none"
                stroke="#0275B1"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {comments}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
