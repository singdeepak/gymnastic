// IMAGE-SLIDER-SCRIPT
const slideShow = (num) => {
    let slides = document.querySelectorAll('.slide');

    if(num === slides.length){
        flag = 0;
        num = 0;
    }else if(num < 0){
        flag = slides.length - 1;
        num = slides.length - 1;
    }

    for(let k of slides){
        k.style.display = "none";
    }

    slides[num].style.display = "block";
}

document.querySelector('.next').addEventListener('click', function(){
    flag+=1;
    slideShow(flag);
});

document.querySelector('.prev').addEventListener('click', function(){
    flag-=1;
    slideShow(flag);
});


let flag = 0;
slideShow(flag);




// IMAE-AMENITITES-SCRIPT
let btns = document.querySelectorAll('.amenities-btn');
let imag = document.querySelectorAll('.amenities-imag');
console.log(imag);

for(let b of btns){
    b.addEventListener('click', function(){
        this.classList.toggle("active");
    });
}

btns[0].addEventListener('click', function(){
    for(let k of imag){
        k.style.display = "inline-block";
    }

    for(let p of btns){
        p.classList.remove("active");
    }
    this.classList.toggle("active");

    
});

btns[1].addEventListener('click', function(){
    for(let k of imag){
        k.style.display = "none";
    }

    for(let p of btns){
        p.classList.remove("active");
    }
    this.classList.toggle("active");

    imag[0].style.display =  "block";
});

btns[2].addEventListener('click', function(){
    for(let k of imag){
        k.style.display = "none";
    }

    for(let p of btns){
        p.classList.remove("active");
    }
    this.classList.toggle("active");

    imag[2].style.display =  "block";
});


btns[3].addEventListener('click', function(){
    for(let k of imag){
        k.style.display = "none";
    }

    for(let p of btns){
        p.classList.remove("active");
    }
    this.classList.toggle("active");

    imag[1].style.display =  "block";
});
