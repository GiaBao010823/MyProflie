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

document.addEventListener('DOMContentLoaded', function() {
  // 1. KHỞI TẠO CÁC COMPONENT
  loadComponents();
  
  // 2. HIỆU ỨNG ANIMATION CHO HERO SECTION
  initHeroAnimations();
  
  // 3. KHỞI TẠO TYPING EFFECT
  initTypingEffect();
  
  // 4. THIẾT LẬP SCROLL EFFECTS
  setupScrollEffects();
  
  // 5. NÚT BACK TO TOP
  setupBackToTop();
  
  // ===== FUNCTION DEFINITIONS =====
  
  // Load các component
  function loadComponents() {
    // Header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
      fetch('components/header.html')
        .then(response => response.text())
        .then(data => {
          headerPlaceholder.innerHTML = data;
          setupMobileMenu(); // Khởi tạo mobile menu sau khi load header
        })
        .catch(error => console.error('Error loading header:', error));
    }
    // About Section
    const aboutPlaceholder = document.getElementById('about-placeholder');
    if (aboutPlaceholder) {
      fetch('components/about.html')
        .then(response => response.text())
        .then(data => {
          aboutPlaceholder.innerHTML = data;
        })
        .catch(error => console.error('Error loading about section:', error));
    }

    // Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
      fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
          footerPlaceholder.innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
    }
  }
  
  // Setup mobile menu
  function setupMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('open');
      });
    }
  }
  
  // Hiệu ứng animation cho hero section
  function initHeroAnimations() {
    setTimeout(() => {
      const animatedElements = document.querySelectorAll(
        '.hero-animate-left, .hero-animate-right, .hero-animate-fade'
      );
      animatedElements.forEach(el => {
        el.classList.add('animate-show');
      });
    }, 300); // Delay ngắn để đảm bảo trang đã render
  }
  
  // Hiệu ứng typing text
  function initTypingEffect() {
    // Đảm bảo thư viện Typed.js đã được load
    if (typeof Typed !== 'undefined') {
      setTimeout(() => {
        const typingElement = document.getElementById('typing-text');
        
        if (typingElement) {
          new Typed('#typing-text', {
            strings: [
              'Web Developer',
              'UI/UX Designer',
              'Frontend Developer',
              'React Developer',
              'Freelancer'
            ],
            typeSpeed: 80,
            backSpeed: 40,
            backDelay: 1500,
            startDelay: 500,
            loop: true,
            showCursor: true,
            cursorChar: '|',
            autoInsertCss: true
          });
        }
      }, 1500);
    } else {
      console.error('Typed.js library not loaded. Please include the script in your HTML.');
    }
  }
  
  // Thiết lập scroll effects
  function setupScrollEffects() {
    window.addEventListener('scroll', function() {
      // Header scroll effect
      const header = document.getElementById('main-header');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
      
      // Highlight active nav item based on scroll position
      highlightNavOnScroll();
      
      // Animation cho các phần tử khi scroll đến
      animateOnScroll();
    });
  }
  
  // Highlight nav link khi scroll đến section tương ứng
  function highlightNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (sections.length > 0 && navLinks.length > 0) {
      let currentSection = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === '#' + currentSection || (currentSection === '' && href === '#')) {
          link.classList.add('active');
        }
      });
    }
  }
  
  // Animation cho các phần tử khi scroll đến
  function animateOnScroll() {
    const elements = document.querySelectorAll('.scroll-animate');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight * 0.9) {
        element.classList.add('animate-show');
      }
    });
  }
  
  // Nút Back to Top
  function setupBackToTop() {
    const backToTopButton = document.getElementById('backToTop');
    
    if (backToTopButton) {
      // Hiển thị nút khi scroll xuống
      window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
          backToTopButton.classList.add('show');
        } else {
          backToTopButton.classList.remove('show');
        }
      });
      
      // Xử lý click event
      backToTopButton.addEventListener('click', function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
      });
    }
  }
  
  // Khởi tạo carousel nếu cần (sử dụng Tailwind thay vì Bootstrap)
  function initCarousel() {
    const heroCarousel = document.querySelector('#heroCarousel');
    
    if (heroCarousel) {
      // Implement carousel logic with pure JS or a Tailwind-compatible library
      console.log('Carousel initialized');
      // Code xử lý carousel ở đây
    }
  }
});
