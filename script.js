document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const overlay = document.getElementById('overlay');
    const zoomedImg = document.getElementById('zoomedImg');

    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            const imgUrl = item.getAttribute('src');
            zoomedImg.setAttribute('src', imgUrl);
            overlay.style.display = 'flex';
        });
    });

    overlay.addEventListener('click', function () {
        overlay.style.display = 'none';
    });
});
