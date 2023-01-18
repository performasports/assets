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

   function productivity(){
    let no1 = parseInt($("#home-productivity-number").text(),10);
    let no2 = parseInt($("#away-productivity-number").text(),10);
    let total = no1+no2; //10
    let homeNum = no1/total;
    let awayNum = no2/total;
    let homePercentage = homeNum*100;
    let awayPercentage = awayNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (no1 >= no2) {
    $("#home-productivity-bar").css({width: homePercentage + "%" });
    $("#away-productivity-bar").css({width: 100 + "%" });
}
    if (no1 == 0 && no2 == 0) {
    $("#home-productivity-bar").css({width: 50 + "%" });
    $("#away-productivity-bar").css({width: 100 + "%" });
    }
    if (no2 > no1) {
    $("#home-productivity-bar").css({width: 100 + "%" });
    $("#away-productivity-bar").css({width: awayPercentage + "%" }).css("z-index","2");
}
    else {
    }

    }

    function teamPos(){
    let no1 = parseInt($("#home-teamPos-number").text(),10);
    let no2 = parseInt($("#away-teamPos-number").text(),10);
    let total = no1+no2; //10
    let homeNum = no1/total;
    let awayNum = no2/total;
    let homePercentage = homeNum*100;
    let awayPercentage = awayNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (no1 >= no2) {
    $("#home-teamPos-bar").css({width: homePercentage + "%" });
    $("#away-teamPos-bar").css({width: 100 + "%" });
}
    if (no1 == 0 && no2 == 0) {
    $("#home-teamPos-bar").css({width: 50 + "%" });
    $("#away-teamPos-bar").css({width: 100 + "%" });
    }
    if (no2 > no1) {
    $("#home-teamPos-bar").css({width: 100 + "%" });
    $("#away-teamPos-bar").css({width: awayPercentage + "%" }).css("z-index","2");
}
    else {
    }

    }

   function posLost(){
    let no1 = parseInt($("#home-posLost-number").text(),10);
    let no2 = parseInt($("#away-posLost-number").text(),10);
    let total = no1+no2; //10
    let homeNum = no1/total;
    let awayNum = no2/total;
    let homePercentage = homeNum*100;
    let awayPercentage = awayNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (no1 >= no2) {
    $("#home-posLost-bar").css({width: homePercentage + "%" });
    $("#away-posLost-bar").css({width: 100 + "%" });
}
    if (no1 == 0 && no2 == 0) {
    $("#home-posLost-bar").css({width: 50 + "%" });
    $("#away-posLost-bar").css({width: 100 + "%" });
    }
    if (no2 > no1) {
    $("#home-posLost-bar").css({width: 100 + "%" });
    $("#away-posLost-bar").css({width: awayPercentage + "%" }).css("z-index","2");
}
    else {
    }

    }

   function totalKOs(){
    let no1 = parseInt($("#home-totalKOs-number").text(),10);
    let no2 = parseInt($("#away-totalKOs-number").text(),10);
    let total = no1+no2; //10
    let homeNum = no1/total;
    let awayNum = no2/total;
    let homePercentage = homeNum*100;
    let awayPercentage = awayNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (no1 >= no2) {
    $("#home-totalKOs-bar").css({width: homePercentage + "%" });
    $("#away-totalKOs-bar").css({width: 100 + "%" });
}
    if (no1 == 0 && no2 == 0) {
    $("#home-totalKOs-bar").css({width: 50 + "%" });
    $("#away-totalKOs-bar").css({width: 100 + "%" });
    }
    if (no2 > no1) {
    $("#home-totalKOs-bar").css({width: 100 + "%" });
    $("#away-totalKOs-bar").css({width: awayPercentage + "%" }).css("z-index","2");
}
    else {
    }

    }

   function ownKOsWon(){
    let no1 = parseInt($("#home-ownKOsWon-number").text(),10);
    let no2 = parseInt($("#away-ownKOsWon-number").text(),10);
    let total = no1+no2; //10
    let homeNum = no1/total;
    let awayNum = no2/total;
    let homePercentage = homeNum*100;
    let awayPercentage = awayNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (no1 >= no2) {
    $("#home-ownKOsWon-bar").css({width: homePercentage + "%" });
    $("#away-ownKOsWon-bar").css({width: 100 + "%" });
}
    if (no1 == 0 && no2 == 0) {
    $("#home-ownKOsWon-bar").css({width: 50 + "%" });
    $("#away-ownKOsWon-bar").css({width: 100 + "%" });
    }
    if (no2 > no1) {
    $("#home-ownKOsWon-bar").css({width: 100 + "%" });
    $("#away-ownKOsWon-bar").css({width: awayPercentage + "%" }).css("z-index","2");
}
    else {
    }

   }

   function attacks(){
    let no1 = parseInt($("#home-attacks-number").text(),10);
    let no2 = parseInt($("#away-attacks-number").text(),10);
    let total = no1+no2; //10
    let homeNum = no1/total;
    let awayNum = no2/total;
    let homePercentage = homeNum*100;
    let awayPercentage = awayNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (no1 >= no2) {
    $("#home-attacks-bar").css({width: homePercentage + "%" });
    $("#away-attacks-bar").css({width: 100 + "%" });
}
    if (no1 == 0 && no2 == 0) {
    $("#home-attacks-bar").css({width: 50 + "%" });
    $("#away-attacks-bar").css({width: 100 + "%" });
    }
    if (no2 > no1) {
    $("#home-attacks-bar").css({width: 100 + "%" });
    $("#away-attacks-bar").css({width: awayPercentage + "%" }).css("z-index","2");
}
    else {
    }

   }

   function totalShots(){
    let no1 = parseInt($("#home-totalShots-number").text(),10);
    let no2 = parseInt($("#away-totalShots-number").text(),10);
    let total = no1+no2; //10
    let homeNum = no1/total;
    let awayNum = no2/total;
    let homePercentage = homeNum*100;
    let awayPercentage = awayNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (no1 >= no2) {
    $("#home-totalShots-bar").css({width: homePercentage + "%" });
    $("#away-totalShots-bar").css({width: 100 + "%" });
}
    if (no1 == 0 && no2 == 0) {
    $("#home-totalShots-bar").css({width: 50 + "%" });
    $("#away-totalShots-bar").css({width: 100 + "%" });
    }
    if (no2 > no1) {
    $("#home-totalShots-bar").css({width: 100 + "%" });
    $("#away-totalShots-bar").css({width: awayPercentage + "%" }).css("z-index","2");
}
    else {
    }

   }

   function totalShotsConv(){
    let no1 = parseInt($("#home-totalShotsConv-number").text(),10);
    let no2 = parseInt($("#away-totalShotsConv-number").text(),10);
    let total = no1+no2; //10
    let homeNum = no1/total;
    let awayNum = no2/total;
    let homePercentage = homeNum*100;
    let awayPercentage = awayNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (no1 >= no2) {
    $("#home-totalShotsConv-bar").css({width: homePercentage + "%" });
    $("#away-totalShotsConv-bar").css({width: 100 + "%" });
}
    if (no1 == 0 && no2 == 0) {
    $("#home-totalShotsConv-bar").css({width: 50 + "%" });
    $("#away-totalShotsConv-bar").css({width: 100 + "%" });
    }
    if (no2 > no1) {
    $("#home-totalShotsConv-bar").css({width: 100 + "%" });
    $("#away-totalShotsConv-bar").css({width: awayPercentage + "%" }).css("z-index","2");
}
    else {
    }

   }

   function scoresFromPlay(){
    let no1 = parseInt($("#home-scoresFromPlay-number").text(),10);
    let no2 = parseInt($("#away-scoresFromPlay-number").text(),10);
    let total = no1+no2; //10
    let homeNum = no1/total;
    let awayNum = no2/total;
    let homePercentage = homeNum*100;
    let awayPercentage = awayNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (no1 >= no2) {
    $("#home-scoresFromPlay-bar").css({width: homePercentage + "%" });
    $("#away-scoresFromPlay-bar").css({width: 100 + "%" });
}
    if (no1 == 0 && no2 == 0) {
    $("#home-scoresFromPlay-bar").css({width: 50 + "%" });
    $("#away-scoresFromPlay-bar").css({width: 100 + "%" });
    }
    if (no2 > no1) {
    $("#home-scoresFromPlay-bar").css({width: 100 + "%" });
    $("#away-scoresFromPlay-bar").css({width: awayPercentage + "%" }).css("z-index","2");
}
    else {
    }

   }

   function scoresFromFrees(){
    let no1 = parseInt($("#home-scoresFromFrees-number").text(),10);
    let no2 = parseInt($("#away-scoresFromFrees-number").text(),10);
    let total = no1+no2; //10
    let homeNum = no1/total;
    let awayNum = no2/total;
    let homePercentage = homeNum*100;
    let awayPercentage = awayNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (no1 >= no2) {
    $("#home-scoresFromFrees-bar").css({width: homePercentage + "%" });
    $("#away-scoresFromFrees-bar").css({width: 100 + "%" });
}
    if (no1 == 0 && no2 == 0) {
    $("#home-scoresFromFrees-bar").css({width: 50 + "%" });
    $("#away-scoresFromFrees-bar").css({width: 100 + "%" });
    }
    if (no2 > no1) {
    $("#home-scoresFromFrees-bar").css({width: 100 + "%" });
    $("#away-scoresFromFrees-bar").css({width: awayPercentage + "%" }).css("z-index","2");
}
    else {
    }

   }

   //cdn//
   function initialise() {
   productivity();
   teamPos();
   posLost();
   totalKOs();
   ownKOsWon();
   attacks();
   totalShots();
   totalShotsConv();
   scoresFromPlay();
   scoresFromFrees();
   }

$(document).ready(initialise);
