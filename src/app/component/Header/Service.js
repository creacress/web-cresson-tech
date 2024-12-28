document.addEventListener('DOMContentLoaded', () => {
    const services = [
        {
            title: 'Service 1',
            description: 'Ceci est une explication détaillée du Service 1. Il offre des fonctionnalités A, B et C.'
        },
        {
            title: 'Service 2',
            description: 'Ceci est une explication détaillée du Service 2. Il se concentre sur les aspects D, E et F.'
        },
        {
            title: 'Service 3',
            description: 'Ceci est une explication détaillée du Service 3. Il inclut des éléments G, H et I.'
        }
    ];

    const serviceContainer = document.createElement('div');
    serviceContainer.classList.add('service-container');

    services.forEach((service, index) => {
        const serviceElement = document.createElement('div');
        serviceElement.classList.add('service');
        serviceElement.innerText = service.title;

        serviceElement.addEventListener('click', () => {
            alert(service.description);
        });

        serviceContainer.appendChild(serviceElement);
    });

    document.body.appendChild(serviceContainer);
});