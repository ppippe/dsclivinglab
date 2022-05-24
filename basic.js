// ---resize reload---
var delta = 300;
var timer = null;

$( window ).on( 'resize', function( ) {
    clearTimeout( timer );
    timer = setTimeout( resizeDone, delta );

} ); function resizeDone( ) {
    // ...do
    document.location.reload();
}

// ---header---
if ( window.matchMedia('(min-width: 0px) and (max-width: 1200px)').matches ) {
    // console.log('Tablet');
    jQuery('.menuBtn').click(function() {
        $(function() {
            jQuery('header').toggleClass('on');
            jQuery('.mainMenu').toggleClass('on');
            jQuery('.menuBtn').toggleClass('on');
        });
    });
} else {
    // console.log('PC');
    var delay = 50, setTimeoutConst;
    jQuery('header').hover(function() {
        setTimeoutConst = setTimeout(function() {
            jQuery('header').addClass('on');
            jQuery('.mainMenu').addClass('on');
        }, delay);
    }, function() {
        clearTimeout(setTimeoutConst);
        if (jQuery('.mainMenu ul li').is(':hidden')) {} else {
            jQuery('header').removeClass('on');
            jQuery('.mainMenu').removeClass('on');
        }
    });
}

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector(".menuBtn").addEventListener("click", function(e){
        if ( document.querySelector('.menuBtn').classList.contains('on') ){
            //페이지 스크롤 락 레이어 추가
            let div = document.createElement('div');
            div.id = 'dimmed';
            document.body.append(div);
        
        } else {
            //페이지 스크롤 락 해제
            document.querySelector('#dimmed').remove();     
        }
    });
});

// ---footer---
jQuery('.footerMenu').click(function() {
    $(function() {
        jQuery('.footerBar').toggleClass('on');
        jQuery('.footerMenu').toggleClass('on');
        jQuery('.shortcutBtn').toggleClass('on');
    });
});
jQuery('.footerMenu').hover(function() {
    $(function() {
        jQuery('.footerBar').toggleClass('on');
        jQuery('.footerMenu').toggleClass('on');
        jQuery('.shortcutBtn').toggleClass('on');
    });
});