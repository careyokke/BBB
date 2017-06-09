$(document).ready(function() {
  $("#play").click(function() {
  $("#show-results").show();
    var userInput = parseInt(prompt("Enter any number to find Bing Bong OR BINGBONG!"));
    for (var i=1; i<=userInput; i++) {
      if ((i%3)===0 && (i%5)===0) {
        $(".bingbongOutput ul").append("<li>!*BINGBONG!</li>");
      } else if ((i%3)===0 && (i%5)!==0) {
          $(".bingbongOutput ul").append("<li>*bing*</li>");
        } else if ((i%3)!==0 && (i%5)===0) {
            $(".bingbongOutput ul").append("<li>*bong*</li>");
          } else {
              $(".bingbongOutput ul").append("<li>" + (i) + "</li>");
