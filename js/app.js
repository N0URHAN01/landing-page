

// step1: Define Global Variables
const navlist = document.getElementById("navbar__list");   // navigation global var "using the unorderlist id"

const sec = document.querySelectorAll("section");  // sections global var  "using querySelectorAll becouse they more than one section "




// step 2: build the nav
const navBuild = () => {
let navI = "";                                  //variable to store navigation links
    // looping over all sections
    for (const section of sec) {  

         //create a navigation link for each section    
        navI += `<li><a class="menu__link" href="#${section.id}">${section.dataset.nav}</a></li>`;
    }
    navlist.innerHTML = navI;      //navigation links to the innerHTML of the navigation element
};

navBuild();


//  step 3: Add class 'active' to section when near top of viewport
const setof = (section) => {
    return section.getBoundingClientRect().top;
};
// change the background color of the sections when they are in the viewport
const selectActiveclass = () => {
    // Repeat in all sections
    sec.forEach(section => {
        // Get the setof of the current section from the top of the viewport
        const elementOffset = setof(section);
        // Check if the section is within 150 pixels from the top or bottom of the screen
        if (elementOffset < 150 && elementOffset >= -150) {
            if (section.classList.contains('your-active-class')) return;    // Check if the section already has the 'your-active-class' class
            section.classList.add('your-active-class');    // Add the 'your-active-class' class
            section.style.background = "gray";             //change the background color to gray
        }else{
            if (!section.classList.contains('your-active-class')) return;     // Check if the section doesn't have the 'your-active-class' class
            section.classList.remove('your-active-class'); // Remove the 'your-active-class' class 
            section.style.background = "linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)"; //change the background color back to the original color
        }
    });
};
// Add an event listener to call the selectActiveclass function whenever the scroll event is fired

window.addEventListener('scroll' ,selectActiveclass);


// Scroll to anchor ID using scrollTO event

const scrollToAnchor = (event) => {             // a function that will handle the scroll-to event
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');      //Prevent the default anchor link behavior
    const element = document.querySelector(href);             // Find the element on the page that corresponds to the href

    window.scrollTo({                  // scrollTo method to smoothly scroll to the top of the element
        top: element.offsetTop,
        behavior: 'smooth'
    });
};

const links = document.querySelectorAll('.navbar__menu a');    // Select all links with the class '.navbar__menu a'
 // Attach the scrollToAnchor function as an event listener for click events on each link 
links.forEach(link => {
    link.addEventListener('click', scrollToAnchor);
});

