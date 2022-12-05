window.onclick = function (event) {
    const count = document.querySelector('.notification-count');
    const target = event.target;
    const unread = document.querySelectorAll('.unread');
    if (target.classList.contains('markedAllread')) {
        unread.forEach(function (e) {
            count.innerHTML = 0;
            count.classList.add('count-zero');
            e.classList.remove('unread'); 
        });
    }
    else if (target.parentNode.parentNode.classList.contains('unread')) {
        target.parentNode.parentNode.classList.remove('unread');
        count.innerHTML = unread.length - 1;
        if (count.innerHTML == 0) {
            count.classList.add('count-zero');
        }
    }
}