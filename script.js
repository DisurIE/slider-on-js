const images = document.querySelectorAll('.slide');
const sliderLine = document.querySelector('.slider-line');
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
let count = 0;
let width;

let x1 = null;
let y1 = null;



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

function handleTouchStart(event){
    const firstTouch = event.touches[0];
    console.log(firstTouch);
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
}

function handleTouchMove(event){
    if(!x1 || !y1){
        return false
    }
    let x2 = event.touches[0].clientX;
    console.log(x2)
    let xDiff = x2 - x1;
    if(xDiff > 0){
        let sas = width * count + xDiff;
        console.log(sas)
        sliderLine.style.transform = 'translate('+sas+'px';
        count--;
        rollSlide()  
    }
    else{
        let sas = width * count + xDiff;
        console.log(sas)
        sliderLine.style.transform = 'translate('+-sas+'px';
        count++;
        rollSlide() 
    }

}

    document.querySelector('.slider-next').addEventListener('click', (e) => {
        count++;
        rollSlide()
    });
    document.querySelector('.slider-prev').addEventListener('click', (e) => {
        count--;
        rollSlide()
    });