$(document).ready(function() {
  $("button#MEOW").click(function() {
  $("ul#cat").prepend("<li>meow</li>");
  $("ul#dog").prepend("<li>BARK!!</li>");
  $("ul#cat").children("li").first().click(function() {
    $(this).remove();
  });
  $("ul#dog").children("li").first().click(function() {
    $(this).remove();
  });
});


$("button#BARK").click(function() {
$("ul#cat").prepend("<li>MEOW!!HISS!</li>");
$("ul#dog").prepend("<li>bark.</li>");
$("ul#cat").children("li").first().click(function() {
  $(this).remove();
});
$("ul#dog").children("li").first().click(function() {
  $(this).remove();
});
});













});
