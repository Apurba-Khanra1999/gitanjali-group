function GetProgramDetails(ProgramCode, target) {
    $('.' + target).html('<img id="img_loading_prog" src="https://cucet.cuchd.in/assets/uploads/loading.svg" />');
    $.ajax({

        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: "../services.aspx/GetProgramDetails",
        data: "{ProgramCode:'" + ProgramCode + "'}",
        success: function(msg) {
            if (msg.d != '0') {
                var prog_details = msg.d;
                prog_details = prog_details.substring(prog_details.indexOf('<div class="program_details">'), prog_details.indexOf('</form>'));
                $('.' + target).html(prog_details);

            } else {
                //window.location = "Login.aspx";
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            // window.location = "Login.aspx";
        }
    });
}



function GetProgramSchDetails(ProgramCode, target) {
    $('.' + target).html('<img id="img_loading_prog" src="https://cucet.cuchd.in/assets/uploads/loading.svg" />');
    $.ajax({

        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: "../services.aspx/GetProgramSchDetails",
        data: "{ProgramCode:'" + ProgramCode + "'}",
        success: function(msg) {
            if (msg.d != '0') {
                var prog_details = msg.d;
                prog_details = prog_details.substring(prog_details.indexOf('<div class="program_details">'), prog_details.indexOf('</form>'));
                $('.' + target).html(prog_details);

            } else {
                //window.location = "Login.aspx";
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            // window.location = "Login.aspx";
        }
    });
}

function GetMEProgramSchDetails(ProgramCode, target) {
    $('.' + target).html('<img id="img_loading_prog" src="https://cucet.cuchd.in/assets/uploads/loading.svg" />');
    $.ajax({

        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: "../services.aspx/GetMEProgramSchDetails",
        data: "{ProgramCode:'" + ProgramCode + "'}",
        success: function(msg) {
            if (msg.d != '0') {
                var prog_details = msg.d;
                prog_details = prog_details.substring(prog_details.indexOf('<div class="program_details">'), prog_details.indexOf('</form>'));
                $('.' + target).html(prog_details);

            } else {
                //window.location = "Login.aspx";
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            // window.location = "Login.aspx";
        }
    });
}

function GetProgramItpDetails(ProgramCode, target) {
    $('.' + target).html('<img id="img_loading_prog" src="https://cucet.cuchd.in/assets/uploads/loading.svg" />');
    $.ajax({

        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: "../services.aspx/GetItpProgramDetails",
        data: "{ProgramCode:'" + ProgramCode + "'}",
        success: function(msg) {
            if (msg.d != '0') {
                var prog_details = msg.d;
                prog_details = prog_details.substring(prog_details.indexOf('<div class="ITPprogram_details">'), prog_details.indexOf('</form>'));
                $('.' + target).html(prog_details);

            } else {
                //window.location = "Login.aspx";
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            // window.location = "Login.aspx";
        }
    });
}

function GetMEProgramItpDetails(ProgramCode, target) {
    $('.' + target).html('<img id="img_loading_prog" src="https://cucet.cuchd.in/assets/uploads/loading.svg" />');
    $.ajax({

        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: "../services.aspx/GetMEItpProgramDetails",
        data: "{ProgramCode:'" + ProgramCode + "'}",
        success: function(msg) {
            if (msg.d != '0') {
                var prog_details = msg.d;
                prog_details = prog_details.substring(prog_details.indexOf('<div class="ITPprogram_details">'), prog_details.indexOf('</form>'));
                $('.' + target).html(prog_details);

            } else {
                //window.location = "Login.aspx";
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            // window.location = "Login.aspx";
        }
    });
}

function GetRegularProgramDetails2024(ProgramCode, target) {

    $('.' + target).html('<img id="img_loading_prog" src="https://cucet.cuchd.in/assets/uploads/loading.svg" />');
    $.ajax({

        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: "../services.aspx/GetRegularProgramDetails2024",
        data: "{ProgramCode:'" + ProgramCode + "'}",
        success: function(msg) {
            if (msg.d != '0') {
                var prog_details = msg.d;
                prog_details = prog_details.substring(prog_details.indexOf('<div class="program_details">'), prog_details.indexOf('</form>'));
                $('.' + target).html(prog_details);
            } else {
                //window.location = "Login.aspx";
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            // window.location = "Login.aspx";
        }
    });

    GetTestimonialDetails2024(ProgramCode, 'dynamic-testimonial-element');
}

function GetRegularProgramDetails(ProgramCode, target) {

    $('.' + target).html('<img id="img_loading_prog" src="https://cucet.cuchd.in/assets/uploads/loading.svg" />');
    $.ajax({

        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: "../services.aspx/GetRegularProgramDetails",
        data: "{ProgramCode:'" + ProgramCode + "'}",
        success: function(msg) {
            if (msg.d != '0') {
                var prog_details = msg.d;
                prog_details = prog_details.substring(prog_details.indexOf('<div class="program_details">'), prog_details.indexOf('</form>'));
                $('.' + target).html(prog_details);
            } else {
                //window.location = "Login.aspx";
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            // window.location = "Login.aspx";
        }
    });

    GetTestimonialDetails(ProgramCode, 'dynamic-testimonial-element');
}

function GetMERegularProgramDetails(ProgramCode, target) {

    $('.' + target).html('<img id="img_loading_prog" src="https://cucet.cuchd.in/assets/uploads/loading.svg" />');
    $.ajax({

        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: "../services.aspx/GetMERegularProgramDetails",
        data: "{ProgramCode:'" + ProgramCode + "'}",
        success: function(msg) {
            if (msg.d != '0') {
                var prog_details = msg.d;
                prog_details = prog_details.substring(prog_details.indexOf('<div class="program_details">'), prog_details.indexOf('</form>'));
                $('.' + target).html(prog_details);
            } else {
                //window.location = "Login.aspx";
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            // window.location = "Login.aspx";
        }
    });

    GetMETestimonialDetails(ProgramCode, 'dynamic-testimonial-element');
}

function GetRegularProgramDetailsInner(ProgramCode, target) {
    $('.' + target).html('<img id="img_loading_prog" src="https://cucet.cuchd.in/assets/uploads/loading.svg" />');
    $.ajax({
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: "../../services.aspx/GetRegularProgramDetails",
        data: "{ProgramCode:'" + ProgramCode + "'}",
        success: function(msg) {
            if (msg.d != '0') {
                var prog_details = msg.d;
                prog_details = prog_details.substring(prog_details.indexOf('<div class="program_details">'), prog_details.indexOf('</form>'));
                $('.' + target).html(prog_details);
            } else {
                //window.location = "Login.aspx";
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            // window.location = "Login.aspx";
        }
    });

    GetTestimonialDetailsInner(ProgramCode, 'dynamic-testimonial-element');
}

function GetTestimonialDetails2024(ProgramCode, target) {
    $('.' + target).html('<img id="img_loading_prog" src="https://cucet.cuchd.in/assets/uploads/loading.svg" />');
    $.ajax({

        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: "../services.aspx/GetTestimonialDetails2024",
        data: "{ProgramCode:'" + ProgramCode + "'}",
        success: function(msg) {
            if (msg.d != '0') {
                var testimonial_details = msg.d;
                testimonial_details = testimonial_details.substring(testimonial_details.indexOf('<div class="testimonial_details">'), testimonial_details.indexOf('</form>'));
                $('.' + target).html(testimonial_details);
            } else {
                //window.location = "Login.aspx";
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            // window.location = "Login.aspx";
        }
    });
}

function GetTestimonialDetails(ProgramCode, target) {
    $('.' + target).html('<img id="img_loading_prog" src="https://cucet.cuchd.in/assets/uploads/loading.svg" />');
    $.ajax({

        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: "../services.aspx/GetTestimonialDetails",
        data: "{ProgramCode:'" + ProgramCode + "'}",
        success: function(msg) {
            if (msg.d != '0') {
                var testimonial_details = msg.d;
                testimonial_details = testimonial_details.substring(testimonial_details.indexOf('<div class="testimonial_details">'), testimonial_details.indexOf('</form>'));
                $('.' + target).html(testimonial_details);
            } else {
                //window.location = "Login.aspx";
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            // window.location = "Login.aspx";
        }
    });
}

function GetMETestimonialDetails(ProgramCode, target) {
    $('.' + target).html('<img id="img_loading_prog" src="https://cucet.cuchd.in/assets/uploads/loading.svg" />');
    $.ajax({

        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: "../services.aspx/GetMETestimonialDetails",
        data: "{ProgramCode:'" + ProgramCode + "'}",
        success: function(msg) {
            if (msg.d != '0') {
                var testimonial_details = msg.d;
                testimonial_details = testimonial_details.substring(testimonial_details.indexOf('<div class="testimonial_details">'), testimonial_details.indexOf('</form>'));
                $('.' + target).html(testimonial_details);
            } else {
                //window.location = "Login.aspx";
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            // window.location = "Login.aspx";
        }
    });
}

function GetTestimonialDetailsInner(ProgramCode, target) {

    $('.' + target).html('<img id="img_loading_prog" src="https://cucet.cuchd.in/assets/uploads/loading.svg" />');
    $.ajax({

        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: "../../services.aspx/GetTestimonialDetails",
        data: "{ProgramCode:'" + ProgramCode + "'}",
        success: function(msg) {
            if (msg.d != '0') {
                var testimonial_details = msg.d;
                testimonial_details = testimonial_details.substring(testimonial_details.indexOf('<div class="testimonial_details">'), testimonial_details.indexOf('</form>'));
                $('.' + target).html(testimonial_details);
            } else {
                //window.location = "Login.aspx";
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            // window.location = "Login.aspx";
        }
    });
}

function GetProgramACPDetails(ProgramCode, target) {
    $('.' + target).html('<img id="img_loading_prog" src="https://cucet.cuchd.in/assets/uploads/loading.svg" />');
    $.ajax({

        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: "../services.aspx/GetProgramACPDetails",
        data: "{ProgramCode:'" + ProgramCode + "'}",
        success: function(msg) {
            if (msg.d != '0') {
                var prog_details = msg.d;
                prog_details = prog_details.substring(prog_details.indexOf('<div class="ACPprogram_details">'), prog_details.indexOf('</form>'));
                $('.' + target).html(prog_details);

            } else {
                //window.location = "Login.aspx";
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            // window.location = "Login.aspx";
        }
    });
}

function GetProgramCounselingDetails(ProgramCode, target) {
    $('.' + target).html('<img id="img_loading_prog" src="https://cucet.cuchd.in/assets/uploads/loading.svg" />');
    $.ajax({

        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: "../services.aspx/GetProgramCounselingDetails",
        data: "{ProgramCode:'" + ProgramCode + "'}",
        success: function(msg) {
            if (msg.d != '0') {
                var prog_details = msg.d;
                prog_details = prog_details.substring(prog_details.indexOf('<div class="Counselingprogram_details">'), prog_details.indexOf('</form>'));
                $('.' + target).html(prog_details);

            } else {
                //window.location = "Login.aspx";
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            // window.location = "Login.aspx";
        }
    });
}

//----------------------------------------------For International Website----------------------------------------------------
function GetInternationalProgramDetails(ProgramCode, target) {
    $('.' + target).html('<img id="img_loading_prog" src="https://cucet.cuchd.in/assets/uploads/loading.svg" />');
    $.ajax({
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: "../../services.aspx/GetInternationalProgramDetails",
        data: "{ProgramCode:'" + ProgramCode + "'}",
        success: function(msg) {
            if (msg.d != '0') {
                var prog_details = msg.d;
                prog_details = prog_details.substring(prog_details.indexOf('<div class="program_details">'), prog_details.indexOf('</form>'));
                $('.' + target).html(prog_details);
            } else {
                //window.location = "Login.aspx";
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            // window.location = "Login.aspx";
        }
    });

    GetInternationalTestimonialDetails(ProgramCode, 'dynamic-testimonial-international');
}


function GetInternationalTestimonialDetails(ProgramCode, target) {
    $('.' + target).html('<img id="img_loading_prog" src="https://cucet.cuchd.in/assets/uploads/loading.svg" />');
    $.ajax({

        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: "../../services.aspx/GetInternationalTestimonialDetails",
        data: "{ProgramCode:'" + ProgramCode + "'}",
        success: function(msg) {
            if (msg.d != '0') {
                var testimonial_details = msg.d;
                testimonial_details = testimonial_details.substring(testimonial_details.indexOf('<div class="testimonial_details">'), testimonial_details.indexOf('</form>'));
                $('.' + target).html(testimonial_details);
            } else {
                //window.location = "Login.aspx";
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            // window.location = "Login.aspx";
        }
    });
}

//----------------------------------------------For International Website----------------------------------------------------