document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "images/IMG_2544.jpeg",
        "images/IMG_2262.jpg",
        "images/IMG_2544.jpeg",
        "images/IMG_2262.jpg"
    ];

    let index = 0;
    const slide = document.getElementById("slide");

    function nextImage() {
        index = (index + 1) % images.length;
        slide.src = images[index];
    }

    // Change image every 3 seconds
    setInterval(nextImage, 3000);
});
