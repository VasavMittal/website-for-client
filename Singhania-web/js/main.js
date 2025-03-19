(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    const scriptURL = "https://script.google.com/macros/s/AKfycbxQ1DGPgonB92uhIip-mNNO42XtBBjLPp_aJt14DqjzAZSwnjtQUr8jI4uTg5p1VfCpwA/exec";

        $("#submitForm").click(function (event) {
            event.preventDefault();

            // Get input values
            let fullName = $("#fullName").val().trim();
            let whatsappNumber = $("#whatsappNumber").val().trim();
            let email = $("#email").val().trim();
            let city = $("#city").val().trim();
            let connectTime = $("#connectTime").val();

            // Validation Regex
            let nameRegex = /^[a-zA-Z\s]+$/; 
            let phoneRegex = /^[6-9]\d{9}$/;
            let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 

            // Validation Checks
            if (fullName === "" || !nameRegex.test(fullName)) {
                swal("Invalid Name", "Please enter a valid full name (letters only).", "error");
                return;
            }
            if (whatsappNumber === "" || !phoneRegex.test(whatsappNumber)) {
                swal("Invalid Number", "Please enter a valid 10-digit WhatsApp number.", "error");
                return;
            }
            if (email === "" || !emailRegex.test(email)) {
                swal("Invalid Email", "Please enter a valid email address.", "error");
                return;
            }
            if (city === "" || !nameRegex.test(city)) {
                swal("Invalid City", "Please enter a valid city name (letters only).", "error");
                return;
            }
            if (connectTime === "") {
                swal("Invalid Time", "Please select a convenient time to connect.", "error");
                return;
            }

            // Hide Modal on successful validation
            $("#detailsModal").modal("hide");

            let formData = {
                "Full Name": fullName,
                "WhatsApp Number": whatsappNumber,
                "Email ID": email,
                "City of Residence": city,
                "Convenient Time to Connect": connectTime
            };

            $.ajax({
                url: scriptURL,
                type: "POST",
                data: formData,
                contentType: "application/x-www-form-urlencoded",
                success: function (response) {
                    if (response.result === "success") {
                        swal("Done", "Submitted Successfully.", "success");
                        $("#detailsModal form")[0].reset();
                    } else {
                        swal("Error", "Something went wrong. Please try again!", "error");
                        console.error("Google Script Error:", response.error);
                    }
                },
                error: function (xhr, status, error) {
                    swal("Error", "Something went wrong. Please try again!", "error");
                    console.error("AJAX Error:", error);
                }
            });
        });
    
})(jQuery);

