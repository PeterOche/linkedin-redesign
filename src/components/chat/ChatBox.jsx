import React, { useContext, useState } from "react";
import profilePhoto from "../../assets/profilePhoto.svg";
import send from "../../assets/send.svg";
import Card from "../shared/Card";
import BlueButton from "../shared/BlueButton";
import AppContext from "../../AppState";

const ChatComponent = () => {
  const { state } = useContext(AppContext);
  const user = state.users[0];

  const contacts = [
    {
      id: 1,
      name: "Darlene Black",
      message: "Hey, how is your project?",
      img: profilePhoto,
      isActive: false,
      messages: [
        {
          position: "left",
          text: "Hey Darlene! Project is going great!",
          date: new Date(),
        },
        { position: "right", text: "Not bad", date: new Date() },
        {
          position: "left",
          text: "Awesome",
          date: new Date(),
        },
        { position: "right", text: "what are you doing?", date: new Date() },
        {
          position: "left",
          text: "Hey, how is Project going?",
          date: new Date(),
        },
      ],
    },
    {
      id: 2,
      name: "Kyle Fisher",
      message: "Nope, they kicked me out of the office!",
      img: profilePhoto,
      isActive: true,
      messages: [
        {
          position: "right",
          text: "Hi, Kyle. How are you doing?",
          date: new Date(),
        },
        {
          position: "left",
          text: "Nope, they kicked me out of the office!",
          date: new Date(),
        },
      ],
    },
    {
      id: 3,
      name: "Audrey Alexander",
      message: "When you got it?",
      img: profilePhoto,
      isActive: false,
      messages: [
        {
          position: "left",
          text: "Hey, The project is moving forward.",
          date: new Date(),
        },
        { position: "right", text: "Great job!", date: new Date() },
        {
          position: "left",
          text: "Let me know if you need something else",
          date: new Date(),
        },
        { position: "right", text: "Sure, thank you!", date: new Date() },
      ],
    },
    {
      id: 4,
      name: "Brandon Wilson",
      message: "Hey, how is your project?",
      img: profilePhoto,
      isActive: false,
      messages: [
        {
          position: "left",
          text: "Hey Brandon! The project is moving forward.",
          date: new Date(),
        },
        { position: "right", text: "Great job!", date: new Date() },
      ],
    },
  ];

  const [activeContact, setActiveContact] = useState(contacts[2]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const updatedMessages = [
        ...activeContact.messages,
        { position: "right", text: newMessage, date: new Date() },
      ];

      setActiveContact({ ...activeContact, messages: updatedMessages });
      setNewMessage("");
    }
  };

  const handleContactClick = (contact) => {
    setActiveContact(contact);
  };

  return (
    <div className="container lg:grid grid-cols-4 lg:gap-[5px] mx-auto px-8 md:px-24 mt-[40px] aspect-auto mb-8">
      {/* Sidebar for Contacts */}
      <div className="col-span-1 px-1 rounded ">
        <div className="mb-4 bg-[#FCFDFD]">
          <h1 className="text-[#181818] text-[12px] font-bold w-full border-b mt-2 pb-4">
            CHAT
          </h1>
          {contacts.map((contact) => (
            <div
              key={contact.id}
              onClick={() => handleContactClick(contact)}
              className={`flex items-center border-b border-[#F4F4F4] py-2 cursor-pointer ${
                contact.id === activeContact.id
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
                <p className="text-[10px] text-gray-500">{contact.message}</p>
              </div>
            </div>
          ))}
        </div>
        <Card className="mb-16 lg:mb-0">
          <div className="text-[12px] mx-auto ">
            <BlueButton>START NEW CHAT</BlueButton>
          </div>
        </Card>
      </div>

      {/* Chat Window */}
      <div className="col-span-3 flex-1 flex flex-col max-h-[595px] rounded bg-white mx-12">
        {/* Chat Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="font-bold text-[12px]">
            CHAT WITH{" "}
            <span className="text-[#0275B1]">{activeContact.name}</span>
            <span className="ml-2 text-[12px] text-[#181818] opacity-40">
              LAST ONLINE: 4 HOURS AGO
            </span>
          </h2>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto">
          {activeContact.messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.position === "right" ? "justify-end" : "justify-start"
              } mb-4`}
            >
              {message.position === "left" ? (
                <div className="chat chat-start">
                  <div className="chat-bubble max-w-lg text-[14px] rounded-[4px] bg-[#0275B1] text-white">
                    {message.text}
                  </div>
                </div>
              ) : (
                <div className="flex justify-between gap-3">
                  <div>
                    <div className="bg-[#E9F0F8] max-w-lg text-[#181818] p-3 text-[14px] rounded-lg ">
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
          ))}
        </div>

        {/* Message Input */}
        <div className="border-t border-gray-200 p-4 flex lg:gap-4 items-center">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Write your message..."
            className="flex-1 p-2 text-[18px]"
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
