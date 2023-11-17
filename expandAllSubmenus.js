function toggleSubmenus(button) {
    var parentLi = button.parentElement;
    var submenus = parentLi.querySelectorAll('.submenu, .sub-submenu, .sub-sub-submenu');

    submenus.forEach(function (submenu) {
        var submenuLevel = getSubmenuLevel(submenu);

        if (submenuLevel === 1 && parentLi.classList.contains('upper')) {
            toggleVisibility(submenu);
        } else if (submenuLevel === 2 && parentLi.classList.contains('submenu')) {
            toggleVisibility(submenu);
        } else if (submenuLevel === 3 && parentLi.classList.contains('sub-submenu')) {
            toggleVisibility(submenu);
        }
    });
}

function getSubmenuLevel(submenu) {
    var levels = ['submenu', 'sub-submenu', 'sub-sub-submenu'];
    for (var i = 0; i < levels.length; i++) {
        if (submenu.classList.contains(levels[i])) {
            return i + 1;
        }
    }
    return 0;
}

function toggleVisibility(submenu) {
    if (getComputedStyle(submenu).visibility === 'visible') {
        submenu.style.visibility = 'hidden';
        submenu.style.height = '0';
    } else {
        submenu.style.visibility = 'visible';
        submenu.style.height = 'auto';
    }
}