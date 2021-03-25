const hamburgerMenu = () => {
    const hamburger = document.querySelector('.hamburger');
    const overlay = document.querySelector('.overlay');
    const menu = document.querySelector('.navigation');

    const closeMenu = () => {
        overlay.classList.toggle('hidden');
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('show_menu');
        document.body.style.overflow = document.body.style.overflow === "hidden" ? "auto" : "hidden";
    }

    hamburger.addEventListener('click', () => {
        closeMenu();
    });

    overlay.addEventListener('click', () => {
        closeMenu();
    });

    menu.addEventListener('click', (event) => {
        if (event.target.classList.contains('navigation__link')) {
            closeMenu();
        }
    });
    
}

const strategiesSlider = () => {
    const slider = document.querySelector('.strategies__layout');
    const slides = document.querySelectorAll('.strategy');
    const strategyTitle = document.querySelectorAll('.strategy__title');
    const slidesWrapper = document.querySelector('.strategies__layout');
    const slidesField = document.querySelector('.strategies__layout-inner');
    const slidesWrapperWidth = window.getComputedStyle(slidesWrapper).width;
    let slideWidth = 348;
    let itemMargin = 25;
    slidesField.style.width = (slideWidth + itemMargin) * slides.length + 'px';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.6s all';
    slidesWrapper.style.overflow = 'hidden';
    slidesWrapper.style.position = 'relative';

    let slideIndex = 1;
    let offset = 0;
    slides.forEach((slide, index) => {
        slide.style.width = `${slideWidth}px`;
        slide.setAttribute('data-slide-number', (index + 1))
    });

    const indicatorsWrapper = document.querySelector('.strategies__indicators');
    let dotsArray = [];
    const addSliderDots = () => {
        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement('span');
            dot.setAttribute('data-slide-to', i + 1);
            dot.classList.add('dot');
            if(i === 0) {
                dot.classList.add('dot_active');
                strategyTitle[0].classList.add('strategy__title_active');
            }
            indicatorsWrapper.appendChild(dot);
            dotsArray.push(dot);
        }
    }

    const removeClass = (elements, className) => {
        elements.forEach(element => {
            element.classList.remove(className);
        })
    }

    addSliderDots();

    dotsArray.forEach(dot => {
        dot.addEventListener('click', (event) => {
            const slideTo = event.target.getAttribute('data-slide-to');
            slideIndex = slideTo;
            removeClass(strategyTitle, 'strategy__title_active');
            removeClass(dotsArray, 'dot_active');
            strategyTitle[slideTo - 1].classList.add('strategy__title_active');
            dotsArray[slideTo - 1].classList.add('dot_active');
            if (document.documentElement.offsetWidth < 370) {
                slideWidth = 310;
                slides.forEach(slide => {
                    slide.style.width = `${slideWidth}px`;
                });  
            }
            offset = (slideWidth + itemMargin) * (slideTo - 1);
            if(document.documentElement.offsetWidth >= 1093) {
                if(slides.length === 3) {
                    slidesField.style.transform = `translateX(${0}px)`;
                } else {
                    slidesField.style.transform = `translateX(${-offset}px)`;
                }
                
            } else {
                slidesField.style.transform = `translateX(${-offset}px)`;
            }
            
        })
    });
    
    slides.forEach(slide => {
        slide.addEventListener('click', () => {
            const slideTo = slide.getAttribute('data-slide-number');
            slideIndex = slideTo;
            removeClass(strategyTitle, 'strategy__title_active');
            removeClass(dotsArray, 'dot_active');
            strategyTitle[slideTo - 1].classList.add('strategy__title_active');
            dotsArray[slideTo - 1].classList.add('dot_active');
        })
    })
}

hamburgerMenu();
strategiesSlider();