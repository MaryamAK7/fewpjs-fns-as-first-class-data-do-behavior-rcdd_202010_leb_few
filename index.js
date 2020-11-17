/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(input){
let ntime = input.split(":");
time= parseInt(ntime);
  if(time<12){
    return "Good Morning";
  }
  else if(time>12 && time <17){
    return "Good Afternoon";
  }
  else if(time>5){
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(argument){
  let header=document.getElementById("greeting");
  header.innerHTML="argument";
}




