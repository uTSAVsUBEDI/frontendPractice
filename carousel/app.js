let currentSlideNum = 0;
const slides = document.getElementsByClassName("carousel-item");
const totalSlides = slides.length -1


document.getElementById('button-left').addEventListener(
    "click", function (){
        updateSlideNumber("left");
    }
)

document.getElementById('button-right').addEventListener(
    "click", function (){
        updateSlideNumber("right");
    }
)

function updateSlideNumber(button){
    if (button=="left"){
        if (currentSlideNum == 0){
            currentSlideNum = totalSlides;
        }
        else{
            currentSlideNum -= 1;
        }
        updateCarouselImage();
    }else{
        if (currentSlideNum == totalSlides){
            currentSlideNum = 0;
        }else{
            currentSlideNum +=1;
        }
        updateCarouselImage();
    }
}

function updateCarouselImage(){
    for (let slide of slides){
        slide.classList.remove("carousel-item__visible");
        slide.classList.add("carousel-item__hidden");
    }
    console.log(slides)
    slides[currentSlideNum].classList.add("carousel-item__visible");
}