"use client"
import React, { useEffect } from "react";
import ChatSidebar from "./ChatSidebar";
import ChatWindow from "./ChatWindow";

const AppChatMainArea = () => {
  function removeFooter() {
    const footer = document.querySelector('.footer');
    if (footer) {
      footer.remove();
    }
  }

  useEffect(() => {
    removeFooter();
  }, []);
  
  return (
    <>
      {/* -- App side area start -- */}
      <div className="app__slide-wrapper !rounded-lg">
        <div className="chatbox__area mb-5 !rounded-lg">
          <div className="chatbox__main-wrapper !rounded-lg">
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
