"use client";

import popperAnimation from "@/../public/popper-animation1.json";
import checkCircleAnimation from "@/../public/success-animation.json";
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
export default function SuccessPage() {
  const router = useRouter();
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    // Redirect after 10 seconds
    const timeout = setTimeout(() => {
      router.push("/");
    }, 10000);

    // Set window dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        {dimensions && (
          <LottieAnimation
            animationData={popperAnimation}
            width={dimensions.width}
            height={dimensions.height}
            loop={false}
            autoplay={true}
          />
        )}
      </div>
      <div className="bg-white p-8 shadow-lg rounded-2xl max-w-xl text-center space-y-6 relative z-10 flex flex-col justify-center items-center">
        <LottieAnimation
          animationData={checkCircleAnimation}
          loop={false}
          autoplay={true}
        />
        <h1 className="text-3xl font-bold text-gray-800">
          Thank You for Your Purchase!
        </h1>
        <p className="text-gray-600">
          Your <span className="font-semibold text-black">Ahln – Smart</span>
          <br />
          <h6>Secured Delivery</h6>
          has been ordered successfully. A confirmation email has been sent to
          your registered address.
        </p>

        <motion.button
          key={"2"}
          onClick={() => router.push("/")}
          className="bg-secondary hover:bg-secondary text-white px-6 py-3 rounded-md font-medium transition duration-300"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Go to Home
        </motion.button>
      </div>
    </div>
  );
}
