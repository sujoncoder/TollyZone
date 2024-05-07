"use client";

import { useState } from "react";

function ThumbnailDownloader() {
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  const handleInputChange = (e) => {
    setVideoUrl(e.target.value);
  };

  const extractVideoId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const downloadThumbnail = async () => {
    try {
      const videoId = extractVideoId(videoUrl);
      if (!videoId) {
        throw new Error("Invalid YouTube video URL");
      }

      const response = await fetch(
        `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
      );

      if (!response.ok) {
        throw new Error("Thumbnail not available");
      }

      setThumbnailUrl(response.url);
    } catch (error) {
      console.error(error);
      alert(
        "Error downloading thumbnail. Please check your YouTube video URL and try again."
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <input
        type="text"
        value={videoUrl}
        onChange={handleInputChange}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        placeholder="Enter YouTube video URL"
      />
      <button
        onClick={downloadThumbnail}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Download Thumbnail
      </button>
      {thumbnailUrl && (
        <div className="mt-8">
          <img
            src={thumbnailUrl}
            alt="Thumbnail"
            className="max-w-full h-auto"
          />
        </div>
      )}
    </div>
  );
}

export default ThumbnailDownloader;
