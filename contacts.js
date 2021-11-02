function initContacts() {
    initContactsProperties();

    if (deviceType == 'mobile') {
        document.getElementById('email_banner_text').classList.add('card-banner-email-text-mobile');
    } else {
        document.getElementById('email_banner_text').classList.add('card-banner-email-text');       
    }
}

function initContactsProperties() {
    if (deviceType == 'mobile') {
        root.style.setProperty('--card-size', 'min(45vh, 26rem)');
        root.style.setProperty('--card-banner-font-size', 'min(4vh, 2.25rem)');
    } else {
        root.style.setProperty('--card-size', '18rem');
        root.style.setProperty('--card-banner-font-size', '1.2rem');  
    }
}