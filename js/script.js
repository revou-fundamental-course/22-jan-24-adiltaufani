const circles = document.querySelectorAll('.circle');

const inputName = document.getElementById('name-input');
const inputEmail = document.getElementById('email-input');
const inputInterest = document.getElementById('interest-input');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const interestError = document.getElementById('interest-error');

const submitButton = document.getElementById('submit');

circles.forEach(circle => {
    circle.addEventListener('click', e => {
        e.preventDefault();
        const link = circle.getAttribute('data-link');
        window.location.href = link;
    });
});

let currentIndex = 0;

const totalSlides = document.querySelectorAll('.slide').length;
const slideWidth = document.querySelector('.slide').clientWidth;
const slideContainer = document.getElementById('slides');

function nextslide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
}

function updateSlide() {
    slideContainer.style.transition = 'transform 0.5s ease-in-out';
    slideContainer.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

function restartSlide() {
    if (currentIndex === totalSlides - 1) {
        setTimeout(() => {
            currentIndex = 0;
            slideContainer.style.transition = 'transform 1s ease-in-out';
            slideContainer.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
        }, 2000); // Adjust the delay to match the transition duration
    }
}

setInterval(() => {
    nextslide();
    restartSlide();
}, 2000);


function validateForm(name) {
    document.getElementById("panggilan").innerText = name;
    nameError.innerText = "";
    emailError.innerText = "";
    interestError.innerText = "";
}

submitButton.addEventListener('click', function() {
    let name = inputName.value;
    let email = inputEmail.value;
    let interest = inputInterest.value;

    if (!name) {        
        nameError.classList.add('error-message');
        nameError.innerText = "Fill this column!"
    } 

    if (!email) {
        emailError.classList.add('error-message');
        emailError.innerText = "Fill this column!"
    } 

    if (!interest) {        
        interestError.classList.add('error-message');
        interestError.innerText = "Select an option!"
    } 

    if (name && email && interest) {
        validateForm(name);
    }
})
