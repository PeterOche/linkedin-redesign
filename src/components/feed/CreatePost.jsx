import Card from "../shared/Card";
import linkVector from "../../assets/linkVector.svg";
import imgVector from "../../assets/image.svg";
import film from "../../assets/film.svg";
import send from "../../assets/send.svg";
import { useContext, useState } from "react";
import AppContext from "../../AppState";

const CreatePost = () => {
  const { dispatch, state } = useContext(AppContext);
  const [postText, setPostText] = useState("");
  const [loading, setLoading] = useState(false);
  const currentUser = state.users[0];

  const handlePostSubmit = async () => {
    if (postText.trim()) {
      setLoading(true); // Set loading state to true
      try {
        const newPost = {
          id: Date.now(),
          userId: currentUser.id,
          user: currentUser,
          content: postText,
          likes: 0,
          interactions: {
            likedBy: [], // Change this line to be an array
          },
          trending: 1,
          comments: 0,
          datePosted: Date.now(),
          image: null,
          attachment: [],
        };

        dispatch({ type: "ADD_POST", payload: newPost });
        setPostText(""); // Reset post text
      } catch (error) {
        console.error("Error adding post:", error);
        // Handle error (e.g., display a message to the user)
      } finally {
        setLoading(false); // Reset loading state
      }
    }
  };

  return (
    <Card>
      <div>
        <h3 className="text-[12px] px-2 font-semibold leading-3 w-full pb-4 border-b border-[#F4F4F4]">
          NEW POST
        </h3>
        <div className="flex items-end p-2">
          <textarea
            className="resize-none w-full h-20 py-4 text-sm bg-transparent border-none outline-none placeholder:text-[18px] placeholder:text-[#18181833]"
            placeholder="What's on your mind?"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
          <div className="flex items-center justify-between gap-8 mt-2">
            <div className="flex justify-between gap-4 ">
              <img src={linkVector} className="w-[24px] h-[24px] opacity-20" />
              <img src={imgVector} className="w-[24px] h-[24px] " />
              <img src={film} className="w-[24px] h-[24px] " />
            </div>
            <div>
              <button
                className="text-white p-2 rounded-full"
                onClick={handlePostSubmit}
                disabled={loading} // Disable the button while loading
              >
                {loading ? (
                  <span>Loading...</span> // Optional: loading indicator
                ) : (
                  <img src={send} className="w-[36px] h-[36px] " />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CreatePost;
