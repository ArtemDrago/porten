//адаптив изображения
function ibg(){
   let ibg=document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
   if(ibg[i].querySelector('img')){
   ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
   }}}ibg();
   //

//================================================================================
//slickslider
$(document).ready(function(){
   $('.slider').slick({
      arrows:false,
      dots:false,
      adaptiveHeight:true,
      slidesToShow:3,
      swipeToSlide:true,
      responsive:[
         {
            breakpoint: 949,
            settings:{
               slidesToShow:2,
            }
         } ,{
            breakpoint: 649,
            settings:{
               slidesToShow:1,
            }
         }
      ]
   });
   $('.slide-shop').slick({
      arrows:false,
   dots:false,
   adaptiveHeight:true,
   swipeToSlide:true,
   rows:2,
   slidesToShow:4,
      responsive:[
         {
            breakpoint: 1099,
            settings:{
               slidesToShow:3,
            }
         } ,{
            breakpoint: 829,
            settings:{
               slidesToShow:2,
            }
            },
            {
            breakpoint: 619,
            settings:{
               slidesToShow:1,
            }
         }
      
      ]
   });
   });
//========================================================================================
//бургер
$('.wrapper').addClass('loaded');

$('.icon-menu').click(function(event){
   $(this).toggleClass('active');
   $('.menu__body').toggleClass('active');
   $('body').toggleClass('lock');
});
//==========================================================================================
