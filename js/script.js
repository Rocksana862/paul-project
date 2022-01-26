// MIXITUP
var mixer = mixitup('.work-grid');
// WOW 
wow = new WOW(
    {
    mobile:false
  }
  )
  wow.init();
  //HAMBURGER MENU
 function openMenu(){
document.getElementById('navbar').style.width = "100%";
 }
 function closeMenu(){
  document.getElementById('navbar').style.width = "0%";
   }
   // SMOOTH SCROLL
   $('.hamburger-menu li a').on('click', function(){
    $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false
   });



