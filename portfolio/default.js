function initPortfolio() {
    initPortfolioProperties();
}

function initPortfolioProperties() {
    if (deviceType == 'mobile') {
        document.getElementById('cards_div').classList.add("cards-mobile-grid");
        root.style.setProperty('--card-height', '21rem');
        root.style.setProperty('--card-font-size', '2.2rem');
        root.style.setProperty('--card-title-font-size', '2.75rem');
        root.style.setProperty('--logo-size', '3.5rem');
    } else {
        document.getElementById('cards_div').classList.add("cards-desktop-grid");
        root.style.setProperty('--card-height', '16rem');
        root.style.setProperty('--card-font-size', '1.1rem');
        root.style.setProperty('--card-title-font-size', '1.5rem');
        root.style.setProperty('--logo-size', '1.75rem');
    }
}