'use strict';

function burgerMenu(selector) {
    const menu = document.querySelector(selector),
        burgerButton = document.querySelector('.burger_menu__button');

    burgerButton.addEventListener('click', (e) => {
        e.preventDefault();
        burgerButton.classList.toggle('burger_menu__active');
        if (menu.style.visibility === 'visible') {
            menu.style.visibility = 'hidden';
            menu.style.height = '0';

        } else {
            menu.style.visibility = 'visible';
            menu.style.height = '100%';
        }
    })
}

function loginForm(selector) {
    const loginButton = document.querySelector(selector),
        authForm = document.querySelector('.auth'),
        closeAuthFormButton = document.getElementById('close_auth'),
        loginTitle = document.getElementById('login_title'),
        registrationTitle = document.getElementById('reg_title'),
        loginForm = document.querySelector('.login_form'),
        registrationForm = document.querySelector('.registration_form');

    function setDefaultToLogin() {
        loginForm.style.display = 'block';
        registrationForm.style.display = 'none';
        registrationTitle.classList.remove('title__login-active');
        loginTitle.classList.add('title__login-active');
    }

    loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        authForm.style.top = '0';
        document.body.style.overflow = "hidden";
    });

    closeAuthFormButton.addEventListener('click', (e) => {
        e.preventDefault();
        authForm.style.top = '-150%';
        document.body.style.overflow = "auto";
        setDefaultToLogin();
    });

    loginTitle.addEventListener('click', (e) => {
        e.preventDefault();
        setDefaultToLogin();
    });

    registrationTitle.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'none';
        registrationForm.style.display = 'block';
        registrationTitle.classList.add('title__login-active');
        loginTitle.classList.remove('title__login-active');
    })
}

burgerMenu('.menu');
loginForm('#login_btn');
