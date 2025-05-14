"use client";

import { useEffect, useRef } from "react";

interface ImageBubble {
  id: number;
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  size: number;
  image: string;
}

export default function FloatingImageBubbles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Define images to use in bubbles
    const images = [
      "/images/mobile-app.jpg",
      "/images/delivery-box.jpg",
      "/images/delivery-process.jpg",
      "/images/app-interface.jpg",
    ];

    // Create image bubbles
    const bubbles: ImageBubble[] = [];
    const bubbleCount = 4; // One for each image

    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push({
        id: i,
        x: Math.random() * (window.innerWidth - 200),
        y: Math.random() * (window.innerHeight - 200),
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        size: 180 + Math.random() * 40, // Size between 180 and 220px
        image: images[i % images.length],
      });
    }

    // Create bubble elements
    bubbles.forEach((bubble) => {
      const bubbleEl = document.createElement("div");
      bubbleEl.className =
        "absolute rounded-full border-4 border-white bg-cyan-950/30 backdrop-blur-sm overflow-hidden shadow-lg";
      bubbleEl.style.width = `${bubble.size}px`;
      bubbleEl.style.height = `${bubble.size}px`;
      bubbleEl.style.left = `${bubble.x}px`;
      bubbleEl.style.top = `${bubble.y}px`;
      bubbleEl.style.transition = "transform 0.3s ease-out";

      // Add image inside bubble
      const imageContainer = document.createElement("div");
      imageContainer.className =
        "w-full h-full flex items-center justify-center p-4";
      bubbleEl.appendChild(imageContainer);

      // Use a data attribute to store the bubble id
      bubbleEl.dataset.bubbleId = bubble.id.toString();

      container.appendChild(bubbleEl);

      // Create image element using Next.js Image component approach but with DOM
      const img = document.createElement("img");
      img.src = bubble.image;
      img.alt = "Feature image";
      img.className = "object-contain max-w-full max-h-full";
      imageContainer.appendChild(img);
    });

    // Animation function
    const animate = () => {
      bubbles.forEach((bubble) => {
        // Move bubble
        bubble.x += bubble.speedX;
        bubble.y += bubble.speedY;

        // Bounce off edges
        if (bubble.x <= 0 || bubble.x >= window.innerWidth - bubble.size) {
          bubble.speedX *= -1;
          bubble.x = Math.max(
            0,
            Math.min(bubble.x, window.innerWidth - bubble.size)
          );
        }
        if (bubble.y <= 0 || bubble.y >= window.innerHeight - bubble.size) {
          bubble.speedY *= -1;
          bubble.y = Math.max(
            0,
            Math.min(bubble.y, window.innerHeight - bubble.size)
          );
        }

        // Update bubble position
        const bubbleEl = container.querySelector(
          `[data-bubble-id="${bubble.id}"]`
        ) as HTMLElement;
        if (bubbleEl) {
          bubbleEl.style.left = `${bubble.x}px`;
          bubbleEl.style.top = `${bubble.y}px`;

          // Add subtle rotation based on movement
          const rotation = (bubble.speedX + bubble.speedY) * 2;
          bubbleEl.style.transform = `rotate(${rotation}deg)`;
        }
      });

      requestAnimationFrame(animate);
    };

    // Start animation
    const animationId = requestAnimationFrame(animate);

    // Handle window resize
    const handleResize = () => {
      bubbles.forEach((bubble) => {
        // Keep bubbles within new window bounds
        bubble.x = Math.min(bubble.x, window.innerWidth - bubble.size);
        bubble.y = Math.min(bubble.y, window.innerHeight - bubble.size);
      });
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);

      // Remove all bubble elements
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden z-0 pointer-events-none"
    />
  );
}
