$(document).ready(function(){
$("img.d").hover(
function() {
$(this).stop().animate({"opacity": "0.5"}, "slow");
},
function() {
$(this).stop().animate({"opacity": "1"}, "slow");
});
  $("img.b").hover(
function() {
$(this).stop().animate({"opacity": "0.5"}, "slow");
},
function() {
$(this).stop().animate({"opacity": "1"}, "slow");
});
  $("img.c").hover(
function() {
$(this).stop().animate({"opacity": "0.5"}, "slow");
},
function() {
$(this).stop().animate({"opacity": "1"}, "slow");
});

});