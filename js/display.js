(function () {
    'use strict';

    for (var el of document.getElementsByClassName('nav-item')) {
        el.addEventListener('click', function (e) {
            document.querySelector('.active').className = 'nav-item';
            this.className = 'nav-item active'
        });
    }

})();
