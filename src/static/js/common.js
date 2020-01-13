console.log('Hello!');

function burgerMenu(selector) {
    const menu = document.querySelector(selector),
        burgerButton = document.querySelector('.burger_menu__button');

    burgerButton.addEventListener('click', (e) => {
        e.preventDefault();
        burgerButton.classList.toggle('burger_menu__active');
        if (menu.style.display !== 'flex') {
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
        }
    })
}

burgerMenu('.menu');
