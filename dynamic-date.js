// Sets all .verified-date elements to today's date
document.addEventListener('DOMContentLoaded', function() {
    var els = document.querySelectorAll('.verified-date');
    var now = new Date();
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var formatted = months[now.getMonth()] + ' ' + now.getDate() + ', ' + now.getFullYear();
    for (var i = 0; i < els.length; i++) {
        els[i].textContent = formatted;
    }
});
