 // Initialize GSAP ScrollTrigger
 gsap.registerPlugin(ScrollTrigger);
        
 // Wait for DOM content to be loaded
 document.addEventListener('DOMContentLoaded', function() {
     // Set up the navbar animation
     const navbar = document.getElementById('navbar');
     const navLinks = document.querySelectorAll('.nav-links a');
     
     // ScrollTrigger for navbar background change
     ScrollTrigger.create({
         start: "top top",
         end: "100vh", // End trigger when the hero section is out of view
         onEnter: () => {
             // Already at the top, ensure navbar is transparent
             gsap.to(navbar, {
                 backgroundColor: "transparent",
                 duration: 0.3,
                 ease: "power2.out"
             });
         },
         onLeave: () => {
             // Scrolled past hero section, change to green
             gsap.to(navbar, {
                 backgroundColor: "#2c8a4a",
                 duration: 0.3,
                 ease: "power2.out"
             });
         },
         onEnterBack: () => {
             // Scrolled back to hero section, change to transparent
             gsap.to(navbar, {
                 backgroundColor: "transparent",
                 duration: 0.3,
                 ease: "power2.out"
             });
         },
         onLeaveBack: () => {
             // Should not happen normally, but handle edge case
             gsap.to(navbar, {
                 backgroundColor: "transparent",
                 duration: 0.3,
                 ease: "power2.out"
             });
         }
     });
     
     // Fallback for browsers that might not support GSAP
     window.addEventListener('scroll', function() {
         // If ScrollTrigger fails, this is a backup
         if (window.scrollY > window.innerHeight - 10) {
             navbar.classList.add('scrolled');
         } else {
             navbar.classList.remove('scrolled');
         }
     });
     
     // Add smooth scrolling for navbar links
     document.querySelectorAll('.nav-link').forEach(link => {
         link.addEventListener('click', function(e) {
             e.preventDefault();
             
             const targetId = this.getAttribute('href');
             const targetElement = document.querySelector(targetId);
             
             if (targetElement) {
                 window.scrollTo({
                     top: targetElement.offsetTop,
                     behavior: 'smooth'
                 });
             }
         });
     });
 });