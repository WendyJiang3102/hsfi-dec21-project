/*
This function is fired when the webpage is loaded
*/
$(document).ready(function(){
   $('.all-content').hide(); 
});

/*
When someone clicks goals-button we should hide all-content 
and then show only goals-content
*/
$("#goals-button").click(function(){
    $('.all-content').hide();
    $('#goals-content').show();
});

/*
When someone clicks the info button we should hide all-content 
and then show only info-content
*/
$("#info-button").click(function(){
    $('.all-content').hide();
    $('#info-content').show();
});

$("#projects-button").click(function(){
    $('.all-content').hide();
    $('#project-content').show();
});

$("#theme-button").click(function(){
   $("body").css("background-color","black");
   $('.all-content').css("color","white");
   $('#site-title').css("color","white");
});

$("#do-not-press-button").click(function(){
    alert("I TOLD YOU NOT TO PRESS ME!");
});

$('#takeover-button').click(function(){
    $('.all-content').hide();
    $('#takeover-content').show();
});

$('#takeover-form-button').click(function(){
  $('#site-title').html("Your site now belongs to:"+$("#takeover-input").val());
  $('#takeover-input').val("");
  $('#site-title').css("background-color","#8C001A")
  $('#site-title').css("color","white")
});