$(document).ready(function() {

  $.each(gamePeriod, function(index,value){
  $(".gameperiod").append("<h6 class='data-row-sub-heading-label'>"+value+"</h6>");
  //$(".kpi-category.one").find(".team-stats-secondary-heading-row").after("<div class='team-stats-data-row "+gamePeriod[index]+"'>");
  if (index == "1st Half") {
  $(".kpi-category.one").find(".team-stats-secondary-heading-row").after("<div class='team-stats-data-row 1st-Half'>");
  }

  });

  $.each(gameMinutes, function(index,value){
  $(".gameminutes").append("<h6 class='data-row-sub-heading-label'>"+value+"</h6>");
  });

  $(".kpi-category.one").find(".team-stats-secondary-heading-row").next().after("<div class='team-stats-data-row 2nd-Half'>");

  $.each(keyMetricsLabels, function(index,value){

  if (index > 0 && index < 9) {
  $(".kpi-category.one").find(".team-stats-secondary-heading-row").append("<h6 data-tippy-content='"+keyMetricsTooltips[index]+"' class='data-row-sub-heading-label category tippy'>"+value+"</h6>");
  $(".kpi-category.one").find(".team-stats-data-row.1st-Half").append("<a href='#' class='table-data w-inline-block'><h5 class='datapoint'>"+homeTeam1stHalf[index]+"</h5></a>");
  } else {
  //  block of code to be executed if the condition is false
	}
  });

  });
