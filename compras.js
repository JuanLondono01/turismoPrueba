const input = document.getElementById('input-paquete');
const img = document.getElementById('img');
const title = document.getElementById('tituloDestino');
const text = document.getElementById('textoDestino');
const btn = document.getElementById('selBtn');
const price = document.getElementById('precio');
const buy = document.getElementById('buyBtn');

const dataText = {
    'Cartagena de Indias': {
        description:
            'Descubre la magia de la ciudad amurallada, sus coloridas calles coloniales, playas de arena blanca y una historia que enamora a cada visitante.',
        image: './imgs/carDeIn.jpg',
        price: '$543'
    },
    'San Andrés': {
        description:
            'Sumérgete en el "Mar de los Siete Colores", disfruta de sus arrecifes de coral, y vive la cultura isleña en su máxima expresión.',
        image: './imgs/sanAndres.jpg',
        price: '$654'
    },
    'Desierto de la Tatacoa': {
        description:
            'Explora los paisajes surrealistas del desierto más enigmático de Colombia, un lugar perfecto para observar estrellas y descubrir formaciones rocosas únicas.',
        image: './imgs/TatacoaSC.jpg',
        price: '$432'
    },
    'Santa Marta': {
        description:
            'Sumérgete en la historia de la ciudad más antigua de América del Sur, con playas paradisíacas y el Parque Nacional Natural Tayrona a pocos kilómetros.',
        image: './imgs/SantamartaSC.jpg',
        price: '$654'
    },
    'Serranía de la Macarena': {
        description:
            'Descubre Caño Cristales, el "río de los cinco colores", y maravíllate con su diversidad natural única en el mundo.',
        image: './imgs/MacarenaSC.jpg',
        price: '$624'
    },
    Guatapé: {
        description:
            'Sube los 740 escalones de la Piedra del Peñol y disfruta de la vista panorámica del embalse de Guatapé, un destino colorido y vibrante.',
        image: './imgs/GuatapeSC.jpg',
        price: '$756'
    },
    'San Agustín': {
        description:
            'Explora el Parque Arqueológico de San Agustín, hogar de misteriosas estatuas y monumentos de una antigua civilización precolombina.',
        image: './imgs/sanAgustin.jpg',
        price: '$734'
    },
    Barichara: {
        description:
            'Pasea por uno de los pueblos más bellos de Colombia, con su arquitectura colonial bien conservada y su ambiente tranquilo y acogedor.',
        image: './imgs/barichara.jpg',
        price: '$543'
    },
};

btn.addEventListener('click', () => {
    const destino = input.value;
    const destinoData = dataText[destino];
    if (destino == '') {
        title.textContent = 'Destino no seleccionado';
        text.textContent = '';
        img.src = '';
        price.textContent = '';
        img.classList.remove('active')
        buy.classList.remove('active')
    } else {
        if (destinoData) {
            title.textContent = destino;
            text.textContent = destinoData.description;
            img.classList.add('active')
            img.src = destinoData.image;
            price.textContent = destinoData.price;
            buy.classList.add('active')
        } else {
            console.log('Destino no reconocido');
        }
    }
});
