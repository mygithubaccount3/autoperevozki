import './scss/main.scss'
import './js/bootstrap.bundle.min'
import './js/smooth'

$(window).on('scroll', () => {
    const scrollTop = $(window).scrollTop();
    const windowWidth = $(window).width();

    if (windowWidth > 768) {
        if (scrollTop > 200) {
            $('#navbar1').stop().animate({height: '50px'}, 400)
        } else {
            $('#navbar1').stop().animate({height: '64px'}, 400)
        }
    } else {
        $('#navbar1').stop().animate({height: '64px'}, 400)
    }
})
