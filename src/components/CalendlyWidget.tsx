"use client";
import React, { useEffect } from "react";

const CalendlyWidget = () => {
  // Dynamically load Calendly script on mount
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Open Calendly popup on click
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    (window as any).Calendly.initPopupWidget({ url: "/" });
    return false;
  };

  return (
    <div>
      {/* Calendly styles */}
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />

      {/* Calendly styles */}
      <a href="#" onClick={handleClick}>
        Schedule time with me
      </a>
    </div>
  );
};

export default CalendlyWidget;
