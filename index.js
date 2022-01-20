var cube = document.querySelector('#mainContainer');
var radioGroup = document.querySelector('.radio-group');
var currentClass = '';



function roll() {

var R1= (Math.random()*16-8)*90;
var R2=(Math.random()*16-8)*90;
var R3=(Math.random()*16-8)*90;
console.log(R1+"--" +R2+"--"+R3);


cube.style.setProperty("transform", "rotateX("+R1+"deg) rotateY("+R2+"deg) rotateZ("+R3+"deg)");
var myXs=0.5*document.getElementById("myRangeS").value;
var myX=0.5*document.getElementById("myRangeE").value;
  document.querySelectorAll("#mainContainer>*").forEach(function(element){
    element.style.setProperty("transition", "transform 4s");
  });

  separate(myX);
setTimeout(function(){
  document.querySelectorAll("#mainContainer>*").forEach(function(element){
    element.style.setProperty("transition", "transform 0s");
  });


}, 2000);





var i = myXs;                  //  set your counter to 1



myLoop(myX, myXs, i);



}


// document.getElementById("myRange").addEventListener("input", function(){
//   var myX=0.5*document.getElementById("myRange").value;
//
//   document.querySelector(".one").style.setProperty("transform", "translate3d(0,0, " + myX + "rem) rotate3d(0,0,0,90deg)");
//   document.querySelector(".two").style.setProperty("transform", "translate3d(" + myX + "rem,0,0) rotate3d(0,1,0,90deg)");
//   document.querySelector(".three").style.setProperty("transform", "translate3d(0,0, -" + myX + "rem) rotate3d(1,0,0,180deg)");
//   document.querySelector(".four").style.setProperty("transform", "translate3d(-" + myX + "rem, 0,0) rotate3d(0,-1,0,90deg)");
//   document.querySelector(".five").style.setProperty("transform", "translate3d(0, " + myX + "rem,0) rotate3d(1,0,0,90deg)");
//   document.querySelector(".six").style.setProperty("transform", "translate3d(0, -" + myX + "rem,0) rotate3d(2,0,0,90deg)");
//   document.querySelector("#myRangeS").value = 2*myX;
//   document.querySelector("#myRangeE").value = 2*myX;
//   document.querySelector("#sValue").value = 2*myX;
//   document.querySelector("#eValue").value = 2*myX;
//
//
// }, false);

document.getElementById("myRangeS").addEventListener("input", function(){
  var myX=0.5*document.getElementById("myRangeS").value;

  separate(myX);
  document.querySelector("#myRangeS").value = 2*myX;
  document.querySelector("#sValue").value = 2*myX;

}, false);



document.getElementById("myRangeE").addEventListener("input", function(){
  var myXe=0.5*document.getElementById("myRangeE").value;
  document.querySelector("#eValue").value = 2*myXe;

}, false);

document.getElementById("sValue").addEventListener("input", function(){

  var myX=0.5*document.getElementById("sValue").value;
    separate(myX);
  document.querySelector("#myRangeS").value = 2*myX;

}, false);

document.getElementById("eValue").addEventListener("input", function(){
  var myXe=0.5*document.getElementById("eValue").value;
  document.querySelector("#myRangeE").value = 2*myXe;

}, false);

function separate(myX){
  document.querySelector(".one").style.setProperty("transform", "translate3d(0,0, " + myX + "rem) rotate3d(0,0,0,90deg)");
  document.querySelector(".two").style.setProperty("transform", "translate3d(" + myX + "rem,0,0) rotate3d(0,1,0,90deg)");
  document.querySelector(".three").style.setProperty("transform", "translate3d(0,0, " + myX*(-1) + "rem) rotate3d(1,0,0,180deg)");
  document.querySelector(".four").style.setProperty("transform", "translate3d(" + myX*(-1) + "rem, 0,0) rotate3d(0,-1,0,90deg)");
  document.querySelector(".five").style.setProperty("transform", "translate3d(0, " + myX + "rem,0) rotate3d(1,0,0,90deg)");
  document.querySelector(".six").style.setProperty("transform", "translate3d(0, " + myX*(-1) + "rem,0) rotate3d(2,0,0,90deg)");
}


function myLoop(myX, myXs, i) {         //  create a loop function
  setTimeout(function() {
     //  call a 3s setTimeout when the loop is called
    document.querySelector("#myRangeS").value = Math.round(2*i* 10) / 10;
    document.querySelector("#sValue").value = Math.round(2*i* 10) / 10;  //  your code here

if (myXs<=myX){
  i+=(-(myXs-myX)/650);                    //  increment the counter
  if (i <= myX) {           //  if the counter < 10, call the loop function
    myLoop(myX, myXs, i);             //  ..  again which will trigger another
  } else{
    document.querySelector("#myRangeS").value = 2*myX;
    document.querySelector("#sValue").value = 2*myX;
  }
}else{
  i+=(-(myXs-myX)/650);                    //  increment the counter
  if (i >= myX) {           //  if the counter < 10, call the loop function
    myLoop(myX, myXs, i);             //  ..  again which will trigger another
  } else{
    document.querySelector("#myRangeS").value = 2*myX;
    document.querySelector("#sValue").value = 2*myX;
  }
}

                              //  ..  setTimeout()
  }, 2)
}

// function separate(){
//
//   var myX=0.5*document.getElementById("myRange").value;
// console.log(myX);
// document.querySelector(".one").style.setProperty("transform", "translate3d(0,0, " + myX + "rem) rotate3d(0,0,0,90deg)");
// document.querySelector(".two").style.setProperty("transform", "translate3d(" + myX + "rem,0,0) rotate3d(0,1,0,90deg)");
// document.querySelector(".three").style.setProperty("transform", "translate3d(0,0, -" + myX + "rem) rotate3d(1,0,0,180deg)");
// document.querySelector(".four").style.setProperty("transform", "translate3d(-" + myX + "rem, 0,0) rotate3d(0,-1,0,90deg)");
// document.querySelector(".five").style.setProperty("transform", "translate3d(0, " + myX + "rem,0) rotate3d(1,0,0,90deg)");
// document.querySelector(".six").style.setProperty("transform", "translate3d(0, -" + myX + "rem,0) rotate3d(2,0,0,90deg)");
//
// }
