var backdrop= document.querySelector('.backdrop');
var selectPlanButtons = document.querySelectorAll('.gain button');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector('.main-nav__item--cta');


for(var i = 0; i < selectPlanButtons.length; i++){
  selectPlanButtons[i].addEventListener('click', function(){
    modal.classList.add('open');
    backdrop.classList.add('open');
  });
}


backdrop.addEventListener('click',function(){
  mobileNav.classList.remove('open');
  CloseModal();
});

if(modalNoButton){
  modalNoButton.addEventListener('click',CloseModal);
}

toggleButton.addEventListener('click',function(){
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});

function CloseModal() {
  if(modalNoButton){
    modal.classList.remove('open');
  }
  backdrop.classList.remove('open');
}

ctaButton.addEventListener('animationstart',function(event){
  console.log('Animation started', event)
});

ctaButton.addEventListener('animationend',function(event){
  console.log('Animation end', event)
});

ctaButton.addEventListener('animationiteration',function(event){
  console.log('Animation iter', event)
});
