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
        document.getElementById('cards_div').classList.add("cards-mobile-grid");
        root.style.setProperty('--card-size', '26rem');
        root.style.setProperty('--card-banner-font-size', '2.25rem');
    } else {
        document.getElementById('cards_div').classList.add("cards-desktop-grid");
        root.style.setProperty('--card-size', '18rem');
        root.style.setProperty('--card-banner-font-size', '1.2rem');  
    }
}