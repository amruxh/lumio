import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-90">
      <div
        className="h-16 w-16 border-[6px] border-t-[var(--foreground)] border-b-transparent border-l-transparent border-r-transparent rounded-full animate-spin"
        role="status"
        aria-label="Loading"
      ></div>
    </div>
  );
};

export default Loading;
