gsap.from("nav a", { duration: 1, opacity: 0, y: -50, stagger: 0.2 });
        gsap.from("nav ul li", { duration: 1, opacity: 0, y: -50, stagger: 0.2 });
        gsap.from("header h1", { duration: 1, opacity: 0, y: -50 });
        gsap.from("header p", { duration: 1, opacity: 0, y: 50, delay: 0.5 });
        gsap.from("header a", { duration: 1, opacity: 0, scale: 0.8, delay: 1 });


        const menuBtn = document.getElementById('menu-btn');
        const dropdownMenu = document.getElementById('dropdown-menu');

        menuBtn.addEventListener('click', () => {
            const isHidden = dropdownMenu.classList.contains('hidden');
            dropdownMenu.classList.toggle('hidden');

            if (!isHidden) {
                gsap.to(dropdownMenu, {
                    opacity: 0,
                    y: -10,
                    duration: 0.3,
                    onComplete: () => dropdownMenu.classList.add('hidden')
                });
            } else {
                dropdownMenu.classList.remove('hidden');
                gsap.fromTo(dropdownMenu, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.3 });
            }
        });
        // Navbar animation end
        