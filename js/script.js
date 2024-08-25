document.addEventListener('DOMContentLoaded', () => {
    const Agentes = document.getElementById('agentes');
    const Procurar = document.getElementById('pesquisar');
    let agents = [];

    function fetchAgentes() {
        fetch('https://valorant-api.com/v1/agents')
        .then(response => response.json())
        .then(data => {
            agents = data.data;
            Card (agents);
        })
    }

    function Card (AgentesValorant) {
        Agentes.innerHTML = AgentesValorant.map(agent => 
            `<div class="agent">
                <img src="${agent.displayIcon}" alt="${agent.displayName}">
                <h2>${agent.displayName}</h2>
                <p class="description">${agent.description}</p>
                <p class="role">Class: ${agent.role ? agent.role.displayName : 'No class'}</p>
            </div>`
        );
    }

    function Pesquisar() {
        const busca = Procurar.value.toLowerCase();
        const AgentesValorant = agents.filter(agent => 
            agent.displayName.toLowerCase().includes(busca)
        );
        Card (AgentesValorant);
    }

    Procurar.addEventListener('input', Pesquisar);

    fetchAgentes();
});
