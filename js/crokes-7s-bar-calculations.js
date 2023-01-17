function Add(){
    var no1=parseInt($("#txtNo1").val());
    var no2=parseInt($("#txtNo2").val());
    var result =no1+no2;
     alert("The result is "+result);
   }
   function Substract(){
    var no1=parseInt($("#txtNo1").val());
    var no2=parseInt($("#txtNo2").val());
    var result =no1-no2;
     alert("The result is "+result);
   }
   function Multiply(){
    var no1=parseInt($("#txtNo1").val());
    var no2=parseInt($("#txtNo2").val());
    var result =no1*no2;
     alert("The result is "+result);
   }

   function psr(){
    let no1 = parseInt($("#home-psr-number").text(),10);
    let no2 = parseInt($("#away-psr-number").text(),10);
    let total = no1+no2; //10
    let homeNum = no1/total;
    let awayNum = no2/total;
    let homePercentage = homeNum*100;
    let awayPercentage = awayNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (no1 >= no2) {
    $("#home-psr-bar").css({width: homePercentage + "%" });
    $("#away-psr-bar").css({width: 100 + "%" });
}
    if (no1 == 0 && no2 == 0) {
    $("#home-psr-bar").css({width: 50 + "%" });
    $("#away-psr-bar").css({width: 100 + "%" });
    }
    if (no2 > no1) {
    $("#home-psr-bar").css({width: 100 + "%" });
    $("#away-psr-bar").css({width: awayPercentage + "%" }).css("z-index","2");
}
    else {
    }

  }

    function shots(){
     let no1 = parseInt($("#home-shots-number").text(),10);
     let no2 = parseInt($("#away-shots-number").text(),10);
     let total = no1+no2; //10
     let homeNum = no1/total;
     let awayNum = no2/total;
     let homePercentage = homeNum*100;
     let awayPercentage = awayNum*100;
     //alert("The result is "+result +no1 +no2);

     //$("#home-psr-bar").css({width: homePercentage + "%" });

     if (no1 >= no2) {
     $("#home-shots-bar").css({width: homePercentage + "%" });
     $("#away-shots-bar").css({width: 100 + "%" });
 }
     if (no1 == 0 && no2 == 0) {
     $("#home-shots-bar").css({width: 50 + "%" });
     $("#away-shots-bar").css({width: 100 + "%" });
     }
     if (no2 > no1) {
     $("#home-shots-bar").css({width: 100 + "%" });
     $("#away-shots-bar").css({width: awayPercentage + "%" }).css("z-index","2");
 }
     else {
     }

   }

   function placedBall(){
    let no1 = parseInt($("#home-placedball-number").text(),10);
    let no2 = parseInt($("#away-placedball-number").text(),10);
    let total = no1+no2; //10
    let homeNum = no1/total;
    let awayNum = no2/total;
    let homePercentage = homeNum*100;
    let awayPercentage = awayNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (no1 >= no2) {
    $("#home-placedball-bar").css({width: homePercentage + "%" });
    $("#away-placedball-bar").css({width: 100 + "%" });
}
    if (no1 == 0 && no2 == 0) {
    $("#home-placedball-bar").css({width: 50 + "%" });
    $("#away-placedball-bar").css({width: 100 + "%" });
    }
    if (no2 > no1) {
    $("#home-placedball-bar").css({width: 100 + "%" });
    $("#away-placedball-bar").css({width: awayPercentage + "%" }).css("z-index","2");
}
    else {
    }

  }

function totalShots(){
 let no1 = parseInt($("#home-total-shots-number").text(),10);
 let no2 = parseInt($("#away-total-shots-number").text(),10);
 let total = no1+no2; //10
 let homeNum = no1/total;
 let awayNum = no2/total;
 let homePercentage = homeNum*100;
 let awayPercentage = awayNum*100;
 //alert("The result is "+result +no1 +no2);

 //$("#home-psr-bar").css({width: homePercentage + "%" });

 if (no1 >= no2) {
 $("#home-total-shots-bar").css({width: homePercentage + "%" });
 $("#away-total-shots-bar").css({width: 100 + "%" });
}
 if (no1 == 0 && no2 == 0) {
 $("#home-total-shots-bar").css({width: 50 + "%" });
 $("#away-total-shots-bar").css({width: 100 + "%" });
 }
 if (no2 > no1) {
 $("#home-total-shots-bar").css({width: 100 + "%" });
 $("#away-total-shots-bar").css({width: awayPercentage + "%" }).css("z-index","2");
}
 else {
 }

}

