const slider = document.querySelector('.header-slider');
        const prevButton = slider.querySelector('.control-prev');
        const nextButton = slider.querySelector('.control-next');
        const slides = slider.querySelectorAll('ul > li');
        let currentIndex = 0;
        const totalSlides = slides.length;

        function showSlide(index) {
            for (let i = 0; i < slides.length; i++) {
                if (i === index) {
                    slides[i].style.display = 'block';
                } else {
                    slides[i].style.display = 'none';
                }
            }
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            showSlide(currentIndex);
        }

        // Initial display
        showSlide(currentIndex);

        // Event listeners
        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);


        function scrollLeftProducts() {
            const slider = document.getElementById('productSlider');
            if (slider) {
                slider.scrollBy({ left: -100, behavior: 'smooth' }); // Scroll left by 100px
            } else {
                console.error('Element with id "productSlider" not found.');
            }
        }
        
        function scrollRightProducts() {
            const slider = document.getElementById('productSlider');
            if (slider) {
                slider.scrollBy({ left: 100, behavior: 'smooth' }); // Scroll right by 100px
            } else {
                console.error('Element with id "productSlider" not found.');
            }
        }
        
        