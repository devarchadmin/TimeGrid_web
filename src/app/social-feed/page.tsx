import Wrapper from "@/components/layouts/DefaultWrapper";
import SocialFeedMainArea from "@/components/pagesUI/social-feed/SocialFeedMainArea";

import MetaData from "@/hooks/useMetaData";
import React from "react";

const SocialFeedPage = () => {
  return (
    <>
      <MetaData pageTitle="Social Feed">
        <Wrapper>
          <SocialFeedMainArea />
        </Wrapper>
      </MetaData>
    </>
  );
};

export default SocialFeedPage; 