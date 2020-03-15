//BACKEND
var numbers = [];
function range(num) {
  for (i=0; i<=num; i++) {
    numbers.push(" " + i);
    if ((numbers[i]).includes("3")) {
      numbers[i] = ("Won't you be my neighbor?");
    } else if ((numbers[i]).includes("2")) {
      numbers[i] = ("Boop!");
    } else if ((numbers[i]).includes("1")) {
      numbers[i] = ("Beep!");
    } else 
      numbers[i];
  }
  return numbers;
};

// UX
$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var num = parseInt($("#userEndNumber").val());
    console.log(num);
    $("#output").text(range(num));
  })
})


