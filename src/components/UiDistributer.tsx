import React, { useState, useEffect } from "react";
import SkeletonLoader from "./Skelton";
import LinkedInUI from "./LinkedInUI"; 
import TwitterUI from "./TwitterUI";
import InstagramUI from "./InstagramUI";
import GithubUI from "./GithubUI";

interface UiProps {
  platform: string;
}

const UiDistributer: React.FC<UiProps> = ({ platform }) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [platform]);

  const renderUI = () => {
    switch (platform) {
      case "LinkedIn":
        return <LinkedInUI />;
      case "Twitter":
        return <TwitterUI />;
      case "Instagram":
        return <InstagramUI />;
      case "GitHub":
        return <GithubUI />;
      default:
        return <div>Select a platform to view its UI.</div>;
    }
  };

  return <div>{loading ? <SkeletonLoader /> : renderUI()}</div>;
};

export default UiDistributer;
