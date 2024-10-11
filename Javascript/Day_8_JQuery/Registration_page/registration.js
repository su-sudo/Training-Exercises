$(document).ready(function () {
    var formsubmit = false;
    
    $('#confirmPassword').on('keyup', function () { 
        var passwd = $('#password').val();
        var cnfPasswd = $('#confirmPassword').val();
        if(passwd !== cnfPasswd) {
            $(this).closest('.input-group').find('.error').show();
            $("button[type='submit']").prop("disabled", true).css({"cursor":"not-allowed", 
                                                                    "background": "linear-gradient(90deg, #ccc, #ddd)",
                                                                     "color": "#999", 
                                                                     "opacity": "0.6"});
        } else {
            $(this).closest('.input-group').find('.error').hide();
            $("button[type='submit']").prop("disabled", false).removeAttr('style');
        }
    });

    $('#password').on('keyup', function () {
        $('#confirmPassword').trigger('keyup');
        var strength = calculatePasswordStrength($(this).val());
        var strengthText = '';
        if (strength <= 2) {
            strengthText = 'Weak';
        } else if (strength <= 4) {
            strengthText = 'Medium';
        } else {
            strengthText = 'Strong';
        }
        $(this).closest('.input-group').find('.tooltip').text('Password strength: ' + strengthText);
        $(this).closest('.input-group').find('.tooltip').css("display","block");
    });

    function calculatePasswordStrength(password) {
        var strength = 0;
        if (password.length >= 6) strength++;
        if (password.match(/[a-z]/)) strength++;
        if (password.match(/[A-Z]/)) strength++;
        if (password.match(/[0-9]/)) strength++;
        if (password.match(/[\W]/)) strength++;
        return strength;
    }


    $('input[type="tel"]').on('blur', function () {
        const pattern = /^\+?[1-9]\d{1,14}$/;
        const phone = $(this).val();
        if (!pattern.test(phone)) {
            $(this).closest('.input-group').find('.tooltip').text('Enter valid Number').show();
            $(this).css("border-color", "red");
        } else {
            $(this).closest('.input-group').find('.tooltip').hide();
            $(this).css("border-color", "");
        }
    });

    $('input[type="email"]').on('blur', function () {
        const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        const email = $(this).val();
        if (!pattern.test(email)) {
            $(this).closest('.input-group').find('.tooltip').text('Enter valid Email').show();
            $(this).css("border-color", "red");
        } else {
            $(this).closest('.input-group').find('.tooltip').hide();
            $(this).css("border-color", "");
        }
    });

    $('input[id="username"]').on('blur', function () {
        const pattern = /^[a-zA-Z0-9]{3,}$/;
        const username = $(this).val();
        if (!pattern.test(username)) {
            $(this).closest('.input-group').find('.tooltip').text('Enter a valid username (at least 3 alphanumeric characters)').show();
            $(this).css("border-color", "red");
        } else {
            $(this).closest('.input-group').find('.tooltip').hide();
            $(this).css("border-color", "");
        }
    });


    $('input[id="firstName"]').on('blur', function () {
        const pattern = /^[a-zA-Z]{2,}$/;
        const firstName = $(this).val();
        if (!pattern.test(firstName)) {
            $(this).closest('.input-group').find('.tooltip').text('Enter a valid first name (at least 2 letters)').show();
            $(this).css("border-color", "red");
        } else {
            $(this).closest('.input-group').find('.tooltip').hide();
            $(this).css("border-color", "");
        }
    });


    $('input[id="lastName"]').on('blur', function () {
        const pattern = /^[a-zA-Z]{2,}$/;
        const lastName = $(this).val();
        if (!pattern.test(lastName)) {
            $(this).closest('.input-group').find('.tooltip').text('Enter a valid last name (at least 2 letters)').show();
            $(this).css("border-color", "red");
        } else {
            $(this).closest('.input-group').find('.tooltip').hide();
            $(this).css("border-color", "");
        }
    });

    $('#dob').attr('max', new Date().toISOString().split('T')[0]);

    var statesAndCities = {
        "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
        "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode"],
        "Karnataka": ["Bangalore", "Mysore", "Mangalore"]
    };

    $.each(statesAndCities, function(state, cities) {
        $('#state').append(new Option(state, state));
    });

    $('#state').on('change', function () {
        var selectedState = $(this).val();
        var cities = statesAndCities[selectedState];
        $('#city').empty();
        $.each(cities, function(index, city) {
            $('#city').append(new Option(city, city));
        });
    });

    $('#registrationForm').on('submit', function (event) {
        var valid = true;
        $(this).find('input').each(function () {
            if (!this.checkValidity()) {
                valid = false;
                $(this).closest('.input-group').find('.tooltip').show();
                $(this).css("border-color", "red");
            } else {
                $(this).closest('.input-group').find('.tooltip').hide();
                $(this).css("border-color", "");
            }
        });
        if (!valid) {
            event.preventDefault();
        }
    });
    $('#backBtn').on('click', function () {
        window.history.back();
    });
});
