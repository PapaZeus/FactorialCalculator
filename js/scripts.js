$(document).ready(function(){
  $("#submit").click(function(){
    
    var inputNumber = parseInt($("#inputNumber").val());
    var total = 1;
    for (currentNumber = 1; currentNumber <= inputNumber; currentNumber +=1){
      total *= currentNumber;
    }
    $("#response").text(total);
  })
})
