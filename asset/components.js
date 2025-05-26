document.addEventListener('DOMContentLoaded', function() {
  // Load Header
  const headerPlaceholder = document.querySelector('#header-placeholder');
  if (headerPlaceholder) {
    fetch('components/header.html')
      .then(response => response.text())
      .then(data => {
        headerPlaceholder.innerHTML = data;
        
        // Highlight active nav item based on current page
        const currentPage = window.location.pathname.split('/').pop();
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === currentPage || 
             (currentPage === '' && href === 'index.html')) {
            link.classList.add('active', 'text-warning');
          }
        });
      })
      .catch(error => console.error('Error loading header:', error));
  }

  // Load Footer
  const footerPlaceholder = document.querySelector('#footer-placeholder');
  if (footerPlaceholder) {
    fetch('components/footer.html')
      .then(response => response.text())
      .then(data => {
        footerPlaceholder.innerHTML = data;
      })
      .catch(error => console.error('Error loading footer:', error));
  }

  // Highlight active nav item based on URL hash/fragment
  const updateActiveNavItem = () => {
    const currentHash = window.location.hash || '#'; // Lấy hash từ URL, mặc định là '#'
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
      // Xóa class active và text-warning từ tất cả nav links
      link.classList.remove('active', 'text-warning');
      
      // Nếu href của link trùng với hash hiện tại, thêm class active
      if (link.getAttribute('href') === currentHash) {
        link.classList.add('active', 'text-warning');
      }
      
      // Nếu hash trống và href là '#', đó là Home
      if (currentHash === '#' && link.getAttribute('href') === '#') {
        link.classList.add('active', 'text-warning');
      }
    });
  };
  
  // Cập nhật active item khi trang load
  updateActiveNavItem();
  
  // Cập nhật active item khi hash thay đổi
  window.addEventListener('hashchange', updateActiveNavItem);
});