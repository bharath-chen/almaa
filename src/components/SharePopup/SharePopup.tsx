import React, { useState } from "react";
import styles from "./SharePopup.module.css";
import {
  FacebookShareButton,
  FacebookIcon,
  XIcon,
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

interface SharePopupProps {
  title?: string;
  onClose: () => void;
}

const SharePopup: React.FC<SharePopupProps> = ({ title = "", onClose }) => {
  const pageUrl = window.location.href;
  const [notificationVisible, setNotificationVisible] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(pageUrl).then(() => {
      setNotificationVisible(true);
      setTimeout(() => {
        setNotificationVisible(false);
      }, 800);
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <h2 className="text-lg font-semibold mb-4">Share</h2>
        {notificationVisible && (
          <div
            className={`${styles.notification} ${
              notificationVisible ? styles.fadeIn : styles.fadeOut
            }`}
          >
            Copied!
          </div>
        )}
        <div className="grid grid-cols-4 gap-4">
          <span>
            <svg
              onClick={handleCopyLink}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
              />
            </svg>
          </span>

          <FacebookShareButton title={title} url={pageUrl}>
            <FacebookIcon
              className="cursor-pointer hover:opacity-75"
              size={30}
              round
            />
          </FacebookShareButton>

          <TwitterShareButton title={title} url={pageUrl}>
            <XIcon
              className="cursor-pointer hover:opacity-75"
              size={30}
              round
            />
          </TwitterShareButton>

          <WhatsappShareButton url={pageUrl}>
            <WhatsappIcon
              className="cursor-pointer hover:opacity-75"
              size={30}
              round
            />
          </WhatsappShareButton>
        </div>
      </div>
    </div>
  );
};

export default SharePopup;
