export const getLessonReleaseTime = (lesson) => {
  const schedules = Array.isArray(lesson?.DripSchedule) ? lesson.DripSchedule : [];
  const releaseTimes = [...schedules, lesson]
    .map((schedule) => schedule?.releaseDate ? new Date(schedule.releaseDate).getTime() : NaN)
    .filter(Number.isFinite);

  return releaseTimes.length ? Math.min(...releaseTimes) : null;
};

export const isLessonLocked = (lesson, now = Date.now()) => {
  const releaseTime = getLessonReleaseTime(lesson);
  return releaseTime !== null && releaseTime > now;
};

export const formatLessonReleaseTime = (lesson) => {
  const releaseTime = getLessonReleaseTime(lesson);
  return releaseTime === null ? '' : new Date(releaseTime).toLocaleString();
};
