const mobileMenuButton = document.querySelector("#mobile-menu-toggle");
const burgerIcon = document.querySelector("#hamburger-icon");
const mobileMenu = document.querySelector("#mobile-menu");
let opened = false;
mobileMenuButton.addEventListener('click', function(event) {
    opened = !opened;

    if (opened) {
        burgerIcon.setAttribute('src', 'img/Menu-2.png');
        mobileMenu.classList.remove('inactive');
        mobileMenu.classList.add('active');
    } else {
        burgerIcon.setAttribute('src', 'img/Menu.png');
        mobileMenu.classList.add('inactive');
        mobileMenu.classList.remove('active');

    }

} );