"use client";

import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function AhlnVedio() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Handle intersection observer for visibility
  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the video is visible
    };

    const onIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const video = videoRef.current;
        if (entry.isIntersecting && video) {
          // Play the video when it's visible
          video.play();
          setIsPlaying(true);
        } else {
          // Pause the video when it's not visible
          if (video) {
            video.pause();
            setIsPlaying(false);
          }
        }
      });
    };

    // Create IntersectionObserver to observe video visibility
    const observer = new IntersectionObserver(onIntersection, observerOptions);
    if (videoRef.current) observer.observe(videoRef.current);

    // Cleanup observer on component unmount
    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center  w-[100%]">
      {/* Video Section */}
      <div className="group relative rounded-xl overflow-hidden shadow-xl border border-blue-500/40 w-full md:w-[100%] cursor-pointer aspect-video">
        <video
          ref={videoRef}
          className="w-full h-full object-cover block"
          src="/videos/ahln-features.mp4"
          muted
          playsInline
          autoPlay
          poster="/images/AhlnTablet.png"
          onCanPlay={() => {
            const video = videoRef.current;
            if (video) {
              video.style.objectFit = "cover";
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#070F22]/60 to-[#0d2a56]/40 group-hover:opacity-40 transition-opacity z-10" />
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center shadow-lg">
              <Play className="w-5 h-5 text-white ml-1" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
