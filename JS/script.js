const images = document.querySelectorAll('.slide-img');
const navContainer = document.querySelectorAll('.nav-container');
const totalImages = images.length;
let imageIndex = 0;
let interval;

for(let i = 0; i < totalImages;i++){
    const btn = document.createElement('btn');
    btn.classList.add('nav-btn');
    navContainer.appendChild(btn);
}

const buttons = document.querySelectorAll('.nav-btn');

buttons.forEach((btn,index)=>{
    btn.addEventListener('click',()=>{
        imageIndex = index;
        updateSlider();
        resetInterval();
    })
})

function updateSlider(){
    images.forEach(image => {
        image.classList.remove('image-active');
    });
    buttons.forEach(btn => {
        btn.classList.remove('btn-active');
    });
    images[imageIndex].classList.add('image-active');
    buttons[imageIndex].classList.add('btn-active');
}

function nextImage(){
    imageIndex++;
    if(imageIndex > totalImages - 1){
        imageIndex = 0;
    }
    updateSlider();
}

function autoPlay(){
    interval = setInterval(nextImage,3000);
}

function resetInterval(){
    clearInterval(interval);
    autoPlay();
}

updateSlider();
autoPlay();
