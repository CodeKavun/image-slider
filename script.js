const imagesHTML = document.querySelector('.images');
let selectedImage = 0;

async function getData() {
    const response = await fetch('https://randomuser.me/api/?results=3');
    const data = await response.json();
    
    data.results.forEach(element => {
        const image = document.createElement('img');
        image.src = element.picture.large;
        image.alt = element.name.first + ' ' + element.name.last;
        imagesHTML.append(image);
    });
    
    console.log(imagesHTML);
}

const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');

leftButton.addEventListener('click', () => {
    selectedImage--;
    if (selectedImage < 0) selectedImage = imagesHTML.children.length - 1;
    imagesHTML.scrollLeft = 200 * selectedImage;
});
        
rightButton.addEventListener('click', () => {
    selectedImage++;
    if (selectedImage >= imagesHTML.children.length) selectedImage = 0;
    imagesHTML.scrollLeft = 200 * selectedImage;
});

getData();
