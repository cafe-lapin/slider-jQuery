function nextSlide() {
    var sliders = $('.slider-wrapper .slide')
    for(var i=0;i<$('.slider-wrapper .slide').length;i++){
        var currSlider = $(sliders[i]);
        if(currSlider.attr('data') == '0') currSlider.attr('data',  sliders.length - 1);
        else currSlider.attr('data',  currSlider.attr('data') - 1);
    }
}

function initSlide() {
    var sliders = $('.slider-wrapper .slide')
    for(var i=0;i<$('.slider-wrapper .slide').length;i++){
        var currSlider = $(sliders[i]);
        currSlider.attr('data', i+1);
    }
}