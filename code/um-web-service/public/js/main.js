
function redborder(temp){

    temp.keyup(function(){
        if(temp.valid() == false){
                temp.css("border","1px solid RGB(250,0,60)");
        }
        else{
            temp.css("border","1px solid #ced4da");
    }
    })
}



/**************************************************************************************/
/*********************************************   Login-input-error   *****************/
 $(document).ready(function(){
     $('#login-form').validate({
         rules: {
                 email: {
                 required: true,
                 email: true
             },
                password: {
                 required: true,
                 rangelength: [6,16]
             }
         },
         messages: {
             email: {
             required: "Email address is required.",
            },
            password: {
             required: "Password is required.",
             rangelength:"Should be 6-16 characters."
            }
        }
    });


    var le = $("#login-email");
    le.keyup(redborder(le));
    var lp = $("#login-password");
    lp.keyup(redborder(lp));

    $("#login-btn").click(function(){
        if($("#login-form").valid()==false){
            if($("#login-email").valid()==false){
                $("#login-email").css("border","1px solid RGB(250,0,60)");
            }
            if($("#login-password").valid()==false){
                $("#login-password").css("border","1px solid RGB(250,0,60)");
            }
        }
    });
 })

/*********************************************   Sign up-input-error   *****************/



 $(document).ready(function(){
     $('#signup-form').validate({
         rules: {
             fullname: "required",
             email: {
             required: true,
             email: true
         },
             nationality: {
             required: true,
         },
             password: {
                 required: true,
                 rangelength: [6,16]
         },
            personalPhoto: {
                required: true,
            },
            studentCard: {
                required: true,
            }
             // agree: "required"
         },
         messages: {
             fullname: "Full name is required.",
             email: {
             required: "Email address is required.",
             },
             nationality: {
             required: "Nationality is required.",
             },
             password: {
                 required:"Password is required.",
                 rangelength: "Should be 6-16 characters."
             },
             personalPhoto: {
                 required: "Please upload your photo.",
             },
             studentCard: {
                 required: "Student card photo is required.",
             }
             // agree: "It is required"
        }
    });



    var sf = $("#signup-fullname");
    sf.keyup(redborder(sf));

    var sn = $("#signup-nationality");
    sn.keyup(redborder(sn));

    var se = $("#signup-email");
    se.keyup(redborder(se));

    var sp = $("#signup-password");
    sp.keyup(redborder(sp));

    $("#signup-btn").click(function(){
        if($("#signup-form").valid()==false){
            console.log('validation failed');

            if($("#signup-fullname").valid()==false){
                $("#signup-fullname").css("border","1px solid RGB(250,0,60)");
            }

            if($("#signup-nationality").valid()==false){
                $("#signup-nationality").css("border","1px solid RGB(250,0,60)");
            }

            if($("#signup-email").valid()==false){
                $("#signup-email").css("border","1px solid RGB(250,0,60)");
            }

            if($("#signup-password").valid()==false){
                $("#signup-password").css("border","1px solid RGB(250,0,60)");
            }
        }
    });

 })
 /*********************************************   Event creation and Login first modal window  *****************/


 $(document).ready(function(){
     $("#eventCreate-close").click(function(){
         history.back();
     });


 });







// /*********************************************   Profile edit   *****************/





