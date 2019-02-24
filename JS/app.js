let linkNav = document.querySelector('[href^="#one"]');
let speed = 1.5;  

linkNav.addEventListener('click', function(e) { 
    e.preventDefault(); 
    let w = window.pageYOffset; 
    let hash = this.href.replace(/[^#]*(.*)/, '$1');  
    let t = document.querySelector(hash).getBoundingClientRect().top;  
    let start = null;
    requestAnimationFrame(step);
    function step(time) {
        if (start === null) start = time;
            let progress = time - start;
            let r = (t < 0 ? Math.max(w - progress/speed, w + t) : Math.min(w + progress/speed, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step);
            } else {
                location.hash = hash;
            }
        }
    }, false);