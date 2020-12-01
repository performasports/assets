				function teamPSR(){
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

        function teamPossessions(){
         let no1 = parseInt($("#home-team-possessions-number").text(),10);
         let no2 = parseInt($("#away-team-possessions-number").text(),10);
         let total = no1+no2; //10
         let homeNum = no1/total;
         let awayNum = no2/total;
         let homePercentage = homeNum*100;
         let awayPercentage = awayNum*100;
         //alert("The result is "+result +no1 +no2);
         //$("#home-team-possessions-bar").css({width: homePercentage + "%" });
         //$("#away-team-possessions-bar").css({width: awayPercentage + "%" });

         if (no1 >= no2) {
    	   $("#home-team-possessions-bar").css({width: homePercentage + "%" });
         $("#away-team-possessions-bar").css({width: 100 + "%" });
		     }
         if (no1 == 0 && no2 == 0) {
         $("#home-team-possessions-bar").css({width: 50 + "%" });
         $("#away-team-possessions-bar").css({width: 100 + "%" });
         }
         if (no2 > no1) {
         $("#home-team-possessions-bar").css({width: 100 + "%" });
    	   $("#away-team-possessions-bar").css({width: awayPercentage + "%" }).css("z-index","2");
		     }
         else {
         }

        }
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
        function productivity(){
         let no1 = parseInt($("#home-productivity-number").text(),10);
         let no2 = parseInt($("#away-productivity-number").text(),10);
         let total = no1+no2; //10
         let homeNum = no1/total;
         let awayNum = no2/total;
         let homePercentage = homeNum*100;
         let awayPercentage = awayNum*100;
         //alert("The result is "+result +no1 +no2);
         //$("#home-productivity-bar").css({width: homePercentage + "%" });
         //$("#away-productivity-bar").css({width: awayPercentage + "%" });

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
        function scoreSource(){
         let no1 = parseInt($("#home-ss-number").text(),10);
         let no2 = parseInt($("#away-ss-number").text(),10);
         let total = no1+no2; //10
         let homeNum = no1/total;
         let awayNum = no2/total;
         let homePercentage = homeNum*100;
         let awayPercentage = awayNum*100;
         //alert("The result is "+total +no1 +no2);
         //$("#home-ss-bar").css({width: homePercentage + "%" });
         //$("#away-ss-bar").css({width: awayPercentage + "%" });

         if (no1 >= no2) {
    	 $("#home-ss-bar").css({width: homePercentage + "%" });
         $("#away-ss-bar").css({width: 100 + "%" });
		 }
         if (no1 == 0 && no2 == 0) {
         $("#home-ss-bar").css({width: 50 + "%" });
         $("#away-ss-bar").css({width: 100 + "%" });
         }
         if (no2 > no1) {
         $("#home-ss-bar").css({width: 100 + "%" });
    	 $("#away-ss-bar").css({width: awayPercentage + "%" }).css("z-index","2");
		 }
         else {
         }
        }
        function scoreSourceKickout(){
         let no1 = parseInt($("#home-ss-kickout-number").text(),10);
         let no2 = parseInt($("#away-ss-kickout-number").text(),10);
         let total = no1+no2; //10
         let homeNum = no1/total;
         let awayNum = no2/total;
         let homePercentage = homeNum*100;
         let awayPercentage = awayNum*100;
         //alert("The result is "+result +no1 +no2);
         //$("#home-ss-kickout-bar").css({width: homePercentage + "%" });
         //$("#away-team-possessions-bar").css({width: awayPercentage + "%" });

         if (no1 >= no2) {
    	 $("#home-ss-kickout-bar").css({width: homePercentage + "%" });
         $("#away-ss-kickout-bar").css({width: 100 + "%" });
		 }
         if (no1 == 0 && no2 == 0) {
         $("#home-ss-kickout-bar").css({width: 50 + "%" });
         $("#away-ss-kickout-bar").css({width: 100 + "%" });
         }
         if (no2 > no1) {
         $("#home-ss-kickout-bar").css({width: 100 + "%" });
    	 $("#away-ss-kickout-bar").css({width: awayPercentage + "%" }).css("z-index","2");
		 }
         else {
         }
        }
        function scoreSourceOppKickout(){
         let no1 = parseInt($("#home-ss-opp-kickout-number").text(),10);
         let no2 = parseInt($("#away-ss-opp-kickout-number").text(),10);
         let total = no1+no2; //10
         let homeNum = no1/total;
         let awayNum = no2/total;
         let homePercentage = homeNum*100;
         let awayPercentage = awayNum*100;
         //alert("The result is "+result +no1 +no2);
         //$("#home-ss-opp-kickout-bar").css({width: homePercentage + "%" });
         //$("#away-ss-opp-kickout-bar").css({width: awayPercentage + "%" });

         if (no1 >= no2) {
    	 $("#home-ss-opp-kickout-bar").css({width: homePercentage + "%" });
         $("#away-ss-opp-kickout-bar").css({width: 100 + "%" });
		 }
         if (no1 == 0 && no2 == 0) {
         $("#home-ss-opp-kickout-bar").css({width: 50 + "%" });
         $("#away-ss-opp-kickout-bar").css({width: 100 + "%" });
         }
         if (no2 > no1) {
         $("#home-ss-opp-kickout-bar").css({width: 100 + "%" });
    	 $("#away-ss-opp-kickout-bar").css({width: awayPercentage + "%" }).css("z-index","2");
		 }
         else {
         }
        }
        function scoreSourcePosLost(){
         let no1 = parseInt($("#home-ss-pos-lost-number").text(),10);
         let no2 = parseInt($("#away-ss-pos-lost-number").text(),10);
         let total = no1+no2; //10
         let homeNum = no1/total;
         let awayNum = no2/total;
         let homePercentage = homeNum*100;
         let awayPercentage = awayNum*100;
         //alert("The result is "+result +no1 +no2);
         //$("#home-ss-pos-lost-bar").css({width: homePercentage + "%" });
         //$("#away-ss-pos-lost-bar").css({width: awayPercentage + "%" });

         if (no1 >= no2) {
    	 $("#home-ss-pos-lost-bar").css({width: homePercentage + "%" });
         $("#away-ss-pos-lost-bar").css({width: 100 + "%" });
		 }
         if (no1 == 0 && no2 == 0) {
         $("#home-ss-pos-lost-bar").css({width: 50 + "%" });
         $("#away-ss-pos-lost-bar").css({width: 100 + "%" });
         }
         if (no2 > no1) {
         $("#home-ss-pos-lost-bar").css({width: 100 + "%" });
    	 $("#away-ss-pos-lost-bar").css({width: awayPercentage + "%" }).css("z-index","2");
		 }
         else {
         }
        }
        function scoreSourceTurnover(){
         let no1 = parseInt($("#home-ss-turnover-number").text(),10);
         let no2 = parseInt($("#away-ss-turnover-number").text(),10);
         let total = no1+no2; //10
         let homeNum = no1/total;
         let awayNum = no2/total;
         let homePercentage = homeNum*100;
         let awayPercentage = awayNum*100;
         //alert("The result is "+result +no1 +no2);
         //$("#home-ss-turnover-bar").css({width: homePercentage + "%" });
         //$("#away-ss-turnover-bar").css({width: awayPercentage + "%" });

         if (no1 >= no2) {
    	 $("#home-ss-turnover-bar").css({width: homePercentage + "%" });
         $("#away-ss-turnover-bar").css({width: 100 + "%" });
		 }
         if (no1 == 0 && no2 == 0) {
         $("#home-ss-turnover-bar").css({width: 50 + "%" });
         $("#away-ss-turnover-bar").css({width: 100 + "%" });
         }
         if (no2 > no1) {
         $("#home-ss-turnover-bar").css({width: 100 + "%" });
    	 $("#away-ss-turnover-bar").css({width: awayPercentage + "%" }).css("z-index","2");
		 }
         else {
         }
        }
        function scoreSourceShotShort(){
         let no1 = parseInt($("#home-ss-shot-short-number").text(),10);
         let no2 = parseInt($("#away-ss-shot-short-number").text(),10);
         let total = no1+no2; //10
         let homeNum = no1/total;
         let awayNum = no2/total;
         let homePercentage = homeNum*100;
         let awayPercentage = awayNum*100;
         //alert("The result is "+result +no1 +no2);
         //$("#home-ss-shot-short-bar").css({width: homePercentage + "%" });
         //$("#away-ss-shot-short-bar").css({width: awayPercentage + "%" });

         if (no1 >= no2) {
    	 $("#home-ss-shot-short-bar").css({width: homePercentage + "%" });
         $("#away-ss-shot-short-bar").css({width: 100 + "%" });
		 }
         if (no1 == 0 && no2 == 0) {
         $("#home-ss-shot-short-bar").css({width: 50 + "%" });
         $("#away-ss-shot-short-bar").css({width: 100 + "%" });
         }
         if (no2 > no1) {
         $("#home-ss-shot-short-bar").css({width: 100 + "%" });
    	 $("#away-ss-shot-short-bar").css({width: awayPercentage + "%" }).css("z-index","2");
		 }
         else {
         }
        }
        function scoreSourceFreeFromPlay(){
         let no1 = parseInt($("#home-ss-free-number").text(),10);
         let no2 = parseInt($("#away-ss-free-number").text(),10);
         let total = no1+no2; //10
         let homeNum = no1/total;
         let awayNum = no2/total;
         let homePercentage = homeNum*100;
         let awayPercentage = awayNum*100;
         //alert("The result is "+result +no1 +no2);
         //$("#home-ss-free-bar").css({width: homePercentage + "%" });
         //$("#away-ss-free-bar").css({width: awayPercentage + "%" });

         if (no1 >= no2) {
    	 $("#home-ss-free-bar").css({width: homePercentage + "%" });
         $("#away-ss-free-bar").css({width: 100 + "%" });
		 }
         if (no1 == 0 && no2 == 0) {
         $("#home-ss-free-bar").css({width: 50 + "%" });
         $("#away-ss-free-bar").css({width: 100 + "%" });
         }
         if (no2 > no1) {
         $("#home-ss-free-bar").css({width: 100 + "%" });
    	 $("#away-ss-free-bar").css({width: awayPercentage + "%" }).css("z-index","2");
		 }
         else {
         }
        }
        function scoreSourceThrowUp(){
         let no1 = parseInt($("#home-ss-throw-number").text(),10);
         let no2 = parseInt($("#away-ss-throw-number").text(),10);
         let total = no1+no2; //10
         let homeNum = no1/total;
         let awayNum = no2/total;
         let homePercentage = homeNum*100;
         let awayPercentage = awayNum*100;
         //alert("The result is "+result +no1 +no2);
         //$("#home-ss-throw-bar").css({width: homePercentage + "%" });
         //$("#away-ss-throw-bar").css({width: awayPercentage + "%" });

         if (no1 >= no2) {
    	 $("#home-ss-throw-bar").css({width: homePercentage + "%" });
         $("#away-ss-throw-bar").css({width: 100 + "%" });
		 }
         if (no1 == 0 && no2 == 0) {
         $("#home-ss-throw-bar").css({width: 50 + "%" });
         $("#away-ss-throw-bar").css({width: 100 + "%" });
         }
         if (no2 > no1) {
         $("#home-ss-throw-bar").css({width: 100 + "%" });
    	 $("#away-ss-throw-bar").css({width: awayPercentage + "%" }).css("z-index","2");
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
         //$("#home-ss-throw-bar").css({width: homePercentage + "%" });
         //$("#away-ss-throw-bar").css({width: awayPercentage + "%" });

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

         function attacksKickRetained(){
         let no1 = parseInt($("#home-attacks-kickretained-number").text(),10);
         let no2 = parseInt($("#away-attacks-kickretained-number").text(),10);
         let total = no1+no2; //10
         let homeNum = no1/total;
         let awayNum = no2/total;
         let homePercentage = homeNum*100;
         let awayPercentage = awayNum*100;
         //alert("The result is "+result +no1 +no2);
         //$("#home-ss-throw-bar").css({width: homePercentage + "%" });
         //$("#away-ss-throw-bar").css({width: awayPercentage + "%" });

         if (no1 >= no2) {
    	 $("#home-attacks-kickretained-bar").css({width: homePercentage + "%" });
         $("#away-attacks-kickretained-bar").css({width: 100 + "%" });
		 }
         if (no1 == 0 && no2 == 0) {
         $("#home-attacks-kickretained-bar").css({width: 50 + "%" });
         $("#away-attacks-kickretained-bar").css({width: 100 + "%" });
         }
         if (no2 > no1) {
         $("#home-attacks-kickretained-bar").css({width: 100 + "%" });
    	 $("#away-attacks-kickretained-bar").css({width: awayPercentage + "%" }).css("z-index","2");
		 }
         else {
         }
			 }

         function attacksKickLost(){
         let no1 = parseInt($("#home-attacks-kicklost-number").text(),10);
         let no2 = parseInt($("#away-attacks-kicklost-number").text(),10);
         let total = no1+no2; //10
         let homeNum = no1/total;
         let awayNum = no2/total;
         let homePercentage = homeNum*100;
         let awayPercentage = awayNum*100;
         //alert("The result is "+result +no1 +no2);
         //$("#home-ss-throw-bar").css({width: homePercentage + "%" });
         //$("#away-ss-throw-bar").css({width: awayPercentage + "%" });

         if (no1 >= no2) {
    	 $("#home-attacks-kicklost-bar").css({width: homePercentage + "%" });
         $("#away-attacks-kicklost-bar").css({width: 100 + "%" });
		 }
         if (no1 == 0 && no2 == 0) {
         $("#home-attacks-kicklost-bar").css({width: 50 + "%" });
         $("#away-attacks-kicklost-bar").css({width: 100 + "%" });
         }
         if (no2 > no1) {
         $("#home-attacks-kicklost-bar").css({width: 100 + "%" });
    	 $("#away-attacks-kicklost-bar").css({width: awayPercentage + "%" }).css("z-index","2");
		 }
         else {
         }
			 }

         function attacksCarryRetained(){
         let no1 = parseInt($("#home-attacks-carryretained-number").text(),10);
         let no2 = parseInt($("#away-attacks-carryretained-number").text(),10);
         let total = no1+no2; //10
         let homeNum = no1/total;
         let awayNum = no2/total;
         let homePercentage = homeNum*100;
         let awayPercentage = awayNum*100;
         //alert("The result is "+result +no1 +no2);
         //$("#home-ss-throw-bar").css({width: homePercentage + "%" });
         //$("#away-ss-throw-bar").css({width: awayPercentage + "%" });

         if (no1 >= no2) {
    	 $("#home-attacks-carryretained-bar").css({width: homePercentage + "%" });
         $("#away-attacks-carryretained-bar").css({width: 100 + "%" });
		 }
         if (no1 == 0 && no2 == 0) {
         $("#home-attacks-carryretained-bar").css({width: 50 + "%" });
         $("#away-attacks-carryretained-bar").css({width: 100 + "%" });
         }
         if (no2 > no1) {
         $("#home-attacks-carryretained-bar").css({width: 100 + "%" });
    	 $("#away-attacks-carryretained-bar").css({width: awayPercentage + "%" }).css("z-index","2");
		 }
         else {
         }
			 }

         function attacksCarryLost(){
         let no1 = parseInt($("#home-attacks-carrylost-number").text(),10);
         let no2 = parseInt($("#away-attacks-carrylost-number").text(),10);
         let total = no1+no2; //10
         let homeNum = no1/total;
         let awayNum = no2/total;
         let homePercentage = homeNum*100;
         let awayPercentage = awayNum*100;
         //alert("The result is "+result +no1 +no2);
         //$("#home-ss-throw-bar").css({width: homePercentage + "%" });
         //$("#away-ss-throw-bar").css({width: awayPercentage + "%" });

         if (no1 >= no2) {
    	 $("#home-attacks-carrylost-bar").css({width: homePercentage + "%" });
         $("#away-attacks-carrylost-bar").css({width: 100 + "%" });
		 }
         if (no1 == 0 && no2 == 0) {
         $("#home-attacks-carrylost-bar").css({width: 50 + "%" });
         $("#away-attacks-carrylost-bar").css({width: 100 + "%" });
         }
         if (no2 > no1) {
         $("#home-attacks-carrylost-bar").css({width: 100 + "%" });
    	 $("#away-attacks-carrylost-bar").css({width: awayPercentage + "%" }).css("z-index","2");
		 }
         else {
         }
			 }

         function attacksMarkTaken(){
         let no1 = parseInt($("#home-attacks-marktaken-number").text(),10);
         let no2 = parseInt($("#away-attacks-marktaken-number").text(),10);
         let total = no1+no2; //10
         let homeNum = no1/total;
         let awayNum = no2/total;
         let homePercentage = homeNum*100;
         let awayPercentage = awayNum*100;
         //alert("The result is "+result +no1 +no2);
         //$("#home-ss-throw-bar").css({width: homePercentage + "%" });
         //$("#away-ss-throw-bar").css({width: awayPercentage + "%" });

         if (no1 >= no2) {
    	 $("#home-attacks-marktaken-bar").css({width: homePercentage + "%" });
         $("#away-attacks-marktaken-bar").css({width: 100 + "%" });
		 }
         if (no1 == 0 && no2 == 0) {
         $("#home-attacks-marktaken-bar").css({width: 50 + "%" });
         $("#away-attacks-marktaken-bar").css({width: 100 + "%" });
         }
         if (no2 > no1) {
         $("#home-attacks-marktaken-bar").css({width: 100 + "%" });
    	 $("#away-attacks-marktaken-bar").css({width: awayPercentage + "%" }).css("z-index","2");
		 }
         else {
         }
			 }

         function attacksDefMarkTaken(){
         let no1 = parseInt($("#home-attacks-defmarktaken-number").text(),10);
         let no2 = parseInt($("#away-attacks-defmarktaken-number").text(),10);
         let total = no1+no2; //10
         let homeNum = no1/total;
         let awayNum = no2/total;
         let homePercentage = homeNum*100;
         let awayPercentage = awayNum*100;
         //alert("The result is "+result +no1 +no2);
         //$("#home-ss-throw-bar").css({width: homePercentage + "%" });
         //$("#away-ss-throw-bar").css({width: awayPercentage + "%" });

         if (no1 >= no2) {
    	   $("#home-attacks-defmarktaken-bar").css({width: homePercentage + "%" });
         $("#away-attacks-defmarktaken-bar").css({width: 100 + "%" });
		     }
         if (no1 == 0 && no2 == 0) {
         $("#home-attacks-defmarktaken-bar").css({width: 50 + "%" });
         $("#away-attacks-defmarktaken-bar").css({width: 100 + "%" });
         }
         if (no2 > no1) {
         $("#home-attacks-defmarktaken-bar").css({width: 100 + "%" });
    	   $("#away-attacks-defmarktaken-bar").css({width: awayPercentage + "%" }).css("z-index","2");
		 		 }
         else {
         }
        }

				function shotFromPlay(){
				let no1 = parseInt($("#home-shotFromPlay-number").text(),10);
				let no2 = parseInt($("#away-shotFromPlay-number").text(),10);
				let total = no1+no2; //10
				let homeNum = no1/total;
				let awayNum = no2/total;
				let homePercentage = homeNum*100;
				let awayPercentage = awayNum*100;
				//alert("The result is "+result +no1 +no2);
				//$("#home-ss-throw-bar").css({width: homePercentage + "%" });
				//$("#away-ss-throw-bar").css({width: awayPercentage + "%" });

				if (no1 >= no2) {
				$("#home-shotFromPlay-bar").css({width: homePercentage + "%" });
				$("#away-shotFromPlay-bar").css({width: 100 + "%" });
				}
				if (no1 == 0 && no2 == 0) {
				$("#home-shotFromPlay-bar").css({width: 50 + "%" });
				$("#away-shotFromPlay-bar").css({width: 100 + "%" });
				}
				if (no2 > no1) {
				$("#home-shotFromPlay-bar").css({width: 100 + "%" });
				$("#away-shotFromPlay-bar").css({width: awayPercentage + "%" }).css("z-index","2");
				}
				else {
				}
			 }

			 function shotFromPlayGoal(){
			 let no1 = parseInt($("#home-shotFromPlay-goal-number").text(),10);
			 let no2 = parseInt($("#away-shotFromPlay-goal-number").text(),10);
			 let total = no1+no2; //10
			 let homeNum = no1/total;
			 let awayNum = no2/total;
			 let homePercentage = homeNum*100;
			 let awayPercentage = awayNum*100;
			 //alert("The result is "+result +no1 +no2);
			 //$("#home-ss-throw-bar").css({width: homePercentage + "%" });
			 //$("#away-ss-throw-bar").css({width: awayPercentage + "%" });

			 if (no1 >= no2) {
			 $("#home-shotFromPlay-goal-bar").css({width: homePercentage + "%" });
			 $("#away-shotFromPlay-goal-bar").css({width: 100 + "%" });
			 }
			 if (no1 == 0 && no2 == 0) {
			 $("#home-shotFromPlay-goal-bar").css({width: 50 + "%" });
			 $("#away-shotFromPlay-goal-bar").css({width: 100 + "%" });
			 }
			 if (no2 > no1) {
			 $("#home-shotFromPlay-goal-bar").css({width: 100 + "%" });
			 $("#away-shotFromPlay-goal-bar").css({width: awayPercentage + "%" }).css("z-index","2");
			 }
			 else {
			 }
			}

			function shotFromPlayPoint(){
			let no1 = parseInt($("#home-shotFromPlay-point-number").text(),10);
			let no2 = parseInt($("#away-shotFromPlay-point-number").text(),10);
			let total = no1+no2; //10
			let homeNum = no1/total;
			let awayNum = no2/total;
			let homePercentage = homeNum*100;
			let awayPercentage = awayNum*100;
			//alert("The result is "+result +no1 +no2);
			//$("#home-ss-throw-bar").css({width: homePercentage + "%" });
			//$("#away-ss-throw-bar").css({width: awayPercentage + "%" });

			if (no1 >= no2) {
			$("#home-shotFromPlay-point-bar").css({width: homePercentage + "%" });
			$("#away-shotFromPlay-point-bar").css({width: 100 + "%" });
			}
			if (no1 == 0 && no2 == 0) {
			$("#home-shotFromPlay-point-bar").css({width: 50 + "%" });
			$("#away-shotFromPlay-point-bar").css({width: 100 + "%" });
			}
			if (no2 > no1) {
			$("#home-shotFromPlay-point-bar").css({width: 100 + "%" });
			$("#away-shotFromPlay-point-bar").css({width: awayPercentage + "%" }).css("z-index","2");
			}
			else {
			}
		 }

		 function shotFromPlayWide(){
		 let no1 = parseInt($("#home-shotFromPlay-wide-number").text(),10);
		 let no2 = parseInt($("#away-shotFromPlay-wide-number").text(),10);
		 let total = no1+no2; //10
		 let homeNum = no1/total;
		 let awayNum = no2/total;
		 let homePercentage = homeNum*100;
		 let awayPercentage = awayNum*100;
		 //alert("The result is "+result +no1 +no2);
		 //$("#home-ss-throw-bar").css({width: homePercentage + "%" });
		 //$("#away-ss-throw-bar").css({width: awayPercentage + "%" });

		 if (no1 >= no2) {
		 $("#home-shotFromPlay-wide-bar").css({width: homePercentage + "%" });
		 $("#away-shotFromPlay-wide-bar").css({width: 100 + "%" });
		 }
		 if (no1 == 0 && no2 == 0) {
		 $("#home-shotFromPlay-wide-bar").css({width: 50 + "%" });
		 $("#away-shotFromPlay-wide-bar").css({width: 100 + "%" });
		 }
		 if (no2 > no1) {
		 $("#home-shotFromPlay-wide-bar").css({width: 100 + "%" });
		 $("#away-shotFromPlay-wide-bar").css({width: awayPercentage + "%" }).css("z-index","2");
		 }
		 else {
		 }
		}

		function shotFromPlaySave(){
		let no1 = parseInt($("#home-shotFromPlay-save-number").text(),10);
		let no2 = parseInt($("#away-shotFromPlay-save-number").text(),10);
		let total = no1+no2; //10
		let homeNum = no1/total;
		let awayNum = no2/total;
		let homePercentage = homeNum*100;
		let awayPercentage = awayNum*100;
		//alert("The result is "+result +no1 +no2);
		//$("#home-ss-throw-bar").css({width: homePercentage + "%" });
		//$("#away-ss-throw-bar").css({width: awayPercentage + "%" });

		if (no1 >= no2) {
		$("#home-shotFromPlay-save-bar").css({width: homePercentage + "%" });
		$("#away-shotFromPlay-save-bar").css({width: 100 + "%" });
		}
		if (no1 == 0 && no2 == 0) {
		$("#home-shotFromPlay-save-bar").css({width: 50 + "%" });
		$("#away-shotFromPlay-save-bar").css({width: 100 + "%" });
		}
		if (no2 > no1) {
		$("#home-shotFromPlay-save-bar").css({width: 100 + "%" });
		$("#away-shotFromPlay-save-bar").css({width: awayPercentage + "%" }).css("z-index","2");
		}
		else {
		}
	 }

	 function shotFromPlayShort(){
	 let no1 = parseInt($("#home-shotFromPlay-short-number").text(),10);
	 let no2 = parseInt($("#away-shotFromPlay-short-number").text(),10);
	 let total = no1+no2; //10
	 let homeNum = no1/total;
	 let awayNum = no2/total;
	 let homePercentage = homeNum*100;
	 let awayPercentage = awayNum*100;
	 //alert("The result is "+result +no1 +no2);
	 //$("#home-ss-throw-bar").css({width: homePercentage + "%" });
	 //$("#away-ss-throw-bar").css({width: awayPercentage + "%" });

	 if (no1 >= no2) {
	 $("#home-shotFromPlay-short-bar").css({width: homePercentage + "%" });
	 $("#away-shotFromPlay-short-bar").css({width: 100 + "%" });
	 }
	 if (no1 == 0 && no2 == 0) {
	 $("#home-shotFromPlay-short-bar").css({width: 50 + "%" });
	 $("#away-shotFromPlay-short-bar").css({width: 100 + "%" });
	 }
	 if (no2 > no1) {
	 $("#home-shotFromPlay-short-bar").css({width: 100 + "%" });
	 $("#away-shotFromPlay-short-bar").css({width: awayPercentage + "%" }).css("z-index","2");
	 }
	 else {
	 }
	}

	function shotFromPlayWoodwork(){
	let no1 = parseInt($("#home-shotFromPlay-woodwork-number").text(),10);
	let no2 = parseInt($("#away-shotFromPlay-woodwork-number").text(),10);
	let total = no1+no2; //10
	let homeNum = no1/total;
	let awayNum = no2/total;
	let homePercentage = homeNum*100;
	let awayPercentage = awayNum*100;
	//alert("The result is "+result +no1 +no2);
	//$("#home-ss-throw-bar").css({width: homePercentage + "%" });
	//$("#away-ss-throw-bar").css({width: awayPercentage + "%" });

	if (no1 >= no2) {
	$("#home-shotFromPlay-woodwork-bar").css({width: homePercentage + "%" });
	$("#away-shotFromPlay-woodwork-bar").css({width: 100 + "%" });
	}
	if (no1 == 0 && no2 == 0) {
	$("#home-shotFromPlay-woodwork-bar").css({width: 50 + "%" });
	$("#away-shotFromPlay-woodwork-bar").css({width: 100 + "%" });
	}
	if (no2 > no1) {
	$("#home-shotFromPlay-woodwork-bar").css({width: 100 + "%" });
	$("#away-shotFromPlay-woodwork-bar").css({width: awayPercentage + "%" }).css("z-index","2");
	}
	else {
	}
 }

 function shotFromPlay45(){
 let no1 = parseInt($("#home-shotFromPlay-45-number").text(),10);
 let no2 = parseInt($("#away-shotFromPlay-45-number").text(),10);
 let total = no1+no2; //10
 let homeNum = no1/total;
 let awayNum = no2/total;
 let homePercentage = homeNum*100;
 let awayPercentage = awayNum*100;
 //alert("The result is "+result +no1 +no2);
 //$("#home-ss-throw-bar").css({width: homePercentage + "%" });
 //$("#away-ss-throw-bar").css({width: awayPercentage + "%" });

 if (no1 >= no2) {
 $("#home-shotFromPlay-45-bar").css({width: homePercentage + "%" });
 $("#away-shotFromPlay-45-bar").css({width: 100 + "%" });
 }
 if (no1 == 0 && no2 == 0) {
 $("#home-shotFromPlay-45-bar").css({width: 50 + "%" });
 $("#away-shotFromPlay-45-bar").css({width: 100 + "%" });
 }
 if (no2 > no1) {
 $("#home-shotFromPlay-45-bar").css({width: 100 + "%" });
 $("#away-shotFromPlay-45-bar").css({width: awayPercentage + "%" }).css("z-index","2");
 }
 else {
 }
}

function shotFromPlayCR(){
let no1 = parseInt($("#home-shotFromPlay-cr-number").text(),10);
let no2 = parseInt($("#away-shotFromPlay-cr-number").text(),10);
let total = no1+no2; //10
let homeNum = no1/total;
let awayNum = no2/total;
let homePercentage = homeNum*100;
let awayPercentage = awayNum*100;
//alert("The result is "+result +no1 +no2);
//$("#home-ss-throw-bar").css({width: homePercentage + "%" });
//$("#away-ss-throw-bar").css({width: awayPercentage + "%" });

if (no1 >= no2) {
$("#home-shotFromPlay-cr-bar").css({width: homePercentage + "%" });
$("#away-shotFromPlay-cr-bar").css({width: 100 + "%" });
}
if (no1 == 0 && no2 == 0) {
$("#home-shotFromPlay-cr-bar").css({width: 50 + "%" });
$("#away-shotFromPlay-cr-bar").css({width: 100 + "%" });
}
if (no2 > no1) {
$("#home-shotFromPlay-cr-bar").css({width: 100 + "%" });
$("#away-shotFromPlay-cr-bar").css({width: awayPercentage + "%" }).css("z-index","2");
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

	//alert("The result is "+total +no1 +no2);

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

//let no1 = parseInt($("#home-shotFromPlay-cr-number").text(),10);
let no2 = parseInt($("#away-shotFromPlay-cr-number").text(),10);
let total = no1+no2; //10
let homeNum = no1/total;
let awayNum = no2/total;
let homePercentage = homeNum*100;
let awayPercentage = awayNum*100;
//alert("The result is "+total +no1 +no2);
//$("#home-ss-throw-bar").css({width: homePercentage + "%" });
//$("#away-ss-throw-bar").css({width: awayPercentage + "%" });

if (no1 >= no2) {
$("#home-shotFromPlay-cr-bar").css({width: homePercentage + "%" });
$("#away-shotFromPlay-cr-bar").css({width: 100 + "%" });
}
if (no1 == 0 && no2 == 0) {
$("#home-shotFromPlay-cr-bar").css({width: 50 + "%" });
$("#away-shotFromPlay-cr-bar").css({width: 100 + "%" });
}
if (no2 > no1) {
$("#home-shotFromPlay-cr-bar").css({width: 100 + "%" });
$("#away-shotFromPlay-cr-bar").css({width: awayPercentage + "%" }).css("z-index","2");
}
else {
}
}

				//cdn//
        function initialise() {
    		//teamPSR();
    		//teamPossessions();
        timeInPossession();
        productivity();
        scoreSource();
        scoreSourceKickout();
        scoreSourceOppKickout();
        scoreSourcePosLost();
        scoreSourceTurnover();
        scoreSourceShotShort();
        scoreSourceFreeFromPlay();
        scoreSourceThrowUp();
        attacks();
        attacksKickRetained();
        attacksKickLost();
        attacksCarryRetained();
        attacksCarryLost();
        attacksMarkTaken();
        attacksDefMarkTaken();
				shotFromPlay();
				shotFromPlayGoal();
				shotFromPlayPoint();
				shotFromPlayWide();
				shotFromPlaySave();
				shotFromPlayShort();
				shotFromPlayWoodwork();
				shotFromPlay45();
				shotFromPlayCR();
				barChartCalc();
        }

		$(document).ready(initialise);
