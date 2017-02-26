$("ul").on("click", "li", function(){
  $(this).toggleClass("removed");
});

$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut("5000", function() {
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event) {
  if (event.which === 13) {
    $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + $(this).val() + "</li>");
    $(this).val("");
  }
});

$("#icon").click(function() {
  $("input[type = 'text']").fadeToggle(200);
  $(this).toggleClass("fa-plus-square-o fa-minus-square-o");
  $("input[type = 'text']").css("height", "40px");
});
