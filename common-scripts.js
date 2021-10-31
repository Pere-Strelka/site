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
        root.style.setProperty('--header-nickname-width', 'auto');
        root.style.setProperty('--header-nickname-text-align', 'unset');
        root.style.setProperty('--nav-btn-text-size', '1.5rem');
        root.style.setProperty('--header-nickname-size', '3rem');
        root.style.setProperty('--header-nickname-margin-left', '10%');
        root.style.setProperty('--body-width', '94%');
    } else if (deviceType == 'mobile') {
        for (index = 0; index < buttons.length; index++) {
            buttons[index].classList.add('nav-btn-mobile');
        }
        root.style.setProperty('--footer-display', 'none');
        root.style.setProperty('--header-nickname-width', '100%');
        root.style.setProperty('--header-nickname-text-align', 'center');
        root.style.setProperty('--nav-btn-text-size', '2.25rem');
        root.style.setProperty('--header-nickname-size', '4.5rem');
        root.style.setProperty('--header-nickname-margin-left', 'auto');
        root.style.setProperty('--body-width', '80%');
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
        root.style.setProperty('--body-width', '80%');
    }
}

// window.addEventListener('resize', function (event) {
//    countCardsGrid()
// });

