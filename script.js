const typedTextSpan = document.querySelector(".typed-text");

const textArray = ["Programming", "Problem Solving", "Technology", "Designing",
                   "Football", "Golfing",
                   "Chess", "TFT"];

const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 2000;

let textArrayIndex = 0;
let charIndex = 0;

function type()
{

    if (charIndex < textArray[textArrayIndex].length)
    {

        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++
        setTimeout(type, typingDelay);

    }

    else
    {

        setTimeout(erase, newTextDelay);

    }

}

function erase()
{

    if (charIndex > 0)
    {

        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);

    }

    else
    {

        textArrayIndex++;

        if (textArrayIndex >= textArray.length)
        {

            textArrayIndex = 0;

        }

        setTimeout(type, typingDelay + 1000);

    }

}

document.addEventListener("DOMContentLoaded", function()
{

    setTimeout(type, newTextDelay);

});

const navSlide = () =>
{

    const mobileNav = document.querySelector('.mobileNav');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    mobileNav.addEventListener('click', () =>
    {

        nav.classList.toggle('nav-active');

    });

    navLinks.forEach((link, index) => 
        {

            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`

        });

}

navSlide();
