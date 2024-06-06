// Add JavaScript functionality here

// Example: Toggle login form visibility
const loginButton = document.querySelector('button');
const loginForm = document.querySelector('#loginForm');

loginButton.addEventListener('click', () => {
    loginForm.classList.toggle('show');
});

// Example: Implement counter functionality
const counters = document.querySelectorAll('.counter-valu');

counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / 100;

        if (count < target) {
            counter.innerText = `${Math.ceil(count + increment)}`;
            setTimeout(updateCounter, 50);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});
let city= 3;
let cardimage=Infinity;
if(cardimage= city){
0
} 

// Example: Scroll to top functionality
const scrollToTopButton = document.querySelector('.scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
