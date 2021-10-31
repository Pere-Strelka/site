async function copyEmailToClipboard(str, parent_el_id) {
    navigator.clipboard.writeText(str);
    
    var text = document.createElement("div");
    text.classList.add("card-banner-text");
    text.classList.add("card-banner-text-copied");
    text.innerHTML = 'СКОПИРОВАНО: ' + str;
    document.getElementById(parent_el_id).appendChild(text);

    await sleep(2000);
    var dur = 250;
    root.style.setProperty('--text-copied-disappearing-duration', dur + 'ms');
    text.classList.add("card-banner-text-copied--delete");
    
    await sleep(dur);
    text.remove();
}