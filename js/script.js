// SOUND ENGINE:

$.fn.play = (sound, loop) => {
    let x = $("" + sound + "")[0];
    x.play();
    if (loop == "loop") {
        x.loop = true;
    } else {
        x.loop = false;
    }
}
$.fn.reset = (sound) => {
    let y = $("" + sound + "")[0];
    y.pause();
    y.currentTime = 0;
}

// SPLASH SCREEN:

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        $('playing').hide();
        setTimeout(() => {
            $('loader>div').fadeIn(300);
            $('#go').fadeIn(1300);
        }, 1000);
    }
}

// PARTY:

let h = "html",
b = "background",
hb = "html, body",
bi = "background-image",
wall = {
    1: "linear-gradient(135deg, #f0d4ac, #ecbc8b, #d5a269, #ba7345, #a4593c, #753b30, #53261d, #33150e)",
    2: "linear-gradient(135deg, #f0acd6, #ec8bc7, #d569a4, #ba4589, #a43c85, #75305b, #531d47, #330e30)",
    3: "linear-gradient(135deg, #d1acf0, #b88bec, #bc69d5, #8145ba, #7a3ca4, #453075, #361d53, #180e33)",
    4: "linear-gradient(135deg, #acd1f0, #92b4ff, #326de1, #2f3fab, #0f2383, #0c1b62, #000352, #000330)"
}
mix = {
    1: {
        s: "Birthday",
        a: "Anne Marie",
        c: "rgb(51 21 14"
    },
    2: {
        s: "These Words",
        a: "Natasha Bedingfield",
        c: "rgb(51 14 48"
    },
    3: {
        s: "Forever In Love",
        a: "Kenny G",
        c: "rgb(24 14 51"
    },
    4: {
        s: "Romantic Flight",
        a: "John Powell",
        c: "rgb(0 3 48"
    }
}

$.fn.step = (x) => {
    $(hb).css(bi, wall[x]);
    $("playing").css(b, mix[x].c + "/60%)");
    $("song").html(mix[x].s);
    $("artist").html(mix[x].a);
}

$("#go").click(() => {
    $('loader').fadeOut(2000);
    $.fn.play("#tada");
    $('.img').css('filter', 'blur(2px)');
    $.fn.step(1);
    setTimeout(() => {
        $(".right").animate({ "right": "0", "right": "-100%" }, 10000);
        $(".left").animate({ "left": "0", "left": "-100%" }, 10000);
        setTimeout(() => {
            $("curtain").hide();
        }, 10000);
        setTimeout(() => {
            $.fn.play("#hbd");
            $.fn.play("#appld");
            $("#streamer").show();
            $('.img').css('filter', 'none');
            setTimeout(() => {
                $("#streamer").hide();
                $.fn.step(2);
            }, 31500);
            setTimeout(() => {
                $.fn.step(3);
            }, 135000);
            setTimeout(() => {
                $.fn.step(4);
            }, 245000);
            setTimeout(() => {
                $.fn.step(1);
            }, 336000);
            $('#favicon').attr('href','img/celebrant.png');
            $('title').html('HBD ❤!');
        }, 4000);
        setInterval(() => {
            setTimeout(() => {
                $.fn.step(2);
            }, 33000);
            setTimeout(() => {
                $.fn.step(3);
            }, 136000);
            setTimeout(() => {
                $.fn.step(4);
            }, 246000);
            setTimeout(() => {
                $.fn.step(1);
            }, 337000);
        }, 337000);
        setTimeout(() => {
            $.fn.play("#mybd", "loop");
            $('playing').show();
        }, 6000);
    }, 1000);
});
$("#envelope").click(() => {
    setTimeout(() => {
        $('.img').css('filter', 'blur(2px)');
        $('cards').show();
        $('.splide__pagination').show();
        $("#envelope").hide();
    }, 400);
})
$("cardsBg").click(() => {
    $('.img').css('filter', 'none');
    $('cards').hide();
    $("#envelope").show();
})

// CARDS:

const splide = new Splide('.splide', {
    type: 'slide',
    drag: 'free',
    focus: 'center',
    arrows: false,
    gap: '8px',
    perPage: 1.5
});
splide.mount();
