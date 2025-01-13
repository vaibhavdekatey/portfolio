import React, { useEffect, useRef } from "react";

const Blob = () => {
  const blobRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (blobRef.current) {
        // Calculate the center of the blob
        const blobWidth = blobRef.current.offsetWidth;
        const blobHeight = blobRef.current.offsetHeight;

        const x = event.clientX + window.scrollX - blobWidth / 2;
        const y = event.clientY + window.scrollY - blobHeight / 2;

        // Update blob position
        blobRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    // Add mousemove event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={blobRef}
      className={`absolute h-96 aspect-square bg-teal-400/20 rounded-full pointer-events-none transition-transform duration-75 ease-out blur-3xl z-0 opacity-20 `}
    />
  );
};

export default Blob;
