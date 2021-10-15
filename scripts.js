function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}

function makeNavProperties( root, el_name ) {
    root.style.setProperty('--' + el_name + '-offset', getOffset( document.getElementById(el_name) ).left + 'px');
    root.style.setProperty('--' + el_name + '-width', document.getElementById(el_name).offsetWidth + 'px');
}

var root = document.querySelector(':root');
window.addEventListener('resize', function(event){
    makeNavProperties( root, 'nav-btn-main');
    makeNavProperties( root, 'nav-btn-portfolio');
    makeNavProperties( root, 'nav-btn-contacts');
});
