import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

export default function ProgressBar({ value }) {
  const [percent, setPercent] = useState(0); // 👈 start from 0

  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));
  }, [value]);

  return (
    <div
      className="progress"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percent}
    >
      <span className="content">{percent.toFixed()}%</span>
      <div
        className="progress-container"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
