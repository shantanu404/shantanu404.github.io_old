for (var el of document.getElementsByClassName('nav-item')) {
    el.addEventListener('click', function (e) {
        document.querySelector('.active').className = 'nav-item';
        this.className = 'nav-item active'
        try {
            document.querySelector('.navigation.nav-active').className = 'navigation';
        } catch (e) {
            // it's probably a desktop
        }
    });
}

document.getElementById('nav-btn').addEventListener('click', function (e) {
    var navigation = document.querySelector('.navigation');
    if (navigation.className.includes('nav-active')) {
        navigation.className = 'navigation';
    } else {
        navigation.className = 'navigation nav-active';
    }
});
