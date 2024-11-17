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

const UiDistributer: React.FC<UiProps> = ({
  platform,
  content,
  suggestions,
}) => {
  const renderUI = () => {
    switch (platform) {
      case "LinkedIn":
        return <LinkedInUI content={content} suggestions={suggestions} />;
     case "Instagram":
        return (
          <InstagramUI
            content={content}
            suggestions={["Use filters", "Add hashtags"]}
          />
        );
        case "Twitter":
          return (
            <TwitterUI
              content={content}
              imageSrc="src/assets/twitter.webp"
              username="JohnDoe"
              handle="johnny_d"
            />
          );

      case "GitHub":
        return <GithubUI content={content} suggestions={suggestions} />;
      default:
        return <div>Select a platform to view its UI.</div>;
    }
  };

  return <div>{renderUI()}</div>;
};

export default UiDistributer;
