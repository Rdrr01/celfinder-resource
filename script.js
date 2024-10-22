const containers = document.querySelectorAll('.container');

containers.forEach(container => {
    container.addEventListener('mouseenter', () => {
        containers.forEach(c => {
            if (c !== container) {
                
                const containerIndex = Array.from(containers).indexOf(container);
                const totalContainers = containers.length;
                
                
                const offset = (containerIndex - (totalContainers / 2)) * 15; // Ajusta el valor para la distancia

                // Mover contenedores en dirección opuesta
                c.style.transform = `translateX(${-offset}px)`; 
            }
        });
    });

    container.addEventListener('mouseleave', () => {
        containers.forEach(c => {
            c.style.transform = 'translateX(0)'; // Regresar a la posición original
        });
    });
});