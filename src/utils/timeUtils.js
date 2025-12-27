export const getUpcomingLecture = (lectures) => {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
  
    return lectures.find((lec) => {
      const [h, m] = lec.start.split(":");
      const lecTime = parseInt(h) * 60 + parseInt(m);
      return lecTime > currentTime;
    });
  };
  function timeToMinutes(time) {
    const [t, modifier] = time.split(" ");
    let [hours, minutes] = t.split(":").map(Number);
  
    if (modifier === "PM" && hours !== 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;
  
    return hours * 60 + minutes;
  }
  
  export function markBackToBackLectures(lectures) {
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
  