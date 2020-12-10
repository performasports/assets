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
  $(".kpi-category.one").find(".team-stats-secondary-heading-row.by-period").after("<div class='team-stats-data-row "+value+"'>");
  $(".kpi-category.two").find(".team-stats-secondary-heading-row.by-period").after("<div class='team-stats-data-row "+value+"'>");
  $(".kpi-category.three").find(".team-stats-secondary-heading-row.by-period").after("<div class='team-stats-data-row "+value+"'>");
  $(".kpi-category.four").find(".team-stats-secondary-heading-row.by-period").after("<div class='team-stats-data-row "+value+"'>");
  $(".kpi-category.five").find(".team-stats-secondary-heading-row.by-period").after("<div class='team-stats-data-row "+value+"'>");
  });

  $(".kpi-category.one").find(".team-stats-data-row.FullGame").after("<div class='team-stats-secondary-heading-row by-minutes'></div>");
  $(".kpi-category.two").find(".team-stats-data-row.FullGame").after("<div class='team-stats-secondary-heading-row by-minutes'></div>");
  $(".kpi-category.three").find(".team-stats-data-row.FullGame").after("<div class='team-stats-secondary-heading-row by-minutes'></div>");
  $(".kpi-category.four").find(".team-stats-data-row.FullGame").after("<div class='team-stats-secondary-heading-row by-minutes'></div>");
  $(".kpi-category.five").find(".team-stats-data-row.FullGame").after("<div class='team-stats-secondary-heading-row by-minutes'></div>");

  var minsArray = ["0-12","13-25","26-half","35-47","48-60","61-full","70-1st","80-2nd"]
  const gameMinutesClassName = minsArray.reverse();
  $.each(gameMinutesClassName, function(index,value){
  $(".kpi-category.one").find(".team-stats-secondary-heading-row.by-minutes").after("<div class='team-stats-data-row "+value+"'>");
  $(".kpi-category.two").find(".team-stats-secondary-heading-row.by-minutes").after("<div class='team-stats-data-row "+value+"'>");
  $(".kpi-category.three").find(".team-stats-secondary-heading-row.by-minutes").after("<div class='team-stats-data-row "+value+"'>");
  $(".kpi-category.four").find(".team-stats-secondary-heading-row.by-minutes").after("<div class='team-stats-data-row "+value+"'>");
  $(".kpi-category.five").find(".team-stats-secondary-heading-row.by-minutes").after("<div class='team-stats-data-row "+value+"'>");
  });

  //if (index = "1st Half") {
  //$(".kpi-category.one").find(".team-stats-secondary-heading-row").after("<div class='team-stats-data-row 1st-Half'>");
  //}

  //$(".kpi-category.one").find(".team-stats-secondary-heading-row").next().after("<div class='team-stats-data-row 2nd-Half'>");


  $.each(keyMetricsLabels, function(index,value){

  if (index >= 0 && index < 10) {
  $(".kpi-category.one").find(".team-stats-secondary-heading-row.by-period").append("<h6 data-tippy-content='"+keyMetricsTooltips[index]+"' class='data-row-sub-heading-label category tippy "+keyMetricsLabelsID[index]+"'>"+value+"</h6>");
  }
  if (index >= 10 && index < 43) {
  $(".kpi-category.two").find(".team-stats-secondary-heading-row.by-period").append("<h6 data-tippy-content='"+keyMetricsTooltips[index]+"' class='data-row-sub-heading-label category tippy "+keyMetricsLabelsID[index]+"'>"+value+"</h6>");
  } else {
  //  block of code to be executed if the condition is false
	}
  });

  $.each(homeTeam1stHalf, function(index,value){
  if (index >= 0 && index < 10) {
  $(".kpi-category.one").find(".team-stats-data-row.1stHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stHalf[index]+"</h5></a>");
  }
  if (index >= 10 && index < 43) {
  $(".kpi-category.two").find(".team-stats-data-row.1stHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stHalf[index]+"</h5></a>");
  } else {
  //  block of code to be executed if the condition is false
  }
  });

  $.each(homeTeam2ndHalf, function(index,value){
  if (index >= 0 && index < 10) {
  $(".kpi-category.one").find(".team-stats-data-row.2ndHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndHalf[index]+"</h5></a>");
  }
  if (index >= 10 && index < 43) {
  $(".kpi-category.two").find(".team-stats-data-row.2ndHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndHalf[index]+"</h5></a>");
  } else {
  //  block of code to be executed if the condition is false
  }
  });

  $.each(homeTeam1stExtra, function(index,value){
  if (index >= 0 && index < 10) {
  $(".kpi-category.one").find(".team-stats-data-row.1stExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stExtra[index]+"</h5></a>");
  }
  if (index >= 10 && index < 43) {
  $(".kpi-category.two").find(".team-stats-data-row.1stExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stExtra[index]+"</h5></a>");
  } else {
  //  block of code to be executed if the condition is false
  }
  });

  $.each(homeTeam2ndExtra, function(index,value){
  if (index >= 0 && index < 10) {
  $(".kpi-category.one").find(".team-stats-data-row.2ndExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndExtra[index]+"</h5></a>");
  }
  if (index >= 10 && index < 43) {
  $(".kpi-category.two").find(".team-stats-data-row.2ndExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndExtra[index]+"</h5></a>");
  } else {
  //  block of code to be executed if the condition is false
  }
  });

  $.each(homeTeamFullGame, function(index,value){
  if (index >= 0 && index < 10) {
  $(".kpi-category.one").find(".team-stats-data-row.FullGame").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamFullGame[index]+"</h5></a>");
  }
  if (index >= 10 && index < 43) {
  $(".kpi-category.two").find(".team-stats-data-row.FullGame").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamFullGame[index]+"</h5></a>");
  } else {
  //  block of code to be executed if the condition is false
  }
  });

  $.each(homeTeamByMins012, function(index,value){
  if (index >= 0 && index < 10) {
  $(".kpi-category.one").find(".team-stats-data-row.0-12").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins012[index]+"</h5></a>");
  }
  if (index >= 10 && index < 43) {
  $(".kpi-category.two").find(".team-stats-data-row.0-12").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins012[index]+"</h5></a>");
  } else {
  //  block of code to be executed if the condition is false
  }
  });

  $.each(homeTeamByMins1325, function(index,value){
  if (index >= 0 && index < 10) {
  $(".kpi-category.one").find(".team-stats-data-row.13-25").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins1325[index]+"</h5></a>");
  }
  if (index >= 10 && index < 43) {
  $(".kpi-category.two").find(".team-stats-data-row.13-25").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins1325[index]+"</h5></a>");
  } else {
  //  block of code to be executed if the condition is false
  }
  });

  $.each(homeTeamByMins26half, function(index,value){
  if (index >= 0 && index < 10) {
  $(".kpi-category.one").find(".team-stats-data-row.26-half").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins26half[index]+"</h5></a>");
  }
  if (index >= 10 && index < 43) {
  $(".kpi-category.two").find(".team-stats-data-row.26-half").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins26half[index]+"</h5></a>");
  } else {
  //  block of code to be executed if the condition is false
  }
  });

  $.each(homeTeamByMins3547, function(index,value){
  if (index >= 0 && index < 10) {
  $(".kpi-category.one").find(".team-stats-data-row.35-47").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins3547[index]+"</h5></a>");
  }
  if (index >= 10 && index < 43) {
  $(".kpi-category.two").find(".team-stats-data-row.35-47").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins3547[index]+"</h5></a>");
  } else {
  //  block of code to be executed if the condition is false
  }
  });

  $.each(homeTeamByMins4860, function(index,value){
  if (index >= 0 && index < 10) {
  $(".kpi-category.one").find(".team-stats-data-row.48-60").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins4860[index]+"</h5></a>");
  }
  if (index >= 10 && index < 43) {
  $(".kpi-category.two").find(".team-stats-data-row.48-60").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins4860[index]+"</h5></a>");
  } else {
  //  block of code to be executed if the condition is false
  }
  });

  $.each(homeTeamByMins61full, function(index,value){
  if (index >= 0 && index < 10) {
  $(".kpi-category.one").find(".team-stats-data-row.61-full").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins61full[index]+"</h5></a>");
  }
  if (index >= 10 && index < 43) {
  $(".kpi-category.two").find(".team-stats-data-row.61-full").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins61full[index]+"</h5></a>");
  } else {
  //  block of code to be executed if the condition is false
  }
  });

  $.each(homeTeamByMins701stEx, function(index,value){
  if (index >= 0 && index < 10) {
  $(".kpi-category.one").find(".team-stats-data-row.70-1st").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins701stEx[index]+"</h5></a>");
  }
  if (index >= 10 && index < 43) {
  $(".kpi-category.two").find(".team-stats-data-row.70-1st").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins701stEx[index]+"</h5></a>");
  } else {
  //  block of code to be executed if the condition is false
  }
  });

  $.each(homeTeamByMins802ndEx, function(index,value){
  if (index >= 0 && index < 10) {
  $(".kpi-category.one").find(".team-stats-data-row.80-2nd").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins802ndEx[index]+"</h5></a>");
  }
  if (index >= 9 && index < 43) {
  $(".kpi-category.two").find(".team-stats-data-row.80-2nd").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins802ndEx[index]+"</h5></a>");
  } else {
  //  block of code to be executed if the condition is false
  }
  });

  $(".kpi-category.one").find(".Score").addClass("col-lg");
  $(".kpi-category.one").find(".Pos--Time").addClass("col-lg");
  $(".kpi-category.one").find(".Shot-Time").addClass("col-lg");
  $(".kpi-category.one").find(".Prod--").addClass("col-md");
  $(".kpi-category.one").find(".Pos---").addClass("col-md");
  });
