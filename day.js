 function dayName(date) {
     const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     return daysOfTheWeek[date.getDay()];
 }
 
  function greeting(date) {
     const greetingPerDay = ["Good Morning", "Hello", "Good Day", "G'Day", "You Right?", "Whats up!", "Hey You"];
     return greetingPerDay[date.getDay()];
 }