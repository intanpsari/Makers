$(document).ready(function() {
   $('.goyang').mouseenter(function() {
       $(this).animate({
           height: '+=40px'
       });
   });
   $('.goyang').mouseleave(function() {
       $(this).animate({
           height: '-=40px'
       }); 
   });
   $('.goyang').click(function() {
       $(this).toggle(1000);
   }); 
});