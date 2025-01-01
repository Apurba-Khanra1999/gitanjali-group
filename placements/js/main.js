$(document).on('ready', function() {


    $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    });


});




$(document).ready(function() {

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];

    for (i = 0; i < countersQuantity; i++) {
        counter[i] = parseInt(counters[i].innerHTML);
    }

    var count = function(start, value, id) {
        var localStart = start;
        setInterval(function() {
            if (localStart < value) {
                localStart++;
                counters[id].innerHTML = localStart;
            }
        }, 0.1);
    }

    for (j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
    }
});


// video modal

$(document).ready(function() {
    var url = $("#Geeks3").attr('src');
    $("#exampleModal").on('hide.bs.modal', function() {
        $("#Geeks3").attr('src', '');
    });
    $("#exampleModal").on('show.bs.modal', function() {
        $("#Geeks3").attr('src', url);
    });
});


//			
//		$('#exampleModal').on('hidden.bs.modal', function () {
//			callPlayer('yt-player', 'stopVideo');
//		});




function OpenPopUp(src) {
    $('#framepopup').attr('src', src);
    $('#animatedModal').slideDown(300);
}

$(document).ready(function() {
    $("#btn-close-modal").click(function() {
        $('#animatedModal').slideUp(300);
    });
    $(".graph-link ul li a").click(function() {
        $('#animatedModal').show();
    });
    $(".graph-pnl a").click(function() {
        $('#animatedModal').show();
    });
});




/*on escape key press opertations*/

$(document).ready(function() {
    $(document).bind('keydown', function(e) {
        if (e.which == 27) {
            //alert('esc pressed');
            $('#animatedModal').slideUp(300);
        }
    });
});