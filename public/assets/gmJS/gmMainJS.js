//
// $(document).ready(function() {
//
//     setTimeout(function(){
//         $('body').addClass('loaded');
//     }, 3000);
//
// });
// var stop = window.location.href = "/about";
// $(document).ready(function () {
//   $('#portfolioPage').css('display', 'none');
//
//   $('#portfolioPage').fadeIn(5000);
// });


$(document).ready(function() {

// $('body').css('display', 'none');
//
// $('body').fadeIn(1000);



$('.workNavA').click(function(event) {

event.preventDefault();
newLocation = this.href


  $('body').fadeOut(500,newpage);


});

function newpage() {

window.location = newLocation;

}

});



// $(".workNavB").click(function() {
//   event.preventDefault();
//   pageloader = this.href;
//   $('#mainPage').fadeOut(1000, newpage);
//
//   $('body').css('display', 'none');
//
//   $('body').fadeIn(1000);
//
//   function newpage(){
//     window.location =newLocation;
//   }
// });











//porfolio logic
// $('.workNav').click(function(e){
//   $('.portWrap1').fadeOut(500);
//
//       var gmbot = $('#gmPortBottom');
//         gmbot.toggleClass('portfolioBottomMain');
//          $(".gmPortfolioShower").css("display","block")
// });







// $('#body').css('min-height', '100%');
// $('#body').css('min-width', '100%');
// document.body.style.backgroundImage = 'url(https://unsplash.it/' + window.innerWidth + '/' + window.innerHeight + '/?random&blur)';
// $(function() {
//
//   $('#menu-toggle').click(function(event) {
//     $('#menu').animate({
//       width: 'toggle'
//     }, 100);
//     $('.menu-link').fadeIn(5000);
//     $('#menu h1').fadeToggle(100);
//
//     $(this).toggleClass('span');
//   });
// });




//
//
//
// var prevX = 0;
// var prevY = 0;
// var posX = "-50%";
// var posY = "-50%";
// var moveUp = false;
// var movedLeft = false;
//
//
// $( ".move-background" ).hover(function( event ) {
//   prevX = event.pageX;
//   prevY = event.pageY;
// }, null);
//
// $( ".move-background" ).mousemove(function( event ) {
//   moveBackground(event);
// });
//
//
// function moveBackground( event ) {
//
//   directionMoved( event );
//
//   posX = (movedLeft) ? "-49%" : "-51%";
//   posY = (movedUp) ? "-49%" : "-51%";
//
//   $(".background").css({"-webkit-transform":"translate("+ posX + ","+posY+")"});
//
//   prevX = event.pageX;
//   prevY = event.pageY;
// }
//
// function directionMoved(event)
// {
//   movedLeft = (prevX > event.pageX) ? true : false;
//   movedUp = (prevY > event.pageY) ? true : false;
// }










// var y = document.getElementById('opac').value;
//
// $(function() {
//   $('#color1').change(function() {
//     var x = document.getElementById('color1').value;
//
//     $('#menu').css("background-color", " " + x);
//   });
//
//   $('#opac').change(function() {
//     if ($(this).min <= 30) {
//       y += 20;
//     }
//     $('#menu').fadeTo(1000, y / 100);
//   });
//
// });

/******** Horizontal Scrolling **********/

// var marginX = 0;
// var destination = 0;
// var speed = 2;
// var scroller = null;
//
// //settings for slider
// var animationSpeed = 1000;
// //cache DOM elements
// var $slider = $('#slider');
// var $slideContainer = $('#slides', $slider);
// var $slides = $('.img', $slider);
//
// var interval;
//
// function scrollX(elementId) {
//   destination = document.getElementById(elementId).offsetLeft;
//
//   interval = setTimeout(function() {
//     $slideContainer.animate({
//       'margin-left': '-=' + destination
//     }, animationSpeed);
//   });
// }

// var modal = document.getElementById('gmMContact');
// var span = document.getElementsByClassName("gmClose")[0];
//
// $('.mainContactButton').click(function(){
// 		modal.style.display = "block";
// });
//
// span.onclick = function() {
//     modal.style.display = "none";
// }
//
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
//
// $(".gm-Project-1").click(function(e) {
//     e.stopPropagation();
//     $(".gmPro-Des-Section").fadeToggle();
// });
//
// $(document).click(function(e) {
//     if (!$(e.target).closest('.gmPro-Des-Section').length) {
//         $('.gmPro-Des-Section').fadeOut();
//     }
// });
