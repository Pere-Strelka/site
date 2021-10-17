var root = document.querySelector(':root');
const deviceType = getDeviceType();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getOffset(el) {
    var _x = 0;
    var _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}

async function copyToClipboard(str, parent_el_id) {    
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    el.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(el.value);
    
    var text = document.createElement("div");
    text.classList.add("card-banner-text");
    text.classList.add("card-banner-text-copied");
    text.innerHTML = 'COPIED: ' + el.value;
    document.getElementById(parent_el_id).appendChild(text);

    await sleep(2000);
    document.getElementById(parent_el_id).removeChild(text);
    document.body.removeChild(el);
}

function makeNavProperties(root, el_name) {
    root.style.setProperty('--' + el_name + '-offset', getOffset(document.getElementById(el_name)).left + 'px');
    root.style.setProperty('--' + el_name + '-width', document.getElementById(el_name).offsetWidth + 'px');
}

function getDeviceType() {
    const userAgent = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
        console.log("tablet");
        return "tablet";
    }
    if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(userAgent)) {
        console.log("mobile");
        return "mobile";
    }
    console.log("desktop");
    return "desktop";
};

function initProperties() {
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
        root.style.setProperty('--nav-btn-text-size', '3rem');
        root.style.setProperty('--header-nickname-size', '6rem');
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

window.addEventListener('resize', function (event) {
    makeNavProperties(root, 'nav-btn-main');
    makeNavProperties(root, 'nav-btn-portfolio');
    makeNavProperties(root, 'nav-btn-contacts');
});

