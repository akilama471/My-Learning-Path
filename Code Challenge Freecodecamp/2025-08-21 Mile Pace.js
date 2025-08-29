// Given a number of miles ran, and a time in "MM:SS" (minutes:seconds) it took to run those miles, 
// return a string for the average time it took to run each mile in the format "MM:SS".

// Add leading zeros when needed.

function milePace(miles, duration) {

  const [minutes, seconds] = duration.split(":").map(Number);
  const totalSeconds = minutes * 60 + seconds;
  const averagePace = totalSeconds / miles;

  const avgMinutes = Math.floor(averagePace / 60);
  const avgSeconds = Math.round(averagePace % 60);

  return `${String(avgMinutes).padStart(2, "0")}:${String(avgSeconds).padStart(2, "0")}`;
}