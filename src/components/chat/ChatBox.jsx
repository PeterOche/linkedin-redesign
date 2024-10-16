import React, { useContext, useState } from "react";
import send from "../../assets/send.svg";
import Card from "../shared/Card";
import BlueButton from "../shared/BlueButton";
import AppContext from "../../AppState";

const ChatComponent = () => {
  const { state, dispatch } = useContext(AppContext);
  const user = state.users[0];

  const [activeContactId, setActiveContactId] = useState(2);
  const [newMessage, setNewMessage] = useState("");

  const activeContact = state.messages.find(
    (contact) => contact.id === activeContactId
  );

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        position: "right",
        text: newMessage,
        date: new Date(),
      };

      dispatch({
        type: "SEND_MESSAGE",
        payload: { contactId: activeContact.id, message },
      });

      setNewMessage("");
    }
  };

  const handleContactClick = (contactId) => {
    setActiveContactId(contactId);
  };

  return (
    <div className="container lg:grid grid-cols-4 lg:gap-[5px] mx-auto px-8 md:px-24 mt-[40px] aspect-auto mb-8">
      {/* Sidebar for Contacts */}
      <div className="col-span-1 px-1 rounded ">
        <div className="mb-4 bg-[#FCFDFD]">
          <h1 className="text-[#181818] text-[12px] font-bold w-full border-b mt-2 pb-4">
            CHAT
          </h1>
          {state.messages.map((contact) => (
            <div
              key={contact.id}
              onClick={() => handleContactClick(contact.id)}
              className={`flex items-center border-b border-[#F4F4F4] py-2 cursor-pointer ${
                contact.id === activeContactId
                  ? "border-l-8 px-[10px] border-l-[#0275B1]"
                  : ""
              }`}
            >
              <img src={contact.img} alt="Avatar" className="rounded-full" />
              <div className="ml-3">
                <h3
                  className={`text-[14px] ${
                    contact.isActive ? "text-[#0275B1]" : ""
                  }`}
                >
                  {contact.name}
                </h3>
                {/* Handle empty messages array */}
                <p className="text-[10px] text-gray-500">
                  {contact.messages?.[contact.messages.length - 1]?.text ||
                    "No messages yet"}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Card className="mb-8 lg:mb-0">
          <div className="text-[12px] mx-auto ">
            <BlueButton>START NEW CHAT</BlueButton>
          </div>
        </Card>
      </div>

      {/* Chat Window */}
      <div className="col-span-3 flex-1 flex flex-col max-h-[595px] rounded bg-white lg:mx-12">
        {/* Chat Header */}
        <div className="flex flex-col md:flex-row flex-wrap justify-between items-center p-4 border-b border-gray-200">
          <h2 className="font-bold text-[12px]">
            CHAT WITH{" "}
            <span className="text-[#0275B1]">{activeContact?.name}</span>
            <span className="ml-2 text-[12px] text-[#181818] opacity-40">
              LAST ONLINE: 4 HOURS AGO
            </span>
          </h2>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto">
          {activeContact?.messages?.length ? (
            activeContact.messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.position === "right" ? "justify-end" : "justify-start"
                } mb-4`}
              >
                {message.position === "left" ? (
                  <div className="chat chat-start">
                    <div
                      data-aos="flip-right"
                      className="chat-bubble max-w-lg text-[14px] rounded-[4px] bg-[#0275B1] text-white"
                    >
                      {message.text}
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-between gap-3">
                    <div>
                      <div
                        data-aos="flip-left"
                        className="bg-[#E9F0F8] max-w-lg text-[#181818] p-3 text-[14px] rounded-lg "
                      >
                        <p>{message.text}</p>
                      </div>
                      <span className="flex justify-end text-xs text-gray-300 mt-1">
                        {message.date.toLocaleTimeString()}
                      </span>
                    </div>
                    <img
                      className="h-[42px] w-[42px] rounded-full"
                      src={user.profileImage}
                      alt=""
                    />
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500">
              No messages yet. Start a conversation!
            </p>
          )}
        </div>

        {/* Message Input */}
        <div className="border-t border-gray-200 p-4 flex lg:gap-4 items-center">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Write your message..."
            className="flex-1 p-2 text-[18px] w-14"
          />
          <button
            onClick={handleSendMessage}
            className="ml-2 bg-gradient-to-r from-[#0077B5] to-[#0E6795] hover:bg-gradient-to-l text-white font-semibold py-1 rounded px-2"
          >
            <img src={send} alt="Send" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
