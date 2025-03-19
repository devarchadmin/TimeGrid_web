"use client"
import React from "react";
import ChatSidebar from "./ChatSidebar";
import ChatWindow from "./ChatWindow";

const AppChatMainArea = () => {
  return (
    <>
      {/* -- App side area start -- */}
      <div className="app__slide-wrapper">
        <div className="chatbox__area mb-5">
          <div className="chatbox__main-wrapper">
            <ChatSidebar />
            <ChatWindow />
          </div>
        </div>
      </div>
      {/* -- App side area end -- */} 
    </>
  );
};

export default AppChatMainArea;
