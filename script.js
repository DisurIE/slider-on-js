const images = document.querySelectorAll('.slide');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;




init();
window.addEventListener('resize', init);

function init(){
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlide();
}

function rollSlide(){
    if(count > images.length - 1){
        count = 0;
    }
    if(count < 0){
        count = images.length - 1;
    }
    sliderLine.style.transform = 'translate(-'+count*width+'px';
}

    document.querySelector('.slider-next').addEventListener('click', (e) => {
        count++;
        rollSlide()
    });
    document.querySelector('.slider-prev').addEventListener('click', (e) => {
        count--;
        rollSlide()
    });