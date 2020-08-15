let section = document.getElementById('circle');
window.addEventListener('scroll', function() {
    let value = window.scrollY;
    section.style.clipPath = 'circle(' + value + 'px at center)';
});