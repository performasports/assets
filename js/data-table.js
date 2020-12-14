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
  $(".kpi-category.six").find(".team-stats-secondary-heading-row.by-period").after("<div class='team-stats-data-row "+value+"'>");
  $(".kpi-category.seven").find(".team-stats-secondary-heading-row.by-period").after("<div class='team-stats-data-row "+value+"'>");
  $(".kpi-category.eight").find(".team-stats-secondary-heading-row.by-period").after("<div class='team-stats-data-row "+value+"'>");
  $(".kpi-category.nine").find(".team-stats-secondary-heading-row.by-period").after("<div class='team-stats-data-row "+value+"'>");
  $(".kpi-category.ten").find(".team-stats-secondary-heading-row.by-period").after("<div class='team-stats-data-row "+value+"'>");
  $(".kpi-category.eleven").find(".team-stats-secondary-heading-row.by-period").after("<div class='team-stats-data-row "+value+"'>");
  $(".kpi-category.twelve").find(".team-stats-secondary-heading-row.by-period").after("<div class='team-stats-data-row "+value+"'>");
  $(".kpi-category.thirteen").find(".team-stats-secondary-heading-row.by-period").after("<div class='team-stats-data-row "+value+"'>");
  $(".kpi-category.fourteen").find(".team-stats-secondary-heading-row.by-period").after("<div class='team-stats-data-row "+value+"'>");
  });

  $(".kpi-category.one").find(".team-stats-data-row.FullGame").after("<div class='team-stats-secondary-heading-row by-minutes'></div>");
  $(".kpi-category.two").find(".team-stats-data-row.FullGame").after("<div class='team-stats-secondary-heading-row by-minutes'></div>");
  $(".kpi-category.three").find(".team-stats-data-row.FullGame").after("<div class='team-stats-secondary-heading-row by-minutes'></div>");
  $(".kpi-category.four").find(".team-stats-data-row.FullGame").after("<div class='team-stats-secondary-heading-row by-minutes'></div>");
  $(".kpi-category.five").find(".team-stats-data-row.FullGame").after("<div class='team-stats-secondary-heading-row by-minutes'></div>");
  $(".kpi-category.six").find(".team-stats-data-row.FullGame").after("<div class='team-stats-secondary-heading-row by-minutes'></div>");
  $(".kpi-category.seven").find(".team-stats-data-row.FullGame").after("<div class='team-stats-secondary-heading-row by-minutes'></div>");
  $(".kpi-category.eight").find(".team-stats-data-row.FullGame").after("<div class='team-stats-secondary-heading-row by-minutes'></div>");
  $(".kpi-category.nine").find(".team-stats-data-row.FullGame").after("<div class='team-stats-secondary-heading-row by-minutes'></div>");
  $(".kpi-category.ten").find(".team-stats-data-row.FullGame").after("<div class='team-stats-secondary-heading-row by-minutes'></div>");
  $(".kpi-category.eleven").find(".team-stats-data-row.FullGame").after("<div class='team-stats-secondary-heading-row by-minutes'></div>");
  $(".kpi-category.twelve").find(".team-stats-data-row.FullGame").after("<div class='team-stats-secondary-heading-row by-minutes'></div>");
  $(".kpi-category.thirteen").find(".team-stats-data-row.FullGame").after("<div class='team-stats-secondary-heading-row by-minutes'></div>");
  $(".kpi-category.fourteen").find(".team-stats-data-row.FullGame").after("<div class='team-stats-secondary-heading-row by-minutes'></div>");

  var minsArray = ["0-12","13-25","26-half","35-47","48-60","61-full","70-1st","80-2nd"]
  const gameMinutesClassName = minsArray.reverse();
  $.each(gameMinutesClassName, function(index,value){
  $(".kpi-category.one").find(".team-stats-secondary-heading-row.by-minutes").after("<div class='team-stats-data-row "+value+"'>");
  $(".kpi-category.two").find(".team-stats-secondary-heading-row.by-minutes").after("<div class='team-stats-data-row "+value+"'>");
  $(".kpi-category.three").find(".team-stats-secondary-heading-row.by-minutes").after("<div class='team-stats-data-row "+value+"'>");
  $(".kpi-category.four").find(".team-stats-secondary-heading-row.by-minutes").after("<div class='team-stats-data-row "+value+"'>");
  $(".kpi-category.five").find(".team-stats-secondary-heading-row.by-minutes").after("<div class='team-stats-data-row "+value+"'>");
  $(".kpi-category.six").find(".team-stats-secondary-heading-row.by-minutes").after("<div class='team-stats-data-row "+value+"'>");
  $(".kpi-category.seven").find(".team-stats-secondary-heading-row.by-minutes").after("<div class='team-stats-data-row "+value+"'>");
  $(".kpi-category.eight").find(".team-stats-secondary-heading-row.by-minutes").after("<div class='team-stats-data-row "+value+"'>");
  $(".kpi-category.nine").find(".team-stats-secondary-heading-row.by-minutes").after("<div class='team-stats-data-row "+value+"'>");
  $(".kpi-category.ten").find(".team-stats-secondary-heading-row.by-minutes").after("<div class='team-stats-data-row "+value+"'>");
  $(".kpi-category.eleven").find(".team-stats-secondary-heading-row.by-minutes").after("<div class='team-stats-data-row "+value+"'>");
  $(".kpi-category.twelve").find(".team-stats-secondary-heading-row.by-minutes").after("<div class='team-stats-data-row "+value+"'>");
  $(".kpi-category.thirteen").find(".team-stats-secondary-heading-row.by-minutes").after("<div class='team-stats-data-row "+value+"'>");
  $(".kpi-category.fourteen").find(".team-stats-secondary-heading-row.by-minutes").after("<div class='team-stats-data-row "+value+"'>");
  });

  //if (index = "1st Half") {
  //$(".kpi-category.one").find(".team-stats-secondary-heading-row").after("<div class='team-stats-data-row 1st-Half'>");
  //}

  //$(".kpi-category.one").find(".team-stats-secondary-heading-row").next().after("<div class='team-stats-data-row 2nd-Half'>");


  $.each(keyMetricsLabels, function(index,value){

  if (index >= 0 && index < 10) {
  $(".kpi-category.one").find(".team-stats-secondary-heading-row.by-period").append("<h6 data-tippy-content='"+keyMetricsTooltips[index]+"' class='data-row-sub-heading-label category tippy "+keyMetricsLabelsID[index]+"'>"+value+"</h6>");
  }
  if (index >= 10 && index < 17) {
  $(".kpi-category.two").find(".team-stats-secondary-heading-row.by-period").append("<h6 data-tippy-content='"+keyMetricsTooltips[index]+"' class='data-row-sub-heading-label category tippy "+keyMetricsLabelsID[index]+"'>"+value+"</h6>");
  }
  if (index >= 17 && index < 27) {
  $(".kpi-category.three").find(".team-stats-secondary-heading-row.by-period").append("<h6 data-tippy-content='"+keyMetricsTooltips[index]+"' class='data-row-sub-heading-label category tippy "+keyMetricsLabelsID[index]+"'>"+value+"</h6>");
  }
  if (index >= 27 && index < 37) {
  $(".kpi-category.four").find(".team-stats-secondary-heading-row.by-period").append("<h6 data-tippy-content='"+keyMetricsTooltips[index]+"' class='data-row-sub-heading-label category tippy "+keyMetricsLabelsID[index]+"'>"+value+"</h6>");
  }
  if (index >= 37 && index < 43) {
  $(".kpi-category.five").find(".team-stats-secondary-heading-row.by-period").append("<h6 data-tippy-content='"+keyMetricsTooltips[index]+"' class='data-row-sub-heading-label category tippy "+keyMetricsLabelsID[index]+"'>"+value+"</h6>");
  }
  if (index >= 43 && index < 51) {
  $(".kpi-category.six").find(".team-stats-secondary-heading-row.by-period").append("<h6 data-tippy-content='"+keyMetricsTooltips[index]+"' class='data-row-sub-heading-label category tippy "+keyMetricsLabelsID[index]+"'>"+value+"</h6>");
  }
  if (index >= 51 && index < 60) {
  $(".kpi-category.seven").find(".team-stats-secondary-heading-row.by-period").append("<h6 data-tippy-content='"+keyMetricsTooltips[index]+"' class='data-row-sub-heading-label category tippy "+keyMetricsLabelsID[index]+"'>"+value+"</h6>");
  }
  if (index >= 60 && index < 61) {
  $(".kpi-category.eight").find(".team-stats-secondary-heading-row.by-period").append("<h6 data-tippy-content='"+keyMetricsTooltips[index]+"' class='data-row-sub-heading-label category tippy "+keyMetricsLabelsID[index]+"'>"+value+"</h6>");
  }
  if (index >= 61 && index < 70) {
  $(".kpi-category.nine").find(".team-stats-secondary-heading-row.by-period").append("<h6 data-tippy-content='"+keyMetricsTooltips[index]+"' class='data-row-sub-heading-label category tippy "+keyMetricsLabelsID[index]+"'>"+value+"</h6>");
  }
  if (index >= 70 && index < 79) {
  $(".kpi-category.ten").find(".team-stats-secondary-heading-row.by-period").append("<h6 data-tippy-content='"+keyMetricsTooltips[index]+"' class='data-row-sub-heading-label category tippy "+keyMetricsLabelsID[index]+"'>"+value+"</h6>");
  }
  if (index >= 79 && index < 82) {
  $(".kpi-category.eleven").find(".team-stats-secondary-heading-row.by-period").append("<h6 data-tippy-content='"+keyMetricsTooltips[index]+"' class='data-row-sub-heading-label category tippy "+keyMetricsLabelsID[index]+"'>"+value+"</h6>");
  }
  if (index >= 82 && index < 85) {
  $(".kpi-category.twelve").find(".team-stats-secondary-heading-row.by-period").append("<h6 data-tippy-content='"+keyMetricsTooltips[index]+"' class='data-row-sub-heading-label category tippy "+keyMetricsLabelsID[index]+"'>"+value+"</h6>");
  }
  if (index >= 85 && index < 90) {
  $(".kpi-category.thirteen").find(".team-stats-secondary-heading-row.by-period").append("<h6 data-tippy-content='"+keyMetricsTooltips[index]+"' class='data-row-sub-heading-label category tippy "+keyMetricsLabelsID[index]+"'>"+value+"</h6>");
  }
  if (index >= 90 && index < 93) {
  $(".kpi-category.fourteen").find(".team-stats-secondary-heading-row.by-period").append("<h6 data-tippy-content='"+keyMetricsTooltips[index]+"' class='data-row-sub-heading-label category tippy "+keyMetricsLabelsID[index]+"'>"+value+"</h6>");
  } else {
  //  block of code to be executed if the condition is false
	}
  });

  $.each(homeTeam1stHalf, function(index,value){
  if (index >= 0 && index < 10) {
  $(".home-team").find(".kpi-category.one").find(".team-stats-data-row.1stHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stHalf[index]+"</h5></div>");
  }
  if (index >= 10 && index < 17 && value == "") {
  $(".home-team").find(".kpi-category.two").find(".team-stats-data-row.1stHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stHalf[index]+"</h5></div>");
  }
  if (index >= 10 && index < 17 && value !== "") {
  $(".home-team").find(".kpi-category.two").find(".team-stats-data-row.1stHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stHalf[index]+"</h5></a>");
  }
  if (index >= 17 && index < 27 && (value == "" || value.includes('%'))) {
  $(".home-team").find(".kpi-category.three").find(".team-stats-data-row.1stHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stHalf[index]+"</h5></div>");
  }
  if (index >= 17 && index < 26 && value !== "") {
  $(".home-team").find(".kpi-category.three").find(".team-stats-data-row.1stHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stHalf[index]+"</h5></a>");
  }
  if (index >= 27 && index < 37 && (value == "" || value.includes('%'))) {
  $(".home-team").find(".kpi-category.four").find(".team-stats-data-row.1stHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stHalf[index]+"</h5></div>");
  }
  if (index >= 27 && index < 36 && value !== "") {
  $(".home-team").find(".kpi-category.four").find(".team-stats-data-row.1stHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stHalf[index]+"</h5></a>");
  }
  if (index >= 39 && index < 43) {
  $(".home-team").find(".kpi-category.five").find(".team-stats-data-row.1stHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stHalf[index]+"</h5></div>");
  }
  if (index >= 37 && index < 39) {
  $(".home-team").find(".kpi-category.five").find(".team-stats-data-row.1stHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stHalf[index]+"</h5></a>");
  }
  if (index >= 43 && index < 51 && value == "") {
  $(".home-team").find(".kpi-category.six").find(".team-stats-data-row.1stHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stHalf[index]+"</h5></div>");
  }
  if (index >= 43 && index < 51 && value !== "") {
  $(".home-team").find(".kpi-category.six").find(".team-stats-data-row.1stHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stHalf[index]+"</h5></a>");
  }
  if (index >= 51 && index < 60 && value == "") {
  $(".home-team").find(".kpi-category.seven").find(".team-stats-data-row.1stHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stHalf[index]+"</h5></div>");
  }
  if (index >= 51 && index < 60 && value !== "") {
  $(".home-team").find(".kpi-category.seven").find(".team-stats-data-row.1stHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stHalf[index]+"</h5></a>");
  }
  if (index >= 60 && index < 61 && value == "") {
  $(".home-team").find(".kpi-category.eight").find(".team-stats-data-row.1stHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stHalf[index]+"</h5></div>");
  }
  if (index >= 60 && index < 61 && value !== "") {
  $(".home-team").find(".kpi-category.eight").find(".team-stats-data-row.1stHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stHalf[index]+"</h5></a>");
  }
  if (index >= 61 && index < 70 && value == "") {
  $(".home-team").find(".kpi-category.nine").find(".team-stats-data-row.1stHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stHalf[index]+"</h5></div>");
  }
  if (index >= 61 && index < 70 && value !== "") {
  $(".home-team").find(".kpi-category.nine").find(".team-stats-data-row.1stHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stHalf[index]+"</h5></a>");
  }
  if (index >= 70 && index < 79 && value == "") {
  $(".home-team").find(".kpi-category.ten").find(".team-stats-data-row.1stHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stHalf[index]+"</h5></div>");
  }
  if (index >= 70 && index < 79 && value !== "") {
  $(".home-team").find(".kpi-category.ten").find(".team-stats-data-row.1stHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stHalf[index]+"</h5></a>");
  }
  if (index >= 79 && index < 82 && value == "") {
  $(".home-team").find(".kpi-category.eleven").find(".team-stats-data-row.1stHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stHalf[index]+"</h5></div>");
  }
  if (index >= 79 && index < 82 && value !== "") {
  $(".home-team").find(".kpi-category.eleven").find(".team-stats-data-row.1stHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stHalf[index]+"</h5></a>");
  }
  if (index >= 82 && index < 85 && value == "") {
  $(".home-team").find(".kpi-category.twelve").find(".team-stats-data-row.1stHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stHalf[index]+"</h5></div>");
  }
  if (index >= 82 && index < 85 && value !== "") {
  $(".home-team").find(".kpi-category.twelve").find(".team-stats-data-row.1stHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stHalf[index]+"</h5></a>");
  }
  if (index >= 85 && index < 90 && value == "") {
  $(".home-team").find(".kpi-category.thirteen").find(".team-stats-data-row.1stHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stHalf[index]+"</h5></div>");
  }
  if (index >= 85 && index < 90 && value !== "") {
  $(".home-team").find(".kpi-category.thirteen").find(".team-stats-data-row.1stHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stHalf[index]+"</h5></a>");
  }
  if (index >= 90 && index < 93 && value == "") {
  $(".home-team").find(".kpi-category.fourteen").find(".team-stats-data-row.1stHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stHalf[index]+"</h5></div>");
  }
  if (index >= 90 && index < 93 && value !== "") {
  $(".home-team").find(".kpi-category.fourteen").find(".team-stats-data-row.1stHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stHalf[index]+"</h5></a>");
  } else {
  //  block of code to be executed if the condition is false
  }
  });

  $.each(homeTeam2ndHalf, function(index,value){
    if (index >= 0 && index < 10) {
    $(".home-team").find(".kpi-category.one").find(".team-stats-data-row.2ndHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndHalf[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value == "") {
    $(".home-team").find(".kpi-category.two").find(".team-stats-data-row.2ndHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndHalf[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value !== "") {
    $(".home-team").find(".kpi-category.two").find(".team-stats-data-row.2ndHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndHalf[index]+"</h5></a>");
    }
    if (index >= 17 && index < 27 && (value == "" || value.includes('%'))) {
    $(".home-team").find(".kpi-category.three").find(".team-stats-data-row.2ndHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndHalf[index]+"</h5></div>");
    }
    if (index >= 17 && index < 26 && value !== "") {
    $(".home-team").find(".kpi-category.three").find(".team-stats-data-row.2ndHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndHalf[index]+"</h5></a>");
    }
    if (index >= 27 && index < 37 && (value == "" || value.includes('%'))) {
    $(".home-team").find(".kpi-category.four").find(".team-stats-data-row.2ndHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndHalf[index]+"</h5></div>");
    }
    if (index >= 27 && index < 36 && value !== "") {
    $(".home-team").find(".kpi-category.four").find(".team-stats-data-row.2ndHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndHalf[index]+"</h5></a>");
    }
    if (index >= 39 && index < 43) {
    $(".home-team").find(".kpi-category.five").find(".team-stats-data-row.2ndHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndHalf[index]+"</h5></div>");
    }
    if (index >= 37 && index < 39) {
    $(".home-team").find(".kpi-category.five").find(".team-stats-data-row.2ndHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndHalf[index]+"</h5></a>");
    }
    if (index >= 43 && index < 51 && value == "") {
    $(".home-team").find(".kpi-category.six").find(".team-stats-data-row.2ndHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndHalf[index]+"</h5></div>");
    }
    if (index >= 43 && index < 51 && value !== "") {
    $(".home-team").find(".kpi-category.six").find(".team-stats-data-row.2ndHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndHalf[index]+"</h5></a>");
    }
    if (index >= 51 && index < 60 && value == "") {
    $(".home-team").find(".kpi-category.seven").find(".team-stats-data-row.2ndHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndHalf[index]+"</h5></div>");
    }
    if (index >= 51 && index < 60 && value !== "") {
    $(".home-team").find(".kpi-category.seven").find(".team-stats-data-row.2ndHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndHalf[index]+"</h5></a>");
    }
    if (index >= 60 && index < 61 && value == "") {
    $(".home-team").find(".kpi-category.eight").find(".team-stats-data-row.2ndHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndHalf[index]+"</h5></div>");
    }
    if (index >= 60 && index < 61 && value !== "") {
    $(".home-team").find(".kpi-category.eight").find(".team-stats-data-row.2ndHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndHalf[index]+"</h5></a>");
    }
    if (index >= 61 && index < 70 && value == "") {
    $(".home-team").find(".kpi-category.nine").find(".team-stats-data-row.2ndHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndHalf[index]+"</h5></div>");
    }
    if (index >= 61 && index < 70 && value !== "") {
    $(".home-team").find(".kpi-category.nine").find(".team-stats-data-row.2ndHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndHalf[index]+"</h5></a>");
    }
    if (index >= 70 && index < 79 && value == "") {
    $(".home-team").find(".kpi-category.ten").find(".team-stats-data-row.2ndHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndHalf[index]+"</h5></div>");
    }
    if (index >= 70 && index < 79 && value !== "") {
    $(".home-team").find(".kpi-category.ten").find(".team-stats-data-row.2ndHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndHalf[index]+"</h5></a>");
    }
    if (index >= 79 && index < 82 && value == "") {
    $(".home-team").find(".kpi-category.eleven").find(".team-stats-data-row.2ndHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndHalf[index]+"</h5></div>");
    }
    if (index >= 79 && index < 82 && value !== "") {
    $(".home-team").find(".kpi-category.eleven").find(".team-stats-data-row.2ndHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndHalf[index]+"</h5></a>");
    }
    if (index >= 82 && index < 85 && value == "") {
    $(".home-team").find(".kpi-category.twelve").find(".team-stats-data-row.2ndHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndHalf[index]+"</h5></div>");
    }
    if (index >= 82 && index < 85 && value !== "") {
    $(".home-team").find(".kpi-category.twelve").find(".team-stats-data-row.2ndHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndHalf[index]+"</h5></a>");
    }
    if (index >= 85 && index < 90 && value == "") {
    $(".home-team").find(".kpi-category.thirteen").find(".team-stats-data-row.2ndHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndHalf[index]+"</h5></div>");
    }
    if (index >= 85 && index < 90 && value !== "") {
    $(".home-team").find(".kpi-category.thirteen").find(".team-stats-data-row.2ndHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndHalf[index]+"</h5></a>");
    }
    if (index >= 90 && index < 93 && value == "") {
    $(".home-team").find(".kpi-category.fourteen").find(".team-stats-data-row.2ndHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndHalf[index]+"</h5></div>");
    }
    if (index >= 90 && index < 93 && value !== "") {
    $(".home-team").find(".kpi-category.fourteen").find(".team-stats-data-row.2ndHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndHalf[index]+"</h5></a>");
    } else {
    //  block of code to be executed if the condition is false
    }
  });

  $.each(homeTeam1stExtra, function(index,value){
    if (index >= 0 && index < 10) {
    $(".home-team").find(".kpi-category.one").find(".team-stats-data-row.1stExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stExtra[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value == "") {
    $(".home-team").find(".kpi-category.two").find(".team-stats-data-row.1stExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stExtra[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value !== "") {
    $(".home-team").find(".kpi-category.two").find(".team-stats-data-row.1stExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stExtra[index]+"</h5></a>");
    }
    if (index >= 17 && index < 27 && (value == "" || value.includes('%'))) {
    $(".home-team").find(".kpi-category.three").find(".team-stats-data-row.1stExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stExtra[index]+"</h5></div>");
    }
    if (index >= 17 && index < 26 && value !== "") {
    $(".home-team").find(".kpi-category.three").find(".team-stats-data-row.1stExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stExtra[index]+"</h5></a>");
    }
    if (index >= 27 && index < 37 && (value == "" || value.includes('%'))) {
    $(".home-team").find(".kpi-category.four").find(".team-stats-data-row.1stExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stExtra[index]+"</h5></div>");
    }
    if (index >= 27 && index < 36 && value !== "") {
    $(".home-team").find(".kpi-category.four").find(".team-stats-data-row.1stExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stExtra[index]+"</h5></a>");
    }
    if (index >= 39 && index < 43) {
    $(".home-team").find(".kpi-category.five").find(".team-stats-data-row.1stExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stExtra[index]+"</h5></div>");
    }
    if (index >= 37 && index < 39) {
    $(".home-team").find(".kpi-category.five").find(".team-stats-data-row.1stExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stExtra[index]+"</h5></a>");
    }
    if (index >= 43 && index < 51 && value == "") {
    $(".home-team").find(".kpi-category.six").find(".team-stats-data-row.1stExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stExtra[index]+"</h5></div>");
    }
    if (index >= 43 && index < 51 && value !== "") {
    $(".home-team").find(".kpi-category.six").find(".team-stats-data-row.1stExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stExtra[index]+"</h5></a>");
    }
    if (index >= 51 && index < 60 && value == "") {
    $(".home-team").find(".kpi-category.seven").find(".team-stats-data-row.1stExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stExtra[index]+"</h5></div>");
    }
    if (index >= 51 && index < 60 && value !== "") {
    $(".home-team").find(".kpi-category.seven").find(".team-stats-data-row.1stExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stExtra[index]+"</h5></a>");
    }
    if (index >= 60 && index < 61 && value == "") {
    $(".home-team").find(".kpi-category.eight").find(".team-stats-data-row.1stExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stExtra[index]+"</h5></div>");
    }
    if (index >= 60 && index < 61 && value !== "") {
    $(".home-team").find(".kpi-category.eight").find(".team-stats-data-row.1stExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stExtra[index]+"</h5></a>");
    }
    if (index >= 61 && index < 70 && value == "") {
    $(".home-team").find(".kpi-category.nine").find(".team-stats-data-row.1stExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stExtra[index]+"</h5></div>");
    }
    if (index >= 61 && index < 70 && value !== "") {
    $(".home-team").find(".kpi-category.nine").find(".team-stats-data-row.1stExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stExtra[index]+"</h5></a>");
    }
    if (index >= 70 && index < 79 && value == "") {
    $(".home-team").find(".kpi-category.ten").find(".team-stats-data-row.1stExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stExtra[index]+"</h5></div>");
    }
    if (index >= 70 && index < 79 && value !== "") {
    $(".home-team").find(".kpi-category.ten").find(".team-stats-data-row.1stExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stExtra[index]+"</h5></a>");
    }
    if (index >= 79 && index < 82 && value == "") {
    $(".home-team").find(".kpi-category.eleven").find(".team-stats-data-row.1stExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stExtra[index]+"</h5></div>");
    }
    if (index >= 79 && index < 82 && value !== "") {
    $(".home-team").find(".kpi-category.eleven").find(".team-stats-data-row.1stExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stExtra[index]+"</h5></a>");
    }
    if (index >= 82 && index < 85 && value == "") {
    $(".home-team").find(".kpi-category.twelve").find(".team-stats-data-row.1stExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stExtra[index]+"</h5></div>");
    }
    if (index >= 82 && index < 85 && value !== "") {
    $(".home-team").find(".kpi-category.twelve").find(".team-stats-data-row.1stExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stExtra[index]+"</h5></a>");
    }
    if (index >= 85 && index < 90 && value == "") {
    $(".home-team").find(".kpi-category.thirteen").find(".team-stats-data-row.1stExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stExtra[index]+"</h5></div>");
    }
    if (index >= 85 && index < 90 && value !== "") {
    $(".home-team").find(".kpi-category.thirteen").find(".team-stats-data-row.1stExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stExtra[index]+"</h5></a>");
    }
    if (index >= 90 && index < 93 && value == "") {
    $(".home-team").find(".kpi-category.fourteen").find(".team-stats-data-row.1stExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stExtra[index]+"</h5></div>");
    }
    if (index >= 90 && index < 93 && value !== "") {
    $(".home-team").find(".kpi-category.fourteen").find(".team-stats-data-row.1stExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam1stExtra[index]+"</h5></a>");
    } else {
    //  block of code to be executed if the condition is false
    }
  });

  $.each(homeTeam2ndExtra, function(index,value){
    if (index >= 0 && index < 10) {
    $(".home-team").find(".kpi-category.one").find(".team-stats-data-row.2ndExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndExtra[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value == "") {
    $(".home-team").find(".kpi-category.two").find(".team-stats-data-row.2ndExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndExtra[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value !== "") {
    $(".home-team").find(".kpi-category.two").find(".team-stats-data-row.2ndExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndExtra[index]+"</h5></a>");
    }
    if (index >= 17 && index < 27 && (value == "" || value.includes('%'))) {
    $(".home-team").find(".kpi-category.three").find(".team-stats-data-row.2ndExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndExtra[index]+"</h5></div>");
    }
    if (index >= 17 && index < 26 && value !== "") {
    $(".home-team").find(".kpi-category.three").find(".team-stats-data-row.2ndExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndExtra[index]+"</h5></a>");
    }
    if (index >= 27 && index < 37 && (value == "" || value.includes('%'))) {
    $(".home-team").find(".kpi-category.four").find(".team-stats-data-row.2ndExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndExtra[index]+"</h5></div>");
    }
    if (index >= 27 && index < 36 && value !== "") {
    $(".home-team").find(".kpi-category.four").find(".team-stats-data-row.2ndExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndExtra[index]+"</h5></a>");
    }
    if (index >= 39 && index < 43) {
    $(".home-team").find(".kpi-category.five").find(".team-stats-data-row.2ndExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndExtra[index]+"</h5></div>");
    }
    if (index >= 37 && index < 39) {
    $(".home-team").find(".kpi-category.five").find(".team-stats-data-row.2ndExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndExtra[index]+"</h5></a>");
    }
    if (index >= 43 && index < 51 && value == "") {
    $(".home-team").find(".kpi-category.six").find(".team-stats-data-row.2ndExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndExtra[index]+"</h5></div>");
    }
    if (index >= 43 && index < 51 && value !== "") {
    $(".home-team").find(".kpi-category.six").find(".team-stats-data-row.2ndExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndExtra[index]+"</h5></a>");
    }
    if (index >= 51 && index < 60 && value == "") {
    $(".home-team").find(".kpi-category.seven").find(".team-stats-data-row.2ndExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndExtra[index]+"</h5></div>");
    }
    if (index >= 51 && index < 60 && value !== "") {
    $(".home-team").find(".kpi-category.seven").find(".team-stats-data-row.2ndExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndExtra[index]+"</h5></a>");
    }
    if (index >= 60 && index < 61 && value == "") {
    $(".home-team").find(".kpi-category.eight").find(".team-stats-data-row.2ndExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndExtra[index]+"</h5></div>");
    }
    if (index >= 60 && index < 61 && value !== "") {
    $(".home-team").find(".kpi-category.eight").find(".team-stats-data-row.2ndExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndExtra[index]+"</h5></a>");
    }
    if (index >= 61 && index < 70 && value == "") {
    $(".home-team").find(".kpi-category.nine").find(".team-stats-data-row.2ndExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndExtra[index]+"</h5></div>");
    }
    if (index >= 61 && index < 70 && value !== "") {
    $(".home-team").find(".kpi-category.nine").find(".team-stats-data-row.2ndExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndExtra[index]+"</h5></a>");
    }
    if (index >= 70 && index < 79 && value == "") {
    $(".home-team").find(".kpi-category.ten").find(".team-stats-data-row.2ndExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndExtra[index]+"</h5></div>");
    }
    if (index >= 70 && index < 79 && value !== "") {
    $(".home-team").find(".kpi-category.ten").find(".team-stats-data-row.2ndExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndExtra[index]+"</h5></a>");
    }
    if (index >= 79 && index < 82 && value == "") {
    $(".home-team").find(".kpi-category.eleven").find(".team-stats-data-row.2ndExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndExtra[index]+"</h5></div>");
    }
    if (index >= 79 && index < 82 && value !== "") {
    $(".home-team").find(".kpi-category.eleven").find(".team-stats-data-row.2ndExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndExtra[index]+"</h5></a>");
    }
    if (index >= 82 && index < 85 && value == "") {
    $(".home-team").find(".kpi-category.twelve").find(".team-stats-data-row.2ndExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndExtra[index]+"</h5></div>");
    }
    if (index >= 82 && index < 85 && value !== "") {
    $(".home-team").find(".kpi-category.twelve").find(".team-stats-data-row.2ndExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndExtra[index]+"</h5></a>");
    }
    if (index >= 85 && index < 90 && value == "") {
    $(".home-team").find(".kpi-category.thirteen").find(".team-stats-data-row.2ndExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndExtra[index]+"</h5></div>");
    }
    if (index >= 85 && index < 90 && value !== "") {
    $(".home-team").find(".kpi-category.thirteen").find(".team-stats-data-row.2ndExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndExtra[index]+"</h5></a>");
    }
    if (index >= 90 && index < 93 && value == "") {
    $(".home-team").find(".kpi-category.fourteen").find(".team-stats-data-row.2ndExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndExtra[index]+"</h5></div>");
    }
    if (index >= 90 && index < 93 && value !== "") {
    $(".home-team").find(".kpi-category.fourteen").find(".team-stats-data-row.2ndExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeam2ndExtra[index]+"</h5></a>");
    } else {
    //  block of code to be executed if the condition is false
    }
  });

  $.each(homeTeamFullGame, function(index,value){
    if (index >= 0 && index < 10) {
    $(".home-team").find(".kpi-category.one").find(".team-stats-data-row.FullGame").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamFullGame[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value == "") {
    $(".home-team").find(".kpi-category.two").find(".team-stats-data-row.FullGame").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamFullGame[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value !== "") {
    $(".home-team").find(".kpi-category.two").find(".team-stats-data-row.FullGame").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamFullGame[index]+"</h5></a>");
    }
    if (index >= 17 && index < 27 && (value == "" || value.includes('%'))) {
    $(".home-team").find(".kpi-category.three").find(".team-stats-data-row.FullGame").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamFullGame[index]+"</h5></div>");
    }
    if (index >= 17 && index < 26 && value !== "") {
    $(".home-team").find(".kpi-category.three").find(".team-stats-data-row.FullGame").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamFullGame[index]+"</h5></a>");
    }
    if (index >= 27 && index < 37 && (value == "" || value.includes('%'))) {
    $(".home-team").find(".kpi-category.four").find(".team-stats-data-row.FullGame").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamFullGame[index]+"</h5></div>");
    }
    if (index >= 27 && index < 36 && value !== "") {
    $(".home-team").find(".kpi-category.four").find(".team-stats-data-row.FullGame").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamFullGame[index]+"</h5></a>");
    }
    if (index >= 39 && index < 43) {
    $(".home-team").find(".kpi-category.five").find(".team-stats-data-row.FullGame").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamFullGame[index]+"</h5></div>");
    }
    if (index >= 37 && index < 39) {
    $(".home-team").find(".kpi-category.five").find(".team-stats-data-row.FullGame").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamFullGame[index]+"</h5></a>");
    }
    if (index >= 43 && index < 51 && value == "") {
    $(".home-team").find(".kpi-category.six").find(".team-stats-data-row.FullGame").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamFullGame[index]+"</h5></div>");
    }
    if (index >= 43 && index < 51 && value !== "") {
    $(".home-team").find(".kpi-category.six").find(".team-stats-data-row.FullGame").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamFullGame[index]+"</h5></a>");
    }
    if (index >= 51 && index < 60 && value == "") {
    $(".home-team").find(".kpi-category.seven").find(".team-stats-data-row.FullGame").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamFullGame[index]+"</h5></div>");
    }
    if (index >= 51 && index < 60 && value !== "") {
    $(".home-team").find(".kpi-category.seven").find(".team-stats-data-row.FullGame").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamFullGame[index]+"</h5></a>");
    }
    if (index >= 60 && index < 61 && value == "") {
    $(".home-team").find(".kpi-category.eight").find(".team-stats-data-row.FullGame").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamFullGame[index]+"</h5></div>");
    }
    if (index >= 60 && index < 61 && value !== "") {
    $(".home-team").find(".kpi-category.eight").find(".team-stats-data-row.FullGame").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamFullGame[index]+"</h5></a>");
    }
    if (index >= 61 && index < 70 && value == "") {
    $(".home-team").find(".kpi-category.nine").find(".team-stats-data-row.FullGame").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamFullGame[index]+"</h5></div>");
    }
    if (index >= 61 && index < 70 && value !== "") {
    $(".home-team").find(".kpi-category.nine").find(".team-stats-data-row.FullGame").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamFullGame[index]+"</h5></a>");
    }
    if (index >= 70 && index < 79 && value == "") {
    $(".home-team").find(".kpi-category.ten").find(".team-stats-data-row.FullGame").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamFullGame[index]+"</h5></div>");
    }
    if (index >= 70 && index < 79 && value !== "") {
    $(".home-team").find(".kpi-category.ten").find(".team-stats-data-row.FullGame").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamFullGame[index]+"</h5></a>");
    }
    if (index >= 79 && index < 82 && value == "") {
    $(".home-team").find(".kpi-category.eleven").find(".team-stats-data-row.FullGame").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamFullGame[index]+"</h5></div>");
    }
    if (index >= 79 && index < 82 && value !== "") {
    $(".home-team").find(".kpi-category.eleven").find(".team-stats-data-row.FullGame").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamFullGame[index]+"</h5></a>");
    }
    if (index >= 82 && index < 85 && value == "") {
    $(".home-team").find(".kpi-category.twelve").find(".team-stats-data-row.FullGame").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamFullGame[index]+"</h5></div>");
    }
    if (index >= 82 && index < 85 && value !== "") {
    $(".home-team").find(".kpi-category.twelve").find(".team-stats-data-row.FullGame").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamFullGame[index]+"</h5></a>");
    }
    if (index >= 85 && index < 90 && value == "") {
    $(".home-team").find(".kpi-category.thirteen").find(".team-stats-data-row.FullGame").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamFullGame[index]+"</h5></div>");
    }
    if (index >= 85 && index < 90 && value !== "") {
    $(".home-team").find(".kpi-category.thirteen").find(".team-stats-data-row.FullGame").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamFullGame[index]+"</h5></a>");
    }
    if (index >= 90 && index < 93 && value == "") {
    $(".home-team").find(".kpi-category.fourteen").find(".team-stats-data-row.FullGame").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamFullGame[index]+"</h5></div>");
    }
    if (index >= 90 && index < 93 && value !== "") {
    $(".home-team").find(".kpi-category.fourteen").find(".team-stats-data-row.FullGame").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamFullGame[index]+"</h5></a>");
    } else {
    //  block of code to be executed if the condition is false
    }
  });

  $.each(homeTeamByMins012, function(index,value){
    if (index >= 0 && index < 10) {
    $(".home-team").find(".kpi-category.one").find(".team-stats-data-row.0-12").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins012[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value == "") {
    $(".home-team").find(".kpi-category.two").find(".team-stats-data-row.0-12").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins012[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value !== "") {
    $(".home-team").find(".kpi-category.two").find(".team-stats-data-row.0-12").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins012[index]+"</h5></a>");
    }
    if (index >= 17 && index < 27 && (value == "" || value.includes('%'))) {
    $(".home-team").find(".kpi-category.three").find(".team-stats-data-row.0-12").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins012[index]+"</h5></div>");
    }
    if (index >= 17 && index < 26 && value !== "") {
    $(".home-team").find(".kpi-category.three").find(".team-stats-data-row.0-12").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins012[index]+"</h5></a>");
    }
    if (index >= 27 && index < 37 && (value == "" || value.includes('%'))) {
    $(".home-team").find(".kpi-category.four").find(".team-stats-data-row.0-12").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins012[index]+"</h5></div>");
    }
    if (index >= 27 && index < 36 && value !== "") {
    $(".home-team").find(".kpi-category.four").find(".team-stats-data-row.0-12").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins012[index]+"</h5></a>");
    }
    if (index >= 39 && index < 43) {
    $(".home-team").find(".kpi-category.five").find(".team-stats-data-row.0-12").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins012[index]+"</h5></div>");
    }
    if (index >= 37 && index < 39) {
    $(".home-team").find(".kpi-category.five").find(".team-stats-data-row.0-12").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins012[index]+"</h5></a>");
    }
    if (index >= 43 && index < 51 && value == "") {
    $(".home-team").find(".kpi-category.six").find(".team-stats-data-row.0-12").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins012[index]+"</h5></div>");
    }
    if (index >= 43 && index < 51 && value !== "") {
    $(".home-team").find(".kpi-category.six").find(".team-stats-data-row.0-12").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins012[index]+"</h5></a>");
    }
    if (index >= 51 && index < 60 && value == "") {
    $(".home-team").find(".kpi-category.seven").find(".team-stats-data-row.0-12").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins012[index]+"</h5></div>");
    }
    if (index >= 51 && index < 60 && value !== "") {
    $(".home-team").find(".kpi-category.seven").find(".team-stats-data-row.0-12").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins012[index]+"</h5></a>");
    }
    if (index >= 60 && index < 61 && value == "") {
    $(".home-team").find(".kpi-category.eight").find(".team-stats-data-row.0-12").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins012[index]+"</h5></div>");
    }
    if (index >= 60 && index < 61 && value !== "") {
    $(".home-team").find(".kpi-category.eight").find(".team-stats-data-row.0-12").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins012[index]+"</h5></a>");
    }
    if (index >= 61 && index < 70 && value == "") {
    $(".home-team").find(".kpi-category.nine").find(".team-stats-data-row.0-12").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins012[index]+"</h5></div>");
    }
    if (index >= 61 && index < 70 && value !== "") {
    $(".home-team").find(".kpi-category.nine").find(".team-stats-data-row.0-12").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins012[index]+"</h5></a>");
    }
    if (index >= 70 && index < 79 && value == "") {
    $(".home-team").find(".kpi-category.ten").find(".team-stats-data-row.0-12").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins012[index]+"</h5></div>");
    }
    if (index >= 70 && index < 79 && value !== "") {
    $(".home-team").find(".kpi-category.ten").find(".team-stats-data-row.0-12").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins012[index]+"</h5></a>");
    }
    if (index >= 79 && index < 82 && value == "") {
    $(".home-team").find(".kpi-category.eleven").find(".team-stats-data-row.0-12").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins012[index]+"</h5></div>");
    }
    if (index >= 79 && index < 82 && value !== "") {
    $(".home-team").find(".kpi-category.eleven").find(".team-stats-data-row.0-12").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins012[index]+"</h5></a>");
    }
    if (index >= 82 && index < 85 && value == "") {
    $(".home-team").find(".kpi-category.twelve").find(".team-stats-data-row.0-12").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins012[index]+"</h5></div>");
    }
    if (index >= 82 && index < 85 && value !== "") {
    $(".home-team").find(".kpi-category.twelve").find(".team-stats-data-row.0-12").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins012[index]+"</h5></a>");
    }
    if (index >= 85 && index < 90 && value == "") {
    $(".home-team").find(".kpi-category.thirteen").find(".team-stats-data-row.0-12").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins012[index]+"</h5></div>");
    }
    if (index >= 85 && index < 90 && value !== "") {
    $(".home-team").find(".kpi-category.thirteen").find(".team-stats-data-row.0-12").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins012[index]+"</h5></a>");
    }
    if (index >= 90 && index < 93 && value == "") {
    $(".home-team").find(".kpi-category.fourteen").find(".team-stats-data-row.0-12").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins012[index]+"</h5></div>");
    }
    if (index >= 90 && index < 93 && value !== "") {
    $(".home-team").find(".kpi-category.fourteen").find(".team-stats-data-row.0-12").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins012[index]+"</h5></a>");
    } else {
    //  block of code to be executed if the condition is false
    }
  });

  $.each(homeTeamByMins1325, function(index,value){
    if (index >= 0 && index < 10) {
    $(".home-team").find(".kpi-category.one").find(".team-stats-data-row.13-25").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins1325[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value == "") {
    $(".home-team").find(".kpi-category.two").find(".team-stats-data-row.13-25").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins1325[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value !== "") {
    $(".home-team").find(".kpi-category.two").find(".team-stats-data-row.13-25").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins1325[index]+"</h5></a>");
    }
    if (index >= 17 && index < 27 && (value == "" || value.includes('%'))) {
    $(".home-team").find(".kpi-category.three").find(".team-stats-data-row.13-25").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins1325[index]+"</h5></div>");
    }
    if (index >= 17 && index < 26 && value !== "") {
    $(".home-team").find(".kpi-category.three").find(".team-stats-data-row.13-25").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins1325[index]+"</h5></a>");
    }
    if (index >= 27 && index < 37 && (value == "" || value.includes('%'))) {
    $(".home-team").find(".kpi-category.four").find(".team-stats-data-row.13-25").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins1325[index]+"</h5></div>");
    }
    if (index >= 27 && index < 36 && value !== "") {
    $(".home-team").find(".kpi-category.four").find(".team-stats-data-row.13-25").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins1325[index]+"</h5></a>");
    }
    if (index >= 39 && index < 43) {
    $(".home-team").find(".kpi-category.five").find(".team-stats-data-row.13-25").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins1325[index]+"</h5></div>");
    }
    if (index >= 37 && index < 39) {
    $(".home-team").find(".kpi-category.five").find(".team-stats-data-row.13-25").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins1325[index]+"</h5></a>");
    }
    if (index >= 43 && index < 51 && value == "") {
    $(".home-team").find(".kpi-category.six").find(".team-stats-data-row.13-25").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins1325[index]+"</h5></div>");
    }
    if (index >= 43 && index < 51 && value !== "") {
    $(".home-team").find(".kpi-category.six").find(".team-stats-data-row.13-25").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins1325[index]+"</h5></a>");
    }
    if (index >= 51 && index < 60 && value == "") {
    $(".home-team").find(".kpi-category.seven").find(".team-stats-data-row.13-25").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins1325[index]+"</h5></div>");
    }
    if (index >= 51 && index < 60 && value !== "") {
    $(".home-team").find(".kpi-category.seven").find(".team-stats-data-row.13-25").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins1325[index]+"</h5></a>");
    }
    if (index >= 60 && index < 61 && value == "") {
    $(".home-team").find(".kpi-category.eight").find(".team-stats-data-row.13-25").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins1325[index]+"</h5></div>");
    }
    if (index >= 60 && index < 61 && value !== "") {
    $(".home-team").find(".kpi-category.eight").find(".team-stats-data-row.13-25").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins1325[index]+"</h5></a>");
    }
    if (index >= 61 && index < 70 && value == "") {
    $(".home-team").find(".kpi-category.nine").find(".team-stats-data-row.13-25").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins1325[index]+"</h5></div>");
    }
    if (index >= 61 && index < 70 && value !== "") {
    $(".home-team").find(".kpi-category.nine").find(".team-stats-data-row.13-25").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins1325[index]+"</h5></a>");
    }
    if (index >= 70 && index < 79 && value == "") {
    $(".home-team").find(".kpi-category.ten").find(".team-stats-data-row.13-25").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins1325[index]+"</h5></div>");
    }
    if (index >= 70 && index < 79 && value !== "") {
    $(".home-team").find(".kpi-category.ten").find(".team-stats-data-row.13-25").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins1325[index]+"</h5></a>");
    }
    if (index >= 79 && index < 82 && value == "") {
    $(".home-team").find(".kpi-category.eleven").find(".team-stats-data-row.13-25").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins1325[index]+"</h5></div>");
    }
    if (index >= 79 && index < 82 && value !== "") {
    $(".home-team").find(".kpi-category.eleven").find(".team-stats-data-row.13-25").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins1325[index]+"</h5></a>");
    }
    if (index >= 82 && index < 85 && value == "") {
    $(".home-team").find(".kpi-category.twelve").find(".team-stats-data-row.13-25").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins1325[index]+"</h5></div>");
    }
    if (index >= 82 && index < 85 && value !== "") {
    $(".home-team").find(".kpi-category.twelve").find(".team-stats-data-row.13-25").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins1325[index]+"</h5></a>");
    }
    if (index >= 85 && index < 90 && value == "") {
    $(".home-team").find(".kpi-category.thirteen").find(".team-stats-data-row.13-25").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins1325[index]+"</h5></div>");
    }
    if (index >= 85 && index < 90 && value !== "") {
    $(".home-team").find(".kpi-category.thirteen").find(".team-stats-data-row.13-25").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins1325[index]+"</h5></a>");
    }
    if (index >= 90 && index < 93 && value == "") {
    $(".home-team").find(".kpi-category.fourteen").find(".team-stats-data-row.13-25").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins1325[index]+"</h5></div>");
    }
    if (index >= 90 && index < 93 && value !== "") {
    $(".home-team").find(".kpi-category.fourteen").find(".team-stats-data-row.13-25").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins1325[index]+"</h5></a>");
    } else {
    //  block of code to be executed if the condition is false
    }
  });

  $.each(homeTeamByMins26half, function(index,value){
    if (index >= 0 && index < 10) {
    $(".home-team").find(".kpi-category.one").find(".team-stats-data-row.26-half").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins26half[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value == "") {
    $(".home-team").find(".kpi-category.two").find(".team-stats-data-row.26-half").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins26half[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value !== "") {
    $(".home-team").find(".kpi-category.two").find(".team-stats-data-row.26-half").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins26half[index]+"</h5></a>");
    }
    if (index >= 17 && index < 27 && (value == "" || value.includes('%'))) {
    $(".home-team").find(".kpi-category.three").find(".team-stats-data-row.26-half").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins26half[index]+"</h5></div>");
    }
    if (index >= 17 && index < 26 && value !== "") {
    $(".home-team").find(".kpi-category.three").find(".team-stats-data-row.26-half").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins26half[index]+"</h5></a>");
    }
    if (index >= 27 && index < 37 && (value == "" || value.includes('%'))) {
    $(".home-team").find(".kpi-category.four").find(".team-stats-data-row.26-half").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins26half[index]+"</h5></div>");
    }
    if (index >= 27 && index < 36 && value !== "") {
    $(".home-team").find(".kpi-category.four").find(".team-stats-data-row.26-half").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins26half[index]+"</h5></a>");
    }
    if (index >= 39 && index < 43) {
    $(".home-team").find(".kpi-category.five").find(".team-stats-data-row.26-half").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins26half[index]+"</h5></div>");
    }
    if (index >= 37 && index < 39) {
    $(".home-team").find(".kpi-category.five").find(".team-stats-data-row.26-half").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins26half[index]+"</h5></a>");
    }
    if (index >= 43 && index < 51 && value == "") {
    $(".home-team").find(".kpi-category.six").find(".team-stats-data-row.26-half").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins26half[index]+"</h5></div>");
    }
    if (index >= 43 && index < 51 && value !== "") {
    $(".home-team").find(".kpi-category.six").find(".team-stats-data-row.26-half").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins26half[index]+"</h5></a>");
    }
    if (index >= 51 && index < 60 && value == "") {
    $(".home-team").find(".kpi-category.seven").find(".team-stats-data-row.26-half").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins26half[index]+"</h5></div>");
    }
    if (index >= 51 && index < 60 && value !== "") {
    $(".home-team").find(".kpi-category.seven").find(".team-stats-data-row.26-half").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins26half[index]+"</h5></a>");
    }
    if (index >= 60 && index < 61 && value == "") {
    $(".home-team").find(".kpi-category.eight").find(".team-stats-data-row.26-half").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins26half[index]+"</h5></div>");
    }
    if (index >= 60 && index < 61 && value !== "") {
    $(".home-team").find(".kpi-category.eight").find(".team-stats-data-row.26-half").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins26half[index]+"</h5></a>");
    }
    if (index >= 61 && index < 70 && value == "") {
    $(".home-team").find(".kpi-category.nine").find(".team-stats-data-row.26-half").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins26half[index]+"</h5></div>");
    }
    if (index >= 61 && index < 70 && value !== "") {
    $(".home-team").find(".kpi-category.nine").find(".team-stats-data-row.26-half").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins26half[index]+"</h5></a>");
    }
    if (index >= 70 && index < 79 && value == "") {
    $(".home-team").find(".kpi-category.ten").find(".team-stats-data-row.26-half").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins26half[index]+"</h5></div>");
    }
    if (index >= 70 && index < 79 && value !== "") {
    $(".home-team").find(".kpi-category.ten").find(".team-stats-data-row.26-half").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins26half[index]+"</h5></a>");
    }
    if (index >= 79 && index < 82 && value == "") {
    $(".home-team").find(".kpi-category.eleven").find(".team-stats-data-row.26-half").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins26half[index]+"</h5></div>");
    }
    if (index >= 79 && index < 82 && value !== "") {
    $(".home-team").find(".kpi-category.eleven").find(".team-stats-data-row.26-half").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins26half[index]+"</h5></a>");
    }
    if (index >= 82 && index < 85 && value == "") {
    $(".home-team").find(".kpi-category.twelve").find(".team-stats-data-row.26-half").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins26half[index]+"</h5></div>");
    }
    if (index >= 82 && index < 85 && value !== "") {
    $(".home-team").find(".kpi-category.twelve").find(".team-stats-data-row.26-half").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins26half[index]+"</h5></a>");
    }
    if (index >= 85 && index < 90 && value == "") {
    $(".home-team").find(".kpi-category.thirteen").find(".team-stats-data-row.26-half").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins26half[index]+"</h5></div>");
    }
    if (index >= 85 && index < 90 && value !== "") {
    $(".home-team").find(".kpi-category.thirteen").find(".team-stats-data-row.26-half").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins26half[index]+"</h5></a>");
    }
    if (index >= 90 && index < 93 && value == "") {
    $(".home-team").find(".kpi-category.fourteen").find(".team-stats-data-row.26-half").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins26half[index]+"</h5></div>");
    }
    if (index >= 90 && index < 93 && value !== "") {
    $(".home-team").find(".kpi-category.fourteen").find(".team-stats-data-row.26-half").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins26half[index]+"</h5></a>");
    } else {
    //  block of code to be executed if the condition is false
    }
  });

  $.each(homeTeamByMins3547, function(index,value){
    if (index >= 0 && index < 10) {
    $(".home-team").find(".kpi-category.one").find(".team-stats-data-row.35-47").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins3547[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value == "") {
    $(".home-team").find(".kpi-category.two").find(".team-stats-data-row.35-47").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins3547[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value !== "") {
    $(".home-team").find(".kpi-category.two").find(".team-stats-data-row.35-47").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins3547[index]+"</h5></a>");
    }
    if (index >= 17 && index < 27 && (value == "" || value.includes('%'))) {
    $(".home-team").find(".kpi-category.three").find(".team-stats-data-row.35-47").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins3547[index]+"</h5></div>");
    }
    if (index >= 17 && index < 26 && value !== "") {
    $(".home-team").find(".kpi-category.three").find(".team-stats-data-row.35-47").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins3547[index]+"</h5></a>");
    }
    if (index >= 27 && index < 37 && (value == "" || value.includes('%'))) {
    $(".home-team").find(".kpi-category.four").find(".team-stats-data-row.35-47").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins3547[index]+"</h5></div>");
    }
    if (index >= 27 && index < 36 && value !== "") {
    $(".home-team").find(".kpi-category.four").find(".team-stats-data-row.35-47").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins3547[index]+"</h5></a>");
    }
    if (index >= 39 && index < 43) {
    $(".home-team").find(".kpi-category.five").find(".team-stats-data-row.35-47").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins3547[index]+"</h5></div>");
    }
    if (index >= 37 && index < 39) {
    $(".home-team").find(".kpi-category.five").find(".team-stats-data-row.35-47").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins3547[index]+"</h5></a>");
    }
    if (index >= 43 && index < 51 && value == "") {
    $(".home-team").find(".kpi-category.six").find(".team-stats-data-row.35-47").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins3547[index]+"</h5></div>");
    }
    if (index >= 43 && index < 51 && value !== "") {
    $(".home-team").find(".kpi-category.six").find(".team-stats-data-row.35-47").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins3547[index]+"</h5></a>");
    }
    if (index >= 51 && index < 60 && value == "") {
    $(".home-team").find(".kpi-category.seven").find(".team-stats-data-row.35-47").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins3547[index]+"</h5></div>");
    }
    if (index >= 51 && index < 60 && value !== "") {
    $(".home-team").find(".kpi-category.seven").find(".team-stats-data-row.35-47").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins3547[index]+"</h5></a>");
    }
    if (index >= 60 && index < 61 && value == "") {
    $(".home-team").find(".kpi-category.eight").find(".team-stats-data-row.35-47").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins3547[index]+"</h5></div>");
    }
    if (index >= 60 && index < 61 && value !== "") {
    $(".home-team").find(".kpi-category.eight").find(".team-stats-data-row.35-47").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins3547[index]+"</h5></a>");
    }
    if (index >= 61 && index < 70 && value == "") {
    $(".home-team").find(".kpi-category.nine").find(".team-stats-data-row.35-47").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins3547[index]+"</h5></div>");
    }
    if (index >= 61 && index < 70 && value !== "") {
    $(".home-team").find(".kpi-category.nine").find(".team-stats-data-row.35-47").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins3547[index]+"</h5></a>");
    }
    if (index >= 70 && index < 79 && value == "") {
    $(".home-team").find(".kpi-category.ten").find(".team-stats-data-row.35-47").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins3547[index]+"</h5></div>");
    }
    if (index >= 70 && index < 79 && value !== "") {
    $(".home-team").find(".kpi-category.ten").find(".team-stats-data-row.35-47").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins3547[index]+"</h5></a>");
    }
    if (index >= 79 && index < 82 && value == "") {
    $(".home-team").find(".kpi-category.eleven").find(".team-stats-data-row.35-47").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins3547[index]+"</h5></div>");
    }
    if (index >= 79 && index < 82 && value !== "") {
    $(".home-team").find(".kpi-category.eleven").find(".team-stats-data-row.35-47").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins3547[index]+"</h5></a>");
    }
    if (index >= 82 && index < 85 && value == "") {
    $(".home-team").find(".kpi-category.twelve").find(".team-stats-data-row.35-47").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins3547[index]+"</h5></div>");
    }
    if (index >= 82 && index < 85 && value !== "") {
    $(".home-team").find(".kpi-category.twelve").find(".team-stats-data-row.35-47").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins3547[index]+"</h5></a>");
    }
    if (index >= 85 && index < 90 && value == "") {
    $(".home-team").find(".kpi-category.thirteen").find(".team-stats-data-row.35-47").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins3547[index]+"</h5></div>");
    }
    if (index >= 85 && index < 90 && value !== "") {
    $(".home-team").find(".kpi-category.thirteen").find(".team-stats-data-row.35-47").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins3547[index]+"</h5></a>");
    }
    if (index >= 90 && index < 93 && value == "") {
    $(".home-team").find(".kpi-category.fourteen").find(".team-stats-data-row.35-47").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins3547[index]+"</h5></div>");
    }
    if (index >= 90 && index < 93 && value !== "") {
    $(".home-team").find(".kpi-category.fourteen").find(".team-stats-data-row.35-47").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins3547[index]+"</h5></a>");
    } else {
    //  block of code to be executed if the condition is false
    }
  });

  $.each(homeTeamByMins4860, function(index,value){
    if (index >= 0 && index < 10) {
    $(".home-team").find(".kpi-category.one").find(".team-stats-data-row.48-60").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins4860[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value == "") {
    $(".home-team").find(".kpi-category.two").find(".team-stats-data-row.48-60").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins4860[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value !== "") {
    $(".home-team").find(".kpi-category.two").find(".team-stats-data-row.48-60").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins4860[index]+"</h5></a>");
    }
    if (index >= 17 && index < 27 && (value == "" || value.includes('%'))) {
    $(".home-team").find(".kpi-category.three").find(".team-stats-data-row.48-60").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins4860[index]+"</h5></div>");
    }
    if (index >= 17 && index < 26 && value !== "") {
    $(".home-team").find(".kpi-category.three").find(".team-stats-data-row.48-60").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins4860[index]+"</h5></a>");
    }
    if (index >= 27 && index < 37 && (value == "" || value.includes('%'))) {
    $(".home-team").find(".kpi-category.four").find(".team-stats-data-row.48-60").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins4860[index]+"</h5></div>");
    }
    if (index >= 27 && index < 36 && value !== "") {
    $(".home-team").find(".kpi-category.four").find(".team-stats-data-row.48-60").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins4860[index]+"</h5></a>");
    }
    if (index >= 39 && index < 43) {
    $(".home-team").find(".kpi-category.five").find(".team-stats-data-row.48-60").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins4860[index]+"</h5></div>");
    }
    if (index >= 37 && index < 39) {
    $(".home-team").find(".kpi-category.five").find(".team-stats-data-row.48-60").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins4860[index]+"</h5></a>");
    }
    if (index >= 43 && index < 51 && value == "") {
    $(".home-team").find(".kpi-category.six").find(".team-stats-data-row.48-60").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins4860[index]+"</h5></div>");
    }
    if (index >= 43 && index < 51 && value !== "") {
    $(".home-team").find(".kpi-category.six").find(".team-stats-data-row.48-60").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins4860[index]+"</h5></a>");
    }
    if (index >= 51 && index < 60 && value == "") {
    $(".home-team").find(".kpi-category.seven").find(".team-stats-data-row.48-60").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins4860[index]+"</h5></div>");
    }
    if (index >= 51 && index < 60 && value !== "") {
    $(".home-team").find(".kpi-category.seven").find(".team-stats-data-row.48-60").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins4860[index]+"</h5></a>");
    }
    if (index >= 60 && index < 61 && value == "") {
    $(".home-team").find(".kpi-category.eight").find(".team-stats-data-row.48-60").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins4860[index]+"</h5></div>");
    }
    if (index >= 60 && index < 61 && value !== "") {
    $(".home-team").find(".kpi-category.eight").find(".team-stats-data-row.48-60").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins4860[index]+"</h5></a>");
    }
    if (index >= 61 && index < 70 && value == "") {
    $(".home-team").find(".kpi-category.nine").find(".team-stats-data-row.48-60").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins4860[index]+"</h5></div>");
    }
    if (index >= 61 && index < 70 && value !== "") {
    $(".home-team").find(".kpi-category.nine").find(".team-stats-data-row.48-60").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins4860[index]+"</h5></a>");
    }
    if (index >= 70 && index < 79 && value == "") {
    $(".home-team").find(".kpi-category.ten").find(".team-stats-data-row.48-60").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins4860[index]+"</h5></div>");
    }
    if (index >= 70 && index < 79 && value !== "") {
    $(".home-team").find(".kpi-category.ten").find(".team-stats-data-row.48-60").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins4860[index]+"</h5></a>");
    }
    if (index >= 79 && index < 82 && value == "") {
    $(".home-team").find(".kpi-category.eleven").find(".team-stats-data-row.48-60").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins4860[index]+"</h5></div>");
    }
    if (index >= 79 && index < 82 && value !== "") {
    $(".home-team").find(".kpi-category.eleven").find(".team-stats-data-row.48-60").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins4860[index]+"</h5></a>");
    }
    if (index >= 82 && index < 85 && value == "") {
    $(".home-team").find(".kpi-category.twelve").find(".team-stats-data-row.48-60").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins4860[index]+"</h5></div>");
    }
    if (index >= 82 && index < 85 && value !== "") {
    $(".home-team").find(".kpi-category.twelve").find(".team-stats-data-row.48-60").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins4860[index]+"</h5></a>");
    }
    if (index >= 85 && index < 90 && value == "") {
    $(".home-team").find(".kpi-category.thirteen").find(".team-stats-data-row.48-60").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins4860[index]+"</h5></div>");
    }
    if (index >= 85 && index < 90 && value !== "") {
    $(".home-team").find(".kpi-category.thirteen").find(".team-stats-data-row.48-60").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins4860[index]+"</h5></a>");
    }
    if (index >= 90 && index < 93 && value == "") {
    $(".home-team").find(".kpi-category.fourteen").find(".team-stats-data-row.48-60").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins4860[index]+"</h5></div>");
    }
    if (index >= 90 && index < 93 && value !== "") {
    $(".home-team").find(".kpi-category.fourteen").find(".team-stats-data-row.48-60").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins4860[index]+"</h5></a>");
    } else {
    //  block of code to be executed if the condition is false
    }
  });

  $.each(homeTeamByMins61full, function(index,value){
    if (index >= 0 && index < 10) {
    $(".home-team").find(".kpi-category.one").find(".team-stats-data-row.61-full").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins61full[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value == "") {
    $(".home-team").find(".kpi-category.two").find(".team-stats-data-row.61-full").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins61full[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value !== "") {
    $(".home-team").find(".kpi-category.two").find(".team-stats-data-row.61-full").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins61full[index]+"</h5></a>");
    }
    if (index >= 17 && index < 27 && (value == "" || value.includes('%'))) {
    $(".home-team").find(".kpi-category.three").find(".team-stats-data-row.61-full").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins61full[index]+"</h5></div>");
    }
    if (index >= 17 && index < 26 && value !== "") {
    $(".home-team").find(".kpi-category.three").find(".team-stats-data-row.61-full").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins61full[index]+"</h5></a>");
    }
    if (index >= 27 && index < 37 && (value == "" || value.includes('%'))) {
    $(".home-team").find(".kpi-category.four").find(".team-stats-data-row.61-full").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins61full[index]+"</h5></div>");
    }
    if (index >= 27 && index < 36 && value !== "") {
    $(".home-team").find(".kpi-category.four").find(".team-stats-data-row.61-full").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins61full[index]+"</h5></a>");
    }
    if (index >= 39 && index < 43) {
    $(".home-team").find(".kpi-category.five").find(".team-stats-data-row.61-full").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins61full[index]+"</h5></div>");
    }
    if (index >= 37 && index < 39) {
    $(".home-team").find(".kpi-category.five").find(".team-stats-data-row.61-full").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins61full[index]+"</h5></a>");
    }
    if (index >= 43 && index < 51 && value == "") {
    $(".home-team").find(".kpi-category.six").find(".team-stats-data-row.61-full").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins61full[index]+"</h5></div>");
    }
    if (index >= 43 && index < 51 && value !== "") {
    $(".home-team").find(".kpi-category.six").find(".team-stats-data-row.61-full").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins61full[index]+"</h5></a>");
    }
    if (index >= 51 && index < 60 && value == "") {
    $(".home-team").find(".kpi-category.seven").find(".team-stats-data-row.61-full").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins61full[index]+"</h5></div>");
    }
    if (index >= 51 && index < 60 && value !== "") {
    $(".home-team").find(".kpi-category.seven").find(".team-stats-data-row.61-full").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins61full[index]+"</h5></a>");
    }
    if (index >= 60 && index < 61 && value == "") {
    $(".home-team").find(".kpi-category.eight").find(".team-stats-data-row.61-full").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins61full[index]+"</h5></div>");
    }
    if (index >= 60 && index < 61 && value !== "") {
    $(".home-team").find(".kpi-category.eight").find(".team-stats-data-row.61-full").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins61full[index]+"</h5></a>");
    }
    if (index >= 61 && index < 70 && value == "") {
    $(".home-team").find(".kpi-category.nine").find(".team-stats-data-row.61-full").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins61full[index]+"</h5></div>");
    }
    if (index >= 61 && index < 70 && value !== "") {
    $(".home-team").find(".kpi-category.nine").find(".team-stats-data-row.61-full").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins61full[index]+"</h5></a>");
    }
    if (index >= 70 && index < 79 && value == "") {
    $(".home-team").find(".kpi-category.ten").find(".team-stats-data-row.61-full").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins61full[index]+"</h5></div>");
    }
    if (index >= 70 && index < 79 && value !== "") {
    $(".home-team").find(".kpi-category.ten").find(".team-stats-data-row.61-full").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins61full[index]+"</h5></a>");
    }
    if (index >= 79 && index < 82 && value == "") {
    $(".home-team").find(".kpi-category.eleven").find(".team-stats-data-row.61-full").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins61full[index]+"</h5></div>");
    }
    if (index >= 79 && index < 82 && value !== "") {
    $(".home-team").find(".kpi-category.eleven").find(".team-stats-data-row.61-full").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins61full[index]+"</h5></a>");
    }
    if (index >= 82 && index < 85 && value == "") {
    $(".home-team").find(".kpi-category.twelve").find(".team-stats-data-row.61-full").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins61full[index]+"</h5></div>");
    }
    if (index >= 82 && index < 85 && value !== "") {
    $(".home-team").find(".kpi-category.twelve").find(".team-stats-data-row.61-full").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins61full[index]+"</h5></a>");
    }
    if (index >= 85 && index < 90 && value == "") {
    $(".home-team").find(".kpi-category.thirteen").find(".team-stats-data-row.61-full").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins61full[index]+"</h5></div>");
    }
    if (index >= 85 && index < 90 && value !== "") {
    $(".home-team").find(".kpi-category.thirteen").find(".team-stats-data-row.61-full").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins61full[index]+"</h5></a>");
    }
    if (index >= 90 && index < 93 && value == "") {
    $(".home-team").find(".kpi-category.fourteen").find(".team-stats-data-row.61-full").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins61full[index]+"</h5></div>");
    }
    if (index >= 90 && index < 93 && value !== "") {
    $(".home-team").find(".kpi-category.fourteen").find(".team-stats-data-row.61-full").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins61full[index]+"</h5></a>");
    } else {
    //  block of code to be executed if the condition is false
    }
  });

  $.each(homeTeamByMins701stEx, function(index,value){
    if (index >= 0 && index < 10) {
    $(".home-team").find(".kpi-category.one").find(".team-stats-data-row.70-1st").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins701stEx[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value == "") {
    $(".home-team").find(".kpi-category.two").find(".team-stats-data-row.70-1st").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins701stEx[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value !== "") {
    $(".home-team").find(".kpi-category.two").find(".team-stats-data-row.70-1st").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins701stEx[index]+"</h5></a>");
    }
    if (index >= 17 && index < 27 && (value == "" || value.includes('%'))) {
    $(".home-team").find(".kpi-category.three").find(".team-stats-data-row.70-1st").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins701stEx[index]+"</h5></div>");
    }
    if (index >= 17 && index < 26 && value !== "") {
    $(".home-team").find(".kpi-category.three").find(".team-stats-data-row.70-1st").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins701stEx[index]+"</h5></a>");
    }
    if (index >= 27 && index < 37 && (value == "" || value.includes('%'))) {
    $(".home-team").find(".kpi-category.four").find(".team-stats-data-row.70-1st").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins701stEx[index]+"</h5></div>");
    }
    if (index >= 27 && index < 36 && value !== "") {
    $(".home-team").find(".kpi-category.four").find(".team-stats-data-row.70-1st").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins701stEx[index]+"</h5></a>");
    }
    if (index >= 39 && index < 43) {
    $(".home-team").find(".kpi-category.five").find(".team-stats-data-row.70-1st").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins701stEx[index]+"</h5></div>");
    }
    if (index >= 37 && index < 39) {
    $(".home-team").find(".kpi-category.five").find(".team-stats-data-row.70-1st").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins701stEx[index]+"</h5></a>");
    }
    if (index >= 43 && index < 51 && value == "") {
    $(".home-team").find(".kpi-category.six").find(".team-stats-data-row.70-1st").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins701stEx[index]+"</h5></div>");
    }
    if (index >= 43 && index < 51 && value !== "") {
    $(".home-team").find(".kpi-category.six").find(".team-stats-data-row.70-1st").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins701stEx[index]+"</h5></a>");
    }
    if (index >= 51 && index < 60 && value == "") {
    $(".home-team").find(".kpi-category.seven").find(".team-stats-data-row.70-1st").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins701stEx[index]+"</h5></div>");
    }
    if (index >= 51 && index < 60 && value !== "") {
    $(".home-team").find(".kpi-category.seven").find(".team-stats-data-row.70-1st").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins701stEx[index]+"</h5></a>");
    }
    if (index >= 60 && index < 61 && value == "") {
    $(".home-team").find(".kpi-category.eight").find(".team-stats-data-row.70-1st").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins701stEx[index]+"</h5></div>");
    }
    if (index >= 60 && index < 61 && value !== "") {
    $(".home-team").find(".kpi-category.eight").find(".team-stats-data-row.70-1st").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins701stEx[index]+"</h5></a>");
    }
    if (index >= 61 && index < 70 && value == "") {
    $(".home-team").find(".kpi-category.nine").find(".team-stats-data-row.70-1st").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins701stEx[index]+"</h5></div>");
    }
    if (index >= 61 && index < 70 && value !== "") {
    $(".home-team").find(".kpi-category.nine").find(".team-stats-data-row.70-1st").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins701stEx[index]+"</h5></a>");
    }
    if (index >= 70 && index < 79 && value == "") {
    $(".home-team").find(".kpi-category.ten").find(".team-stats-data-row.70-1st").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins701stEx[index]+"</h5></div>");
    }
    if (index >= 70 && index < 79 && value !== "") {
    $(".home-team").find(".kpi-category.ten").find(".team-stats-data-row.70-1st").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins701stEx[index]+"</h5></a>");
    }
    if (index >= 79 && index < 82 && value == "") {
    $(".home-team").find(".kpi-category.eleven").find(".team-stats-data-row.70-1st").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins701stEx[index]+"</h5></div>");
    }
    if (index >= 79 && index < 82 && value !== "") {
    $(".home-team").find(".kpi-category.eleven").find(".team-stats-data-row.70-1st").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins701stEx[index]+"</h5></a>");
    }
    if (index >= 82 && index < 85 && value == "") {
    $(".home-team").find(".kpi-category.twelve").find(".team-stats-data-row.70-1st").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins701stEx[index]+"</h5></div>");
    }
    if (index >= 82 && index < 85 && value !== "") {
    $(".home-team").find(".kpi-category.twelve").find(".team-stats-data-row.70-1st").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins701stEx[index]+"</h5></a>");
    }
    if (index >= 85 && index < 90 && value == "") {
    $(".home-team").find(".kpi-category.thirteen").find(".team-stats-data-row.70-1st").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins701stEx[index]+"</h5></div>");
    }
    if (index >= 85 && index < 90 && value !== "") {
    $(".home-team").find(".kpi-category.thirteen").find(".team-stats-data-row.70-1st").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins701stEx[index]+"</h5></a>");
    }
    if (index >= 90 && index < 93 && value == "") {
    $(".home-team").find(".kpi-category.fourteen").find(".team-stats-data-row.70-1st").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins701stEx[index]+"</h5></div>");
    }
    if (index >= 90 && index < 93 && value !== "") {
    $(".home-team").find(".kpi-category.fourteen").find(".team-stats-data-row.70-1st").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins701stEx[index]+"</h5></a>");
    } else {
    //  block of code to be executed if the condition is false
    }
  });

  $.each(homeTeamByMins802ndEx, function(index,value){
    if (index >= 0 && index < 10) {
    $(".home-team").find(".kpi-category.one").find(".team-stats-data-row.80-2nd").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins802ndEx[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value == "") {
    $(".home-team").find(".kpi-category.two").find(".team-stats-data-row.80-2nd").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins802ndEx[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value !== "") {
    $(".home-team").find(".kpi-category.two").find(".team-stats-data-row.80-2nd").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins802ndEx[index]+"</h5></a>");
    }
    if (index >= 17 && index < 27 && (value == "" || value.includes('%'))) {
    $(".home-team").find(".kpi-category.three").find(".team-stats-data-row.80-2nd").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins802ndEx[index]+"</h5></div>");
    }
    if (index >= 17 && index < 26 && value !== "") {
    $(".home-team").find(".kpi-category.three").find(".team-stats-data-row.80-2nd").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins802ndEx[index]+"</h5></a>");
    }
    if (index >= 27 && index < 37 && (value == "" || value.includes('%'))) {
    $(".home-team").find(".kpi-category.four").find(".team-stats-data-row.80-2nd").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins802ndEx[index]+"</h5></div>");
    }
    if (index >= 27 && index < 36 && value !== "") {
    $(".home-team").find(".kpi-category.four").find(".team-stats-data-row.80-2nd").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins802ndEx[index]+"</h5></a>");
    }
    if (index >= 39 && index < 43) {
    $(".home-team").find(".kpi-category.five").find(".team-stats-data-row.80-2nd").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins802ndEx[index]+"</h5></div>");
    }
    if (index >= 37 && index < 39) {
    $(".home-team").find(".kpi-category.five").find(".team-stats-data-row.80-2nd").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins802ndEx[index]+"</h5></a>");
    }
    if (index >= 43 && index < 51 && value == "") {
    $(".home-team").find(".kpi-category.six").find(".team-stats-data-row.80-2nd").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins802ndEx[index]+"</h5></div>");
    }
    if (index >= 43 && index < 51 && value !== "") {
    $(".home-team").find(".kpi-category.six").find(".team-stats-data-row.80-2nd").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins802ndEx[index]+"</h5></a>");
    }
    if (index >= 51 && index < 60 && value == "") {
    $(".home-team").find(".kpi-category.seven").find(".team-stats-data-row.80-2nd").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins802ndEx[index]+"</h5></div>");
    }
    if (index >= 51 && index < 60 && value !== "") {
    $(".home-team").find(".kpi-category.seven").find(".team-stats-data-row.80-2nd").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins802ndEx[index]+"</h5></a>");
    }
    if (index >= 60 && index < 61 && value == "") {
    $(".home-team").find(".kpi-category.eight").find(".team-stats-data-row.80-2nd").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins802ndEx[index]+"</h5></div>");
    }
    if (index >= 60 && index < 61 && value !== "") {
    $(".home-team").find(".kpi-category.eight").find(".team-stats-data-row.80-2nd").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins802ndEx[index]+"</h5></a>");
    }
    if (index >= 61 && index < 70 && value == "") {
    $(".home-team").find(".kpi-category.nine").find(".team-stats-data-row.80-2nd").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins802ndEx[index]+"</h5></div>");
    }
    if (index >= 61 && index < 70 && value !== "") {
    $(".home-team").find(".kpi-category.nine").find(".team-stats-data-row.80-2nd").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins802ndEx[index]+"</h5></a>");
    }
    if (index >= 70 && index < 79 && value == "") {
    $(".home-team").find(".kpi-category.ten").find(".team-stats-data-row.80-2nd").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins802ndEx[index]+"</h5></div>");
    }
    if (index >= 70 && index < 79 && value !== "") {
    $(".home-team").find(".kpi-category.ten").find(".team-stats-data-row.80-2nd").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins802ndEx[index]+"</h5></a>");
    }
    if (index >= 79 && index < 82 && value == "") {
    $(".home-team").find(".kpi-category.eleven").find(".team-stats-data-row.80-2nd").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins802ndEx[index]+"</h5></div>");
    }
    if (index >= 79 && index < 82 && value !== "") {
    $(".home-team").find(".kpi-category.eleven").find(".team-stats-data-row.80-2nd").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins802ndEx[index]+"</h5></a>");
    }
    if (index >= 82 && index < 85 && value == "") {
    $(".home-team").find(".kpi-category.twelve").find(".team-stats-data-row.80-2nd").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins802ndEx[index]+"</h5></div>");
    }
    if (index >= 82 && index < 85 && value !== "") {
    $(".home-team").find(".kpi-category.twelve").find(".team-stats-data-row.80-2nd").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins802ndEx[index]+"</h5></a>");
    }
    if (index >= 85 && index < 90 && value == "") {
    $(".home-team").find(".kpi-category.thirteen").find(".team-stats-data-row.80-2nd").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins802ndEx[index]+"</h5></div>");
    }
    if (index >= 85 && index < 90 && value !== "") {
    $(".home-team").find(".kpi-category.thirteen").find(".team-stats-data-row.80-2nd").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins802ndEx[index]+"</h5></a>");
    }
    if (index >= 90 && index < 93 && value == "") {
    $(".home-team").find(".kpi-category.fourteen").find(".team-stats-data-row.80-2nd").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins802ndEx[index]+"</h5></div>");
    }
    if (index >= 90 && index < 93 && value !== "") {
    $(".home-team").find(".kpi-category.fourteen").find(".team-stats-data-row.80-2nd").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+homeTeamByMins802ndEx[index]+"</h5></a>");
    } else {
    //  block of code to be executed if the condition is false
    }
  });

  $.each(awayTeam1stHalf, function(index,value){
  if (index >= 0 && index < 10) {
  $(".away-team").find(".kpi-category.one").find(".team-stats-data-row.1stHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stHalf[index]+"</h5></div>");
  }
  if (index >= 10 && index < 17 && value == "") {
  $(".away-team").find(".kpi-category.two").find(".team-stats-data-row.1stHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stHalf[index]+"</h5></div>");
  }
  if (index >= 10 && index < 17 && value !== "") {
  $(".away-team").find(".kpi-category.two").find(".team-stats-data-row.1stHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stHalf[index]+"</h5></a>");
  }
  if (index >= 17 && index < 27 && (value == "" || value.includes('%'))) {
  $(".away-team").find(".kpi-category.three").find(".team-stats-data-row.1stHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stHalf[index]+"</h5></div>");
  }
  if (index >= 17 && index < 26 && value !== "") {
  $(".away-team").find(".kpi-category.three").find(".team-stats-data-row.1stHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stHalf[index]+"</h5></a>");
  }
  if (index >= 27 && index < 37 && (value == "" || value.includes('%'))) {
  $(".away-team").find(".kpi-category.four").find(".team-stats-data-row.1stHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stHalf[index]+"</h5></div>");
  }
  if (index >= 27 && index < 36 && value !== "") {
  $(".away-team").find(".kpi-category.four").find(".team-stats-data-row.1stHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stHalf[index]+"</h5></a>");
  }
  if (index >= 39 && index < 43) {
  $(".away-team").find(".kpi-category.five").find(".team-stats-data-row.1stHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stHalf[index]+"</h5></div>");
  }
  if (index >= 37 && index < 39) {
  $(".away-team").find(".kpi-category.five").find(".team-stats-data-row.1stHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stHalf[index]+"</h5></a>");
  }
  if (index >= 43 && index < 51 && value == "") {
  $(".away-team").find(".kpi-category.six").find(".team-stats-data-row.1stHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stHalf[index]+"</h5></div>");
  }
  if (index >= 43 && index < 51 && value !== "") {
  $(".away-team").find(".kpi-category.six").find(".team-stats-data-row.1stHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stHalf[index]+"</h5></a>");
  }
  if (index >= 51 && index < 60 && value == "") {
  $(".away-team").find(".kpi-category.seven").find(".team-stats-data-row.1stHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stHalf[index]+"</h5></div>");
  }
  if (index >= 51 && index < 60 && value !== "") {
  $(".away-team").find(".kpi-category.seven").find(".team-stats-data-row.1stHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stHalf[index]+"</h5></a>");
  }
  if (index >= 60 && index < 61 && value == "") {
  $(".away-team").find(".kpi-category.eight").find(".team-stats-data-row.1stHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stHalf[index]+"</h5></div>");
  }
  if (index >= 60 && index < 61 && value !== "") {
  $(".away-team").find(".kpi-category.eight").find(".team-stats-data-row.1stHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stHalf[index]+"</h5></a>");
  }
  if (index >= 61 && index < 70 && value == "") {
  $(".away-team").find(".kpi-category.nine").find(".team-stats-data-row.1stHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stHalf[index]+"</h5></div>");
  }
  if (index >= 61 && index < 70 && value !== "") {
  $(".away-team").find(".kpi-category.nine").find(".team-stats-data-row.1stHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stHalf[index]+"</h5></a>");
  }
  if (index >= 70 && index < 79 && value == "") {
  $(".away-team").find(".kpi-category.ten").find(".team-stats-data-row.1stHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stHalf[index]+"</h5></div>");
  }
  if (index >= 70 && index < 79 && value !== "") {
  $(".away-team").find(".kpi-category.ten").find(".team-stats-data-row.1stHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stHalf[index]+"</h5></a>");
  }
  if (index >= 79 && index < 82 && value == "") {
  $(".away-team").find(".kpi-category.eleven").find(".team-stats-data-row.1stHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stHalf[index]+"</h5></div>");
  }
  if (index >= 79 && index < 82 && value !== "") {
  $(".away-team").find(".kpi-category.eleven").find(".team-stats-data-row.1stHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stHalf[index]+"</h5></a>");
  }
  if (index >= 82 && index < 85 && value == "") {
  $(".away-team").find(".kpi-category.twelve").find(".team-stats-data-row.1stHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stHalf[index]+"</h5></div>");
  }
  if (index >= 82 && index < 85 && value !== "") {
  $(".away-team").find(".kpi-category.twelve").find(".team-stats-data-row.1stHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stHalf[index]+"</h5></a>");
  }
  if (index >= 85 && index < 90 && value == "") {
  $(".away-team").find(".kpi-category.thirteen").find(".team-stats-data-row.1stHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stHalf[index]+"</h5></div>");
  }
  if (index >= 85 && index < 90 && value !== "") {
  $(".away-team").find(".kpi-category.thirteen").find(".team-stats-data-row.1stHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stHalf[index]+"</h5></a>");
  }
  if (index >= 90 && index < 93 && value == "") {
  $(".away-team").find(".kpi-category.fourteen").find(".team-stats-data-row.1stHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stHalf[index]+"</h5></div>");
  }
  if (index >= 90 && index < 93 && value !== "") {
  $(".away-team").find(".kpi-category.fourteen").find(".team-stats-data-row.1stHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stHalf[index]+"</h5></a>");
  } else {
  //  block of code to be executed if the condition is false
  }
  });

  $.each(awayTeam2ndHalf, function(index,value){
    if (index >= 0 && index < 10) {
    $(".away-team").find(".kpi-category.one").find(".team-stats-data-row.2ndHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndHalf[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value == "") {
    $(".away-team").find(".kpi-category.two").find(".team-stats-data-row.2ndHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndHalf[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value !== "") {
    $(".away-team").find(".kpi-category.two").find(".team-stats-data-row.2ndHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndHalf[index]+"</h5></a>");
    }
    if (index >= 17 && index < 27 && (value == "" || value.includes('%'))) {
    $(".away-team").find(".kpi-category.three").find(".team-stats-data-row.2ndHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndHalf[index]+"</h5></div>");
    }
    if (index >= 17 && index < 26 && value !== "") {
    $(".away-team").find(".kpi-category.three").find(".team-stats-data-row.2ndHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndHalf[index]+"</h5></a>");
    }
    if (index >= 27 && index < 37 && (value == "" || value.includes('%'))) {
    $(".away-team").find(".kpi-category.four").find(".team-stats-data-row.2ndHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndHalf[index]+"</h5></div>");
    }
    if (index >= 27 && index < 36 && value !== "") {
    $(".away-team").find(".kpi-category.four").find(".team-stats-data-row.2ndHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndHalf[index]+"</h5></a>");
    }
    if (index >= 39 && index < 43) {
    $(".away-team").find(".kpi-category.five").find(".team-stats-data-row.2ndHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndHalf[index]+"</h5></div>");
    }
    if (index >= 37 && index < 39) {
    $(".away-team").find(".kpi-category.five").find(".team-stats-data-row.2ndHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndHalf[index]+"</h5></a>");
    }
    if (index >= 43 && index < 51 && value == "") {
    $(".away-team").find(".kpi-category.six").find(".team-stats-data-row.2ndHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndHalf[index]+"</h5></div>");
    }
    if (index >= 43 && index < 51 && value !== "") {
    $(".away-team").find(".kpi-category.six").find(".team-stats-data-row.2ndHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndHalf[index]+"</h5></a>");
    }
    if (index >= 51 && index < 60 && value == "") {
    $(".away-team").find(".kpi-category.seven").find(".team-stats-data-row.2ndHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndHalf[index]+"</h5></div>");
    }
    if (index >= 51 && index < 60 && value !== "") {
    $(".away-team").find(".kpi-category.seven").find(".team-stats-data-row.2ndHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndHalf[index]+"</h5></a>");
    }
    if (index >= 60 && index < 61 && value == "") {
    $(".away-team").find(".kpi-category.eight").find(".team-stats-data-row.2ndHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndHalf[index]+"</h5></div>");
    }
    if (index >= 60 && index < 61 && value !== "") {
    $(".away-team").find(".kpi-category.eight").find(".team-stats-data-row.2ndHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndHalf[index]+"</h5></a>");
    }
    if (index >= 61 && index < 70 && value == "") {
    $(".away-team").find(".kpi-category.nine").find(".team-stats-data-row.2ndHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndHalf[index]+"</h5></div>");
    }
    if (index >= 61 && index < 70 && value !== "") {
    $(".away-team").find(".kpi-category.nine").find(".team-stats-data-row.2ndHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndHalf[index]+"</h5></a>");
    }
    if (index >= 70 && index < 79 && value == "") {
    $(".away-team").find(".kpi-category.ten").find(".team-stats-data-row.2ndHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndHalf[index]+"</h5></div>");
    }
    if (index >= 70 && index < 79 && value !== "") {
    $(".away-team").find(".kpi-category.ten").find(".team-stats-data-row.2ndHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndHalf[index]+"</h5></a>");
    }
    if (index >= 79 && index < 82 && value == "") {
    $(".away-team").find(".kpi-category.eleven").find(".team-stats-data-row.2ndHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndHalf[index]+"</h5></div>");
    }
    if (index >= 79 && index < 82 && value !== "") {
    $(".away-team").find(".kpi-category.eleven").find(".team-stats-data-row.2ndHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndHalf[index]+"</h5></a>");
    }
    if (index >= 82 && index < 85 && value == "") {
    $(".away-team").find(".kpi-category.twelve").find(".team-stats-data-row.2ndHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndHalf[index]+"</h5></div>");
    }
    if (index >= 82 && index < 85 && value !== "") {
    $(".away-team").find(".kpi-category.twelve").find(".team-stats-data-row.2ndHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndHalf[index]+"</h5></a>");
    }
    if (index >= 85 && index < 90 && value == "") {
    $(".away-team").find(".kpi-category.thirteen").find(".team-stats-data-row.2ndHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndHalf[index]+"</h5></div>");
    }
    if (index >= 85 && index < 90 && value !== "") {
    $(".away-team").find(".kpi-category.thirteen").find(".team-stats-data-row.2ndHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndHalf[index]+"</h5></a>");
    }
    if (index >= 90 && index < 93 && value == "") {
    $(".away-team").find(".kpi-category.fourteen").find(".team-stats-data-row.2ndHalf").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndHalf[index]+"</h5></div>");
    }
    if (index >= 90 && index < 93 && value !== "") {
    $(".away-team").find(".kpi-category.fourteen").find(".team-stats-data-row.2ndHalf").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndHalf[index]+"</h5></a>");
    } else {
    //  block of code to be executed if the condition is false
    }
  });

  $.each(awayTeam1stExtra, function(index,value){
    if (index >= 0 && index < 10) {
    $(".away-team").find(".kpi-category.one").find(".team-stats-data-row.1stExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stExtra[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value == "") {
    $(".away-team").find(".kpi-category.two").find(".team-stats-data-row.1stExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stExtra[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value !== "") {
    $(".away-team").find(".kpi-category.two").find(".team-stats-data-row.1stExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stExtra[index]+"</h5></a>");
    }
    if (index >= 17 && index < 27 && (value == "" || value.includes('%'))) {
    $(".away-team").find(".kpi-category.three").find(".team-stats-data-row.1stExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stExtra[index]+"</h5></div>");
    }
    if (index >= 17 && index < 26 && value !== "") {
    $(".away-team").find(".kpi-category.three").find(".team-stats-data-row.1stExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stExtra[index]+"</h5></a>");
    }
    if (index >= 27 && index < 37 && (value == "" || value.includes('%'))) {
    $(".away-team").find(".kpi-category.four").find(".team-stats-data-row.1stExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stExtra[index]+"</h5></div>");
    }
    if (index >= 27 && index < 36 && value !== "") {
    $(".away-team").find(".kpi-category.four").find(".team-stats-data-row.1stExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stExtra[index]+"</h5></a>");
    }
    if (index >= 39 && index < 43) {
    $(".away-team").find(".kpi-category.five").find(".team-stats-data-row.1stExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stExtra[index]+"</h5></div>");
    }
    if (index >= 37 && index < 39) {
    $(".away-team").find(".kpi-category.five").find(".team-stats-data-row.1stExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stExtra[index]+"</h5></a>");
    }
    if (index >= 43 && index < 51 && value == "") {
    $(".away-team").find(".kpi-category.six").find(".team-stats-data-row.1stExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stExtra[index]+"</h5></div>");
    }
    if (index >= 43 && index < 51 && value !== "") {
    $(".away-team").find(".kpi-category.six").find(".team-stats-data-row.1stExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stExtra[index]+"</h5></a>");
    }
    if (index >= 51 && index < 60 && value == "") {
    $(".away-team").find(".kpi-category.seven").find(".team-stats-data-row.1stExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stExtra[index]+"</h5></div>");
    }
    if (index >= 51 && index < 60 && value !== "") {
    $(".away-team").find(".kpi-category.seven").find(".team-stats-data-row.1stExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stExtra[index]+"</h5></a>");
    }
    if (index >= 60 && index < 61 && value == "") {
    $(".away-team").find(".kpi-category.eight").find(".team-stats-data-row.1stExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stExtra[index]+"</h5></div>");
    }
    if (index >= 60 && index < 61 && value !== "") {
    $(".away-team").find(".kpi-category.eight").find(".team-stats-data-row.1stExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stExtra[index]+"</h5></a>");
    }
    if (index >= 61 && index < 70 && value == "") {
    $(".away-team").find(".kpi-category.nine").find(".team-stats-data-row.1stExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stExtra[index]+"</h5></div>");
    }
    if (index >= 61 && index < 70 && value !== "") {
    $(".away-team").find(".kpi-category.nine").find(".team-stats-data-row.1stExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stExtra[index]+"</h5></a>");
    }
    if (index >= 70 && index < 79 && value == "") {
    $(".away-team").find(".kpi-category.ten").find(".team-stats-data-row.1stExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stExtra[index]+"</h5></div>");
    }
    if (index >= 70 && index < 79 && value !== "") {
    $(".away-team").find(".kpi-category.ten").find(".team-stats-data-row.1stExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stExtra[index]+"</h5></a>");
    }
    if (index >= 79 && index < 82 && value == "") {
    $(".away-team").find(".kpi-category.eleven").find(".team-stats-data-row.1stExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stExtra[index]+"</h5></div>");
    }
    if (index >= 79 && index < 82 && value !== "") {
    $(".away-team").find(".kpi-category.eleven").find(".team-stats-data-row.1stExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stExtra[index]+"</h5></a>");
    }
    if (index >= 82 && index < 85 && value == "") {
    $(".away-team").find(".kpi-category.twelve").find(".team-stats-data-row.1stExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stExtra[index]+"</h5></div>");
    }
    if (index >= 82 && index < 85 && value !== "") {
    $(".away-team").find(".kpi-category.twelve").find(".team-stats-data-row.1stExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stExtra[index]+"</h5></a>");
    }
    if (index >= 85 && index < 90 && value == "") {
    $(".away-team").find(".kpi-category.thirteen").find(".team-stats-data-row.1stExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stExtra[index]+"</h5></div>");
    }
    if (index >= 85 && index < 90 && value !== "") {
    $(".away-team").find(".kpi-category.thirteen").find(".team-stats-data-row.1stExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stExtra[index]+"</h5></a>");
    }
    if (index >= 90 && index < 93 && value == "") {
    $(".away-team").find(".kpi-category.fourteen").find(".team-stats-data-row.1stExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stExtra[index]+"</h5></div>");
    }
    if (index >= 90 && index < 93 && value !== "") {
    $(".away-team").find(".kpi-category.fourteen").find(".team-stats-data-row.1stExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam1stExtra[index]+"</h5></a>");
    } else {
    //  block of code to be executed if the condition is false
    }
  });

  $.each(awayTeam2ndExtra, function(index,value){
    if (index >= 0 && index < 10) {
    $(".away-team").find(".kpi-category.one").find(".team-stats-data-row.2ndExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndExtra[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value == "") {
    $(".away-team").find(".kpi-category.two").find(".team-stats-data-row.2ndExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndExtra[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value !== "") {
    $(".away-team").find(".kpi-category.two").find(".team-stats-data-row.2ndExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndExtra[index]+"</h5></a>");
    }
    if (index >= 17 && index < 27 && (value == "" || value.includes('%'))) {
    $(".away-team").find(".kpi-category.three").find(".team-stats-data-row.2ndExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndExtra[index]+"</h5></div>");
    }
    if (index >= 17 && index < 26 && value !== "") {
    $(".away-team").find(".kpi-category.three").find(".team-stats-data-row.2ndExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndExtra[index]+"</h5></a>");
    }
    if (index >= 27 && index < 37 && (value == "" || value.includes('%'))) {
    $(".away-team").find(".kpi-category.four").find(".team-stats-data-row.2ndExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndExtra[index]+"</h5></div>");
    }
    if (index >= 27 && index < 36 && value !== "") {
    $(".away-team").find(".kpi-category.four").find(".team-stats-data-row.2ndExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndExtra[index]+"</h5></a>");
    }
    if (index >= 39 && index < 43) {
    $(".away-team").find(".kpi-category.five").find(".team-stats-data-row.2ndExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndExtra[index]+"</h5></div>");
    }
    if (index >= 37 && index < 39) {
    $(".away-team").find(".kpi-category.five").find(".team-stats-data-row.2ndExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndExtra[index]+"</h5></a>");
    }
    if (index >= 43 && index < 51 && value == "") {
    $(".away-team").find(".kpi-category.six").find(".team-stats-data-row.2ndExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndExtra[index]+"</h5></div>");
    }
    if (index >= 43 && index < 51 && value !== "") {
    $(".away-team").find(".kpi-category.six").find(".team-stats-data-row.2ndExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndExtra[index]+"</h5></a>");
    }
    if (index >= 51 && index < 60 && value == "") {
    $(".away-team").find(".kpi-category.seven").find(".team-stats-data-row.2ndExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndExtra[index]+"</h5></div>");
    }
    if (index >= 51 && index < 60 && value !== "") {
    $(".away-team").find(".kpi-category.seven").find(".team-stats-data-row.2ndExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndExtra[index]+"</h5></a>");
    }
    if (index >= 60 && index < 61 && value == "") {
    $(".away-team").find(".kpi-category.eight").find(".team-stats-data-row.2ndExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndExtra[index]+"</h5></div>");
    }
    if (index >= 60 && index < 61 && value !== "") {
    $(".away-team").find(".kpi-category.eight").find(".team-stats-data-row.2ndExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndExtra[index]+"</h5></a>");
    }
    if (index >= 61 && index < 70 && value == "") {
    $(".away-team").find(".kpi-category.nine").find(".team-stats-data-row.2ndExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndExtra[index]+"</h5></div>");
    }
    if (index >= 61 && index < 70 && value !== "") {
    $(".away-team").find(".kpi-category.nine").find(".team-stats-data-row.2ndExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndExtra[index]+"</h5></a>");
    }
    if (index >= 70 && index < 79 && value == "") {
    $(".away-team").find(".kpi-category.ten").find(".team-stats-data-row.2ndExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndExtra[index]+"</h5></div>");
    }
    if (index >= 70 && index < 79 && value !== "") {
    $(".away-team").find(".kpi-category.ten").find(".team-stats-data-row.2ndExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndExtra[index]+"</h5></a>");
    }
    if (index >= 79 && index < 82 && value == "") {
    $(".away-team").find(".kpi-category.eleven").find(".team-stats-data-row.2ndExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndExtra[index]+"</h5></div>");
    }
    if (index >= 79 && index < 82 && value !== "") {
    $(".away-team").find(".kpi-category.eleven").find(".team-stats-data-row.2ndExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndExtra[index]+"</h5></a>");
    }
    if (index >= 82 && index < 85 && value == "") {
    $(".away-team").find(".kpi-category.twelve").find(".team-stats-data-row.2ndExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndExtra[index]+"</h5></div>");
    }
    if (index >= 82 && index < 85 && value !== "") {
    $(".away-team").find(".kpi-category.twelve").find(".team-stats-data-row.2ndExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndExtra[index]+"</h5></a>");
    }
    if (index >= 85 && index < 90 && value == "") {
    $(".away-team").find(".kpi-category.thirteen").find(".team-stats-data-row.2ndExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndExtra[index]+"</h5></div>");
    }
    if (index >= 85 && index < 90 && value !== "") {
    $(".away-team").find(".kpi-category.thirteen").find(".team-stats-data-row.2ndExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndExtra[index]+"</h5></a>");
    }
    if (index >= 90 && index < 93 && value == "") {
    $(".away-team").find(".kpi-category.fourteen").find(".team-stats-data-row.2ndExtra").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndExtra[index]+"</h5></div>");
    }
    if (index >= 90 && index < 93 && value !== "") {
    $(".away-team").find(".kpi-category.fourteen").find(".team-stats-data-row.2ndExtra").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeam2ndExtra[index]+"</h5></a>");
    } else {
    //  block of code to be executed if the condition is false
    }
  });

  $.each(awayTeamFullGame, function(index,value){
    if (index >= 0 && index < 10) {
    $(".away-team").find(".kpi-category.one").find(".team-stats-data-row.FullGame").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamFullGame[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value == "") {
    $(".away-team").find(".kpi-category.two").find(".team-stats-data-row.FullGame").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamFullGame[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value !== "") {
    $(".away-team").find(".kpi-category.two").find(".team-stats-data-row.FullGame").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamFullGame[index]+"</h5></a>");
    }
    if (index >= 17 && index < 27 && (value == "" || value.includes('%'))) {
    $(".away-team").find(".kpi-category.three").find(".team-stats-data-row.FullGame").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamFullGame[index]+"</h5></div>");
    }
    if (index >= 17 && index < 26 && value !== "") {
    $(".away-team").find(".kpi-category.three").find(".team-stats-data-row.FullGame").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamFullGame[index]+"</h5></a>");
    }
    if (index >= 27 && index < 37 && (value == "" || value.includes('%'))) {
    $(".away-team").find(".kpi-category.four").find(".team-stats-data-row.FullGame").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamFullGame[index]+"</h5></div>");
    }
    if (index >= 27 && index < 36 && value !== "") {
    $(".away-team").find(".kpi-category.four").find(".team-stats-data-row.FullGame").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamFullGame[index]+"</h5></a>");
    }
    if (index >= 39 && index < 43) {
    $(".away-team").find(".kpi-category.five").find(".team-stats-data-row.FullGame").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamFullGame[index]+"</h5></div>");
    }
    if (index >= 37 && index < 39) {
    $(".away-team").find(".kpi-category.five").find(".team-stats-data-row.FullGame").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamFullGame[index]+"</h5></a>");
    }
    if (index >= 43 && index < 51 && value == "") {
    $(".away-team").find(".kpi-category.six").find(".team-stats-data-row.FullGame").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamFullGame[index]+"</h5></div>");
    }
    if (index >= 43 && index < 51 && value !== "") {
    $(".away-team").find(".kpi-category.six").find(".team-stats-data-row.FullGame").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamFullGame[index]+"</h5></a>");
    }
    if (index >= 51 && index < 60 && value == "") {
    $(".away-team").find(".kpi-category.seven").find(".team-stats-data-row.FullGame").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamFullGame[index]+"</h5></div>");
    }
    if (index >= 51 && index < 60 && value !== "") {
    $(".away-team").find(".kpi-category.seven").find(".team-stats-data-row.FullGame").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamFullGame[index]+"</h5></a>");
    }
    if (index >= 60 && index < 61 && value == "") {
    $(".away-team").find(".kpi-category.eight").find(".team-stats-data-row.FullGame").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamFullGame[index]+"</h5></div>");
    }
    if (index >= 60 && index < 61 && value !== "") {
    $(".away-team").find(".kpi-category.eight").find(".team-stats-data-row.FullGame").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamFullGame[index]+"</h5></a>");
    }
    if (index >= 61 && index < 70 && value == "") {
    $(".away-team").find(".kpi-category.nine").find(".team-stats-data-row.FullGame").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamFullGame[index]+"</h5></div>");
    }
    if (index >= 61 && index < 70 && value !== "") {
    $(".away-team").find(".kpi-category.nine").find(".team-stats-data-row.FullGame").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamFullGame[index]+"</h5></a>");
    }
    if (index >= 70 && index < 79 && value == "") {
    $(".away-team").find(".kpi-category.ten").find(".team-stats-data-row.FullGame").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamFullGame[index]+"</h5></div>");
    }
    if (index >= 70 && index < 79 && value !== "") {
    $(".away-team").find(".kpi-category.ten").find(".team-stats-data-row.FullGame").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamFullGame[index]+"</h5></a>");
    }
    if (index >= 79 && index < 82 && value == "") {
    $(".away-team").find(".kpi-category.eleven").find(".team-stats-data-row.FullGame").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamFullGame[index]+"</h5></div>");
    }
    if (index >= 79 && index < 82 && value !== "") {
    $(".away-team").find(".kpi-category.eleven").find(".team-stats-data-row.FullGame").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamFullGame[index]+"</h5></a>");
    }
    if (index >= 82 && index < 85 && value == "") {
    $(".away-team").find(".kpi-category.twelve").find(".team-stats-data-row.FullGame").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamFullGame[index]+"</h5></div>");
    }
    if (index >= 82 && index < 85 && value !== "") {
    $(".away-team").find(".kpi-category.twelve").find(".team-stats-data-row.FullGame").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamFullGame[index]+"</h5></a>");
    }
    if (index >= 85 && index < 90 && value == "") {
    $(".away-team").find(".kpi-category.thirteen").find(".team-stats-data-row.FullGame").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamFullGame[index]+"</h5></div>");
    }
    if (index >= 85 && index < 90 && value !== "") {
    $(".away-team").find(".kpi-category.thirteen").find(".team-stats-data-row.FullGame").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamFullGame[index]+"</h5></a>");
    }
    if (index >= 90 && index < 93 && value == "") {
    $(".away-team").find(".kpi-category.fourteen").find(".team-stats-data-row.FullGame").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamFullGame[index]+"</h5></div>");
    }
    if (index >= 90 && index < 93 && value !== "") {
    $(".away-team").find(".kpi-category.fourteen").find(".team-stats-data-row.FullGame").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamFullGame[index]+"</h5></a>");
    } else {
    //  block of code to be executed if the condition is false
    }
  });

  $.each(awayTeamByMins012, function(index,value){
    if (index >= 0 && index < 10) {
    $(".away-team").find(".kpi-category.one").find(".team-stats-data-row.0-12").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins012[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value == "") {
    $(".away-team").find(".kpi-category.two").find(".team-stats-data-row.0-12").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins012[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value !== "") {
    $(".away-team").find(".kpi-category.two").find(".team-stats-data-row.0-12").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins012[index]+"</h5></a>");
    }
    if (index >= 17 && index < 27 && (value == "" || value.includes('%'))) {
    $(".away-team").find(".kpi-category.three").find(".team-stats-data-row.0-12").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins012[index]+"</h5></div>");
    }
    if (index >= 17 && index < 26 && value !== "") {
    $(".away-team").find(".kpi-category.three").find(".team-stats-data-row.0-12").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins012[index]+"</h5></a>");
    }
    if (index >= 27 && index < 37 && (value == "" || value.includes('%'))) {
    $(".away-team").find(".kpi-category.four").find(".team-stats-data-row.0-12").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins012[index]+"</h5></div>");
    }
    if (index >= 27 && index < 36 && value !== "") {
    $(".away-team").find(".kpi-category.four").find(".team-stats-data-row.0-12").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins012[index]+"</h5></a>");
    }
    if (index >= 39 && index < 43) {
    $(".away-team").find(".kpi-category.five").find(".team-stats-data-row.0-12").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins012[index]+"</h5></div>");
    }
    if (index >= 37 && index < 39) {
    $(".away-team").find(".kpi-category.five").find(".team-stats-data-row.0-12").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins012[index]+"</h5></a>");
    }
    if (index >= 43 && index < 51 && value == "") {
    $(".away-team").find(".kpi-category.six").find(".team-stats-data-row.0-12").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins012[index]+"</h5></div>");
    }
    if (index >= 43 && index < 51 && value !== "") {
    $(".away-team").find(".kpi-category.six").find(".team-stats-data-row.0-12").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins012[index]+"</h5></a>");
    }
    if (index >= 51 && index < 60 && value == "") {
    $(".away-team").find(".kpi-category.seven").find(".team-stats-data-row.0-12").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins012[index]+"</h5></div>");
    }
    if (index >= 51 && index < 60 && value !== "") {
    $(".away-team").find(".kpi-category.seven").find(".team-stats-data-row.0-12").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins012[index]+"</h5></a>");
    }
    if (index >= 60 && index < 61 && value == "") {
    $(".away-team").find(".kpi-category.eight").find(".team-stats-data-row.0-12").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins012[index]+"</h5></div>");
    }
    if (index >= 60 && index < 61 && value !== "") {
    $(".away-team").find(".kpi-category.eight").find(".team-stats-data-row.0-12").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins012[index]+"</h5></a>");
    }
    if (index >= 61 && index < 70 && value == "") {
    $(".away-team").find(".kpi-category.nine").find(".team-stats-data-row.0-12").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins012[index]+"</h5></div>");
    }
    if (index >= 61 && index < 70 && value !== "") {
    $(".away-team").find(".kpi-category.nine").find(".team-stats-data-row.0-12").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins012[index]+"</h5></a>");
    }
    if (index >= 70 && index < 79 && value == "") {
    $(".away-team").find(".kpi-category.ten").find(".team-stats-data-row.0-12").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins012[index]+"</h5></div>");
    }
    if (index >= 70 && index < 79 && value !== "") {
    $(".away-team").find(".kpi-category.ten").find(".team-stats-data-row.0-12").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins012[index]+"</h5></a>");
    }
    if (index >= 79 && index < 82 && value == "") {
    $(".away-team").find(".kpi-category.eleven").find(".team-stats-data-row.0-12").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins012[index]+"</h5></div>");
    }
    if (index >= 79 && index < 82 && value !== "") {
    $(".away-team").find(".kpi-category.eleven").find(".team-stats-data-row.0-12").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins012[index]+"</h5></a>");
    }
    if (index >= 82 && index < 85 && value == "") {
    $(".away-team").find(".kpi-category.twelve").find(".team-stats-data-row.0-12").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins012[index]+"</h5></div>");
    }
    if (index >= 82 && index < 85 && value !== "") {
    $(".away-team").find(".kpi-category.twelve").find(".team-stats-data-row.0-12").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins012[index]+"</h5></a>");
    }
    if (index >= 85 && index < 90 && value == "") {
    $(".away-team").find(".kpi-category.thirteen").find(".team-stats-data-row.0-12").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins012[index]+"</h5></div>");
    }
    if (index >= 85 && index < 90 && value !== "") {
    $(".away-team").find(".kpi-category.thirteen").find(".team-stats-data-row.0-12").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins012[index]+"</h5></a>");
    }
    if (index >= 90 && index < 93 && value == "") {
    $(".away-team").find(".kpi-category.fourteen").find(".team-stats-data-row.0-12").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins012[index]+"</h5></div>");
    }
    if (index >= 90 && index < 93 && value !== "") {
    $(".away-team").find(".kpi-category.fourteen").find(".team-stats-data-row.0-12").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins012[index]+"</h5></a>");
    } else {
    //  block of code to be executed if the condition is false
    }
  });

  $.each(awayTeamByMins1325, function(index,value){
    if (index >= 0 && index < 10) {
    $(".away-team").find(".kpi-category.one").find(".team-stats-data-row.13-25").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins1325[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value == "") {
    $(".away-team").find(".kpi-category.two").find(".team-stats-data-row.13-25").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins1325[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value !== "") {
    $(".away-team").find(".kpi-category.two").find(".team-stats-data-row.13-25").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins1325[index]+"</h5></a>");
    }
    if (index >= 17 && index < 27 && (value == "" || value.includes('%'))) {
    $(".away-team").find(".kpi-category.three").find(".team-stats-data-row.13-25").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins1325[index]+"</h5></div>");
    }
    if (index >= 17 && index < 26 && value !== "") {
    $(".away-team").find(".kpi-category.three").find(".team-stats-data-row.13-25").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins1325[index]+"</h5></a>");
    }
    if (index >= 27 && index < 37 && (value == "" || value.includes('%'))) {
    $(".away-team").find(".kpi-category.four").find(".team-stats-data-row.13-25").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins1325[index]+"</h5></div>");
    }
    if (index >= 27 && index < 36 && value !== "") {
    $(".away-team").find(".kpi-category.four").find(".team-stats-data-row.13-25").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins1325[index]+"</h5></a>");
    }
    if (index >= 39 && index < 43) {
    $(".away-team").find(".kpi-category.five").find(".team-stats-data-row.13-25").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins1325[index]+"</h5></div>");
    }
    if (index >= 37 && index < 39) {
    $(".away-team").find(".kpi-category.five").find(".team-stats-data-row.13-25").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins1325[index]+"</h5></a>");
    }
    if (index >= 43 && index < 51 && value == "") {
    $(".away-team").find(".kpi-category.six").find(".team-stats-data-row.13-25").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins1325[index]+"</h5></div>");
    }
    if (index >= 43 && index < 51 && value !== "") {
    $(".away-team").find(".kpi-category.six").find(".team-stats-data-row.13-25").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins1325[index]+"</h5></a>");
    }
    if (index >= 51 && index < 60 && value == "") {
    $(".away-team").find(".kpi-category.seven").find(".team-stats-data-row.13-25").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins1325[index]+"</h5></div>");
    }
    if (index >= 51 && index < 60 && value !== "") {
    $(".away-team").find(".kpi-category.seven").find(".team-stats-data-row.13-25").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins1325[index]+"</h5></a>");
    }
    if (index >= 60 && index < 61 && value == "") {
    $(".away-team").find(".kpi-category.eight").find(".team-stats-data-row.13-25").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins1325[index]+"</h5></div>");
    }
    if (index >= 60 && index < 61 && value !== "") {
    $(".away-team").find(".kpi-category.eight").find(".team-stats-data-row.13-25").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins1325[index]+"</h5></a>");
    }
    if (index >= 61 && index < 70 && value == "") {
    $(".away-team").find(".kpi-category.nine").find(".team-stats-data-row.13-25").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins1325[index]+"</h5></div>");
    }
    if (index >= 61 && index < 70 && value !== "") {
    $(".away-team").find(".kpi-category.nine").find(".team-stats-data-row.13-25").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins1325[index]+"</h5></a>");
    }
    if (index >= 70 && index < 79 && value == "") {
    $(".away-team").find(".kpi-category.ten").find(".team-stats-data-row.13-25").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins1325[index]+"</h5></div>");
    }
    if (index >= 70 && index < 79 && value !== "") {
    $(".away-team").find(".kpi-category.ten").find(".team-stats-data-row.13-25").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins1325[index]+"</h5></a>");
    }
    if (index >= 79 && index < 82 && value == "") {
    $(".away-team").find(".kpi-category.eleven").find(".team-stats-data-row.13-25").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins1325[index]+"</h5></div>");
    }
    if (index >= 79 && index < 82 && value !== "") {
    $(".away-team").find(".kpi-category.eleven").find(".team-stats-data-row.13-25").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins1325[index]+"</h5></a>");
    }
    if (index >= 82 && index < 85 && value == "") {
    $(".away-team").find(".kpi-category.twelve").find(".team-stats-data-row.13-25").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins1325[index]+"</h5></div>");
    }
    if (index >= 82 && index < 85 && value !== "") {
    $(".away-team").find(".kpi-category.twelve").find(".team-stats-data-row.13-25").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins1325[index]+"</h5></a>");
    }
    if (index >= 85 && index < 90 && value == "") {
    $(".away-team").find(".kpi-category.thirteen").find(".team-stats-data-row.13-25").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins1325[index]+"</h5></div>");
    }
    if (index >= 85 && index < 90 && value !== "") {
    $(".away-team").find(".kpi-category.thirteen").find(".team-stats-data-row.13-25").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins1325[index]+"</h5></a>");
    }
    if (index >= 90 && index < 93 && value == "") {
    $(".away-team").find(".kpi-category.fourteen").find(".team-stats-data-row.13-25").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins1325[index]+"</h5></div>");
    }
    if (index >= 90 && index < 93 && value !== "") {
    $(".away-team").find(".kpi-category.fourteen").find(".team-stats-data-row.13-25").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins1325[index]+"</h5></a>");
    } else {
    //  block of code to be executed if the condition is false
    }
  });

  $.each(awayTeamByMins26half, function(index,value){
    if (index >= 0 && index < 10) {
    $(".away-team").find(".kpi-category.one").find(".team-stats-data-row.26-half").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins26half[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value == "") {
    $(".away-team").find(".kpi-category.two").find(".team-stats-data-row.26-half").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins26half[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value !== "") {
    $(".away-team").find(".kpi-category.two").find(".team-stats-data-row.26-half").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins26half[index]+"</h5></a>");
    }
    if (index >= 17 && index < 27 && (value == "" || value.includes('%'))) {
    $(".away-team").find(".kpi-category.three").find(".team-stats-data-row.26-half").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins26half[index]+"</h5></div>");
    }
    if (index >= 17 && index < 26 && value !== "") {
    $(".away-team").find(".kpi-category.three").find(".team-stats-data-row.26-half").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins26half[index]+"</h5></a>");
    }
    if (index >= 27 && index < 37 && (value == "" || value.includes('%'))) {
    $(".away-team").find(".kpi-category.four").find(".team-stats-data-row.26-half").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins26half[index]+"</h5></div>");
    }
    if (index >= 27 && index < 36 && value !== "") {
    $(".away-team").find(".kpi-category.four").find(".team-stats-data-row.26-half").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins26half[index]+"</h5></a>");
    }
    if (index >= 39 && index < 43) {
    $(".away-team").find(".kpi-category.five").find(".team-stats-data-row.26-half").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins26half[index]+"</h5></div>");
    }
    if (index >= 37 && index < 39) {
    $(".away-team").find(".kpi-category.five").find(".team-stats-data-row.26-half").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins26half[index]+"</h5></a>");
    }
    if (index >= 43 && index < 51 && value == "") {
    $(".away-team").find(".kpi-category.six").find(".team-stats-data-row.26-half").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins26half[index]+"</h5></div>");
    }
    if (index >= 43 && index < 51 && value !== "") {
    $(".away-team").find(".kpi-category.six").find(".team-stats-data-row.26-half").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins26half[index]+"</h5></a>");
    }
    if (index >= 51 && index < 60 && value == "") {
    $(".away-team").find(".kpi-category.seven").find(".team-stats-data-row.26-half").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins26half[index]+"</h5></div>");
    }
    if (index >= 51 && index < 60 && value !== "") {
    $(".away-team").find(".kpi-category.seven").find(".team-stats-data-row.26-half").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins26half[index]+"</h5></a>");
    }
    if (index >= 60 && index < 61 && value == "") {
    $(".away-team").find(".kpi-category.eight").find(".team-stats-data-row.26-half").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins26half[index]+"</h5></div>");
    }
    if (index >= 60 && index < 61 && value !== "") {
    $(".away-team").find(".kpi-category.eight").find(".team-stats-data-row.26-half").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins26half[index]+"</h5></a>");
    }
    if (index >= 61 && index < 70 && value == "") {
    $(".away-team").find(".kpi-category.nine").find(".team-stats-data-row.26-half").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins26half[index]+"</h5></div>");
    }
    if (index >= 61 && index < 70 && value !== "") {
    $(".away-team").find(".kpi-category.nine").find(".team-stats-data-row.26-half").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins26half[index]+"</h5></a>");
    }
    if (index >= 70 && index < 79 && value == "") {
    $(".away-team").find(".kpi-category.ten").find(".team-stats-data-row.26-half").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins26half[index]+"</h5></div>");
    }
    if (index >= 70 && index < 79 && value !== "") {
    $(".away-team").find(".kpi-category.ten").find(".team-stats-data-row.26-half").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins26half[index]+"</h5></a>");
    }
    if (index >= 79 && index < 82 && value == "") {
    $(".away-team").find(".kpi-category.eleven").find(".team-stats-data-row.26-half").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins26half[index]+"</h5></div>");
    }
    if (index >= 79 && index < 82 && value !== "") {
    $(".away-team").find(".kpi-category.eleven").find(".team-stats-data-row.26-half").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins26half[index]+"</h5></a>");
    }
    if (index >= 82 && index < 85 && value == "") {
    $(".away-team").find(".kpi-category.twelve").find(".team-stats-data-row.26-half").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins26half[index]+"</h5></div>");
    }
    if (index >= 82 && index < 85 && value !== "") {
    $(".away-team").find(".kpi-category.twelve").find(".team-stats-data-row.26-half").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins26half[index]+"</h5></a>");
    }
    if (index >= 85 && index < 90 && value == "") {
    $(".away-team").find(".kpi-category.thirteen").find(".team-stats-data-row.26-half").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins26half[index]+"</h5></div>");
    }
    if (index >= 85 && index < 90 && value !== "") {
    $(".away-team").find(".kpi-category.thirteen").find(".team-stats-data-row.26-half").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins26half[index]+"</h5></a>");
    }
    if (index >= 90 && index < 93 && value == "") {
    $(".away-team").find(".kpi-category.fourteen").find(".team-stats-data-row.26-half").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins26half[index]+"</h5></div>");
    }
    if (index >= 90 && index < 93 && value !== "") {
    $(".away-team").find(".kpi-category.fourteen").find(".team-stats-data-row.26-half").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins26half[index]+"</h5></a>");
    } else {
    //  block of code to be executed if the condition is false
    }
  });

  $.each(awayTeamByMins3547, function(index,value){
    if (index >= 0 && index < 10) {
    $(".away-team").find(".kpi-category.one").find(".team-stats-data-row.35-47").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins3547[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value == "") {
    $(".away-team").find(".kpi-category.two").find(".team-stats-data-row.35-47").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins3547[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value !== "") {
    $(".away-team").find(".kpi-category.two").find(".team-stats-data-row.35-47").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins3547[index]+"</h5></a>");
    }
    if (index >= 17 && index < 27 && (value == "" || value.includes('%'))) {
    $(".away-team").find(".kpi-category.three").find(".team-stats-data-row.35-47").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins3547[index]+"</h5></div>");
    }
    if (index >= 17 && index < 26 && value !== "") {
    $(".away-team").find(".kpi-category.three").find(".team-stats-data-row.35-47").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins3547[index]+"</h5></a>");
    }
    if (index >= 27 && index < 37 && (value == "" || value.includes('%'))) {
    $(".away-team").find(".kpi-category.four").find(".team-stats-data-row.35-47").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins3547[index]+"</h5></div>");
    }
    if (index >= 27 && index < 36 && value !== "") {
    $(".away-team").find(".kpi-category.four").find(".team-stats-data-row.35-47").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins3547[index]+"</h5></a>");
    }
    if (index >= 39 && index < 43) {
    $(".away-team").find(".kpi-category.five").find(".team-stats-data-row.35-47").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins3547[index]+"</h5></div>");
    }
    if (index >= 37 && index < 39) {
    $(".away-team").find(".kpi-category.five").find(".team-stats-data-row.35-47").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins3547[index]+"</h5></a>");
    }
    if (index >= 43 && index < 51 && value == "") {
    $(".away-team").find(".kpi-category.six").find(".team-stats-data-row.35-47").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins3547[index]+"</h5></div>");
    }
    if (index >= 43 && index < 51 && value !== "") {
    $(".away-team").find(".kpi-category.six").find(".team-stats-data-row.35-47").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins3547[index]+"</h5></a>");
    }
    if (index >= 51 && index < 60 && value == "") {
    $(".away-team").find(".kpi-category.seven").find(".team-stats-data-row.35-47").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins3547[index]+"</h5></div>");
    }
    if (index >= 51 && index < 60 && value !== "") {
    $(".away-team").find(".kpi-category.seven").find(".team-stats-data-row.35-47").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins3547[index]+"</h5></a>");
    }
    if (index >= 60 && index < 61 && value == "") {
    $(".away-team").find(".kpi-category.eight").find(".team-stats-data-row.35-47").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins3547[index]+"</h5></div>");
    }
    if (index >= 60 && index < 61 && value !== "") {
    $(".away-team").find(".kpi-category.eight").find(".team-stats-data-row.35-47").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins3547[index]+"</h5></a>");
    }
    if (index >= 61 && index < 70 && value == "") {
    $(".away-team").find(".kpi-category.nine").find(".team-stats-data-row.35-47").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins3547[index]+"</h5></div>");
    }
    if (index >= 61 && index < 70 && value !== "") {
    $(".away-team").find(".kpi-category.nine").find(".team-stats-data-row.35-47").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins3547[index]+"</h5></a>");
    }
    if (index >= 70 && index < 79 && value == "") {
    $(".away-team").find(".kpi-category.ten").find(".team-stats-data-row.35-47").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins3547[index]+"</h5></div>");
    }
    if (index >= 70 && index < 79 && value !== "") {
    $(".away-team").find(".kpi-category.ten").find(".team-stats-data-row.35-47").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins3547[index]+"</h5></a>");
    }
    if (index >= 79 && index < 82 && value == "") {
    $(".away-team").find(".kpi-category.eleven").find(".team-stats-data-row.35-47").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins3547[index]+"</h5></div>");
    }
    if (index >= 79 && index < 82 && value !== "") {
    $(".away-team").find(".kpi-category.eleven").find(".team-stats-data-row.35-47").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins3547[index]+"</h5></a>");
    }
    if (index >= 82 && index < 85 && value == "") {
    $(".away-team").find(".kpi-category.twelve").find(".team-stats-data-row.35-47").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins3547[index]+"</h5></div>");
    }
    if (index >= 82 && index < 85 && value !== "") {
    $(".away-team").find(".kpi-category.twelve").find(".team-stats-data-row.35-47").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins3547[index]+"</h5></a>");
    }
    if (index >= 85 && index < 90 && value == "") {
    $(".away-team").find(".kpi-category.thirteen").find(".team-stats-data-row.35-47").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins3547[index]+"</h5></div>");
    }
    if (index >= 85 && index < 90 && value !== "") {
    $(".away-team").find(".kpi-category.thirteen").find(".team-stats-data-row.35-47").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins3547[index]+"</h5></a>");
    }
    if (index >= 90 && index < 93 && value == "") {
    $(".away-team").find(".kpi-category.fourteen").find(".team-stats-data-row.35-47").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins3547[index]+"</h5></div>");
    }
    if (index >= 90 && index < 93 && value !== "") {
    $(".away-team").find(".kpi-category.fourteen").find(".team-stats-data-row.35-47").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins3547[index]+"</h5></a>");
    } else {
    //  block of code to be executed if the condition is false
    }
  });

  $.each(awayTeamByMins4860, function(index,value){
    if (index >= 0 && index < 10) {
    $(".away-team").find(".kpi-category.one").find(".team-stats-data-row.48-60").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins4860[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value == "") {
    $(".away-team").find(".kpi-category.two").find(".team-stats-data-row.48-60").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins4860[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value !== "") {
    $(".away-team").find(".kpi-category.two").find(".team-stats-data-row.48-60").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins4860[index]+"</h5></a>");
    }
    if (index >= 17 && index < 27 && (value == "" || value.includes('%'))) {
    $(".away-team").find(".kpi-category.three").find(".team-stats-data-row.48-60").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins4860[index]+"</h5></div>");
    }
    if (index >= 17 && index < 26 && value !== "") {
    $(".away-team").find(".kpi-category.three").find(".team-stats-data-row.48-60").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins4860[index]+"</h5></a>");
    }
    if (index >= 27 && index < 37 && (value == "" || value.includes('%'))) {
    $(".away-team").find(".kpi-category.four").find(".team-stats-data-row.48-60").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins4860[index]+"</h5></div>");
    }
    if (index >= 27 && index < 36 && value !== "") {
    $(".away-team").find(".kpi-category.four").find(".team-stats-data-row.48-60").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins4860[index]+"</h5></a>");
    }
    if (index >= 39 && index < 43) {
    $(".away-team").find(".kpi-category.five").find(".team-stats-data-row.48-60").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins4860[index]+"</h5></div>");
    }
    if (index >= 37 && index < 39) {
    $(".away-team").find(".kpi-category.five").find(".team-stats-data-row.48-60").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins4860[index]+"</h5></a>");
    }
    if (index >= 43 && index < 51 && value == "") {
    $(".away-team").find(".kpi-category.six").find(".team-stats-data-row.48-60").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins4860[index]+"</h5></div>");
    }
    if (index >= 43 && index < 51 && value !== "") {
    $(".away-team").find(".kpi-category.six").find(".team-stats-data-row.48-60").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins4860[index]+"</h5></a>");
    }
    if (index >= 51 && index < 60 && value == "") {
    $(".away-team").find(".kpi-category.seven").find(".team-stats-data-row.48-60").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins4860[index]+"</h5></div>");
    }
    if (index >= 51 && index < 60 && value !== "") {
    $(".away-team").find(".kpi-category.seven").find(".team-stats-data-row.48-60").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins4860[index]+"</h5></a>");
    }
    if (index >= 60 && index < 61 && value == "") {
    $(".away-team").find(".kpi-category.eight").find(".team-stats-data-row.48-60").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins4860[index]+"</h5></div>");
    }
    if (index >= 60 && index < 61 && value !== "") {
    $(".away-team").find(".kpi-category.eight").find(".team-stats-data-row.48-60").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins4860[index]+"</h5></a>");
    }
    if (index >= 61 && index < 70 && value == "") {
    $(".away-team").find(".kpi-category.nine").find(".team-stats-data-row.48-60").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins4860[index]+"</h5></div>");
    }
    if (index >= 61 && index < 70 && value !== "") {
    $(".away-team").find(".kpi-category.nine").find(".team-stats-data-row.48-60").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins4860[index]+"</h5></a>");
    }
    if (index >= 70 && index < 79 && value == "") {
    $(".away-team").find(".kpi-category.ten").find(".team-stats-data-row.48-60").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins4860[index]+"</h5></div>");
    }
    if (index >= 70 && index < 79 && value !== "") {
    $(".away-team").find(".kpi-category.ten").find(".team-stats-data-row.48-60").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins4860[index]+"</h5></a>");
    }
    if (index >= 79 && index < 82 && value == "") {
    $(".away-team").find(".kpi-category.eleven").find(".team-stats-data-row.48-60").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins4860[index]+"</h5></div>");
    }
    if (index >= 79 && index < 82 && value !== "") {
    $(".away-team").find(".kpi-category.eleven").find(".team-stats-data-row.48-60").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins4860[index]+"</h5></a>");
    }
    if (index >= 82 && index < 85 && value == "") {
    $(".away-team").find(".kpi-category.twelve").find(".team-stats-data-row.48-60").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins4860[index]+"</h5></div>");
    }
    if (index >= 82 && index < 85 && value !== "") {
    $(".away-team").find(".kpi-category.twelve").find(".team-stats-data-row.48-60").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins4860[index]+"</h5></a>");
    }
    if (index >= 85 && index < 90 && value == "") {
    $(".away-team").find(".kpi-category.thirteen").find(".team-stats-data-row.48-60").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins4860[index]+"</h5></div>");
    }
    if (index >= 85 && index < 90 && value !== "") {
    $(".away-team").find(".kpi-category.thirteen").find(".team-stats-data-row.48-60").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins4860[index]+"</h5></a>");
    }
    if (index >= 90 && index < 93 && value == "") {
    $(".away-team").find(".kpi-category.fourteen").find(".team-stats-data-row.48-60").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins4860[index]+"</h5></div>");
    }
    if (index >= 90 && index < 93 && value !== "") {
    $(".away-team").find(".kpi-category.fourteen").find(".team-stats-data-row.48-60").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins4860[index]+"</h5></a>");
    } else {
    //  block of code to be executed if the condition is false
    }
  });

  $.each(awayTeamByMins61full, function(index,value){
    if (index >= 0 && index < 10) {
    $(".away-team").find(".kpi-category.one").find(".team-stats-data-row.61-full").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins61full[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value == "") {
    $(".away-team").find(".kpi-category.two").find(".team-stats-data-row.61-full").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins61full[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value !== "") {
    $(".away-team").find(".kpi-category.two").find(".team-stats-data-row.61-full").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins61full[index]+"</h5></a>");
    }
    if (index >= 17 && index < 27 && (value == "" || value.includes('%'))) {
    $(".away-team").find(".kpi-category.three").find(".team-stats-data-row.61-full").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins61full[index]+"</h5></div>");
    }
    if (index >= 17 && index < 26 && value !== "") {
    $(".away-team").find(".kpi-category.three").find(".team-stats-data-row.61-full").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins61full[index]+"</h5></a>");
    }
    if (index >= 27 && index < 37 && (value == "" || value.includes('%'))) {
    $(".away-team").find(".kpi-category.four").find(".team-stats-data-row.61-full").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins61full[index]+"</h5></div>");
    }
    if (index >= 27 && index < 36 && value !== "") {
    $(".away-team").find(".kpi-category.four").find(".team-stats-data-row.61-full").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins61full[index]+"</h5></a>");
    }
    if (index >= 39 && index < 43) {
    $(".away-team").find(".kpi-category.five").find(".team-stats-data-row.61-full").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins61full[index]+"</h5></div>");
    }
    if (index >= 37 && index < 39) {
    $(".away-team").find(".kpi-category.five").find(".team-stats-data-row.61-full").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins61full[index]+"</h5></a>");
    }
    if (index >= 43 && index < 51 && value == "") {
    $(".away-team").find(".kpi-category.six").find(".team-stats-data-row.61-full").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins61full[index]+"</h5></div>");
    }
    if (index >= 43 && index < 51 && value !== "") {
    $(".away-team").find(".kpi-category.six").find(".team-stats-data-row.61-full").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins61full[index]+"</h5></a>");
    }
    if (index >= 51 && index < 60 && value == "") {
    $(".away-team").find(".kpi-category.seven").find(".team-stats-data-row.61-full").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins61full[index]+"</h5></div>");
    }
    if (index >= 51 && index < 60 && value !== "") {
    $(".away-team").find(".kpi-category.seven").find(".team-stats-data-row.61-full").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins61full[index]+"</h5></a>");
    }
    if (index >= 60 && index < 61 && value == "") {
    $(".away-team").find(".kpi-category.eight").find(".team-stats-data-row.61-full").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins61full[index]+"</h5></div>");
    }
    if (index >= 60 && index < 61 && value !== "") {
    $(".away-team").find(".kpi-category.eight").find(".team-stats-data-row.61-full").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins61full[index]+"</h5></a>");
    }
    if (index >= 61 && index < 70 && value == "") {
    $(".away-team").find(".kpi-category.nine").find(".team-stats-data-row.61-full").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins61full[index]+"</h5></div>");
    }
    if (index >= 61 && index < 70 && value !== "") {
    $(".away-team").find(".kpi-category.nine").find(".team-stats-data-row.61-full").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins61full[index]+"</h5></a>");
    }
    if (index >= 70 && index < 79 && value == "") {
    $(".away-team").find(".kpi-category.ten").find(".team-stats-data-row.61-full").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins61full[index]+"</h5></div>");
    }
    if (index >= 70 && index < 79 && value !== "") {
    $(".away-team").find(".kpi-category.ten").find(".team-stats-data-row.61-full").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins61full[index]+"</h5></a>");
    }
    if (index >= 79 && index < 82 && value == "") {
    $(".away-team").find(".kpi-category.eleven").find(".team-stats-data-row.61-full").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins61full[index]+"</h5></div>");
    }
    if (index >= 79 && index < 82 && value !== "") {
    $(".away-team").find(".kpi-category.eleven").find(".team-stats-data-row.61-full").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins61full[index]+"</h5></a>");
    }
    if (index >= 82 && index < 85 && value == "") {
    $(".away-team").find(".kpi-category.twelve").find(".team-stats-data-row.61-full").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins61full[index]+"</h5></div>");
    }
    if (index >= 82 && index < 85 && value !== "") {
    $(".away-team").find(".kpi-category.twelve").find(".team-stats-data-row.61-full").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins61full[index]+"</h5></a>");
    }
    if (index >= 85 && index < 90 && value == "") {
    $(".away-team").find(".kpi-category.thirteen").find(".team-stats-data-row.61-full").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins61full[index]+"</h5></div>");
    }
    if (index >= 85 && index < 90 && value !== "") {
    $(".away-team").find(".kpi-category.thirteen").find(".team-stats-data-row.61-full").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins61full[index]+"</h5></a>");
    }
    if (index >= 90 && index < 93 && value == "") {
    $(".away-team").find(".kpi-category.fourteen").find(".team-stats-data-row.61-full").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins61full[index]+"</h5></div>");
    }
    if (index >= 90 && index < 93 && value !== "") {
    $(".away-team").find(".kpi-category.fourteen").find(".team-stats-data-row.61-full").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins61full[index]+"</h5></a>");
    } else {
    //  block of code to be executed if the condition is false
    }
  });

  $.each(awayTeamByMins701stEx, function(index,value){
    if (index >= 0 && index < 10) {
    $(".away-team").find(".kpi-category.one").find(".team-stats-data-row.70-1st").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins701stEx[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value == "") {
    $(".away-team").find(".kpi-category.two").find(".team-stats-data-row.70-1st").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins701stEx[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value !== "") {
    $(".away-team").find(".kpi-category.two").find(".team-stats-data-row.70-1st").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins701stEx[index]+"</h5></a>");
    }
    if (index >= 17 && index < 27 && (value == "" || value.includes('%'))) {
    $(".away-team").find(".kpi-category.three").find(".team-stats-data-row.70-1st").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins701stEx[index]+"</h5></div>");
    }
    if (index >= 17 && index < 26 && value !== "") {
    $(".away-team").find(".kpi-category.three").find(".team-stats-data-row.70-1st").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins701stEx[index]+"</h5></a>");
    }
    if (index >= 27 && index < 37 && (value == "" || value.includes('%'))) {
    $(".away-team").find(".kpi-category.four").find(".team-stats-data-row.70-1st").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins701stEx[index]+"</h5></div>");
    }
    if (index >= 27 && index < 36 && value !== "") {
    $(".away-team").find(".kpi-category.four").find(".team-stats-data-row.70-1st").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins701stEx[index]+"</h5></a>");
    }
    if (index >= 39 && index < 43) {
    $(".away-team").find(".kpi-category.five").find(".team-stats-data-row.70-1st").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins701stEx[index]+"</h5></div>");
    }
    if (index >= 37 && index < 39) {
    $(".away-team").find(".kpi-category.five").find(".team-stats-data-row.70-1st").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins701stEx[index]+"</h5></a>");
    }
    if (index >= 43 && index < 51 && value == "") {
    $(".away-team").find(".kpi-category.six").find(".team-stats-data-row.70-1st").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins701stEx[index]+"</h5></div>");
    }
    if (index >= 43 && index < 51 && value !== "") {
    $(".away-team").find(".kpi-category.six").find(".team-stats-data-row.70-1st").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins701stEx[index]+"</h5></a>");
    }
    if (index >= 51 && index < 60 && value == "") {
    $(".away-team").find(".kpi-category.seven").find(".team-stats-data-row.70-1st").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins701stEx[index]+"</h5></div>");
    }
    if (index >= 51 && index < 60 && value !== "") {
    $(".away-team").find(".kpi-category.seven").find(".team-stats-data-row.70-1st").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins701stEx[index]+"</h5></a>");
    }
    if (index >= 60 && index < 61 && value == "") {
    $(".away-team").find(".kpi-category.eight").find(".team-stats-data-row.70-1st").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins701stEx[index]+"</h5></div>");
    }
    if (index >= 60 && index < 61 && value !== "") {
    $(".away-team").find(".kpi-category.eight").find(".team-stats-data-row.70-1st").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins701stEx[index]+"</h5></a>");
    }
    if (index >= 61 && index < 70 && value == "") {
    $(".away-team").find(".kpi-category.nine").find(".team-stats-data-row.70-1st").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins701stEx[index]+"</h5></div>");
    }
    if (index >= 61 && index < 70 && value !== "") {
    $(".away-team").find(".kpi-category.nine").find(".team-stats-data-row.70-1st").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins701stEx[index]+"</h5></a>");
    }
    if (index >= 70 && index < 79 && value == "") {
    $(".away-team").find(".kpi-category.ten").find(".team-stats-data-row.70-1st").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins701stEx[index]+"</h5></div>");
    }
    if (index >= 70 && index < 79 && value !== "") {
    $(".away-team").find(".kpi-category.ten").find(".team-stats-data-row.70-1st").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins701stEx[index]+"</h5></a>");
    }
    if (index >= 79 && index < 82 && value == "") {
    $(".away-team").find(".kpi-category.eleven").find(".team-stats-data-row.70-1st").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins701stEx[index]+"</h5></div>");
    }
    if (index >= 79 && index < 82 && value !== "") {
    $(".away-team").find(".kpi-category.eleven").find(".team-stats-data-row.70-1st").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins701stEx[index]+"</h5></a>");
    }
    if (index >= 82 && index < 85 && value == "") {
    $(".away-team").find(".kpi-category.twelve").find(".team-stats-data-row.70-1st").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins701stEx[index]+"</h5></div>");
    }
    if (index >= 82 && index < 85 && value !== "") {
    $(".away-team").find(".kpi-category.twelve").find(".team-stats-data-row.70-1st").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins701stEx[index]+"</h5></a>");
    }
    if (index >= 85 && index < 90 && value == "") {
    $(".away-team").find(".kpi-category.thirteen").find(".team-stats-data-row.70-1st").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins701stEx[index]+"</h5></div>");
    }
    if (index >= 85 && index < 90 && value !== "") {
    $(".away-team").find(".kpi-category.thirteen").find(".team-stats-data-row.70-1st").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins701stEx[index]+"</h5></a>");
    }
    if (index >= 90 && index < 93 && value == "") {
    $(".away-team").find(".kpi-category.fourteen").find(".team-stats-data-row.70-1st").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins701stEx[index]+"</h5></div>");
    }
    if (index >= 90 && index < 93 && value !== "") {
    $(".away-team").find(".kpi-category.fourteen").find(".team-stats-data-row.70-1st").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins701stEx[index]+"</h5></a>");
    } else {
    //  block of code to be executed if the condition is false
    }
  });

  $.each(awayTeamByMins802ndEx, function(index,value){
    if (index >= 0 && index < 10) {
    $(".away-team").find(".kpi-category.one").find(".team-stats-data-row.80-2nd").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins802ndEx[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value == "") {
    $(".away-team").find(".kpi-category.two").find(".team-stats-data-row.80-2nd").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins802ndEx[index]+"</h5></div>");
    }
    if (index >= 10 && index < 17 && value !== "") {
    $(".away-team").find(".kpi-category.two").find(".team-stats-data-row.80-2nd").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins802ndEx[index]+"</h5></a>");
    }
    if (index >= 17 && index < 27 && (value == "" || value.includes('%'))) {
    $(".away-team").find(".kpi-category.three").find(".team-stats-data-row.80-2nd").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins802ndEx[index]+"</h5></div>");
    }
    if (index >= 17 && index < 26 && value !== "") {
    $(".away-team").find(".kpi-category.three").find(".team-stats-data-row.80-2nd").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins802ndEx[index]+"</h5></a>");
    }
    if (index >= 27 && index < 37 && (value == "" || value.includes('%'))) {
    $(".away-team").find(".kpi-category.four").find(".team-stats-data-row.80-2nd").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins802ndEx[index]+"</h5></div>");
    }
    if (index >= 27 && index < 36 && value !== "") {
    $(".away-team").find(".kpi-category.four").find(".team-stats-data-row.80-2nd").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins802ndEx[index]+"</h5></a>");
    }
    if (index >= 39 && index < 43) {
    $(".away-team").find(".kpi-category.five").find(".team-stats-data-row.80-2nd").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins802ndEx[index]+"</h5></div>");
    }
    if (index >= 37 && index < 39) {
    $(".away-team").find(".kpi-category.five").find(".team-stats-data-row.80-2nd").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins802ndEx[index]+"</h5></a>");
    }
    if (index >= 43 && index < 51 && value == "") {
    $(".away-team").find(".kpi-category.six").find(".team-stats-data-row.80-2nd").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins802ndEx[index]+"</h5></div>");
    }
    if (index >= 43 && index < 51 && value !== "") {
    $(".away-team").find(".kpi-category.six").find(".team-stats-data-row.80-2nd").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins802ndEx[index]+"</h5></a>");
    }
    if (index >= 51 && index < 60 && value == "") {
    $(".away-team").find(".kpi-category.seven").find(".team-stats-data-row.80-2nd").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins802ndEx[index]+"</h5></div>");
    }
    if (index >= 51 && index < 60 && value !== "") {
    $(".away-team").find(".kpi-category.seven").find(".team-stats-data-row.80-2nd").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins802ndEx[index]+"</h5></a>");
    }
    if (index >= 60 && index < 61 && value == "") {
    $(".away-team").find(".kpi-category.eight").find(".team-stats-data-row.80-2nd").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins802ndEx[index]+"</h5></div>");
    }
    if (index >= 60 && index < 61 && value !== "") {
    $(".away-team").find(".kpi-category.eight").find(".team-stats-data-row.80-2nd").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins802ndEx[index]+"</h5></a>");
    }
    if (index >= 61 && index < 70 && value == "") {
    $(".away-team").find(".kpi-category.nine").find(".team-stats-data-row.80-2nd").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins802ndEx[index]+"</h5></div>");
    }
    if (index >= 61 && index < 70 && value !== "") {
    $(".away-team").find(".kpi-category.nine").find(".team-stats-data-row.80-2nd").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins802ndEx[index]+"</h5></a>");
    }
    if (index >= 70 && index < 79 && value == "") {
    $(".away-team").find(".kpi-category.ten").find(".team-stats-data-row.80-2nd").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins802ndEx[index]+"</h5></div>");
    }
    if (index >= 70 && index < 79 && value !== "") {
    $(".away-team").find(".kpi-category.ten").find(".team-stats-data-row.80-2nd").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins802ndEx[index]+"</h5></a>");
    }
    if (index >= 79 && index < 82 && value == "") {
    $(".away-team").find(".kpi-category.eleven").find(".team-stats-data-row.80-2nd").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins802ndEx[index]+"</h5></div>");
    }
    if (index >= 79 && index < 82 && value !== "") {
    $(".away-team").find(".kpi-category.eleven").find(".team-stats-data-row.80-2nd").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins802ndEx[index]+"</h5></a>");
    }
    if (index >= 82 && index < 85 && value == "") {
    $(".away-team").find(".kpi-category.twelve").find(".team-stats-data-row.80-2nd").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins802ndEx[index]+"</h5></div>");
    }
    if (index >= 82 && index < 85 && value !== "") {
    $(".away-team").find(".kpi-category.twelve").find(".team-stats-data-row.80-2nd").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins802ndEx[index]+"</h5></a>");
    }
    if (index >= 85 && index < 90 && value == "") {
    $(".away-team").find(".kpi-category.thirteen").find(".team-stats-data-row.80-2nd").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins802ndEx[index]+"</h5></div>");
    }
    if (index >= 85 && index < 90 && value !== "") {
    $(".away-team").find(".kpi-category.thirteen").find(".team-stats-data-row.80-2nd").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins802ndEx[index]+"</h5></a>");
    }
    if (index >= 90 && index < 93 && value == "") {
    $(".away-team").find(".kpi-category.fourteen").find(".team-stats-data-row.80-2nd").append("<div class='table-data no-link w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins802ndEx[index]+"</h5></div>");
    }
    if (index >= 90 && index < 93 && value !== "") {
    $(".away-team").find(".kpi-category.fourteen").find(".team-stats-data-row.80-2nd").append("<a href='#' class='table-data w-inline-block "+keyMetricsLabelsID[index]+"'><h5 class='datapoint'>"+awayTeamByMins802ndEx[index]+"</h5></a>");
    } else {
    //  block of code to be executed if the condition is false
    }
  });

  $(".kpi-category.one").find(".Score").addClass("col-lg");
  $(".kpi-category.one").find(".Pos--Time").addClass("col-lg");
  $(".kpi-category.one").find(".Shot-Time").addClass("col-lg");
  $(".kpi-category.one").find(".Prod--").addClass("col-md");
  $(".kpi-category.one").find(".Pos---").addClass("col-md");
  $(".kpi-category").find(".-").addClass("col-md");
  $(".kpi-category.five").find(".Exp-Pts").addClass("col-md");
  $(".kpi-category.eight").find(".Won").addClass("col-full");


  $(".data-filters-links.key-metrics").click(function() {
    $(".data-filters-links.key-metrics").toggleClass("selected");
    $('.data-filters-links.show-all').removeClass('selected');
    $('.kpi-category.one').toggleClass('hide');
  });

  $(".data-filters-links.attacking-play").click(function() {
    $(".data-filters-links.attacking-play").toggleClass("selected");
    $('.data-filters-links.show-all').removeClass('selected');
  });

  $(".data-filters-links.kickouts").click(function() {
    $(".data-filters-links.kickouts").toggleClass("selected");
    $('.data-filters-links.show-all').removeClass('selected');
  });

  $(".data-filters-links.possession-play").click(function() {
    $(".data-filters-links.possession-play").toggleClass("selected");
    $('.data-filters-links.show-all').removeClass('selected');
  });

  $(".data-filters-links.defensive-play").click(function() {
    $(".data-filters-links.defensive-play").toggleClass("selected");
    $('.data-filters-links.show-all').removeClass('selected');
  });

  $(".data-filters-links.show-all").click(function() {
    if ($("data-filters-links.show-all").hasClass('selected')) {
      $(".data-filters-links").removeClass("selected");
    }
    else if (!$(".data-filters-links.show-all").hasClass('selected')) {
      $(".data-filters-links.show-all").addClass("selected");
      $(".data-filters-links.key-metrics").removeClass("selected");
      $(".data-filters-links.attacking-play").removeClass("selected");
      $(".data-filters-links.kickouts").removeClass("selected");
      $(".data-filters-links.possession-play").removeClass("selected");
      $(".data-filters-links.defensive-play").removeClass("selected");
    }
  });




  });
