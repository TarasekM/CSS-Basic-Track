var images = document.querySelectorAll('.testimonial__image-container');
var text = document.querySelectorAll('.testimonial__info');

for(var i = 0; i < 2; i++){
  text[i].style.width = images[i].offsetWidth + 'px';
}

$(window).resize(function(){
  for(var i = 0; i < 2; i++){
    text[i].style.width = images[i].offsetWidth + 'px';
  }
});
