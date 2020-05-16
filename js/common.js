$(document).ready(function () {
    let mySwiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            1120: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            769: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
        }
    });
});

let $page = $('html, body');
$('a[href*="#"]').click(function () {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
    return false;
});
$(document).ready(function () {

    $('.btn')
        .click(function () {
            $('body').addClass('fixed');
            $('.popup-container').fadeIn(1000);
        });

    $('.popup-container').click(function (event) {
        if (event.target == this) {
            $('body').removeClass('fixed');
            $(this).fadeOut(100);
        }
    });
});

$(document).ready(function () {
    $('input[type="tel"]').inputmask({ "mask": "+7(999) 999-9999" });
});

$(document).ready(function () {
    $('.popup__form').validate({
        errorPlacement(error, element) {
            return true;
        },
        rules: {
            Имя: {
                required: true,
                minlength: 4,
                maxlength: 16,
            },

            Телефон: {
                required: true,
            },

            Согласие: {
                required: true,
            },
        },
        submitHandler(form) {
            let th = $(form)

            $.ajax({
                type: 'POST',
                url: 'mail.php',
                data: th.serialize(),
            }).done(() => {
                th.trigger('reset')
            });
            return false;
        }
    });


    let burger = document.querySelector('.header__burger')
    let menu = document.querySelector('.header__nav')
    let navigation = document.querySelector('.nav__list')
    burger.addEventListener('click', function (e) {
        e.preventDefault();
        menu.classList.toggle('header__nav-open');
        navigation.classList.toggle('nav__list-open');
        burger.classList.toggle('burger-active');
    });
});

$(document).ready(function () {
    var details = $('.details');
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(details).offset().top) {
            $('.details__hashtag-1').addClass('hashtag-active-1');
            $('.details__hashtag-2').addClass('hashtag-active-2');
            $('.details__hashtag-3').addClass('hashtag-active-3');
            $('.details__hashtag-4').addClass('hashtag-active-4');
            $('.details__hashtag-5').addClass('hashtag-active-5');
        }
    });
});

$(document).ready(function(){
    $('.submit').click(function(){
       
        let user_name    = $('.name__input').val();
        var user_phone   = $('.phone__input').val();
        var text_comment = $('.comments__input').val();
        // отправляем данные
        $.ajax({
            url: "main.php", // куда отправляем
            type: "post", // метод передачи
            dataType: "json", // тип передачи данных
            data: { // что отправляем
                "user_name":    user_name,
                "user_phone":   user_phone,
                "text_comment": text_comment
            },
            // после получения ответа сервера
            success: function(data){
                $('.messages').html(data.result); // выводим ответ сервера
            }
        });
    });
});