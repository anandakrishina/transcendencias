
const imageFiles = [
    'oficina_067.JPG', 'oficina_028.JPG', 'oficina_081.JPG', 'oficina_088.JPG', 'oficina_069.JPG', 'oficina_087.JPG', 'oficina_041.JPG', 'oficina_027.JPG', 'oficina_078.JPG', 'oficina_075.JPG', 'oficina_055.JPG', 'oficina_024.JPG', 'oficina_036.JPG', 'oficina_050.JPG', 'oficina_044.JPG', 'oficina_063.JPG', 'oficina_039.JPG', 'oficina_042.JPG', 'oficina_080.JPG', 'oficina_057.JPG', 'oficina_070.JPG', 'oficina_052.JPG', 'oficina_065.JPG', 'oficina_048.JPG', 'oficina_071.JPG', 'oficina_056.JPG', 'oficina_030.JPG', 'oficina_045.JPG', 'oficina_032.JPG', 'oficina_077.JPG', 'oficina_025.JPG', 'oficina_066.JPG', 'oficina_053.JPG', 'oficina_059.JPG', 'oficina_074.JPG', 'oficina_091.JPG', 'oficina_090.JPG', 'oficina_031.JPG', 'oficina_092.JPG', 'oficina_064.JPG', 'oficina_029.JPG', 'oficina_061.JPG', 'oficina_046.JPG', 'oficina_033.JPG', 'oficina_084.JPG', 'oficina_065.JPG', 'oficina_049.JPG', 'oficina_058.JPG', 'oficina_023.JPG', 'oficina_068.JPG', 'oficina_082.JPG', 'oficina_035.JPG', 'oficina_073.JPG', 'oficina_072.JPG', 'oficina_086.JPG', 'oficina_038.JPG', 'oficina_051.JPG', 'oficina_060.JPG', 'oficina_076.JPG', 'oficina_089.JPG', 'oficina_054.JPG', 'oficina_026.JPG', 'oficina_037.JPG', 'oficina_040.JPG', 'oficina_062.JPG', 'oficina_047.JPG', 'oficina_043.JPG', 'oficina_085.JPG'
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
