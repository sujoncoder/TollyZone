"use client";

import SearchInput from "@/app/components/shared/SearchInput";
import ThumbnailCard from "@/app/components/thumbnailDownloader/ThumbnailCard";
import TittleText from "@/app/components/thumbnailDownloader/TittleText";
import { useEffect, useState } from "react";

const ThumbnailDownload = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  // handle input box
  const handleInput = (e) => {
    setInputUrl(e.target.value);
  };

  // extract video id from YouTube URL
  const extractVideoId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // extract videoId
  const videoId = extractVideoId(inputUrl);

  useEffect(() => {
    const imageThumbnailUrl = videoId
      ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
      : "";
    setThumbnailUrl(imageThumbnailUrl);
  }, [videoId]);

  return (
    <div className="px-2 sm:px-20">
      <TittleText />
      <SearchInput onSearchInput={handleInput} />
      <ThumbnailCard onThumbnailUrl={thumbnailUrl} onVideoId={videoId} />
    </div>
  );
};

export default ThumbnailDownload;
