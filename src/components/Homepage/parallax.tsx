import React from "react";

interface ParallaxProps {
  className?: string;
}

const Parallax: React.FC<ParallaxProps> = ({ className }) => (
  <>
    <div className="h-full w-full">
      <div className="parallax-container">
        <div className={`parallax-box-image ${className}`}>
        </div>
        <div className="parallax-content">
        </div>
      </div>
    </div>
  </>
);

export { Parallax };
