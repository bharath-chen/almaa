import React from "react";

interface SpinnerProps {
  size?: "small" | "medium" | "large"; // Optional prop for spinner size
  color?: string; // Optional prop for spinner color
}

const Spinner: React.FC<SpinnerProps> = ({
  size = "medium",
  color = "blue",
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "h-4 w-4";
      case "large":
        return "h-8 w-8";
      default:
        return "h-6 w-6";
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <svg
        className={`animate-spin ${getSizeClasses()} text-${color}-500`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4zm16-1.291A7.962 7.962 0 0120 12h4c0 4.418-3.582 8-8 8v-4z"
        ></path>
      </svg>
    </div>
  );
};

export default Spinner;
