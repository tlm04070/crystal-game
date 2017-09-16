var wins= 0;
var loses= 0;

// randomly picks and appends numbers to each gem
$(document).ready(function start(){
var w = false;
var l = false;
var random1 =0;
var random2 =0;
var random3 =0;
var total = 0;

var playerNum = total;
console.log(random1, random2, random3)
var random1 = Math.floor(Math.random() * 10) +1;
    $("#firstNumber").html(random1)
        .val(random1)
        .hide(random1);


var random2 = Math.floor(Math.random() * 10) +1;
    $("#secondNumber").html(random2)
        .val(random2)
        .hide(random2);


var random3 = Math.floor(Math.random() * 10) +1;
    $("#thirdNumber").html(random3)
        .val(random3)
        .hide(random3);

console.log(random1, random2, random3);

var targetNum = Math.floor(Math.random() * 100);
$("#target p").html(targetNum);


function win(){
    if(w){
    wins++;
    $("#w").html("Wins: " + wins);
    w= false;
    gameover();
}};

function lose(){
    if(l){
    loses++;
    $("#l").html("Loses: " + loses);
    l= false;

    gameover();
}};

function check(){
    if( total === targetNum){
        alert("testing");
        w= true;
        win();
    }else if( total > targetNum){
        alert("gg");
        l= true;
        lose();
    }
};



$("#first").on("click", function(){
   total += random1;
   $("#player p").html(total);
   check();
});

$("#second").on("click", function(){
     total += random2;
     $("#player p").html(total);
     check();
  });

$("#third").on("click", function(){
     total += random3;
     $("#player p").html(total);
     check();
  });

  

$("#player p").html(playerNum);



 


function gameover(){
     total = 0; 
     random1 =0;
     random2 =0;
     random3 =0;
     console.log(total);
    start();

}


});

// winning or losing conditions





//adds the three together as they're clicked on


    




