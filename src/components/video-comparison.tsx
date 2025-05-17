"use client";

import { motion } from "framer-motion";
import VideoCard from "./ui/VideoCard";

interface VideoComparisonProps {
  beforeVideoSrc: string;
  afterVideoSrc: string;
}

export default function VideoComparison({
  beforeVideoSrc,
  afterVideoSrc,
}: VideoComparisonProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-h-max">
      {/* Before Video */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <VideoCard
          id="before-video"
          videoSrc={beforeVideoSrc}
          posterSrc="/images/beforeAhln.jpg"
          title="Life"
          highlight="before"
        />
      </motion.div>

      {/* After Video */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <VideoCard
          id="after-video"
          videoSrc={afterVideoSrc}
          posterSrc="/images/afterAhln.jpg"
          title="Life"
          highlight="with"
        />
      </motion.div>
    </div>
  );
}
