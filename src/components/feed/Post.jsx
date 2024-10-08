import React from "react";

const Post = ({ post }) => {
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

  return (
    <div className="post bg-white p-5 mb-5 rounded-lg shadow-sm border border-gray-300">
      {/* User Information */}
      <div className="user-info flex items-center mb-4">
        <img
          src={user.profileImage}
          alt={`${user.name}'s profile`}
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <h4 className="font-bold text-lg text-gray-900">{user.name}</h4>
          <p className="text-sm text-gray-500">{user.occupation}</p>
        </div>
      </div>

      {/* Post Content */}
      <p className="text-base text-gray-800 mb-4">{content}</p>

      {/* Post Meta Data */}
      <div className="post-meta text-sm text-gray-500 mb-4">
        <p className="mb-1">Date Posted: {datePosted}</p>
        <p className="mb-1">Trending Score: {trending}</p>
        <p className="mb-1">Likes: {likes}</p>
        <p>Comments: {comments}</p>
      </div>

      {/* Post Interactions */}
      {interactions.likedBy.length > 0 && (
        <div className="post-interactions mb-4">
          <p className="font-semibold text-gray-700 mb-2">Liked by:</p>
          <ul className="list-disc ml-5">
            {interactions.likedBy.map((person, index) => (
              <li key={index} className="text-sm text-gray-600">
                {person}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Render Attachments or Image */}
      {attachments.length > 0 && !image ? (
        <div className="post-attachments mt-3">
          <p className="font-semibold text-gray-700">Attachments:</p>
          <ul className="list-disc ml-5">
            {attachments.map((attachment, index) => (
              <li key={index} className="text-sm text-blue-600">
                <a
                  href={attachment.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {attachment.title} ({attachment.fileType},{" "}
                  {attachment.fileSize})
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : image ? (
        <div className="post-image mt-4">
          <img src={image} alt="Post" className="w-full rounded-lg" />
        </div>
      ) : null}

      {/* Interaction Buttons */}
      <div className="interaction-buttons flex justify-between items-center mt-4 border-t pt-3 text-sm text-gray-600">
        <button className="flex items-center hover:text-blue-500">
          <i className="fas fa-thumbs-up mr-2"></i>
          {likes}
        </button>
        <button className="flex items-center hover:text-blue-500">
          <i className="fas fa-comment mr-2"></i>
          {comments}
        </button>
        <button className="flex items-center hover:text-blue-500">
          <i className="fas fa-share mr-2"></i>
          Share
        </button>
      </div>
    </div>
  );
};

export default Post;
