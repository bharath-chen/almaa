interface VideoPopupProps {
  videoUrl: string;
  onClose: () => void;
}

const VideoPopup = ({ videoUrl, onClose }: VideoPopupProps) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg overflow-hidden shadow-md z-[999]">
      <div className="relative max-w-4xl">
        <button
          className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <iframe
          src={videoUrl}
          title="Video Popup"
          className="w-full h-full"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPopup;
