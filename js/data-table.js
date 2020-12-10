$(document).ready(function() {

  $.each(gamePeriod, function(index,value){
  $(".gameperiod").append("<h6 class='data-row-sub-heading-label'>"+value+"</h6>");
  //$(".kpi-category.one").find(".team-stats-secondary-heading-row").after("<div class='team-stats-data-row "+gamePeriod[index]+"'>");
  });

  $.each(gameMinutes, function(index,value){
  $(".gameminutes").append("<h6 class='data-row-sub-heading-label'>"+value+"</h6>");
  });

  const gamePeriodClassName = gamePeriodClass.reverse();
  $.each(gamePeriodClassName, function(index,value){
  $(".kpi-category.one").find(".team-stats-secondary-heading-row").after("<div class='team-stats-data-row "+value+"'>");
  });

  //if (index = "1st Half") {
  //$(".kpi-category.one").find(".team-stats-secondary-heading-row").after("<div class='team-stats-data-row 1st-Half'>");
  //}

  //$(".kpi-category.one").find(".team-stats-secondary-heading-row").next().after("<div class='team-stats-data-row 2nd-Half'>");

  $.each(keyMetricsLabels, function(index,value){

  if (index > 0 && index < 9) {
  $(".kpi-category.one").find(".team-stats-secondary-heading-row").append("<h6 data-tippy-content='"+keyMetricsTooltips[index]+"' class='data-row-sub-heading-label category tippy'>"+value+"</h6>");
  } else {
  //  block of code to be executed if the condition is false
	}
  });

  $.each(homeTeam1stHalf, function(index,value){
  if (index > 0 && index < 9) {
  $(".kpi-category.one").find(".team-stats-data-row.1stHalf").append("<a href='#' class='table-data w-inline-block'><h5 class='datapoint'>"+homeTeam1stHalf[index]+"</h5></a>");
  } else {
  //  block of code to be executed if the condition is false
  }
  });

  $.each(homeTeam2ndHalf, function(index,value){
  if (index > 0 && index < 9) {
  $(".kpi-category.one").find(".team-stats-data-row.2ndHalf").append("<a href='#' class='table-data w-inline-block'><h5 class='datapoint'>"+homeTeam2ndHalf[index]+"</h5></a>");
  } else {
  //  block of code to be executed if the condition is false
  }
  });

  $.each(homeTeam1stExtra, function(index,value){
  if (index > 0 && index < 9) {
  $(".kpi-category.one").find(".team-stats-data-row.1stExtra").append("<a href='#' class='table-data w-inline-block'><h5 class='datapoint'>"+homeTeam1stExtra[index]+"</h5></a>");
  } else {
  //  block of code to be executed if the condition is false
  }
  });

  $.each(homeTeam2ndExtra, function(index,value){
  if (index > 0 && index < 9) {
  $(".kpi-category.one").find(".team-stats-data-row.1stExtra").append("<a href='#' class='table-data w-inline-block'><h5 class='datapoint'>"+homeTeam2ndExtra[index]+"</h5></a>");
  } else {
  //  block of code to be executed if the condition is false
  }
  });

  $.each(homeTeamFullGame, function(index,value){
  if (index > 0 && index < 9) {
  $(".kpi-category.one").find(".team-stats-data-row.1stExtra").append("<a href='#' class='table-data w-inline-block'><h5 class='datapoint'>"+homeTeamFullGame[index]+"</h5></a>");
  } else {
  //  block of code to be executed if the condition is false
  }
  });

  });
