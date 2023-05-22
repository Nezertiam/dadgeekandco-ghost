// Toggle the menu open and close when on mobile
export default function menuOpen() {
    const burgerButton = document.querySelector('.gh-burger')
    burgerButton.addEventListener('click', function () {
        const menu = document.querySelector('#header-right')
        menu.classList.toggle('-translate-y-full')
    });
}