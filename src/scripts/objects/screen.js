const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                            <img src="${user.avatarUrl}" alt= "Foto do perfil do usuário" />
                            <div class="data">
                                <h1>${user.name ?? 'Não possui nome cadastrado 😭'}</h1>
                                <p>${user.bio ?? 'Não possui bio cadastrada 😭'}</p>
                                <br>
                                <i class="fas fa-users"></i>
                                <h3>Followers: ${user.followers ?? 'Não tem seguidores 🐺'} </h3>
                                <h3>Following: ${user.following ?? 'Não segue ninguem'} </h3>                             
                            </div>
                        </div>`

        let EventsItens = ''
        let i = 1;
        user.events.forEach(event => {
            if(i <= 10 & event.type === 'PushEvent' || i <=10 & event.type === 'CreateEvent'){
                EventsItens += `<li><p style="font-weight: 800;">${event.repo.name}: &nbsp;&nbsp; <span>- ${event.payload.description ?? 'Sem mensagem de commit'}</span></p></li>`;
                i++
            }
        })

        if(EventsItens !==''){
            this.userProfile.innerHTML += `<div>
                                            <h2>Eventos</h2>
                                            <br>
                                            <ul>${EventsItens}</ul>
                                            </div>`
        }

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li>
            <a href="${repo.html_url}" target="_blank">${repo.name} 
            <br> <br>
            <span>🍴${repo.forks_count}</span> <span>⭐${repo.stargazers_count}</span> <span>👀${repo.watchers_count}</span> <span>🧑‍💻 ${repo.language}</span></a></li>`)

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositórios</h2>
                                            <ul>${repositoriesItens}</ul>
                                            </div>`
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML = '<h3>Usuário não encontrado!</h3>'
    }
}

export { screen }