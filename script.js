// selects the dropdown section and questions
let dropDown = document.querySelectorAll(".dropdown .question");

// takes in the click event - shows answers, bolds questions, rotates arrows when clicked, does the opposite when clicked again
let clickArrow = (e) => {
var dropbtn = e.target;
var question = e.currentTarget.parentNode;
var answer = e.currentTarget.nextElementSibling;;

if(answer.style.display === "none") {
    answer.style.display = "block";
    answer.style.fontWeight = "400";
    question.style.fontWeight = "700";
    dropbtn.style.transform = "rotate(180deg)";
} else {
    answer.style.display = "none";
    question.style.fontWeight = "400";
    dropbtn.style.transform = "rotate(0deg)";
}
}

for (let question of dropDown) {
    let answer = question.nextElementSibling;
    answer.style.display = "none";
    question.addEventListener("click", clickArrow);
  }