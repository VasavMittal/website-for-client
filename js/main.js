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
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('fast');
        } else {
            $('.back-to-top').fadeOut('fast');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 10, 'easeInOutExpo');
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
    const scriptURL = "https://script.google.com/macros/s/AKfycbz6kqAMApiH-2QPgTm3E_awsVA7LTK79C0le1Mg0fMQErX4peOzzoDNZMmwYetMdyeJ/exec";

    let GlobalOtp = 0;
    $("#otp").click(function (event){
        event.preventDefault();
        let phoneRegex = /^[6-9]\d{9}$/;
        let whatsappNumber = $("#whatsapp").val().trim();
        if (whatsappNumber === "" || !phoneRegex.test(whatsappNumber)) {
            swal("Invalid Number", "Please enter a valid 10-digit WhatsApp number.", "error");
            return;
        }
        let otp = Math.floor(1000 + Math.random() * 9000);
        GlobalOtp = otp;
        let otpURL = "https://api2.nexgplatforms.com/sms/1/text/query?" +
        "username=SinghaniaUni&password=Lotus@1965&from=SINUNV" +
        "&to=91" + whatsappNumber + // Use the entered number
        "&indiaDltContentTemplateId=1707174668414758386" +
        "&indiaDltPrincipalEntityId=1501426470000025315" +
        "&indiaDltTelemarketerId=1702171328200125899" +
        "&text=" + encodeURIComponent(otp + " is your mobile verification code for Singhania University");
        $.ajax({
            url: otpURL,
            type: "GET",
            success: function (response) {
                if (response.messages && response.messages[0].status.id === 7) {
                    console.log("OTP sent");
                    $('#submitApplication').prop('disabled', false);
                    $('#otpMessage').css('display','block');
                } else {
                    swal("Invalid Number", "Please verify the number entered in WhatsApp Number", "error");
                }
            },
            error: function (xhr, status, error) {
                console.error("AJAX Error:", error);
            }
        });

    });
    $("#popupOtp").click(function (event){
        event.preventDefault();
        let phoneRegex = /^[6-9]\d{9}$/;
        let whatsappNumber = $("#whatsappNumber").val().trim();
        if (whatsappNumber === "" || !phoneRegex.test(whatsappNumber)) {
            swal("Invalid Number", "Please enter a valid 10-digit WhatsApp number.", "error");
            return;
        }
        let otp = Math.floor(1000 + Math.random() * 9000);
        GlobalOtp = otp;
        let otpURL = "https://api2.nexgplatforms.com/sms/1/text/query?" +
        "username=SinghaniaUni&password=Lotus@1965&from=SINUNV" +
        "&to=91" + whatsappNumber + // Use the entered number
        "&indiaDltContentTemplateId=1707174668414758386" +
        "&indiaDltPrincipalEntityId=1501426470000025315" +
        "&indiaDltTelemarketerId=1702171328200125899" +
        "&text=" + encodeURIComponent(otp + " is your mobile verification code for Singhania University");
        $.ajax({
            url: otpURL,
            type: "GET",
            success: function (response) {
                if (response.messages && response.messages[0].status.id === 7) {
                    console.log("OTP sent");
                    $('#submitForm').prop('disabled', false);
                    $('#popupOtpMessage').css('display','block');
                } else {
                    swal("Invalid Number", "Please verify the number entered in WhatsApp Number", "error");
                }
            },
            error: function (xhr, status, error) {
                console.error("AJAX Error:", error);
            }
        });

    });
    $("#secondFormOtp").click(function (event){
        event.preventDefault();
        let phoneRegex = /^[6-9]\d{9}$/;
        let whatsappNumber = $("#secondFormWhatsapp").val().trim();
        if (whatsappNumber === "" || !phoneRegex.test(whatsappNumber)) {
            swal("Invalid Number", "Please enter a valid 10-digit WhatsApp number.", "error");
            return;
        }
        let otp = Math.floor(1000 + Math.random() * 9000);
        GlobalOtp = otp;
        let otpURL = "https://api2.nexgplatforms.com/sms/1/text/query?" +
        "username=SinghaniaUni&password=Lotus@1965&from=SINUNV" +
        "&to=91" + whatsappNumber + // Use the entered number
        "&indiaDltContentTemplateId=1707174668414758386" +
        "&indiaDltPrincipalEntityId=1501426470000025315" +
        "&indiaDltTelemarketerId=1702171328200125899" +
        "&text=" + encodeURIComponent(otp + " is your mobile verification code for Singhania University");
        $.ajax({
            url: otpURL,
            type: "GET",
            success: function (response) {
                if (response.messages && response.messages[0].status.id === 7) {
                    console.log("OTP sent");
                    $('#SecondFormSubmitApplication').prop('disabled', false);
                    $('#secondOtpMessage').css('display','block');
                } else {
                    swal("Invalid Number", "Please verify the number entered in WhatsApp Number", "error");
                }
            },
            error: function (xhr, status, error) {
                console.error("AJAX Error:", error);
            }
        });

    });
    
    $("#submitForm").click(function (event) {
            event.preventDefault();

            // Get input values
            let fullName = $("#fullName").val().trim();
            let whatsappNumber = $("#whatsappNumber").val().trim();
            let email = $("#email").val().trim();
            let city = $("#city").val().trim();
            let connectTime = $("#connectTime").val();
            let url = sessionStorage.getItem("url");
            let utm_source = sessionStorage.getItem('utm_source');
            let utm_medium = sessionStorage.getItem('utm_medium');
            let utm_campaign = sessionStorage.getItem('utm_campaign');
            let otp = $("#otpPopup").val().trim();
            let usergrpid = "GRP1iped2p093cme0"
            let segid = "SEG8jtr2wwqnne1d1746615195237"
           

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
            if(utm_source && (utm_source.toLowerCase() == 'partnerotp' || utm_source.toLowerCase() == 'partner')){
                usergrpid = "GRP1iped2p093cme0"
                segid = "SEGvqhkwzu90rr501746776094352"
            }
            if(utm_source && utm_source.toLowerCase() == 'partnerotp'){
                if(GlobalOtp != parseInt(otp)){
                    swal("Invalid OTP", "Please Enter Valid Otp", "error");
                    return;
                }
            }

            // Hide Modal on successful validation
            $("#detailsModal").modal("hide");

            
            

            $.ajax({
    url: 'https://erp.singhaniauniversity.ac.in/validateAndSaveApplicantUserRegistrationData.json',
    type: 'POST',
    contentType: 'application/json',
    dataType: 'json',
    headers: {
        'Authorization': 'ADM NAICOLC+OIAP9UUD9NVACYI5ABQKKJ9A',
    },
    data: JSON.stringify({
        name: fullName,
        email: email,
        mobile: whatsappNumber,
        sourceName: utm_medium,
        campignName: utm_source
    }),
    success: function (response) {
        console.log("Third API call successful", response);

        if (response[0]?.status === "Success") {
            const msg = response[0].message;
            const userIdMatch = msg.match(/User Id\s*:\s*([^\s]+)/);
            const passwordMatch = msg.match(/Password\s*:\s*([^\s]+)/);

            const userId = userIdMatch ? userIdMatch[1] : "";
            const password = passwordMatch ? passwordMatch[1] : "";

            $.ajax({
                url: 'https://singhaniauniversity.ac.in/apis/send-admission-mail.php',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    to: email,
                    name: fullName,
                    userId: userId,
                    password: password
                }),
                success: function (res) {
                    console.log("Email triggered successfully", res);
                },
                error: function (xhr, status, error) {
                    console.error("Email API Error:", error);
                }
            });

            let formData = {
                "Full Name": fullName,
                "WhatsApp Number": whatsappNumber,
                "Email ID": email,
                "City of Residence": city,
                "Convenient Time to Connect": connectTime,
                "Url" : url,
                "Lp name" : "Singhania_Law_1"
            };

            $.ajax({
				url: scriptURL,
				type: "POST",
				data: formData,
				contentType: "application/x-www-form-urlencoded",
				success: function (response) {
					console.log("Form submitted successfully", response);
				},
				error: function (xhr, status, error) {
					console.error("AJAX Error:", error);
				}
			});
            //Second: Submit to your API
            $.ajax({
                url: 'https://platformapi.teleforce.in/api/v1/api/createlead/181743',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    name: fullName,
                    email: email,
                    mobile: whatsappNumber,
                    city: city,
                    source: utm_medium,
                    usergroupid: usergrpid, 
                    segmentid: segid, 
                    otherparams: [
                        { "meta_key": "convenient_time", "meta_value": connectTime },
                        { "meta_key": "utm_source", "meta_value": utm_source },
                        { "meta_key": "utm_medium", "meta_value": utm_medium },
                        { "meta_key": "utm_campaign", "meta_value": utm_campaign }
                        
                    ]
                }),
                success: function (response) {
                    console.log("API lead created successfully", response);
                },
                error: function (xhr, status, error) {
                    console.error("Lead API Error:", error);
                }
            });

            setTimeout(() => {
				window.location.href = "thankyou.html";
			}, 500); // Redirect after 0.5 second
            

        } else if (response[0]?.error === true) {
            swal("Error", response[0].errorMsg, "error");
        } else {
            swal("Unexpected Response", "Please contact admin.", "warning");
        }
    },
    error: function (xhr, status, error) {
        console.error("Third API Error:", error);
    }
});
          
			
			
        });

        $("#submitApplication").click(function (event) {
            event.preventDefault();

            // Get input values
            let fullName = $("#name").val().trim();
            let whatsappNumber = $("#whatsapp").val().trim();
            let email = $("#mainFormEmail").val().trim();
            let city = $("#mainFormCity").val().trim();
            let connectTime = $("#mainFormTime").val();
            let url = sessionStorage.getItem("url");
            let utm_source = sessionStorage.getItem('utm_source');
            let utm_medium = sessionStorage.getItem('utm_medium');
            let utm_campaign = sessionStorage.getItem('utm_campaign');
            let otp = $("#otpField").val().trim();
            let usergrpid = "GRP1iped2p093cme0"
            let segid = "SEG8jtr2wwqnne1d1746615195237"
           

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
            if(utm_source && (utm_source.toLowerCase() == 'partnerotp' || utm_source.toLowerCase() == 'partner')){
                usergrpid = "GRP1iped2p093cme0"
                segid = "SEGvqhkwzu90rr501746776094352"
            }
            if(utm_source && utm_source.toLowerCase() == 'partnerotp'){
                if(GlobalOtp != parseInt(otp)){
                    swal("Invalid OTP", "Please Enter Valid Otp", "error");
                    return;
                }
            }

            // Hide Modal on successful validation
            $("#detailsModal").modal("hide");

            

            
            $.ajax({
    url: 'https://erp.singhaniauniversity.ac.in/validateAndSaveApplicantUserRegistrationData.json',
    type: 'POST',
    contentType: 'application/json',
    dataType: 'json',
    headers: {
        'Authorization': 'ADM NAICOLC+OIAP9UUD9NVACYI5ABQKKJ9A',
    },
    data: JSON.stringify({
        name: fullName,
        email: email,
        mobile: whatsappNumber,
        sourceName: utm_medium,
        campignName: utm_source
    }),
    success: function (response) {
        console.log("Third API call successful", response);

        if (response[0]?.status === "Success") {
            const msg = response[0].message;
            const userIdMatch = msg.match(/User Id\s*:\s*([^\s]+)/);
            const passwordMatch = msg.match(/Password\s*:\s*([^\s]+)/);

            const userId = userIdMatch ? userIdMatch[1] : "";
            const password = passwordMatch ? passwordMatch[1] : "";

            $.ajax({
                url: 'https://singhaniauniversity.ac.in/apis/send-admission-mail.php',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    to: email,
                    name: fullName,
                    userId: userId,
                    password: password
                }),
                success: function (res) {
                    console.log("Email triggered successfully", res);
                },
                error: function (xhr, status, error) {
                    console.error("Email API Error:", error);
                }
            });



            let formData = {
                "Full Name": fullName,
                "WhatsApp Number": whatsappNumber,
                "Email ID": email,
                "City of Residence": city,
                "Convenient Time to Connect": connectTime,
                "Url" : url,
                "Lp name" : "Singhania_Law_1"
            };

            $.ajax({
				url: scriptURL,
				type: "POST",
				data: formData,
				contentType: "application/x-www-form-urlencoded",
				success: function (response) {
					console.log("Form submitted successfully", response);
				},
				error: function (xhr, status, error) {
					console.error("AJAX Error:", error);
				}
			});

            //Second: Submit to your API
            $.ajax({
                url: 'https://platformapi.teleforce.in/api/v1/api/createlead/181743',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    name: fullName,
                    email: email,
                    mobile: whatsappNumber,
                    city: city,
                    source: utm_medium,
                    usergroupid: usergrpid, 
                    segmentid: segid, 
                    otherparams: [                        
                        { "meta_key": "convenient_time", "meta_value": connectTime },
                        { "meta_key": "utm_source", "meta_value": utm_source },
                        { "meta_key": "utm_medium", "meta_value": utm_medium },
                        { "meta_key": "utm_campaign", "meta_value": utm_campaign }       
                    ]
                }),
                success: function (response) {
                    console.log("API lead created successfully", response);
                },
                error: function (xhr, status, error) {
                    console.error("Lead API Error:", error);
                }
            });

            // Redirect without waiting for the server
			setTimeout(() => {
				window.location.href = "thankyou.html";
			}, 500); // Redirect after 0.5 second

        } else if (response[0]?.error === true) {
            swal("Error", response[0].errorMsg, "error");
        } else {
            swal("Unexpected Response", "Please contact admin.", "warning");
        }
    },
    error: function (xhr, status, error) {
        console.error("Third API Error:", error);
    }
});            
			
			
			
        });

        $("#SecondFormSubmitApplication").click(function (event) {
            event.preventDefault();

            // Get input values
            let fullName = $("#secondFormName").val().trim();
            let whatsappNumber = $("#secondFormWhatsapp").val().trim();
            let email = $("#secondFormEmail").val().trim();
            let city = $("#secondFormCity").val().trim();
            let connectTime = $("#secondFormTime").val();
            let url = sessionStorage.getItem("url");
            let utm_source = sessionStorage.getItem('utm_source');
            let utm_medium = sessionStorage.getItem('utm_medium');
            let utm_campaign = sessionStorage.getItem('utm_campaign');
            let otp = $("#otpSecondField").val().trim();
            let usergrpid = "GRP1iped2p093cme0"
            let segid = "SEG8jtr2wwqnne1d1746615195237"
           

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
            if(utm_source && (utm_source.toLowerCase() == 'partnerotp' || utm_source.toLowerCase() == 'partner')){
                usergrpid = "GRP1iped2p093cme0"
                segid = "SEGvqhkwzu90rr501746776094352"
            }
            if(utm_source && utm_source.toLowerCase() == 'partnerotp'){
                if(GlobalOtp != parseInt(otp)){
                    swal("Invalid OTP", "Please Enter Valid Otp", "error");
                    return;
                }
            }

            // Hide Modal on successful validation
            $("#detailsModal").modal("hide");

            

            
            $.ajax({
    url: 'https://erp.singhaniauniversity.ac.in/validateAndSaveApplicantUserRegistrationData.json',
    type: 'POST',
    contentType: 'application/json',
    dataType: 'json',
    headers: {
        'Authorization': 'ADM NAICOLC+OIAP9UUD9NVACYI5ABQKKJ9A',
    },
    data: JSON.stringify({
        name: fullName,
        email: email,
        mobile: whatsappNumber,
        sourceName: utm_medium,
        campignName: utm_source
    }),
    success: function (response) {
        console.log("Third API call successful", response);

        if (response[0]?.status === "Success") {
            const msg = response[0].message;
            const userIdMatch = msg.match(/User Id\s*:\s*([^\s]+)/);
            const passwordMatch = msg.match(/Password\s*:\s*([^\s]+)/);

            const userId = userIdMatch ? userIdMatch[1] : "";
            const password = passwordMatch ? passwordMatch[1] : "";

            $.ajax({
                url: 'https://singhaniauniversity.ac.in/apis/send-admission-mail.php',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    to: email,
                    name: fullName,
                    userId: userId,
                    password: password
                }),
                success: function (res) {
                    console.log("Email triggered successfully", res);
                },
                error: function (xhr, status, error) {
                    console.error("Email API Error:", error);
                }
            });


            let formData = {
                "Full Name": fullName,
                "WhatsApp Number": whatsappNumber,
                "Email ID": email,
                "City of Residence": city,
                "Convenient Time to Connect": connectTime,
                "Url" : url,
                "Lp name" : "Singhania_Law_1"
            };

            $.ajax({
				url: scriptURL,
				type: "POST",
				data: formData,
				contentType: "application/x-www-form-urlencoded",
				success: function (response) {
					console.log("Form submitted successfully", response);
				},
				error: function (xhr, status, error) {
					console.error("AJAX Error:", error);
				}
			});


            //paidgrp:GRP1iped2p093cme0
            //paidseg:SEG8jtr2wwqnne1d1746615195237

            //partnergrp:GRP1iped2p093cme0
            //partnerseg:SEGvqhkwzu90rr501746776094352

            //Second: Submit to your API
            $.ajax({
                url: 'https://platformapi.teleforce.in/api/v1/api/createlead/181743',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    name: fullName,
                    email: email,
                    mobile: whatsappNumber,
                    city: city,
                    source: utm_medium,
                    usergroupid: usergrpid, 
                    segmentid: segid,  
                    otherparams: [
                        { "meta_key": "convenient_time", "meta_value": connectTime },
                        { "meta_key": "utm_source", "meta_value": utm_source },
                        { "meta_key": "utm_medium", "meta_value": utm_medium },
                        { "meta_key": "utm_campaign", "meta_value": utm_campaign } 
                    ]
                }),
                success: function (response) {
                    console.log("API lead created successfully", response);
                },
                error: function (xhr, status, error) {
                    console.error("Lead API Error:", error);
                }
            });

            // Redirect without waiting for the server
			setTimeout(() => {
				window.location.href = "thankyou.html";
			}, 500); // Redirect after 0.5 second

        } else if (response[0]?.error === true) {
            swal("Error", response[0].errorMsg, "error");
        } else {
            swal("Unexpected Response", "Please contact admin.", "warning");
        }
    },
    error: function (xhr, status, error) {
        console.error("Third API Error:", error);
    }
});


            
			
			
        });
    
})(jQuery);

