"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import Image from "next/image";

function CakeSVG({ blownOut }: { blownOut: boolean }) {
  return (
    <motion.svg
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewBox="0 0 400 400"
      className={`${
        blownOut ? "animate-none" : "animate-subtle-bounce"
      } w-[550px] h-[400px] `}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <rect x="50" y="290" width="300" height="50" rx="12" fill="#7c3aed" />{" "}
        // Deep purple
        <rect
          x="70"
          y="230"
          width="260"
          height="50"
          rx="12"
          fill="#c084fc"
        />{" "}
        // Soft lavender
        <rect
          x="90"
          y="140"
          width="220"
          height="80"
          rx="12"
          fill="#f3e8ff"
        />{" "}
        // Light lilac
      </g>

      <image
        href="/wie.png"
        x="160"
        y="130"
        width="80"
        height="100"
        preserveAspectRatio="xMidYMid meet"
      />

      {[190, 200, 210].map((x, i) => (
        <g key={`candle-${i}`}>
          <rect x={x} y={100} width={6} height={40} fill="#facc15" rx={2} />
          {!blownOut && (
            <motion.ellipse
              cx={x + 3}
              cy={95}
              rx={4}
              ry={6}
              fill="#f97316"
              animate={{ scaleY: [1, 1.5, 1] }}
              transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.2 }}
            />
          )}
        </g>
      ))}
    </motion.svg>
  );
}

export default function HomePage() {
  const [blownOut, setBlownOut] = useState(false);

  return (
    <main className="min-h-screen bg-purple-200 text-white flex flex-col items-center justify-center p-10">
      {/* <Image
        src="/wie.png"
        width={1000}
        height={1000}
        alt="sps day"
        className="mb-10 w-1/3 md:w-1/4"
      /> */}

      <div className="flex flex-col items-center justify-center text-black">
        <h1 className="text-2xl md:text-4xl mb-6 text-center">
          IEEE WiE India Council Celebrates
        </h1>
        <h1 className="text-xl md:text-3xl font-bold">🎉 IEEE WiE Day 🎉</h1>
      </div>

      <div className="cursor-pointer" onClick={() => setBlownOut(true)}>
        <CakeSVG blownOut={blownOut} />
      </div>

      {blownOut && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
    </main>
  );
}
