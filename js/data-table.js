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

  const gameMinsClassName = gamePeriodClass.reverse();
  $.each(gameMinsClassName, function(index,value){
  });

  //if (index = "1st Half") {
  //$(".kpi-category.one").find(".team-stats-secondary-heading-row").after("<div class='team-stats-data-row 1st-Half'>");
  //}

  //$(".kpi-category.one").find(".team-stats-secondary-heading-row").next().after("<div class='team-stats-data-row 2nd-Half'>");



  var score = keyMetricsLabels.indexOf("Score");
  var posTime = keyMetricsLabels.indexOf("Pos. Time");
  var shotTime = keyMetricsLabels.indexOf("Shot Time");

  $.each(keyMetricsLabels, function(index,value){

  if (index >= 0 && index < 9) {
  $(".kpi-category.one").find(".team-stats-secondary-heading-row").append("<h6 data-tippy-content='"+keyMetricsTooltips[index]+"' class='data-row-sub-heading-label category tippy'>"+value+"</h6>");
  } else {
  //  block of code to be executed if the condition is false
	}

  if (index == 0 && index == 5) {
  $(".kpi-category.one").find(".data-row-sub-heading-label.category").addClass("col-lg");
  console.log("Add col-lg");
  }

  });

  $.each(homeTeam1stHalf, function(index,value){
  if (index >= 0 && index < 9) {
  $(".kpi-category.one").find(".team-stats-data-row.1stHalf").append("<a href='#' class='table-data w-inline-block'><h5 class='datapoint'>"+homeTeam1stHalf[index]+"</h5></a>");
  } else {
  //  block of code to be executed if the condition is false
  }
  });

  $.each(homeTeam2ndHalf, function(index,value){
  if (index >= 0 && index < 9) {
  $(".kpi-category.one").find(".team-stats-data-row.2ndHalf").append("<a href='#' class='table-data w-inline-block'><h5 class='datapoint'>"+homeTeam2ndHalf[index]+"</h5></a>");
  } else {
  //  block of code to be executed if the condition is false
  }
  });

  $.each(homeTeam1stExtra, function(index,value){
  if (index >= 0 && index < 9) {
  $(".kpi-category.one").find(".team-stats-data-row.1stExtra").append("<a href='#' class='table-data w-inline-block'><h5 class='datapoint'>"+homeTeam1stExtra[index]+"</h5></a>");
  } else {
  //  block of code to be executed if the condition is false
  }
  });

  $.each(homeTeam2ndExtra, function(index,value){
  if (index >= 0 && index < 9) {
  $(".kpi-category.one").find(".team-stats-data-row.2ndExtra").append("<a href='#' class='table-data w-inline-block'><h5 class='datapoint'>"+homeTeam2ndExtra[index]+"</h5></a>");
  } else {
  //  block of code to be executed if the condition is false
  }
  });

  $.each(homeTeamFullGame, function(index,value){
  if (index >= 0 && index < 9) {
  $(".kpi-category.one").find(".team-stats-data-row.FullGame").append("<a href='#' class='table-data w-inline-block'><h5 class='datapoint'>"+homeTeamFullGame[index]+"</h5></a>");
  } else {
  //  block of code to be executed if the condition is false
  }
  });

  $.each(homeTeamByMins012, function(index,value){
  if (index >= 0 && index < 9) {
  $(".kpi-category.one").find(".team-stats-data-row.mins-0-12").append("<a href='#' class='table-data w-inline-block'><h5 class='datapoint'>"+homeTeamByMins012[index]+"</h5></a>");
  } else {
  //  block of code to be executed if the condition is false
  }
  });

  $.each(homeTeamByMins1325, function(index,value){
  if (index >= 0 && index < 9) {
  $(".kpi-category.one").find(".team-stats-data-row.mins-13-25").append("<a href='#' class='table-data w-inline-block'><h5 class='datapoint'>"+homeTeamByMins1325[index]+"</h5></a>");
  } else {
  //  block of code to be executed if the condition is false
  }
  });

  $.each(homeTeamByMins26half, function(index,value){
  if (index >= 0 && index < 9) {
  $(".kpi-category.one").find(".team-stats-data-row.mins-26-half").append("<a href='#' class='table-data w-inline-block'><h5 class='datapoint'>"+homeTeamByMins26half[index]+"</h5></a>");
  } else {
  //  block of code to be executed if the condition is false
  }
  });

  $.each(homeTeamByMins3547, function(index,value){
  if (index >= 0 && index < 9) {
  $(".kpi-category.one").find(".team-stats-data-row.mins-35-47").append("<a href='#' class='table-data w-inline-block'><h5 class='datapoint'>"+homeTeamByMins3547[index]+"</h5></a>");
  } else {
  //  block of code to be executed if the condition is false
  }
  });

  $.each(homeTeamByMins4860, function(index,value){
  if (index >= 0 && index < 9) {
  $(".kpi-category.one").find(".team-stats-data-row.mins-48-60").append("<a href='#' class='table-data w-inline-block'><h5 class='datapoint'>"+homeTeamByMins4860[index]+"</h5></a>");
  } else {
  //  block of code to be executed if the condition is false
  }
  });

  $.each(homeTeamByMins61full, function(index,value){
  if (index >= 0 && index < 9) {
  $(".kpi-category.one").find(".team-stats-data-row.mins-61-full").append("<a href='#' class='table-data w-inline-block'><h5 class='datapoint'>"+homeTeamByMins61full[index]+"</h5></a>");
  } else {
  //  block of code to be executed if the condition is false
  }
  });

  $.each(homeTeamByMins1stExtra, function(index,value){
  if (index >= 0 && index < 9) {
  $(".kpi-category.one").find(".team-stats-data-row.mins-1stExtra").append("<a href='#' class='table-data w-inline-block'><h5 class='datapoint'>"+homeTeamByMins1stExtra[index]+"</h5></a>");
  } else {
  //  block of code to be executed if the condition is false
  }
  });

  $.each(homeTeamByMins2ndExtra, function(index,value){
  if (index >= 0 && index < 9) {
  $(".kpi-category.one").find(".team-stats-data-row.mins-2ndExtra").append("<a href='#' class='table-data w-inline-block'><h5 class='datapoint'>"+homeTeamByMins2ndExtra[index]+"</h5></a>");
  } else {
  //  block of code to be executed if the condition is false
  }
  });

  });
