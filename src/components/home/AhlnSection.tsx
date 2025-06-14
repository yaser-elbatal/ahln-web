"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import AhlnVedio from "../common/ahln-video";

// function FloatingPaths({ position }: { position: number }) {
//     const paths = Array.from({ length: 36 }, (_, i) => ({
//       id: i,
//       d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
//         380 - i * 5 * position
//       } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
//         152 - i * 5 * position
//       } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
//         684 - i * 5 * position
//       } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
//       color: `rgba(59, 130, 246, ${0.1 + i * 0.02})`,
//       width: 0.5 + i * 0.03,
//     }));

//   return (
//     <div className="absolute inset-0 pointer-events-none">
//       <svg
//         className="w-full h-full text-blue-400"
//         viewBox="0 0 696 316"
//         fill="none"
//       >
//         <title>Background Paths</title>
//         {paths.map((path) => (
//           <motion.path
//             key={path.id}
//             d={path.d}
//             stroke="currentColor"
//             strokeWidth={path.width}
//             strokeOpacity={0.1 + path.id * 0.02}
//             initial={{ pathLength: 0.3, opacity: 0.6 }}
//             animate={{
//               pathLength: 1,
//               opacity: [0.3, 0.6, 0.3],
//               pathOffset: [0, 1, 0],
//             }}
//             transition={{
//               duration: 20 + Math.random() * 10,
//               repeat: Number.POSITIVE_INFINITY,
//               ease: "linear",
//             }}
//           />
//         ))}
//       </svg>
//     </div>
//   );
// }
export default function AhlnSection() {
  const { t, lang } = useLanguage();
  return (
    <div className="relative min-h-[50dvh] w-full flex justify-center py-10 md:py-12 bg-background text-white">
      {/* Background Paths */}
      {/* <div className="absolute inset-0 opacity-40">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div> */}

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl md:text-5xl font-bold text-text text-center mb-16"
        >
          <span className="text-text">{t("whatIsPrefix")}</span>{" "}
          <span className="text-primary">
            {t("whatIsHighlight")} {lang == "en" ? "?" : "؟"}
          </span>
        </motion.h2>

        <AhlnVedio />
      </div>
    </div>
  );
}
