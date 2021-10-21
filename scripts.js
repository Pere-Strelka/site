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
    if (deviceType == "tablet") {
        root.style.setProperty('--header-nickname-width', 'auto');
        root.style.setProperty('--header-nickname-text-align', 'unset');
        root.style.setProperty('--nav-btn-text-size', '1.5rem');
        root.style.setProperty('--header-nickname-size', '3rem');
        root.style.setProperty('--header-nickname-margin-left', '2em');
        root.style.setProperty('--nav-btn-padding', '2.5rem');
    } else if (deviceType == 'mobile') {
        root.style.setProperty('--header-nickname-width', '100%');
        root.style.setProperty('--header-nickname-text-align', 'center');
        root.style.setProperty('--nav-btn-text-size', '2.25rem');
        root.style.setProperty('--header-nickname-size', '4.5rem');
        root.style.setProperty('--header-nickname-margin-left', 'auto');
        root.style.setProperty('--nav-btn-padding', '2rem');
    } else {
        root.style.setProperty('--header-nickname-width', 'auto');
        root.style.setProperty('--header-nickname-text-align', 'unset');
        root.style.setProperty('--nav-btn-text-size', '1.1rem');
        root.style.setProperty('--header-nickname-size', '2.5rem');
        root.style.setProperty('--header-nickname-margin-left', '2em');
        root.style.setProperty('--nav-btn-padding', '3.5rem');
    }
}

// window.addEventListener('resize', function (event) {
//    countCardsGrid()
// });

