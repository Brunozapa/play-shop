
window.onload = function () {
    SingleSlider();
    ProductSlider();
}

function SingleSlider() {
    const config = {
        slidesToShow: 1,
        draggable: true,
        arrows: 'none'
    }
    const glider = new Glider(document.querySelector('.glider'), config);
    
    /* Autoplay for Glider.js */
    function sliderAuto(slider, miliseconds) {
        const slidesCount = slider.track.childElementCount;
        let slideTimeout = null;
        let nextIndex = 1;

        function slide() {
            slideTimeout = setTimeout(
                function () {
                    if (nextIndex >= slidesCount) {
                        nextIndex = 0;
                    }
                    slider.scrollItem(nextIndex++);
                },
                miliseconds
            );
        }

        slider.ele.addEventListener('glider-animated', function () {
            window.clearInterval(slideTimeout);
            slide();
        });

        slide();
    }
    sliderAuto(glider, 5000)
}

function ProductSlider() {
    const config = {
        draggable: true,
        slidesToShow: 1,
        slidesToScroll: 'auto',
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        },
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    duration: 0.25
                }
            }

        ]
    }

    new Glider(document.querySelector('.products'), config)

}

function openCart() {
    document.getElementsById('body').style = "overflow: hidden;";
    document.getElementsById('absolute').style = "display: block;";
    document.getElementsById('cart_page').style = "transform: translateX(0);";
}

function closeCart(){
    document.getElementById('body').style = "overflow: visible;"
    document.getElementById('absolute').style = "display: none;"
    document.getElementById('cart_page').style = "display: none"
}