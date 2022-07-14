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

    function shotsPercent(){
     let no1 = parseInt($("#home-shotspercent-number").text(),10);
     let no2 = parseInt($("#away-shotspercent-number").text(),10);
     let total = no1+no2; //10
     let homeNum = no1/total;
     let awayNum = no2/total;
     let homePercentage = homeNum*100;
     let awayPercentage = awayNum*100;
     //alert("The result is "+result +no1 +no2);

     //$("#home-psr-bar").css({width: homePercentage + "%" });

     if (no1 >= no2) {
     $("#home-shotspercent-bar").css({width: homePercentage + "%" });
     $("#away-shotspercent-bar").css({width: 100 + "%" });
 }
     if (no1 == 0 && no2 == 0) {
     $("#home-shotspercent-bar").css({width: 50 + "%" });
     $("#away-shotspercent-bar").css({width: 100 + "%" });
     }
     if (no2 > no1) {
     $("#home-shotspercent-bar").css({width: 100 + "%" });
     $("#away-shotspercent-bar").css({width: awayPercentage + "%" }).css("z-index","2");
 }
     else {
     }

   }


   //cdn//
   function initialise() {
   shots();
   shotsPercent();
   }

$(document).ready(initialise);
