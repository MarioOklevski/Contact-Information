$(document).ready(function (){
    let ScreenWidth, ScreenHeight, DialogWidth, DialogHeight, isDesktop;
    let FullName = $("#InputFullName");

    /*------------ Hide icon in FullName input field on focus ------------*/
    FullName.focusin(function (){
        $("#NameIcon").hide();
    })
    FullName.focusout(function (){
        let FullNameVal = $("#InputFullName").val();
        if(FullNameVal == null || FullNameVal == ""){
            $("#NameIcon").show();
        }
    })

    /*------------ Dialog responsiveness ------------*/
    ScreenWidth = window.screen.width;
    ScreenHeight = window.screen.height;

    if ( ScreenWidth < 500 ) {
        DialogWidth = ScreenWidth * .95;
        DialogHeight = ScreenHeight * .95;
    } else {
        DialogWidth = 500;
        DialogHeight = 500;
        isDesktop = true;
    }

    /*------------ Dialog initialization ------------*/
    $("#TermsDialog").dialog({
        title: "Terms and Conditions",
        modal: true,
        draggable: false,
        autoOpen: false,
        width: DialogWidth,
        height: DialogHeight,
        fluid: true,
        resizable: false,
        open: function (){
            $("#BackgroundDisable").attr("style", "display: block");
            $('html, body').css({
                overflow: 'hidden'
            });
        },
        buttons: {
            Ok: function (){
                $("#BackgroundDisable").attr("style", "display: none");
                $('html, body').css({
                    overflow: 'auto'
                });
                $(this).dialog("close");
            }
        },
        close: function (){
            $("#BackgroundDisable").attr("style", "display: none");
            $('html, body').css({
                overflow: 'auto'
            });
        }
    })
    $("#SubmitDialog").dialog({
        title: "Submit",
        modal: true,
        draggable: false,
        autoOpen: false,
        width: DialogWidth,
        height: DialogHeight,
        fluid: true,
        resizable: false,
        open: function (){
            $("#BackgroundDisable").attr("style", "display: block");
            $('html, body').css({
                overflow: 'hidden'
            });
        },
        buttons: {
            Ok: function (){
                $("#BackgroundDisable").attr("style", "display: none");
                $('html, body').css({
                    overflow: 'auto'
                });
                $(this).dialog("close");
            }
        },
        close: function (){
            $("#BackgroundDisable").attr("style", "display: none");
            $('html, body').css({
                overflow: 'auto'
            });
            $("#form").submit();
        }
    })

    /*------------ Show the terms and conditions when clicked ------------*/
    $("#Terms").on("click", function (){
        $("#TermsDialog").dialog("open");
    })

    /*------------ Submit functionalities ------------*/
    $("#Btn").on("click", function (event){
        $("input:required:valid").css({
            "border" : "inherit"
        })
        $("input:required:invalid").css({
            "border" : "1px dotted red"
        })
        $("textarea:required:valid").css({
            "border" : "inherit"
        })
        $("textarea:required:invalid").css({
            "border" : "1px dotted red"
        })
        if(SuccessfulSubmit()){
            event.preventDefault()
            $("#SubmitDialog").dialog("open");
        }
    })

})

/*------------ Check if all the requirements are met for submission ------------*/
function SuccessfulSubmit(){
    let tests = 0;
    let FullName = $("#InputFullName");
    let Email = $("#InputEmail");
    let Phone = $("#InputPhone");
    let Message = $("#InputMessage");
    let CheckBox = $("#TermsAndConditions");
    if(FullName.is(":valid")){
        tests++;
    }
    if(Email.is(":valid")){
        tests++;
    }
    if(Phone.is(":valid")){
        tests++;
    }
    if(Message.is(":valid")){
        tests++;
    }
    if(CheckBox.is(":valid")){
        tests++;
    }
    if(tests == 5){
        return true;
    }
    else{
        return false;
    }
}

/*------------ Check if the entered email is of valid format ------------*/
function ValidEmail($email){
    let EmailPattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return EmailPattern.test($email)
}