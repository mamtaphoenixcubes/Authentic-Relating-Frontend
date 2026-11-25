"use client";

import { motion } from "framer-motion";

const getMediaUrl = (path) => {
  if (typeof path !== "string" || !path.trim()) return "";
  const value = path.trim();
  if (/^https?:\/\//i.test(value)) return value;

  const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, "") || "";
  return `${baseUrl}/${value.replace(/^\/+/, "")}`;
};

export default function CourseHeroBanner({ course }) {
  const videoUrl = getMediaUrl(course?.teaserVideoUrl);
  const imageUrl =
    getMediaUrl(
      course?.heroImage || course?.thumbnailUrl || course?.image?.[0]
    ) || "/placeholder-hero.jpg";

  const deliveryMode = course?.deliveryMode?.toLowerCase();
  const deliveryModeDetails = {
    prerecorded: { label: "Prerecorded Course", color: "bg-green-500/30" },
    online: { label: "Online Course", color: "bg-blue-500/30" },
    both: { label: "Online & Prerecorded Course", color: "bg-purple-500/30" },
    digitaldownload: { label: "Digital Download", color: "bg-amber-500/30" },
  }[deliveryMode];

  return (
    <section
      className="
        relative
        h-[260px] sm:h-[320px] md:h-[520px]
        w-full
        overflow-hidden
      "
    >
      {/* Use the muted teaser when available; otherwise show the course image. */}
      {videoUrl ? (
        <video
          key={videoUrl}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-label={`${course?.course_title || "Course"} teaser video`}
        >
          <source src={videoUrl} />
        </video>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
          role="img"
          aria-label={`${course?.course_title || "Course"} image`}
        />
      )}

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
            {deliveryModeDetails && (
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
                  ${deliveryModeDetails.color}
                `}
              >
                {deliveryModeDetails.label}
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
