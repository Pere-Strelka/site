var root = document.querySelector(':root');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function initDefaultProperties() {
    var buttons = document.getElementsByClassName('nav-btn');
    if (navigator.userAgentData.mobile) {
        for (index = 0; index < buttons.length; index++) {
            buttons[index].classList.add('nav-btn-mobile');
        }
        root.style.setProperty('--footer-display', 'none');
        root.style.setProperty('--header-nickname-width', '100%');
        root.style.setProperty('--header-nickname-text-align', 'center');
        root.style.setProperty('--nav-btn-text-size', '2.25rem');
        root.style.setProperty('--header-nickname-size', '4.5rem');
        root.style.setProperty('--header-nickname-margin-left', 'auto');
    } else {
        for (index = 0; index < buttons.length; index++) {
            buttons[index].classList.add('nav-btn-desktop');
        }
        root.style.setProperty('--footer-display', 'flex');
        root.style.setProperty('--header-nickname-width', 'auto');
        root.style.setProperty('--header-nickname-text-align', 'unset');
        root.style.setProperty('--nav-btn-text-size', '1.1rem');
        root.style.setProperty('--header-nickname-size', '2.5rem');
        root.style.setProperty('--header-nickname-margin-left', '10%');
    }
}

// window.addEventListener('resize', function (event) {
//    countCardsGrid()
// });

