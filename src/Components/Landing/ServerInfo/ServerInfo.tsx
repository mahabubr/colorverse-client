/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";

const SlidingText = ({ text }: any) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => prevOffset - 1);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sliding-text-container w-full">
      <div
        className="sliding-text"
        style={{ transform: `translateX(${offset}px)` }}
      >
        {text}
      </div>
    </div>
  );
};

const ServerInfo = () => {
  return (
    <div className="w-full ">
      <SlidingText text="Please allow a moment for the initial fetch for free deploying on Render. Your patience ensures a smoother experience ahead. Thank you!" />
    </div>
  );
};

export default ServerInfo;