function totalShotsPercent(){
 let no1 = parseInt($("#home-total-shots-percent-number").text(),10);
 let no2 = parseInt($("#away-total-shots-percent-number").text(),10);
 let total = no1+no2; //10
 let homeNum = no1/total;
 let awayNum = no2/total;
 let homePercentage = homeNum*100;
 let awayPercentage = awayNum*100;
 //alert("The result is "+result +no1 +no2);

 //$("#home-psr-bar").css({width: homePercentage + "%" });

 if (no1 >= no2) {
 $("#home-total-shots-percent-bar").css({width: homePercentage + "%" });
 $("#away-total-shots-percent-bar").css({width: 100 + "%" });
}
 if (no1 == 0 && no2 == 0) {
 $("#home-total-shots-percent-bar").css({width: 50 + "%" });
 $("#away-total-shots-percent-bar").css({width: 100 + "%" });
 }
 if (no2 > no1) {
 $("#home-total-shots-percent-bar").css({width: 100 + "%" });
 $("#away-total-shots-percent-bar").css({width: awayPercentage + "%" }).css("z-index","2");
}
 else {
 }

}

function puckoutsWon(){
 let no1 = parseInt($("#home-puckouts-number").text(),10);
 let no2 = parseInt($("#away-puckouts-number").text(),10);
 let total = no1+no2; //10
 let homeNum = no1/total;
 let awayNum = no2/total;
 let homePercentage = homeNum*100;
 let awayPercentage = awayNum*100;
 //alert("The result is "+result +no1 +no2);

 //$("#home-psr-bar").css({width: homePercentage + "%" });

 if (no1 >= no2) {
 $("#home-puckouts-bar").css({width: homePercentage + "%" });
 $("#away-puckouts-bar").css({width: 100 + "%" });
}
 if (no1 == 0 && no2 == 0) {
 $("#home-puckouts-bar").css({width: 50 + "%" });
 $("#away-puckouts-bar").css({width: 100 + "%" });
 }
 if (no2 > no1) {
 $("#home-puckouts-bar").css({width: 100 + "%" });
 $("#away-puckouts-bar").css({width: awayPercentage + "%" }).css("z-index","2");
}
 else {
 }

}

function turnoversWon(){
 let no1 = parseInt($("#home-turnovers-number").text(),10);
 let no2 = parseInt($("#away-turnovers-number").text(),10);
 let total = no1+no2; //10
 let homeNum = no1/total;
 let awayNum = no2/total;
 let homePercentage = homeNum*100;
 let awayPercentage = awayNum*100;
 //alert("The result is "+result +no1 +no2);

 //$("#home-psr-bar").css({width: homePercentage + "%" });

 if (no1 >= no2) {
 $("#home-turnovers-bar").css({width: homePercentage + "%" });
 $("#away-turnovers-bar").css({width: 100 + "%" });
}
 if (no1 == 0 && no2 == 0) {
 $("#home-turnovers-bar").css({width: 50 + "%" });
 $("#away-turnovers-bar").css({width: 100 + "%" });
 }
 if (no2 > no1) {
 $("#home-turnovers-bar").css({width: 100 + "%" });
 $("#away-turnovers-bar").css({width: awayPercentage + "%" }).css("z-index","2");
}
 else {
 }

}

function freesConceded(){
 let no1 = parseInt($("#home-frees-number").text(),10);
 let no2 = parseInt($("#away-frees-number").text(),10);
 let total = no1+no2; //10
 let homeNum = no1/total;
 let awayNum = no2/total;
 let homePercentage = homeNum*100;
 let awayPercentage = awayNum*100;
 //alert("The result is "+result +no1 +no2);

 //$("#home-psr-bar").css({width: homePercentage + "%" });

 if (no1 >= no2) {
 $("#home-frees-bar").css({width: homePercentage + "%" });
 $("#away-frees-bar").css({width: 100 + "%" });
}
 if (no1 == 0 && no2 == 0) {
 $("#home-frees-bar").css({width: 50 + "%" });
 $("#away-frees-bar").css({width: 100 + "%" });
 }
 if (no2 > no1) {
 $("#home-frees-bar").css({width: 100 + "%" });
 $("#away-frees-bar").css({width: awayPercentage + "%" }).css("z-index","2");
}
 else {
 }

}


   //cdn//
   function initialise() {
   psr();
   shots();
   placedBall();
   totalShots();
   totalShotsPercent();
   puckoutsWon();
   turnoversWon();
   freesConceded();
   }

$(document).ready(initialise);
