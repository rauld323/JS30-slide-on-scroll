/*The debounce() function forces a function to wait a certain amount of time before running again. The function is built to limit the number of times a function is called.
*/


/* 
As long as this debounce() functiom continues to be invoked, it will not be triggered. The function will be called after it stops being called for N milliseconds. If immediate is passed as an argument to the function, the function triggers immediately and then waits for the interval before being called again.
*/

                    //It will only run the fuction every 20 miliseconds.
function debounce(func, wait = 10, immediate = true) {
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
const sliderImage = document.querySelectorAll('.slide-in');

//This will run everytime someone scrolls
function checkslide(e){
    //Founds out how far the page is down.
   sliderImage.forEach(sliderImage => {
       //window.scrollY tells you how much has scrolled from the top.

       //window.innerHeight will give you the pixel level at where you are currently in the bottom 

       //sliderImage.height will give us where the bottom pixel of the picture is located and we divide by 2 to get half

       //half way 
       const slideInAt =(window.scrollY + window.innerHeight) - sliderImage.height / 2;

       //bottom of image through the image
       const imageBottom = sliderImage.offsetTop + sliderImage.height;
       const isHalfShown = slideInAt > sliderImage.offsetTop;
       const isNotScrolledPast = window.scrollY < imageBottom;

       if(isHalfShown && isNotScrolledPast){
           sliderImage.classList.add('active');
       }else{
           sliderImage.classList.remove('active');
       }
   })
}

//when the window is scrolled you will run the function checkslide.
window.addEventListener('scroll',debounce(checkslide));