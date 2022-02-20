function timeConversion(s) {
  // Write your code here
  const ampm = s.includes("AM") ? "AM" : "PM";
  let time = s.replace(ampm, "").split(":");

  switch (ampm) {
    case "AM":
        if(time[0]=='12') time[0]='00';
        time=time.join(":");
        // console.log(time,ampm);
      break;

    case "PM":
         if(time[0]=='12') time[0]='12';
        else 
        time[0]=Number(time[0])+12;
        time=time.join(":");
      break;
  }
  console.log(time);
  return time;
}

timeConversion("12:09:11PM");