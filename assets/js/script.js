$('.slick-slider').slick({
    dots: false,
    prevArrow: ".prev",
    nextArrow: ".next",
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1000,
                infinite: true,
                dots: false,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('.slick-slider2').slick({
    dots: false,
    prevArrow: ".pre",
    nextArrow: ".nex",
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1000,
                infinite: true,
                dots: false,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

function startTimer(duration, display) {
    var timer = duration, hours, minutes, seconds, milliseconds;
    setInterval(function () {
        hours = Math.floor((timer / (60 * 60 * 1000)) % 24);
        minutes = Math.floor((timer / 60000) % 60);
        seconds = Math.floor((timer / 1000) % 60);
        milliseconds = Math.floor(timer % 1000);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        milliseconds = (milliseconds < 100) ? (milliseconds < 10) ? "00" + milliseconds : "0" + milliseconds : milliseconds;

        display.textContent = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 10);
}

window.onload = function () {
    var duration = 40 * 60 * 60 * 1000 + 15 * 60 * 1000 + 12 * 1000 + 10;
    var display = document.getElementById('timer');
    startTimer(duration, display);
};

// navbar

let dots = document.querySelector(".three-dots");

dots.addEventListener("click", () => {
    let navbar_content = document.querySelector(".btn-or-social-icons");
    navbar_content.classList.add("show");
})

const x = document.querySelector(".cross");

x.addEventListener("click", () => {
    let navbar_content = document.querySelector(".btn-or-social-icons");
    navbar_content.classList.remove("show");
})

// mint box
const plus = document.querySelector(".mins-box");
const mins = document.querySelector(".plus-box");
const soo = document.querySelector(".hunderd-box");

// Initial value
let value = 100;
soo.innerHTML = value;

plus.addEventListener("click", () => {
    value++;
    soo.innerHTML = value;
});

soo.innerHTML = value;

mins.addEventListener("click", () => {
    value--;
    soo.innerHTML = value;
});

// accrodian

let accordian_items = document.querySelectorAll(".accordian-box");

accordian_items.forEach(items => {
    let paragraph = items.querySelector(".accordian-p");
    let heading = items.querySelector(".accordian-txt-or-svg");
    let svg = items.querySelector(".accordian-svg");

    heading.style.cursor = "pointer";
    heading.addEventListener("click", () => {

        accordian_items.forEach(other => {
            if (other !== items) {
                let paragraph = other.querySelector(".accordian-p");
                let svg = other.querySelector(".accordian-svg");
                paragraph.classList.add("d-none")
                svg.innerHTML = "+"
            }
        });

        if (paragraph.classList.contains("d-none")) {
            paragraph.classList.remove("d-none")
            paragraph.classList.add("d-block");
            svg.innerHTML = "-"
        }
        else {
            paragraph.classList.remove("d-block")
            paragraph.classList.add("d-none")
            svg.innerHTML = "+"
        }
    })
})


