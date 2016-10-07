(function () {
    'use strict';

    const routes = window.routes;

    var payLoad =  function (e) {
        const http = new XMLHttpRequest();
        const pageEl = document.getElementById('page');

        http.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                pageEl.innerHTML = this.responseText;

                // help will be apreciated :)
                if (window.location.hash === '#/projects') {
                    var container = document.createElement('div');
                    container.style = 'width:0px; height: 0px;';
                    var lister = document.createElement('script');
                    lister.src = '/js/github-project-lister.js';
                    lister.charset = 'utf8';
                    container.appendChild(lister);
                    pageEl.appendChild(container);
                }

            } else if (this.status === 404){
                window.location.pathname = '/404.html';
            }
        };

        if (!(window.location.hash))
            window.location.hash = '/home'

        http.open('GET', routes[window.location.hash], true);
        http.send();

    };

    window.addEventListener('load', payLoad);
    window.addEventListener('hashchange', payLoad);

    document.getElementById('page').addEventListener('partial-loaded', function (e) {
        console.log(e);
    });

})();
