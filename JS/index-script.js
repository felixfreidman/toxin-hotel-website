let indexMainBody = document.querySelector('.main');
let signInButton = document.querySelector('.header_signin');
let signUpButton = document.querySelector('.header_signup');
let mainBodyBottomText = document.querySelector('.main-bottom_text');
let roomAndCalendar = document.querySelector('.main-calendar');
let signInSection = document.querySelector('.main-signin');
let cross = document.querySelector('.signin-close')

signInButton.addEventListener('click', () => {
    indexMainBody.classList.toggle('main');
    indexMainBody.classList.toggle('main_buttonclicked');
    mainBodyBottomText.classList.toggle('hide');
    roomAndCalendar.classList.toggle('hide');
    signInSection.classList.toggle('hide');
});

cross.addEventListener('click', () => {
    indexMainBody.classList.toggle('main');
    indexMainBody.classList.toggle('main_buttonclicked');
    mainBodyBottomText.classList.toggle('hide');
    roomAndCalendar.classList.toggle('hide');
    signInSection.classList.toggle('hide');
})


signUpButton.addEventListener('click', () => {
    indexMainBody.classList.toggle('main');
    indexMainBody.classList.toggle('main_buttonclicked');
    mainBodyBottomText.classList.toggle('main-bottom_text');
    mainBodyBottomText.classList.toggle('hide');
});