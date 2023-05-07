let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Video

const myVideo = document.getElementById("video");
function playVideo() {
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
}

// BurgerMenu

// const burgerMenu = document.querySelector("#burger-menu");
// const navUl = document.querySelector("#nav-ul");
