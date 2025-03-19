import Wrapper from "@/components/layouts/DefaultWrapper";
import AppChatMainArea from "@/components/pagesUI/apps/app-chat/AppChatMainArea";
import MetaData from "@/hooks/useMetaData";
import React from "react";

const AppChatMain = () => {
  return (
    <>
      <MetaData pageTitle="App Chat">
        <Wrapper>
          <AppChatMainArea />
        </Wrapper>
      </MetaData>
    </>
  );
};

export default AppChatMain;
