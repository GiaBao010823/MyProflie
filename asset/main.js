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

// Hiệu ứng animation khi load trang
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
        const animatedElements = document.querySelectorAll('.hero-animate-left, .hero-animate-right, .hero-animate-fade');
        animatedElements.forEach(el => {
            el.classList.add('animate-show');
        });
    }, 300);
});

// Hiệu ứng typing text
document.addEventListener('DOMContentLoaded', function() {
  // Đợi 1.5 giây sau khi trang load xong
  setTimeout(() => {
    const options = {
      strings: ['Developer', 'Designer', 'Freelancer', 'Content Creator'],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    };
    
    const typed = new Typed('#changing-text', options);
  }, 1500);
});