$(document).ready(function(){
    $('.btn').click(function(){
        $.ajax("https://dog.ceo/api/breeds/image/random",{
            success: function (response){

               $('.dog-image img').attr("src",response.message);
               console.log(response.message);
            },
            complete:function (response){
                console.log(response.status);
            },
            beforeSend: function(){
                console.log("sending request to the api");
            }

        });
    });

// append() function
     $('.append-text').append("<b>This is Appended text</b>");

 // prepend() function
    $('.append-text').prepend("<b>This is prepended text</b>");

    // after() method
    $('.append-text').after("<hr> <div>This is next div</div>").addClass("after-hr-div");

    //find() method
   // $('.append-text').find('span').css({"color":"red"});

    //parent() method
    $('h3').parent().css({"color":"blue"});

    //next() method
    $('.value').next().append("<h5>This is after append-text</h5>");

    //first() method
    $('div').first().css({"backgroundColor":"pink"});

    //last() method
    $('div').last().css("background-color", "yellow");

    //filter() methods returns only whose criteria are matched

    $("p").filter(".intro").append("<p class='intro'> This P tag has intro class in it</p>").css("background-color","yellow");

    //not() methods returns all elements that donot match the criteria.

    $("p").not(".intro").append("<p class='intro'> This P tag does not have intro class </p>").css("background-color","red");

    setTimeout(() => { $('.append-text').find('span').css({"color":"red"}); }, 5000);
    //setInterval(function(){ alert("Hello"); }, 3000);





});