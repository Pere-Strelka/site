function initPortfolio() {
    initPortfolioProperties();
}

function initPortfolioProperties() {
    if (deviceType == 'mobile') {
        document.getElementById('cards_div').classList.add("cards-mobile-grid");
        root.style.setProperty('--card-height', '26rem');
        root.style.setProperty('--card-width', '100%');
        root.style.setProperty('--card-font-size', '1.7rem');
        root.style.setProperty('--card-title-font-size', '2.75rem');
        root.style.setProperty('--logo-size', '3.5rem');
        root.style.setProperty('--card-img-display', 'none');
        root.style.setProperty('--card-padding', '2rem');
    } else {
        document.getElementById('cards_div').classList.add("cards-desktop-grid");
        root.style.setProperty('--card-height', '16rem');
        root.style.setProperty('--card-width', 'calc(100% - var(--card-height))');
        root.style.setProperty('--card-font-size', '1.1rem');
        root.style.setProperty('--card-title-font-size', '1.5rem');
        root.style.setProperty('--logo-size', '1.75rem');
        root.style.setProperty('--card-img-display', 'inline-block');
        root.style.setProperty('--card-padding', '1.2rem');
    }
}