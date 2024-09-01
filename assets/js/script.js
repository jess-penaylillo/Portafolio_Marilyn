document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//imágenes
const images = [
    '/assets/img/img1.jpg',
    '/assets/img/img2.jpg',
    '/assets/img/img3.jpg'
];

let currentIndex = 0;


function changeImage() {
    const imgElement = document.getElementById('marilynImage');
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex];
}

// Cambiar imagen cada 5 segundos
setInterval(changeImage, 5000);


document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#marilynImage').addEventListener('click', function () {
        alert('¡UPS! Haz echo click en mi imagen');
    });
});