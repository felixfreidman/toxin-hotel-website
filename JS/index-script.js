let mainSection = document.querySelector('.main');
let signInButton = document.querySelector('.header_signin');
let signUpButton = document.querySelector('.header_signup');
let mainSectionText = document.querySelector('.main-bottom_text');
let calendarSection = document.querySelector('.main-calendar');
let signInSection = document.querySelector('.signin');
let signUpSection = document.querySelector('.signup');

signInButton.addEventListener('click', ()=> {
    mainSection.classList.toggle('main');
    mainSection.classList.toggle('main_buttonclicked');
    calendarSection.classList.toggle('hide');
    signInSection.classList.toggle('hide');
    mainSectionText.classList.toggle('hide');
    if(!signUpSection.classList.contains('hide')){
        console.log(signUpSection.classList.contains('hide'));
        signUpSection.classList.toggle('hide');
    }
});
signUpButton.addEventListener('click', ()=> {
    mainSection.classList.toggle('main');
    mainSection.classList.toggle('main_buttonclicked');
    calendarSection.classList.toggle('hide');
    signUpSection.classList.toggle('hide');
    mainSectionText.classList.toggle('hide');
});



