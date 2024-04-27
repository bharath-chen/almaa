import { useState } from "react";
import VideoPopup from "./VideoPopup";

interface Video {
  id: number;
  title: string;
  description: string;
  src: string;
  thumbnail: string;
}

interface VideoProps {
  video: Video;
}

const Video = ({ video }: VideoProps) => {
  const [currentVideoSelected, setCurrentVideo] = useState<Video | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const openVideo = () => {
    setCurrentVideo(video);
    setShowPopup(true);
  };

  const closeVideo = () => {
    setShowPopup(false);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      {showPopup && (
        <VideoPopup videoUrl={currentVideoSelected.src} onClose={closeVideo} />
      )}

      {/* Image overlay */}
      <div className="relative">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-auto"
        />
        {/* Play button */}
        <button
          onClick={openVideo}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white rounded-full p-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3l14 9L5 21V3z"
            />
          </svg>
        </button>
      </div>

      {/* Video information */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{video.title}</h3>
        <p className="text-sm text-gray-600">{video.description}</p>
      </div>
    </div>
  );
};

export default Video;
