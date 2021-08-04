$(document).ready(function() {
    $(".app li").click(function() {
        $(this).children('.app .article').collapse('toggle');
        if ($(this).hasClass('on')) {
            $(this).removeClass('on')
        } else {
            $(this).addClass('on')
        }
    });
    new Flickity('.top-hd>.hd', {
        // options
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false
    })
});

$("img.lazy").lazyload({effect:'fadeIn',threshold:'400',failurelimit:'6'});


document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
    WeixinJSBridge.call('hideToolbar');
    WeixinJSBridge.call('hideOptionMenu');
});