let mainSection = document.querySelector('.main');
let mainSectionOther = document.querySelector('.main_buttonclicked');
let footerSection = document.querySelector('.footer');
let mobileSection = document.querySelector('.mobile_section');
let burgerMenu = document.querySelector('.header_more');


burgerMenu.addEventListener('click', () => {
    if (mainSection === null) {
        footerSection.classList.toggle('hide');
        mobileSection.classList.toggle('hide');
        mainSectionOther.classList.toggle('hide');
    } else {
        mainSection.classList.toggle('hide');
        footerSection.classList.toggle('hide');
        mobileSection.classList.toggle('hide');
    }


});