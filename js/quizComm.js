$(function () {

    
    $("#btnTakeChale").click(function () {

        $("#divQuiz").css("display", "block");
        $("#divFrontPage").css("display", "none");
        

    });


    $('.table-hover').click(function () {
        
        var checkbox = $(this).find('input[type=checkbox]');
        checkbox.prop("checked", !checkbox.prop("checked"));
        
    });

    $('input[type=checkbox]').click(function (e) {
        e.stopPropagation();

        return true;
    });


    $("#btnRetake").click(function () {
        
        $("#divFrontPage").css("display", "block");
        $("#divIncorrectAnsPage").css("display", "none");
        
        $("#question1").prop("checked", false);
        $("#question2").prop("checked", false);
        $("#question3").prop("checked", false);
        $("#question4").prop("checked", false);

    });
   




    // Get the modal
    var modal = document.getElementById('divIncorrectAnsware');

    // Get the button that opens the modal
    var btn = document.getElementById("btnSubmit");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal 
    btn.onclick = function () {
        //alert(document.getElementById("question1").checked==false);

        
       // var allChecked = checkboxes.length == checkboxes.filter.not(':checked').length;
        //alert(allChecked);
        
        if (($("#question1").is(':checked')) && ($("#question4").is(':checked')) && (document.getElementById("question2").checked == false) && (document.getElementById("question3").checked == false))
        {
           
            $('#Message').text('Correct - Click Submit again or press \'y\' to continue.');
            $('#modelContent').css("background-color", "#47d147");

        }
        else if ((document.getElementById("question1").checked == false) && (document.getElementById("question2").checked == false) && (document.getElementById("question3").checked == false) && (document.getElementById("question4").checked == false))
        {
            $('#Message').text('You must answer the question before continuing.');
            $('#modelContent').css("background-color", "#FFFF66");
        }
        else {
            
            $('#Message').text('Incorrect - Click Submit again or press \'y\' to continue.');
            $('#modelContent').css("background-color", "#ff4d4d");

        }

        modal.style.display = "block";
       // $("#divQuiz").css("display", "none");
       
        
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
        

        if (($("#question1").is(':checked')) && ($("#question4").is(':checked')) && (document.getElementById("question2").checked == false) && (document.getElementById("question3").checked == false)) {

            $("#divCorretAnsPage").css("display", "block");
            $("#divQuiz").css("display", "none");

        }
        else if ((document.getElementById("question1").checked == false) && (document.getElementById("question2").checked == false) && (document.getElementById("question3").checked == false) && (document.getElementById("question4").checked == false)) {
            //$('#Message').text('You must answare the questiob before continuing.');
        }
        else {

            $("#divIncorrectAnsPage").css("display", "block");
            $("#divQuiz").css("display", "none");
            

        }
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            
          //  alert('hi123');
        }
    }
});


