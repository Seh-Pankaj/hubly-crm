const returnTime = (dateString) => {
  const IST = new Date(dateString);

  let hours = IST.getHours();
  const minutes = IST.getMinutes().toString().padStart(2, "0");
  // const seconds = IST.getSeconds().toString().padStart(2, "0");

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // convert 0 -> 12 for midnight
  hours = hours.toString().padStart(2, "0");

  return `${hours}:${minutes} ${ampm}`;
};

export default returnTime;
