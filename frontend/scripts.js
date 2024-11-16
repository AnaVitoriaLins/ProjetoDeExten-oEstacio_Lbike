const API_BASE_URL = 'http://localhost:3000/api';

// Função para criar um novo recurso
async function createResource(endpoint, data) {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Erro ao criar recurso');
    }
    return await response.json();
}

// Função para obter todos os recursos
async function getAllResources(endpoint) {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`);
    if (!response.ok) {
        throw new Error('Erro ao buscar recursos');
    }
    return await response.json();
}



//função para o carrossel
let slideIndex = 0;
    
function showSlides() {
    const slides = document.querySelectorAll('.carrossel-images img'); 
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });
}

function moveSlide(n) {
    const slides = document.querySelectorAll('.carrossel-images img'); 
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlides();
}

showSlides(); 