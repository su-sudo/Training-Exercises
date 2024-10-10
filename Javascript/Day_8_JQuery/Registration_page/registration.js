$(document).ready(function () {
        var formsubmit = false;
    //Password Handling
         $('.input-group').find('#mis-match').hide();
    
        $('#confirmPassword').on('keyup',function (e) { 
            var passwd = $('#password').val();
            var cnfPasswd = $('#confirmPassword').val();
            if(passwd != cnfPasswd ){
                
                // e.preventDefault();
                console.log($('#password').val());

                
                $(this).closest('.input-group').find('#mis-match').show();
                $("button[type='submit']").css({"cursor":"not-allowed",
                    "background": "linear-gradient(90deg, #ccc, #ddd)", 
                    "color": "#999",  
                    "opacity": "0.6", 
                    "pointer-events": "none"
                                                        });
                $("button[type='submit']").attr("disabled",true)
                var nnn = $("button[type='submit']");

            }
            else{
                $(this).closest('.input-group').find('#mis-match').hide();
                $("button[type='submit']").removeAttr('style');
                
                $("button[type='submit']").attr("disabled",false)
            }
        });

        $('#password').keyup(()=>{
            $('#confirmPassword').trigger('keyup');
        });

        //phone number thing 

        $('.input-group').find($("input[type='tel']")).focus(function (e) { 
                
            $(this).closest('.input-group').find('span').hide();    
            });

        $("input[type='tel']").focus(function (e) { 

            const pattern = /^\+?[1-9]\d{1,14}$/;
            const phone = $(this).val();
            if(!(pattern.test(phone))){
                if(){
                $(this).closest('.input-group').append('<span id="">Enter valid Number</span>');}

            }
            else{
                    

            }
        });




});