document.addEventListener("DOMContentLoaded", function () {

    // Mobile menu
    const navToggle = document.querySelector('.nav__toggle');
    const headerNav = document.querySelector('.header__nav');

    function toggleNav(event) {
        event.preventDefault();
        if (window.innerWidth < 1024) {
            const isOpen = headerNav.classList.toggle('opened');
            navToggle.setAttribute('aria-expanded', isOpen);
        } else {
            headerNav.classList.remove('opened');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    }

    navToggle.addEventListener('click', toggleNav);

    window.addEventListener('resize', function () {
        if (window.innerWidth >= 1024) {
            headerNav.classList.remove('opened');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });



    // FAQ accordion
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq__title');
        question.addEventListener('click', (event) => {
            event.preventDefault();
            const isOpen = item.classList.toggle('opened');
            question.setAttribute('data-open', isOpen);
            closeAllFaqItems(item);
        });
    });

    function closeAllFaqItems(exceptThis) {
        faqItems.forEach(item => {
            if (item !== exceptThis) {
                item.classList.remove('opened');
                item.querySelector('.faq__title').setAttribute('data-open', 'false');
            }
        });
    }

    // Dropdown
    const dropdownLinks = document.querySelectorAll('.navigation__item > .navigation__link');
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdownLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const dropdown = this.nextElementSibling;
            const parentItem = this.parentElement;
            const isOpen = dropdown.classList.toggle('dropdown--open');
            parentItem.classList.toggle('navigation__item--open', isOpen);
            closeAllDropdowns(dropdown);
        });
    });

    function closeAllDropdowns(exceptThis) {
        dropdowns.forEach(dropdown => {
            if (dropdown !== exceptThis) {
                const parentItem = dropdown.parentElement;
                dropdown.classList.remove('dropdown--open');
                parentItem.classList.remove('navigation__item--open');
            }
        });
    }

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.navigation__item')) {
            closeAllDropdowns();
        }
    });
});