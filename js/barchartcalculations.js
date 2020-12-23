$(document).ready(function() {

  $(".bar-chart-team-stats-grid.accordion .event-heading-wrapper").click(function(){

  if ($(this).parent().parent().next('.expandable-content-wrapper').hasClass('hide')) {
  $(this).parent().parent().next('.expandable-content-wrapper').slideDown('fast').removeClass('hide');
  }
  else if (!$(this).parent().parent().next('.expandable-content-wrapper').hasClass('hide')) {
  $(this).parent().parent().next('.expandable-content-wrapper').slideUp('fast').addClass('hide');
  }

  $(this).children(".stat-heading").toggleClass("AccordionShow");
  $(this).children(".expandable-icon").toggleClass("AccordionShow");
  $(this).parent().toggleClass("selected");

  });

  $(".bar-chart-wrapper.accordion").click(function(){

  if ($(this).parent().parent().next('.expandable-content-wrapper').hasClass('hide')) {
  $(this).parent().parent().next('.expandable-content-wrapper').slideDown('fast').removeClass('hide');
  }
  else if (!$(this).parent().parent().next('.expandable-content-wrapper').hasClass('hide')) {
  $(this).parent().parent().next('.expandable-content-wrapper').slideUp('fast').addClass('hide');
  }

  $(this).parent().parent().find(".stat-heading").toggleClass("AccordionShow");
  $(this).parent().parent().find(".expandable-icon").toggleClass("AccordionShow");
  $(this).parent().parent().find(".bar-chart-team-stats-grid.accordion").toggleClass("selected");

  });


	 //$(".bar-chart-team-stats-grid.accordion .event-heading-wrapper").click(function() {
  		//$(".expandable-content-wrapper").toggleClass("AccordionShow");
      //$(this).children(".stat-heading").toggleClass("AccordionShow");
      //$(this).children(".expandable-icon").toggleClass("AccordionShow");
		  //$(this).parent().parent().next('.expandable-content-wrapper').toggleClass("hide");
    //});

    //$(".bar-chart-wrapper.accordion").click(function() {
      //$(".expandable-content-wrapper").toggleClass("AccordionShow");
  		//$(this).parent().parent().find(".stat-heading").toggleClass("AccordionShow");
      //$(this).parent().parent().find(".expandable-icon").toggleClass("AccordionShow");
      //$(this).parent().parent().next('.expandable-content-wrapper').toggleClass("hide");
	   //});

});

        function timeInPossession(){

         let time = $("#home-time-in-possession-number").text();
		     let no1 = new Date('1970-01-01T' + time + 'Z').getTime() / 1000;
         //console.log(seconds);

         let time2 = $("#away-time-in-possession-number").text();
		     let no2 = new Date('1970-01-01T' + time2 + 'Z').getTime() / 1000;
         //console.log(seconds);

         let total = no1+no2; //10
         let homeNum = no1/total;
         let awayNum = no2/total;
         let homePercentage = homeNum*100;
         let awayPercentage = awayNum*100;
         //alert("The result is "+total +no1 +no2);
         //$("#home-time-in-possession-bar").css({width: homePercentage + "%" });
         //$("#away-time-in-possession-bar").css({width: awayPercentage + "%" });

         if (no1 >= no2) {
    	   $("#home-time-in-possession-bar").css({width: homePercentage + "%" });
         $("#away-time-in-possession-bar").css({width: 100 + "%" });
		 		 }
         if (no1 == 0 && no2 == 0) {
         $("#home-time-in-possession-bar").css({width: 50 + "%" });
         $("#away-time-in-possession-bar").css({width: 100 + "%" });
         }
         if (no2 > no1) {
         $("#home-time-in-possession-bar").css({width: 100 + "%" });
    	 	 $("#away-time-in-possession-bar").css({width: awayPercentage + "%" }).css("z-index","2");
		 		 }
         else {
         }

        }


function barChartCalc(){

	$('.team-stats').each(function() {
	let no1 = parseInt($(this).find(".homestatnumber").filter(".number").text(),10);
	let no2 = parseInt($(this).find(".awaystatnumber").filter(".number").text(),10);
	let total = no1+no2; //10
	let homeNum = no1/total;
	let awayNum = no2/total;
	let homePercentage = homeNum*100;
	let awayPercentage = awayNum*100;

	//console.log(no1,no2);

	if (no1 >= no2) {
	$(this).find(".home-team-bar").css({width: homePercentage + "%" });
	$(this).find(".away-team-bar").css({width: 100 + "%" });
	}
	if (no1 == 0 && no2 == 0) {
	$(this).find(".home-team-bar").css({width: 50 + "%" });
	$(this).find(".away-team-bar").css({width: 100 + "%" });
	}
	if (no2 > no1) {
	$(this).find(".home-team-bar").css({width: 100 + "%" });
	$(this).find(".away-team-bar").css({width: awayPercentage + "%" }).css("z-index","2");
	}
	else {
	}
	});
}

function barChartExpPts(){

	$('#total-shots').each(function() {
	var no1text = ($("#home-team-exppts-number").text());
	var no2text = ($("#away-team-exppts-number").text());

  if (no1text.charAt(0) == "-") {
    var no1 = no1text.substring(1);
    //console.log("No1 minus number");
  } else {
    var no1 = no1text;
    //console.log("No1 positive number");
  }

  if (no2text.charAt(0) == "-") {
    var no2 = no2text.substring(1);
    //console.log("No1 minus number");
  } else {
    var no2 = no2text;
    //console.log("No1 positive number");
  }

  let no1Decimal = parseInt(no1,10);
  let no2Decimal = parseInt(no2,10);

	let total = no1Decimal+no2Decimal; //10

  console.log("test", no1, no2, no1Decimal, no2Decimal, total);

	let homeNum = no1Decimal/total;
	let awayNum = no2Decimal/total;
	let homePercentage = homeNum*100;
	let awayPercentage = awayNum*100;

  if (no1 >= no2) {
	$(this).find("#home-team-exppts-bar").css({width: homePercentage + "%" });
	$(this).find("#away-team-exppts-bar").css({width: 100 + "%" });
	}
	if (no1 == 0 && no2 == 0) {
	$(this).find("#home-team-exppts-bar").css({width: 50 + "%" });
	$(this).find("#away-team-exppts-bar").css({width: 100 + "%" });
	}
	if (no2 > no1) {
	$(this).find("#home-team-exppts-bar").css({width: 100 + "%" });
	$(this).find("#away-team-exppts-bar").css({width: awayPercentage + "%" }).css("z-index","2");
	}
	else {
	}
	});
}

				//cdn//
        function initialise() {
				timeInPossession();
				barChartCalc();
        barChartExpPts();
        }

$(document).ready(initialise);
