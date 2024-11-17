import React from "react";

import LinkedInUI from "./LinkedInUI";
import TwitterUI from "./TwitterUI";
import InstagramUI from "./InstagramUI";
import GithubUI from "./GithubUI";

interface UiProps {
  platform: string;
  content: string | undefined;
  suggestions: string[] | undefined;
}

const UiDistributer: React.FC<UiProps> = ({ platform, content, suggestions }) => {
  const renderUI = () => {
    switch (platform) {
      case "LinkedIn":
        return <LinkedInUI content={content} suggestions={suggestions} />;
      case "Twitter":
        return <TwitterUI
        username="Jane Doe"
        handle="janedoe"
        content={`This is the first point.\nThis is the second point.\nThis is the third point.`}
        imageSrc="https://via.placeholder.com/500"
      />
      
      case "Instagram":
        return <InstagramUI
        postImage="https://example.com/post.jpg"
        content="This is an example post."
        suggestions={["Suggestion 1", "Suggestion 2"]}
        
      />;
      
      case "GitHub":
        return <GithubUI content={content} suggestions={suggestions} />;
      default:
        return <div>Select a platform to view its UI.</div>;
    }
  };

  return <div >{renderUI()}</div>;
};

export default UiDistributer;
