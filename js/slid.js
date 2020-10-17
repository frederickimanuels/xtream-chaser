sliderInt = 1;
sliderNext = 2;
count = $("#slider>img").size();

$(document).ready(function () {
    $("#slider>img#" + sliderInt).fadeIn(350);

    startSlider();
});

function startSlider() {

    loop = setInterval(function () {
        if (sliderNext > count) {
            sliderNext = 1;
            sliderInt = 1;
        }

        $("#slider>img").fadeOut(350);
        $("#slider>img#" + sliderNext).fadeIn(350);

        sliderInt = sliderNext;
        sliderNext = sliderNext + 1;


    }, 7000);
}


function prev() {
    newSlide = sliderInt - 1;
    showSlide(newSlide);
}

function next() {
    newSlide = sliderInt + 1;
    showSlide(newSlide);
}

function stopLoop() {
    window.clearInterval(loop);
}

function showSlide(id) {
    stopLoop();
    if (id > count) {
        id = 1;
    } else if (id < 1) {
        id = count;
    }

    $("#slider>img").fadeOut(350);
    $("#slider>img#" + id).fadeIn(350);

    sliderInt = id;
    sliderNext = id + 1;
    startSlider();
}

