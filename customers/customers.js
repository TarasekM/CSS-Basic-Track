var images = document.querySelectorAll('.testimonial__image-container');
var text = document.querySelectorAll('.testimonial__info');

$(window).resize(function(){
  for(var i = 0; i < 2; i++){
    text[i].style.width = images[i].offsetWidth + 'px';
  }
});
