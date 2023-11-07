const hours12 = "07:05:45PM";

function timeConversion(time12hr) {
  const time12hrArray = time12hr.split(":");
  let hours = parseInt(time12hrArray[0], 10);
  const minutes = parseInt(time12hrArray[1], 10);
  const seconds = parseInt(time12hrArray[2].substring(0, 2), 10);
  const period = time12hrArray[2].substring(2);

  if (period === "PM" && hours !== 12) {
    hours += 12;
  } else if (period === "AM" && hours === 12) {
    hours = 0;
  }

  const militaryTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  return militaryTime;
}

console.log(timeConversion(hours12));
