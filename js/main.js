let mouseCursor = document.querySelector('.cursor');
let navlinks = document.querySelectorAll('.nav-links li');

window.addEventListener('mousemove',cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}
navlinks.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow');
        link.classList.remove('hovered-link');
    });
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow');
        link.classList.add('hovered-link');
    });
});






var btn = document.getElementsByClassName("btn");
var slide = document.getElementById("slide");
btn[0].onclick = function(){
    slide.style.transform = "translateX(0px)";
    for(i=0;i<4;i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}
btn[1].onclick = function(){
    slide.style.transform = "translateX(-800px)";
    for(i=0;i<4;i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}
btn[2].onclick = function(){
    slide.style.transform = "translateX(-1600px)";
    for(i=0;i<4;i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}
btn[3].onclick = function(){
    slide.style.transform = "translateX(-2400px)";
    for(i=0;i<4;i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}