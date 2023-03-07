const btn = document.getElementById("btn");
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// RegEx for mm/dd date format
const validDate = /(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])/;

function calculateDate() {
  let userInput = prompt("What is your birthday?", "mm/dd");
  while (
    !validDate.test(userInput) ||
    userInput === "02/29" ||
    userInput === "02/30" ||
    userInput === "02/31"
  ) {
    userInput = prompt("Please enter a valid date", "mm/dd");
  }

  let currentDate = new Date();
  userDate = new Date(userInput);
  userDate.setFullYear(currentDate.getFullYear());

  let thisYear = currentDate.getFullYear();
  let nextWeekday = userDate.getDay() + 1;
  let nextMonth = userDate.getMonth();
  let nextDay = userDate.getDate();
  let nextYear = currentDate.getFullYear() + 1;

  if (nextWeekday == 7) {
    nextWeekday = 0;
  }

  let nextDate = new Date(`${months[nextMonth]} ${nextDay} ${thisYear}`);
  let nextBirthday = `Next birthday: ${weekdays[nextWeekday]}, ${months[nextMonth]} ${nextDay}, ${thisYear}`;

  // Checks if birthday has occurred in current year
  if (currentDate > userDate) {
    nextDate = new Date(`${months[nextMonth]} ${nextDay} ${nextYear}`);
    nextBirthday = `Next birthday: ${weekdays[nextWeekday]}, ${months[nextMonth]} ${nextDay}, ${nextYear}`;
  }
  
  // Leap year adjustment
  if (nextYear % 4 == false) {
      nextWeekday += 1;
  }

  let daysLeft = Math.ceil((nextDate - currentDate) / (1000 * 60 * 60 * 24));

  document.getElementById("daysLeft").innerHTML = `Days Left: ${daysLeft}`;
  document.getElementById("nextDate").innerHTML = nextBirthday;
}
