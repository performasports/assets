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

   function tackles(){
    let no1 = parseInt($("#home-tackles-number").text(),10);
    let no2 = parseInt($("#away-tackles-number").text(),10);
    let total = no1+no2; //10
    let homeNum = no1/total;
    let awayNum = no2/total;
    let homePercentage = homeNum*100;
    let awayPercentage = awayNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (no1 >= no2) {
    $("#home-tackles-bar").css({width: homePercentage + "%" });
    $("#away-tackles-bar").css({width: 100 + "%" });
}
    if (no1 == 0 && no2 == 0) {
    $("#home-tackles-bar").css({width: 50 + "%" });
    $("#away-tackles-bar").css({width: 100 + "%" });
    }
    if (no2 > no1) {
    $("#home-tackles-bar").css({width: 100 + "%" });
    $("#away-tackles-bar").css({width: awayPercentage + "%" }).css("z-index","2");
}
    else {
    }

   }

   function contact(){
    let no1 = parseInt($("#home-contact-number").text(),10);
    let no2 = parseInt($("#away-contact-number").text(),10);
    let total = no1+no2; //10
    let homeNum = no1/total;
    let awayNum = no2/total;
    let homePercentage = homeNum*100;
    let awayPercentage = awayNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (no1 >= no2) {
    $("#home-contact-bar").css({width: homePercentage + "%" });
    $("#away-contact-bar").css({width: 100 + "%" });
}
    if (no1 == 0 && no2 == 0) {
    $("#home-contact-bar").css({width: 50 + "%" });
    $("#away-contact-bar").css({width: 100 + "%" });
    }
    if (no2 > no1) {
    $("#home-contact-bar").css({width: 100 + "%" });
    $("#away-contact-bar").css({width: awayPercentage + "%" }).css("z-index","2");
}
    else {
    }

   }

   function ballWon(){
    let no1 = parseInt($("#home-ballWon-number").text(),10);
    let no2 = parseInt($("#away-ballWon-number").text(),10);
    let total = no1+no2; //10
    let homeNum = no1/total;
    let awayNum = no2/total;
    let homePercentage = homeNum*100;
    let awayPercentage = awayNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (no1 >= no2) {
    $("#home-ballWon-bar").css({width: homePercentage + "%" });
    $("#away-ballWon-bar").css({width: 100 + "%" });
}
    if (no1 == 0 && no2 == 0) {
    $("#home-ballWon-bar").css({width: 50 + "%" });
    $("#away-ballWon-bar").css({width: 100 + "%" });
    }
    if (no2 > no1) {
    $("#home-ballWon-bar").css({width: 100 + "%" });
    $("#away-ballWon-bar").css({width: awayPercentage + "%" }).css("z-index","2");
}
    else {
    }

   }

   function freesCon(){
    let no1 = parseInt($("#home-freesCon-number").text(),10);
    let no2 = parseInt($("#away-freesCon-number").text(),10);
    let total = no1+no2; //10
    let homeNum = no1/total;
    let awayNum = no2/total;
    let homePercentage = homeNum*100;
    let awayPercentage = awayNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (no1 >= no2) {
    $("#home-freesCon-bar").css({width: homePercentage + "%" });
    $("#away-freesCon-bar").css({width: 100 + "%" });
}
    if (no1 == 0 && no2 == 0) {
    $("#home-freesCon-bar").css({width: 50 + "%" });
    $("#away-freesCon-bar").css({width: 100 + "%" });
    }
    if (no2 > no1) {
    $("#home-freesCon-bar").css({width: 100 + "%" });
    $("#away-freesCon-bar").css({width: awayPercentage + "%" }).css("z-index","2");
}
    else {
    }

   }

   function bookings(){
    let no1 = parseInt($("#home-bookings-number").text(),10);
    let no2 = parseInt($("#away-bookings-number").text(),10);
    let total = no1+no2; //10
    let homeNum = no1/total;
    let awayNum = no2/total;
    let homePercentage = homeNum*100;
    let awayPercentage = awayNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (no1 >= no2) {
    $("#home-bookings-bar").css({width: homePercentage + "%" });
    $("#away-bookings-bar").css({width: 100 + "%" });
}
    if (no1 == 0 && no2 == 0) {
    $("#home-bookings-bar").css({width: 50 + "%" });
    $("#away-bookings-bar").css({width: 100 + "%" });
    }
    if (no2 > no1) {
    $("#home-bookings-bar").css({width: 100 + "%" });
    $("#away-bookings-bar").css({width: awayPercentage + "%" }).css("z-index","2");
}
    else {
    }

   }

   function homeAttacks(){
    let no1 = parseInt($("#homeAttacks").text(),10);
    let no2 = parseInt($("#homeAttacksAvg").text(),10);
    let zoneNum = no1/no2;
    let zonePercentage = zoneNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (zonePercentage >= 80) {
    $("#homeAttacks").css('background-color', 'rgba(109, 179, 63, 0.5)');
}
    if (zonePercentage < 80 && zonePercentage >= 50) {
    $("#homeAttacks").css('background-color', 'rgba(255, 180, 0, 0.5)');
}
    if (zonePercentage < 50) {
    $("#homeAttacks").css('background-color', 'rgba(251, 34, 0, 0.5)');
}
    else {
    }

   }

   function homeKOs(){
    let no1 = parseInt($("#HomeKOs").text(),10);
    let no2 = parseInt($("#HomeKOsAvg").text(),10);
    let zoneNum = no1/no2;
    let zonePercentage = zoneNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (zonePercentage >= 80) {
    $("#HomeKOs").css('background-color', 'rgba(109, 179, 63, 0.5)');
}
    if (zonePercentage < 80 && zonePercentage >= 50) {
    $("#HomeKOs").css('background-color', 'rgba(255, 180, 0, 0.5)');
}
    if (zonePercentage < 50) {
    $("#HomeKOs").css('background-color', 'rgba(251, 34, 0, 0.5)');
}
    else {
    }

   }

   function homeFrees(){
    let no1 = parseInt($("#homeFrees").text(),10);
    let no2 = parseInt($("#homeFreesAvg").text(),10);
    let zoneNum = no1/no2;
    let zonePercentage = zoneNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (zonePercentage >= 80) {
    $("#homeFrees").css('background-color', 'rgba(109, 179, 63, 0.5)');
}
    if (zonePercentage < 80 && zonePercentage >= 50) {
    $("#homeFrees").css('background-color', 'rgba(255, 180, 0, 0.5)');
}
    if (zonePercentage < 50) {
    $("#homeFrees").css('background-color', 'rgba(251, 34, 0, 0.5)');
}
    else {
    }

   }

   function homePos(){
    let no1 = parseInt($("#homePos").text(),10);
    let no2 = parseInt($("#homePosAvg").text(),10);
    let zoneNum = no1/no2;
    let zonePercentage = zoneNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (zonePercentage >= 80) {
    $("#homePos").css('background-color', 'rgba(109, 179, 63, 0.5)');
}
    if (zonePercentage < 80 && zonePercentage >= 50) {
    $("#homePos").css('background-color', 'rgba(255, 180, 0, 0.5)');
}
    if (zonePercentage < 50) {
    $("#homePos").css('background-color', 'rgba(251, 34, 0, 0.5)');
}
    else {
    }

   }

   function homeTackles(){
    let no1 = parseInt($("#homeTackles").text(),10);
    let no2 = parseInt($("#homeTacklesAvg").text(),10);
    let zoneNum = no1/no2;
    let zonePercentage = zoneNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (zonePercentage >= 80) {
    $("#homeTackles").css('background-color', 'rgba(109, 179, 63, 0.5)');
}
    if (zonePercentage < 80 && zonePercentage >= 50) {
    $("#homeTackles").css('background-color', 'rgba(255, 180, 0, 0.5)');
}
    if (zonePercentage < 50) {
    $("#homeTackles").css('background-color', 'rgba(251, 34, 0, 0.5)');
}
    else {
    }

   }

   function HomeBallWon(){
    let no1 = parseInt($("#HomeBallWon").text(),10);
    let no2 = parseInt($("#HomeBallWonAvg").text(),10);
    let zoneNum = no1/no2;
    let zonePercentage = zoneNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (zonePercentage >= 80) {
    $("#HomeBallWon").css('background-color', 'rgba(109, 179, 63, 0.5)');
}
    if (zonePercentage < 80 && zonePercentage >= 50) {
    $("#HomeBallWon").css('background-color', 'rgba(255, 180, 0, 0.5)');
}
    if (zonePercentage < 50) {
    $("#HomeBallWon").css('background-color', 'rgba(251, 34, 0, 0.5)');
}
    else {
    }

   }

   function HomeShotsInside(){
    let no1 = parseInt($("#HomeShotsInside").text(),10);
    let no2 = parseInt($("#HomeShotsInsideAvg").text(),10);
    let zoneNum = no1/no2;
    let zonePercentage = zoneNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (zonePercentage >= 80) {
    $("#HomeShotsInside").css('background-color', 'rgba(109, 179, 63, 0.5)');
}
    if (zonePercentage < 80 && zonePercentage >= 50) {
    $("#HomeShotsInside").css('background-color', 'rgba(255, 180, 0, 0.5)');
}
    if (zonePercentage < 50) {
    $("#HomeShotsInside").css('background-color', 'rgba(251, 34, 0, 0.5)');
}
    else {
    }

   }

   function HomeKOShots(){
    let no1 = parseInt($("#HomeKOShots").text(),10);
    let no2 = parseInt($("#HomeKOShotsAvg").text(),10);
    let zoneNum = no1/no2;
    let zonePercentage = zoneNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (zonePercentage >= 80) {
    $("#HomeKOShots").css('background-color', 'rgba(109, 179, 63, 0.5)');
}
    if (zonePercentage < 80 && zonePercentage >= 50) {
    $("#HomeKOShots").css('background-color', 'rgba(255, 180, 0, 0.5)');
}
    if (zonePercentage < 50) {
    $("#HomeKOShots").css('background-color', 'rgba(251, 34, 0, 0.5)');
}
    else {
    }

   }

   function HomeOppFrees(){
    let no1 = parseInt($("#HomeOppFrees").text(),10);
    let no2 = parseInt($("#HomeOppFreesAvg").text(),10);
    let zoneNum = no1/no2;
    let zonePercentage = zoneNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (zonePercentage >= 80) {
    $("#HomeOppFrees").css('background-color', 'rgba(109, 179, 63, 0.5)');
}
    if (zonePercentage < 80 && zonePercentage >= 50) {
    $("#HomeOppFrees").css('background-color', 'rgba(255, 180, 0, 0.5)');
}
    if (zonePercentage < 50) {
    $("#HomeOppFrees").css('background-color', 'rgba(251, 34, 0, 0.5)');
}
    else {
    }

   }

   function HomeOppShot(){
    let no1 = parseInt($("#HomeOppShot").text(),10);
    let no2 = parseInt($("#HomeOppShotAvg").text(),10);
    let zoneNum = no1/no2;
    let zonePercentage = zoneNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (zonePercentage >= 80) {
    $("#HomeOppShot").css('background-color', 'rgba(109, 179, 63, 0.5)');
}
    if (zonePercentage < 80 && zonePercentage >= 50) {
    $("#HomeOppShot").css('background-color', 'rgba(255, 180, 0, 0.5)');
}
    if (zonePercentage < 50) {
    $("#HomeOppShot").css('background-color', 'rgba(251, 34, 0, 0.5)');
}
    else {
    }

   }

   function HomeContacts(){
    let no1 = parseInt($("#HomeContacts").text(),10);
    let no2 = parseInt($("#HomeContactsAvg").text(),10);
    let zoneNum = no1/no2;
    let zonePercentage = zoneNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (zonePercentage >= 80) {
    $("#HomeContacts").css('background-color', 'rgba(109, 179, 63, 0.5)');
}
    if (zonePercentage < 80 && zonePercentage >= 50) {
    $("#HomeContacts").css('background-color', 'rgba(255, 180, 0, 0.5)');
}
    if (zonePercentage < 50) {
    $("#HomeContacts").css('background-color', 'rgba(251, 34, 0, 0.5)');
}
    else {
    }

   }

   function HomeBWShots(){
    let no1 = parseInt($("#HomeBWShots").text(),10);
    let no2 = parseInt($("#HomeBWShotsAvg").text(),10);
    let zoneNum = no1/no2;
    let zonePercentage = zoneNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (zonePercentage >= 80) {
    $("#HomeBWShots").css('background-color', 'rgba(109, 179, 63, 0.5)');
}
    if (zonePercentage < 80 && zonePercentage >= 50) {
    $("#HomeBWShots").css('background-color', 'rgba(255, 180, 0, 0.5)');
}
    if (zonePercentage < 50) {
    $("#HomeBWShots").css('background-color', 'rgba(251, 34, 0, 0.5)');
}
    else {
    }

   }

   function HomeAttScore(){
    let no1 = parseInt($("#HomeAttScore").text(),10);
    let no2 = parseInt($("#HomeAttScoreAvg").text(),10);
    let zoneNum = no1/no2;
    let zonePercentage = zoneNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (zonePercentage >= 80) {
    $("#HomeAttScoreFull").css('background-color', 'rgba(109, 179, 63, 0.5)');
}
    if (zonePercentage < 80 && zonePercentage >= 50) {
    $("#HomeAttScoreFull").css('background-color', 'rgba(255, 180, 0, 0.5)');
}
    if (zonePercentage < 50) {
    $("#HomeAttScoreFull").css('background-color', 'rgba(251, 34, 0, 0.5)');
}
    else {
    }

   }

   function HomeKOShot(){
    let no1 = parseInt($("#HomeKOShot").text(),10);
    let no2 = parseInt($("#HomeKOShotAvg").text(),10);
    let zoneNum = no1/no2;
    let zonePercentage = zoneNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (zonePercentage >= 80) {
    $("#HomeKOShotFull").css('background-color', 'rgba(109, 179, 63, 0.5)');
}
    if (zonePercentage < 80 && zonePercentage >= 50) {
    $("#HomeKOShotFull").css('background-color', 'rgba(255, 180, 0, 0.5)');
}
    if (zonePercentage < 50) {
    $("#HomeKOShotFull").css('background-color', 'rgba(251, 34, 0, 0.5)');
}
    else {
    }

   }

   function HomeFreesScore(){
    let no1 = parseInt($("#HomeFreesScore").text(),10);
    let no2 = parseInt($("#HomeFreesScoreAvg").text(),10);
    let zoneNum = no1/no2;
    let zonePercentage = zoneNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (zonePercentage >= 80) {
    $("#HomeFreesScoreFull").css('background-color', 'rgba(109, 179, 63, 0.5)');
}
    if (zonePercentage < 80 && zonePercentage >= 50) {
    $("#HomeFreesScoreFull").css('background-color', 'rgba(255, 180, 0, 0.5)');
}
    if (zonePercentage < 50) {
    $("#HomeFreesScoreFull").css('background-color', 'rgba(251, 34, 0, 0.5)');
}
    else {
    }

   }

   function HomePosLosScore(){
    let no1 = parseInt($("#HomePosLosScore").text(),10);
    let no2 = parseInt($("#HomePosLosScoreAvg").text(),10);
    let zoneNum = no1/no2;
    let zonePercentage = zoneNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (zonePercentage >= 80) {
    $("#HomePosLosScoreFull").css('background-color', 'rgba(109, 179, 63, 0.5)');
}
    if (zonePercentage < 80 && zonePercentage >= 50) {
    $("#HomePosLosScoreFull").css('background-color', 'rgba(255, 180, 0, 0.5)');
}
    if (zonePercentage < 50) {
    $("#HomePosLosScoreFull").css('background-color', 'rgba(251, 34, 0, 0.5)');
}
    else {
    }

   }

   function HomeTackleTO(){
    let no1 = parseInt($("#HomeTackleTO").text(),10);
    let no2 = parseInt($("#HomeTackleTOAvg").text(),10);
    let zoneNum = no1/no2;
    let zonePercentage = zoneNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (zonePercentage >= 80) {
    $("#HomeTackleTO").css('background-color', 'rgba(109, 179, 63, 0.5)');
}
    if (zonePercentage < 80 && zonePercentage >= 50) {
    $("#HomeTackleTO").css('background-color', 'rgba(255, 180, 0, 0.5)');
}
    if (zonePercentage < 50) {
    $("#HomeTackleTO").css('background-color', 'rgba(251, 34, 0, 0.5)');
}
    else {
    }

   }

   function HomeBWScore(){
    let no1 = parseInt($("#HomeBWScore").text(),10);
    let no2 = parseInt($("#HomeBWScoreAvg").text(),10);
    let zoneNum = no1/no2;
    let zonePercentage = zoneNum*100;
    //alert("The result is "+result +no1 +no2);

    //$("#home-psr-bar").css({width: homePercentage + "%" });

    if (zonePercentage >= 80) {
    $("#HomeBWScoreFull").css('background-color', 'rgba(109, 179, 63, 0.5)');
}
    if (zonePercentage < 80 && zonePercentage >= 50) {
    $("#HomeBWScoreFull").css('background-color', 'rgba(255, 180, 0, 0.5)');
}
    if (zonePercentage < 50) {
    $("#HomeBWScoreFull").css('background-color', 'rgba(251, 34, 0, 0.5)');
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
   tackles();
   contact();
   ballWon();
   freesCon();
   bookings();
   homeAttacks();
   homeKOs();
   homeFrees();
   homePos();
   homeTackles();
   HomeBallWon();
   HomeShotsInside();
   HomeKOShots();
   HomeOppFrees();
   HomeOppShot();
   HomeContacts();
   HomeBWShots();
   }

$(document).ready(initialise);
