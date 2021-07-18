// hides and unhides answers, rotates arrows when clicked
function clickArrow() {
    var dropbtn = document.querySelector(".drop-btn");
    dropbtn.setAttribute("class", "rotated");

    var question = document.querySelector(".question");
    question.setAttribute("class", "bold");

    var answer = document.querySelector(".answer");
    answer.setAttribute("class", ".answer-show");
    
    // if the drop button's class is already .rotated, remove the class and hide the answer - this doesn't work yet?
    if(dropbtn.classList.contains("rotated")){
       dropbtn.removeClass("rotated");
    }
}


// close the dropdown if the user clicks outside of it
// window.onclick = function (event) {
//   if (!event.target.matches(".drop-btn")) {
//     var dropdowns = document.getElementsByClassName("answer");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// };
