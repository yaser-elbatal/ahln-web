import { AnimatePresence, motion } from "framer-motion";

type Props = {
  imageSrc: string;
};

export default function RotatingBox({ imageSrc }: Props) {
  return (
    <div className="relative w-full max-w-[300px] sm:max-w-[400px] aspect-[9/16] mx-auto overflow-hidden flex items-center justify-center ">
      <AnimatePresence mode="wait">
        <motion.img
          key={imageSrc}
          src={imageSrc}
          alt="Rotating Icon"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full object-contain rounded-lg "
        />
      </AnimatePresence>
    </div>
  );
}
