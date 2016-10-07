(function () {
    'use strict';

    const routes = {
        '#/home' : '/partials/home.html',
        '#/contact' : '/partials/contact.html',
        '#/projects' : '/partials/projects.html'
    }

    var payLoad =  function (e) {
        var http = new XMLHttpRequest();

        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById('page').innerHTML = this.responseText;
            }
        };

        if (!(window.location.hash))
            window.location.hash = '/home'

        http.open('GET', routes[window.location.hash], true);
        http.send();
    };

    window.addEventListener('load', payLoad)
    window.addEventListener('hashchange', payLoad);

})();
