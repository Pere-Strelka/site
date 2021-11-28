var root = document.querySelector(':root');
const deviceType = getDeviceType();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getDeviceType() {
    const userAgent = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
        return "tablet";
    }
    if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(userAgent)) {
        return "mobile";
    }
    return "desktop";
};

function initDefaultProperties() {
    var buttons = document.getElementsByClassName('nav-btn');
    
    if (deviceType == "tablet") {
        for (index = 0; index < buttons.length; index++) {
            buttons[index].classList.add('nav-btn-tablet');
        }
        root.style.setProperty('--footer-display', 'flex');
        root.style.setProperty('--header-height', '12.5vh');
        root.style.setProperty('--text-font-size', '1.1rem');
        root.style.setProperty('--nav-btn-text-size', '1.5rem');
        root.style.setProperty('--header-nickname-size', '3rem');
    } else if (deviceType == 'mobile') {
        for (index = 0; index < buttons.length; index++) {
            buttons[index].classList.add('nav-btn-mobile');
        }
        root.style.setProperty('--footer-display', 'none');
        root.style.setProperty('--header-height', 'max(10vh, 5rem)');
        root.style.setProperty('--text-font-size', 'min(3.5vh, 1.7rem)');
        root.style.setProperty('--nav-btn-text-size', 'min(4vh, 2.25rem)');
        root.style.setProperty('--header-nickname-size', 'min(8vh, 4rem)');
    } else {
        for (index = 0; index < buttons.length; index++) {
            buttons[index].classList.add('nav-btn-desktop');
        }
        root.style.setProperty('--footer-display', 'flex');
        root.style.setProperty('--header-height', '15vh');
        root.style.setProperty('--text-font-size', '1.1rem');
        root.style.setProperty('--nav-btn-text-size', '1.1rem');
        root.style.setProperty('--header-nickname-size', '2.5rem');
    }
}

// window.addEventListener('resize', function (event) {
//    countCardsGrid()
// });

