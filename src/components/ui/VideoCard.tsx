import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

interface VideoCardProps {
  id: string;
  videoSrc: string;
  posterSrc: string;
  title: string;
  highlight: string;
}

export default function VideoCard({
  id,
  videoSrc,
  posterSrc,
  title,
  highlight,
}: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handlePlayPause = () => {
    const video = document.getElementById(id) as HTMLVideoElement;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = document.getElementById(id) as HTMLVideoElement;
    video.muted = !video.muted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative w-full h-[600px] md:h-[800px] bg-black rounded-2xl overflow-hidden shadow-2xl shadow-cyan-900/20">
      <video
        id={id}
        className="w-full h-full object-cover"
        src={videoSrc}
        muted
        playsInline
        loop
        poster={posterSrc}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-center items-center bg-black/80">
        <h3 className="text-4xl font-semibold text-white">
          {title} <span className="text-cyan-400">{highlight}</span> Ahln.
        </h3>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-end items-center">
        <div className="flex gap-2">
          <button
            onClick={toggleMute}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          <button
            onClick={handlePlayPause}
            className="w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center text-black hover:bg-cyan-300 transition-colors"
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
}
