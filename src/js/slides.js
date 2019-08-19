let index = 0;
let isBubble = false;

var slides = document.getElementsByClassName("slideshow");
let cGallery = document.getElementsByClassName("bubble");
let menu = document.getElementsByClassName("gallery-menu");
for (b of cGallery) {
    b.style.display = "none";
}

let nextSlide = (increm) => {
    if (!isBubble) {
        index += increm;
        slideLoop();
    }
}

let bubbleView = () => {
    if (!isBubble) {
        isBubble = true;
        for (m of menu) {
            m.style.display = "none";
        }
        for (s of slides) {
            s.style.display = "none";
        }
        for (b of cGallery) {
            b.style.display = "inline";
        }
    } else {
        slideView(index);
    }
}

let slideView = (slide) => {
    if (isBubble) {
        isBubble = false;
        for (m of menu) {
            m.style.display = "inline";
        }
        for (b of cGallery) {
            b.style.display = "none";
        }
        index = slide;
        slides[index].style.display = "block";
    }
}

let slideLoop = () => {
    if (!isBubble) {
        for (s of slides) {
            s.style.display = "none";
        }
        if (index >= slides.length) {
            index = 0;
        }
        else if (index < 0) {
            index = slides.length-1;
        }
        slides[index].style.display = "block"; 
    }
}

slideLoop();

