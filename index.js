document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseover', function() {
        const submenu = item.querySelector('.submenu');
        if (submenu) {
            submenu.style.display = 'block';
        }
    });

    item.addEventListener('mouseleave', function() {
        const submenu = item.querySelector('.submenu');
        if (submenu) {
            submenu.style.display = 'none';
        }
    });
});

alert