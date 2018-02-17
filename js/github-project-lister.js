const http = new XMLHttpRequest();
const projectsEl = document.getElementById('projects');

http.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        const list = JSON.parse(this.responseText);
        console.log(list);
        list.map( function (repo) {
            if (repo.fork !== true) {
                projectsEl.innerHTML += `
                    <li>
                        <a href="${repo.clone_url}">
                            <h3>${repo.name}
                                <small>
                                    <img src="/img/glyphicons_free/glyphicons/png/glyphicons-50-star.png" alt="stars" /> <b>${repo.stargazers_count}</b>
                                </small>
                            </h3>
                        </a>
                        <br />
                        <p>${repo.description}</p>
                    </li>
                `;
            }
        })
    }
};
http.open('GET', 'https://api.github.com/users/shantanu404/repos', true);
http.send();
