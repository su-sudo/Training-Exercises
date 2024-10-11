$(document).ready(function() {

    $('.login-btn').prop('disabled', true).css({"cursor":"not-allowed", 
        "background": "linear-gradient(90deg, #ccc, #ddd)",
         "color": "#999", 
         "opacity": "0.6"});

    $('#email').on('blur', function() {
        
        const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        const email = $(this).val();
        if (!pattern.test(email)) {
            $('#email-error').text('Please enter a valid email.').show();
            $(this).css("border-color", "red");
        } else {
            $('#email-error').hide();
            $(this).css("border-color", "");
        }
    });

    $('#password').on('blur', function() {
        if ($(this).val().trim() === "") {
            $('#password-error').text('Password is required.').show();
            $(this).css("border-color", "red");
        } else {
            $('#password-error').hide();
            $(this).css("border-color", "");
        }
    });
     

    $('#remember').change(function() {
        if ($(this).is(':checked')) {
            $('.login-btn').prop('disabled', false).css({"cursor":"po", 
                "background": "radial-gradient(circle, #007bff, #00aaff)",
                 "color": "white", 
                 "opacity": "1"});
        } else {
            $('.login-btn').prop('disabled', true).css({"cursor":"not-allowed", 
                "background": "linear-gradient(90deg, #ccc, #ddd)",
                 "color": "#999", 
                 "opacity": "0.6"});
        }
    
    });       
    $('#login-form').on('submit', function(event) {
        var valid = true;
        $('#login-form').find('input').each(function() {
            if (!this.checkValidity()) {
                valid = false;
                $(this).closest('.input-group').find('.error-message').show();
                $(this).css("border-color", "red");
            } else {
                $(this).closest('.input-group').find('.error-message').hide();
                $(this).css("border-color", "");
                
            }
        });
        if (!valid) {
            event.preventDefault();
        }
    });
});
