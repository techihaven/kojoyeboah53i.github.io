//document ready function


//get page scroll
// function getScroll() {
//     var yScroll;
//     if (self.pageYOffset) {
//         yScroll = self.pageYOffset;
//     } else if (document.documentElement && document.documentElement.scrollTop) {
//         yScroll = document.documentElement.scrollTop;
//     } else if (document.body) {
//         yScroll = document.body.scrollTop;
//     }
//     return yScroll;
// }

// es7 document ready async function
document.addEventListener('DOMContentLoaded', async () => {

    function doSomething(scrollPos) {
        // Do something with the scroll position
    const nav = document.querySelector('.scroll-navbar');
        nav.classList.add('opacity-10');
      }
      


async function fadeNav() {
    let lastKnownScrollPosition = 0;
    let ticking = false;
    
    const nav = document.querySelector('.scroll-navbar');
    window.addEventListener('scroll', () => {
        lastKnownScrollPosition = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (lastKnownScrollPosition > 0) {
                    nav.classList.add('opacity-60');
                } else {
                    nav.classList.remove('opacity-60');
                }
                ticking = false;
            });
        }


    });



   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    //   alert("fading navbar")
    // nav.classList.add('hidden');

    }
}

await fadeNav();



});