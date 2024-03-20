// Função para mostrar incidentes mais recentes
function showRecentIncidents() {
    var incidentList = document.getElementById('incident-list');
    // Limpa a lista de incidentes
    incidentList.innerHTML = '';
    // Adiciona os incidentes mais recentes à lista
    crimeData.slice().reverse().forEach(function(incident) {
        var listItem = document.createElement('li');
        listItem.textContent = incident.type + ': ' + incident.location;
        incidentList.appendChild(listItem);
    });
}

// Função para classificar incidentes em ordem alfabética
function sortIncidentsAZ() {
    var incidentList = document.getElementById('incident-list');
    // Limpa a lista de incidentes
    incidentList.innerHTML = '';
    // Classifica os incidentes em ordem alfabética
    crimeData.sort(function(a, b) {
        return a.type.localeCompare(b.type);
    }).forEach(function(incident) {
        var listItem = document.createElement('li');
        listItem.textContent = incident.type + ': ' + incident.location;
        incidentList.appendChild(listItem);
    });
}

// Função para ordenar os incidentes
function sortIncidents() {
    var sortSelect = document.getElementById('sort-select');
    var sortValue = sortSelect.value;
    if (sortValue === 'recente') {
        // Ordenar por mais recente
        crimeData.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortValue === 'az') {
        // Ordenar alfabeticamente
        crimeData.sort((a, b) => a.type.localeCompare(b.type));
    }
    populateIncidents();
}

// Função para filtrar os incidentes
function filterIncidents() {
    var filterInput = document.getElementById('filter-input');
    var filterValue = filterInput.value.toLowerCase();
    var filteredIncidents = crimeData.filter(incident => incident.type.toLowerCase().includes(filterValue));
    populateIncidents(filteredIncidents);
}

// Função para preencher a lista de incidentes
function populateIncidents(incidents = crimeData) {
    var incidentList = document.getElementById('incident-list');
    incidentList.innerHTML = '';
    incidents.forEach(function(incident) {
        var listItem = document.createElement('li');
        listItem.textContent = incident.type + ': ' + incident.location;
        incidentList.appendChild(listItem);
    });
}
