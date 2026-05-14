// Sets all .verified-date elements to the actual pricing verification date
document.addEventListener('DOMContentLoaded', function() {
    var els = document.querySelectorAll('.verified-date');
    for (var i = 0; i < els.length; i++) {
        els[i].textContent = 'May 14, 2026';
    }
});
