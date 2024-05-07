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

  const videoId = extractVideoId(inputUrl);
  console.log(videoId);

  useEffect(() => {
    const downloadThumbnail = async (videoId) => {
      console.log(videoId);
      try {
        const response = await fetch(
          `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
        );
        console.log(response);
        setThumbnailUrl(response.url);
      } catch (error) {}
    };
    downloadThumbnail();
  }, [videoId]);

  return (
    <>
      <TittleText />
      <SearchInput onSearchInput={handleInput} />
      <ThumbnailCard />
    </>
  );
};

export default ThumbnailDownload;
