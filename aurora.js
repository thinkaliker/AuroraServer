$(document).ready(function() {
  $("#home-btn").click(function() {
    $("#reddit").hide();
    $("#dynmap").hide();
    $("#servers").hide();
    $("#help").hide();
    $("#boost").hide();
    $("#banner").css('display', 'flex');
  });
  $("#reddit-btn").click(function() {
    $("#banner").hide();
    $("#dynmap").hide();
    $("#servers").hide();
    $("#help").hide();
    $("#boost").hide();
    $("#reddit").css('display', 'flex');
  });
  $("#dynmap-btn").click(function() {
    $("#banner").hide();
    $("#reddit").hide();
    $("#servers").hide();
    $("#help").hide();
    $("#boost").hide();
    $("#dynmap").css('display', 'flex');
  });
  $("#servers-btn").click(function() {
    $("#banner").hide();
    $("#reddit").hide();
    $("#dynmap").hide();
    $("#help").hide();
    $("#boost").hide();
    $("#servers").css('display', 'flex');
  });
  $("#help-btn").click(function() {
    $("#banner").hide();
    $("#reddit").hide();
    $("#dynmap").hide();
    $("#servers").hide();
    $("#boost").hide();
    $("#help").css('display', 'flex');
  });
  $("#boost-btn").click(function() {
    $("#banner").hide();
    $("#reddit").hide();
    $("#dynmap").hide();
    $("#servers").hide();
    $("#help").hide();
    $("#boost").css('display', 'flex');
  });
});
