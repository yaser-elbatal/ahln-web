"use client";

import notFoundAnimation from "@/../public/404-animation.json";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LottieAnimation = dynamic(
  () => import("@/components/ui/LottieAnimation"),
  {
    ssr: false,
  }
);

export default function NotFoundPage() {
  const router = useRouter();
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    // Set window dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Update dimensions on window resize
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        {dimensions && (
          <LottieAnimation
            animationData={notFoundAnimation}
            width={dimensions.width}
            height={dimensions.height}
            loop={true}
            autoplay={true}
          />
        )}
      </div>
      <div className="bg-white p-8 shadow-lg rounded-2xl max-w-xl text-center space-y-6 relative z-10 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-gray-800">Page Not Found</h1>
        <p className="text-gray-600 text-lg">
          Oops! The page you are looking for does not exist or has been moved.
        </p>

        <motion.button
          onClick={() => router.push("/")}
          className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-md font-medium transition duration-300"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Back to Home
        </motion.button>
      </div>
    </div>
  );
}
