//get id

let computerplay = document.getElementById("computer");
let userplay = document.getElementById("user");
let resultview = document.getElementById("result");

//User Play

let choice = document.querySelectorAll("button");
choice.forEach((choice) =>
  choice.addEventListener("click", (e) => {
    userchoice = e.target.id;
    userplay.innerHTML = userchoice;
    computerchoice();
    results();
  })
);

//Computer Play

function computerchoice() {
  let rannum = Math.floor(Math.random() * 3);
  if (rannum === 0) {
    choosen = "Rock";
  }
  if (rannum === 1) {
    choosen = "Paper";
  }
  if (rannum === 2) {
    choosen = "Scissor";
  }
  computerplay.innerHTML = choosen; //append
}

//Result

function results() {
  if (userchoice === choosen) {
    result = "Match draw";
  }
  if (userchoice === "Rock" && choosen === "Scissor") {
    result = "you win";
  }
  if (userchoice === "Scissor" && choosen === "Paper") {
    result = "you win";
  }
  if (userchoice === "Paper" && choosen === "Rock") {
    result = "you win";
  }
  if (userchoice === "Scissor" && choosen === "Rock") {
    result = "you lose";
  }
  if (userchoice === "Paper" && choosen === "Scissor") {
    result = "you lose";
  }
  if (userchoice === "Rock" && choosen === "Paper") {
    result = "you lose";
  }
  resultview.innerHTML = result;
}
