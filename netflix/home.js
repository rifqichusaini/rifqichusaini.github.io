window.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector(".pinning-header-container");
  
    // Tambahkan properti transisi ke elemen header
    header.style.transition = "background 0.3s ease";
  
    // Fungsi untuk mengubah background saat di-scroll
    window.addEventListener("scroll", function() {
      if (window.scrollY > 0) {
        header.style.background = "rgb(20, 20, 20)";
      } else {
        header.style.background = "transparent";
      }
    });
  });
  