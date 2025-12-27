function timeToMinutes(time) {
  const [t, modifier] = time.split(" ");
  let [hours, minutes] = t.split(":").map(Number);

  if (modifier === "PM" && hours !== 12) hours += 12;
  if (modifier === "AM" && hours === 12) hours = 0;

  return hours * 60 + minutes;
}

export const getUpcomingLecture = (lectures) => {
  if (!lectures || lectures.length === 0) return null;
  
  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes();

  return lectures.find((lec) => {
    const lecTime = timeToMinutes(lec.start);
    return lecTime > currentTime;
  });
};

export function getTimeStatus(lecture) {
  if (!lecture) return "";
  
  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes();
  const startTime = timeToMinutes(lecture.start);
  const endTime = timeToMinutes(lecture.end);
  
  if (currentTime < startTime) {
    const minutesUntil = startTime - currentTime;
    if (minutesUntil <= 5) {
      return `⚠️ Starting in ${minutesUntil} minute${minutesUntil !== 1 ? 's' : ''}`;
    } else if (minutesUntil <= 15) {
      return `⏳ Starting soon (${minutesUntil} min)`;
    } else {
      return `📅 Upcoming`;
    }
  } else if (currentTime >= startTime && currentTime < endTime) {
    const minutesRemaining = endTime - currentTime;
    return `🟢 Ongoing (${minutesRemaining} min left)`;
  } else {
    return `✅ Completed`;
  }
}

export function markBackToBackLectures(lectures) {
  if (!lectures || lectures.length === 0) return [];
  
  return lectures.map((lec, index) => {
    if (index === 0) return { ...lec, backToBack: false };

    const prev = lectures[index - 1];

    const prevEnd = timeToMinutes(prev.end);
    const currStart = timeToMinutes(lec.start);

    return {
      ...lec,
      backToBack: prevEnd === currStart,
    };
  });
}
  