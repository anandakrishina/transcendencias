
const imageFiles = [

];

// Ponto onde as imagens serão inseridas
const galleryContainer = document.getElementById('gallery');

// Caminho base para as imagens
const basePath = 'assets/img/oficinas/oficinaErick/ra/';

// Função para criar os elementos HTML das imagens
function createImageElement(imageFile) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('tt-grid-item', 'isotope-item');

    const itemInner = document.createElement('div');
    itemInner.classList.add('ttgr-item-inner');

    const galleryItem = document.createElement('a');
    galleryItem.href = `${basePath}${imageFile}`;
    galleryItem.classList.add('tt-gallery-item', 'lg-trigger');
    galleryItem.setAttribute('data-cursor', 'View');

    const galleryItemInner = document.createElement('div');
    galleryItemInner.classList.add('tt-gallery-item-inner');

    const galleryImageWrap = document.createElement('div');
    galleryImageWrap.classList.add('tt-gallery-image-wrap', 'anim-zoomin');

    const figure = document.createElement('figure');
    figure.classList.add('tt-gallery-image', 'ttgr-height');

    const img = document.createElement('img');
    img.src = `${basePath}${imageFile}`;
    img.alt = 'image';

    // Montando os elementos
    figure.appendChild(img);
    galleryImageWrap.appendChild(figure);
    galleryItemInner.appendChild(galleryImageWrap);
    galleryItem.appendChild(galleryItemInner);
    itemInner.appendChild(galleryItem);
    gridItem.appendChild(itemInner);

    // Adiciona o gridItem no container da galeria
    galleryContainer.appendChild(gridItem);
}

// Loop para criar os elementos para cada imagem
imageFiles.forEach(createImageElement);
