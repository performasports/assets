$(document).ready(function() {

  $.each(gamePeriod, function(index,value){
  $(".gameperiod").append("<h6 class='data-row-sub-heading-label'>"+value+"</h6>");
  });

  $.each(gameMinutes, function(index,value){
  $(".gameminutes").append("<h6 class='data-row-sub-heading-label'>"+value+"</h6>");
  });

  $.each(keyMetricsLabels, function(index,value){

  if (index > 0 && index < 9) {
  $(".team-stats-secondary-heading-row").append("<h6 class='data-row-sub-heading-label category'>"+value+"</h6>");
	} else {
  //  block of code to be executed if the condition is false
	}
  });

  });
