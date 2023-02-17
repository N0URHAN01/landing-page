# Landing Page Project

## Table of Contents

* [Description](#Description) 
* [Getting Started](#getting-started)
* [Usage](#usage)
* [Built_with](#built-with)
* [References](#references)

## Description

This is a JavaScript code snippet that allows you to smoothly scroll to an anchor ID on a webpage when a link is clicked, and also allows you to add an active class to sections when they are in the viewport, and change the background color of the sections when they are in the viewport.

## Getting Started
To start the project you should download the html , css , js files.
To use this code snippet, include it in your JavaScript file and make sure that the ID and class names used in the code match the corresponding elements in your HTML.

## Usage
1. Define Global Variables: The code starts by defining global variables for the navigation list and sections. 

2. Build the Navigation: The `navBuild` function is used to loop over all sections and create a navigation link for each section. The navigation links are then added to the innerHTML of the navigation element.

3. Add Active Class to Section: The `setof` function is used to get the offset of the current section from the top of the viewport.  
The `selectActiveclass` function is used to check if the section is within 150 pixels from the top or bottom of the screen, and if so, it adds the 'your-active-class' class to the section and change its background color to gray.

   If the section is not in the viewport, it removes the 'your-active-class' class and change the background color back to its original color. An event listener is added to call the `selectActiveclass` function whenever the scroll event is fired.

4. Scroll to Anchor ID: The `scrollToAnchor` function is used to smoothly scroll to the top of the element that corresponds to the `href` attribute of the clicked link. An event listener is added to each link to call the `scrollToAnchor` function when the link is clicked.


## Built With
      HTML 
      CSS
     JavaScript

## References 
    W3SCHOOL
    MDN
    programiz