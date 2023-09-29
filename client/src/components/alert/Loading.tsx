import React from "react";

const Loading = () => {
  return (
    <div
      className="loading fixed h-full w-full text-center"
      style={{
        background: "#0007",
        color: "white",
        top: 0,
        left: 0,
        zIndex: 99,
      }}
    >
      <svg width="205" height="250" viewBox="0 0 40 50">
        <polygon
          stroke="#fff"
          strokeWidth="1"
          fill="none"
          points="20,1 40,40 1,40"
        />
        <text fill="#fff" x="5" y="47">
          Loading
        </text>
      </svg>
    </div>
  );
};

export default Loading;
