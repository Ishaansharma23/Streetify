import React, { useRef, useState } from "react";

const Spotlight = ({ text, className }) => {
  const textRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setPosition({ x, y });
    }
  };

  const [firstPart, secondPart] = text.split(' Delivered');
  
 
  const hasDelivered = secondPart !== undefined;

  return (
    <div
      ref={textRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`relative w-fit ${className || ""}`}
    >

      <h1 className="text-4xl md:text-5xl font-bold text-white select-none">
        <span
          className={`${
            isHovering ? "bg-transparent text-white" : "text-orange-500"
          } inline-block px-1 py-1 transition-all duration-300`}
        >
          {firstPart} 
        </span>
        {hasDelivered && (
          <span
            className={`${
              isHovering ? "text-white" : "text-white"
            } transition-colors duration-300`}
          >
            Delivered{secondPart}
          </span>
        )}
      </h1>

      <h1
        className={`pointer-events-none absolute top-0 left-0 text-4xl md:text-5xl font-bold transition-all duration-150 ease-out ${
          isHovering ? "text-orange-500" : "text-white"
        }`}
        style={{
          clipPath: `circle(30px at ${position.x}px ${position.y}px)`,
          WebkitClipPath: `circle(30px at ${position.x}px ${position.y}px)`,
          opacity: isHovering ? 1 : 0,
          transform: isHovering ? "scale(1.02)" : "scale(1)",
          transition: "opacity 0.3s ease, transform 0.3s ease", 
        }}
      >
        {text}
      </h1>
    </div>
  );
};

export default Spotlight;
