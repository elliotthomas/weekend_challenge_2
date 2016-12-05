console.log("in JS");

//GLOBAL VARIABLES//
var tauArray = [];
var currentIndex = 0;

//CONSTANT VARIABLES//
var DATA_URL = 'http://devjana.net/support/tau_students.json';
var ARRAY_KEY = 'tau';

//DOC READY BEGIN//
$(document).ready (function(){
console.log("in JQ");

getJsonCall ();
enableButtons();

});
//END DOC READY//

//**********FUNCTIONS*********///

//BEGIN JSON CALL//
function getJsonCall (){
  $.getJSON(DATA_URL, function (array) {
      console.log(array);
      var studentInfo = array[ARRAY_KEY]
      studentInfo.forEach (function(student){
        tauArray.push( student );
      });//end for each method
      showStudentInfo(tauArray[currentIndex]);
  });//end get json method
};
//END JSON CALL//

//DISPLAY FUNCTIONS BEGIN//

function showStudentInfo (student){
  var oneStudent = $("#studentDisplay");
  var outputText = "";
  outputText = "<h2>" + student.first_name + " " + student.last_name + "</h2>"
  outputText += '<img src="' + student.picUrl + '" />'
  outputText += '<p>' + student.info + '</p>';
  oneStudent.html (outputText);

  showPosition();
  showStudentButton(tauArray);
};//end display student info

function showPosition (){
  var $position = $("#position")
  $position.html ("<p>" + (currentIndex + 1) + "/" + tauArray.length + "</p>");
}; //end show position

function showStudentButton (array){
  var buttonDiv = $("#buttonHolder")
  var htmlString = '<button class = "btn btn-danger" id= "prevButton">Previous</button>'

  array.forEach (function(student, index) {
    htmlString += '<button class = "btn btn-success student-button" data-index="' + index + '">'+ student.first_name + "</button>";
  });
    htmlString += '<button class = "btn btn-danger" id="nextButton">Next</button>';
    buttonDiv.html(htmlString)
};//end show student button

//END DISPLAY FUNCTIONS//

//BEGIN BUTTON EVENT HANDLERS//

function enableButtons () {
  $(document).on ("click", "#nextButton", incrementButton);
  $(document).on("click", "#prevButton", decrementButton);
  $(document).on("click", ".student-button", studentButton)
};//end enable buttons

//END BUTTON EVENT HANDLERS//

//BEGIN BUTTON SERVICE FUNCIONS//

function incrementButton (){
    currentIndex = (currentIndex + 1) % tauArray.length
    showStudentInfo(tauArray[currentIndex]);
}; //end increment button

function decrementButton () {
  currentIndex--;
  if (currentIndex < 0){
    currentIndex = tauArray.length - 1;
  }
  showStudentInfo(tauArray[currentIndex]);
};//end decrement Button

function studentButton (){
    var index = $(this).data().index;
    currentIndex = index;
    showStudentInfo(tauArray[currentIndex]);
};//end student button

 //END BUTTON SERVICE FUNCTIONS
