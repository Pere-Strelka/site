function initPortfolio() {
    initPortfolioProperties();
}

function initPortfolioProperties() {
    if (deviceType == 'mobile') {
        document.getElementById('cards_div').classList.add("cards-mobile-grid");
        root.style.setProperty('--card-height', 'min(26rem, 45vh)');
        root.style.setProperty('--card-title-font-size', 'min(4vh, 2.75rem)');
        root.style.setProperty('--logo-size', 'min(7vh, 3.5rem)');
        root.style.setProperty('--card-padding', '2rem');
    } else {
        document.getElementById('cards_div').classList.add("cards-desktop-grid");
        root.style.setProperty('--card-height', '16rem');
        root.style.setProperty('--card-title-font-size', '1.5rem');
        root.style.setProperty('--logo-size', '1.75rem');
        root.style.setProperty('--card-padding', '1.2rem');
    }
}