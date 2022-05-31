jQuery('.menuBtn').click(function() {
    $(function() {
        jQuery('header').toggleClass('mob');
        jQuery('.mainMenu').toggleClass('mob');
        jQuery('.menuBtn').toggleClass('mob');
    });
});

var delay = 50, setTimeoutConst;
jQuery('header').hover(function() {
    setTimeoutConst = setTimeout(function() {
        jQuery('header').addClass('pc');
        jQuery('.mainMenu').addClass('pc');
    }, delay);
}, function() {
    clearTimeout(setTimeoutConst);
    if (jQuery('.mainMenu ul li').is(':hidden')) {} else {
        jQuery('header').removeClass('pc');
        jQuery('.mainMenu').removeClass('pc');
    }
});

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