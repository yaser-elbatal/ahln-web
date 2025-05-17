"use client";

import { motion } from "framer-motion";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

interface VideoComparisonProps {
  beforeVideoSrc: string;
  afterVideoSrc: string;
}

export default function VideoComparison({
  beforeVideoSrc,
  afterVideoSrc,
}: VideoComparisonProps) {
  const [isBeforePlaying, setIsBeforePlaying] = useState(false);
  const [isAfterPlaying, setIsAfterPlaying] = useState(false);
  const [isBeforeMuted, setIsBeforeMuted] = useState(true);
  const [isAfterMuted, setIsAfterMuted] = useState(true);

  const handleBeforePlay = () => {
    const video = document.getElementById("before-video") as HTMLVideoElement;
    if (isBeforePlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsBeforePlaying(!isBeforePlaying);
  };

  const handleAfterPlay = () => {
    const video = document.getElementById("after-video") as HTMLVideoElement;
    if (isAfterPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsAfterPlaying(!isAfterPlaying);
  };

  const toggleBeforeMute = () => {
    const video = document.getElementById("before-video") as HTMLVideoElement;
    video.muted = !video.muted;
    setIsBeforeMuted(!isBeforeMuted);
  };

  const toggleAfterMute = () => {
    const video = document.getElementById("after-video") as HTMLVideoElement;
    video.muted = !video.muted;
    setIsAfterMuted(!isAfterMuted);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Before Ahln Video */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-900/20"
      >
        <div className="flex justify-center items-center w-full bg-black">
          <video
            id="before-video"
            className="w-full max-h-[600px] object-fill"
            src={beforeVideoSrc}
            muted
            playsInline
            loop
            poster="/images/beforeAhln.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute top-0 left-0 right-0 p-4 flex justify-center items-center bg-black/80">
            <h3 className="text-4xl font-semibold text-white">
              Life <span className="text-cyan-400">before</span> Ahln.
            </h3>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-end items-center">
            <div className="flex gap-2">
              <button
                onClick={toggleBeforeMute}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                {isBeforeMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
              <button
                onClick={handleBeforePlay}
                className="w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center text-black hover:bg-cyan-300 transition-colors"
              >
                {isBeforePlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* After Ahln Video */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
        className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-900/20"
      >
        <div className="flex justify-center items-center w-full bg-black">
          <video
            id="after-video"
            className="w-full max-h-[600px] object-fill"
            src={afterVideoSrc}
            muted
            playsInline
            loop
            poster="/images/afterAhln.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute top-0 left-0 right-0 p-4 flex justify-center items-center bg-black/80">
            <h3 className="text-4xl font-semibold text-white">
              Life <span className="text-cyan-400">with</span> Ahln.
            </h3>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-end items-center">
            <div className="flex gap-2">
              <button
                onClick={toggleAfterMute}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                {isAfterMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
              <button
                onClick={handleAfterPlay}
                className="w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center text-black hover:bg-cyan-300 transition-colors"
              >
                {isAfterPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
