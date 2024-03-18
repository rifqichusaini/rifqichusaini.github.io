document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("#navbar ul li a");
  
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
  
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
  
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('#navbar').offsetHeight,
                behavior: "smooth"
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll("#navbar ul li a");

    window.addEventListener("scroll", function () {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 150; // Offset untuk mempertimbangkan tinggi navbar
            const sectionHeight = section.clientHeight + 100;

            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
            }
        });
    });
});

  