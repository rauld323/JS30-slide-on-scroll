/*The debounce() function forces a function to wait a certain amount of time before running again. The function is built to limit the number of times a function is called.
*/


/* 
As long as this debounce() functiom continues to be invoked, it will not be triggered. The function will be called after it stops being called for N milliseconds. If immediate is passed as an argument to the function, the function triggers immediately and then waits for the interval before being called again.
*/

function debounce(func, wait = 20, immediate = true) {
    var timeout;
            
        return function () {
            var context = this, args = arguments;
            
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };

            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
    };
}

//This selects all the images that will be seen on the page.
const sliderImage = document.querySelectorAll('slide-in');

//This will run everytime someone scrolls
function checkslide(e){
    console.log(e);
}

//when the window is scrolled you will run the function checkslide.
window.addEventListener('scroll',debounce(checkslide));