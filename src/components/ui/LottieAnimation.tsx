// components/LottieAnimation.tsx
import Lottie from "lottie-react";
import React from "react";

interface LottieAnimationProps {
  animationData: object;
  width?: number;
  height?: number;
  loop?: boolean;
  autoplay?: boolean;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  width = 100,
  height = 100,
  loop = true,
  autoplay = true,
}) => {
  return (
    <div style={{ width, height }}>
      <Lottie animationData={animationData} loop={loop} autoplay={autoplay} />
    </div>
  );
};

export default LottieAnimation;
