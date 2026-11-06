"use client";

import { motion } from "framer-motion";

export default function CourseHeroBanner({ course }) {
  const imageUrl = course?.heroImage
    ? `${process.env.NEXT_PUBLIC_API_URL}/${course.heroImage}`
    : "/placeholder-hero.jpg";

  const mode = course?.mode_of_course?.toLowerCase();

  return (
    <section
      className="
        relative
        h-[260px] sm:h-[320px] md:h-[520px]
        w-full
        overflow-hidden
      "
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative h-full flex items-end">
        <div className="container pb-6 sm:pb-8 md:pb-12">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center sm:text-left"
          >

            {/* Mode Badge */}
            {mode && (
              <span
                className={`
                  inline-block
                  mb-2
                  px-4 py-1.5
                  text-xs sm:text-sm
                  rounded-full
                  backdrop-blur
                  border border-white/40
                  text-white
                  font-medium
                  ${
                    mode === "online"
                      ? "bg-blue-500/30"
                      : mode === "offline"
                      ? "bg-green-500/30"
                      : "bg-purple-500/30"
                  }
                `}
              >
                {mode === "online" && "Online Course"}
                {mode === "offline" && "In Person Course"}
                {mode === "hybrid" && "Hybrid Course"}
              </span>
            )}

            {/* Title */}
            <h1
              className="
                font-redhat
                text-white
                font-bold
                text-2xl sm:text-4xl md:text-5xl
                leading-tight
                max-w-4xl
              "
            >
              {course?.course_title}
            </h1>

          </motion.div>

        </div>
      </div>
    </section>
  );
}