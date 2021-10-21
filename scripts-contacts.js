function initContactsProperties() {
    if (deviceType == 'mobile') {
        document.getElementById('cards_div').classList.add("cards-mobile-grid");
        root.style.setProperty('--card-size', '23rem');
        root.style.setProperty('--card-banner-font-size', '2.25rem');
    } else {
        document.getElementById('cards_div').classList.add("cards-desktop-grid");
        root.style.setProperty('--card-size', '18rem');
        root.style.setProperty('--card-banner-font-size', '1.2rem');
    }
}