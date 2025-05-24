// Kích hoạt tự động chuyển động cho Bootstrap Carousel banner
document.addEventListener('DOMContentLoaded', function () {
    var heroCarousel = document.querySelector('#heroCarousel');
    if (heroCarousel) {
        var carousel = new bootstrap.Carousel(heroCarousel, {
            interval: 3000, // 3 giây chuyển slide
            ride: 'carousel',
            pause: false,   // Không dừng khi rê chuột
            wrap: true      // Lặp lại vô hạn
        });
    }
});