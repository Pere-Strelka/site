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

async function copyEmailToClipboard(str, parent_el_id) {
    navigator.clipboard.writeText(str);
    
    var text = document.createElement("div");
    text.classList.add("card-banner-text");
    text.classList.add("card-banner-text-copied");
    text.innerHTML = 'COPIED: ' + str;
    document.getElementById(parent_el_id).appendChild(text);

    await sleep(2000);
    text.classList.add("card-banner-text-copied--delete");

    var dur = 250;
    root.style.setProperty('--text-copied-disappearing-duration', dur + 'ms');
    await sleep(dur);
    text.remove();
}