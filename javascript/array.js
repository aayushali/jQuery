$(document).ready(function () {
    // Use of map and join function in jQuery
    var arr = ["a", "b", "c", "d", "e"];

    arr = jQuery.map(arr, function (n) {
        return (n.toUpperCase());
    })
    console.log(arr);

    $(".array-values").text(arr.join(',')).css("color", "red");


    //map object's keys to an array
    var dimensions = {width: 10, height: 15, length: 25};
    var keys = $.map(dimensions, function (value, key) {
        return key;
    })
    console.log(keys);

    // grep() function : Finds the elements of an array which satisfy a filter
    // function . The original array is not affected.
    // This func takes n= first element of array and i is the index of element
    var arr = [1, 8, 9, 2, 4, 5, 2, 6, 1, 9, 5, 4, 7, 3];
    $('.array-values').append("<div class='new-array'></div>");

    arr = jQuery.grep(arr, function (n, i) {
        return (n !== 5 && i > 4);
    });
    $('.new-array').text(arr.join(','));

    //makeArray() : Converts a array-like object into true javascript array

    var elems = document.getElementsByTagName('p');
    console.log(elems);
    var elemsArray = jQuery.makeArray(elems);
    console.log(elemsArray);


    // reversing an array
    elemsArray.reverse();
    console.log(elemsArray);

    // inArray() function gives the index of the element in array
    // just like in js, we used indexOf() in js
    console.log(arr);
    console.log($.inArray(7, arr));

    // Each function
    let array = [1, 2, 3];
    $.each(array, function (index, value) {
        // alert(index + ":" + value) ;
    });


    // merge() --> Merge the contents of two arrays together into the first arrray

    let arr1 = [2, 3, 4, 5];
    let arr2 = [3, 4, 3, 2];
    arr1 = $.merge(arr1, arr2);
    console.log(arr1);

    // val()
    var singleValue = $('#single').val();
    console.log(singleValue);
    $('#textbox').val("Random Text");
    var textBoxValue = $('#textbox').val();
    $('.show-text').text("Input-box value is " + textBoxValue);

    //ajax() function

   /* $.ajax({
        url: null,
        method: 'POST',
        dataType: 'script',
        data: {
            name: "AK",
            location: "Boston"
        },
        beforeSend: function () {
        },
    });
*/
    // prepend() function : inserts content specified by the parameter, to the beginning of each element in the set of matched elements
        $('.inner').prepend("<p>Test</p>"); // added p tag before 2 inner class tags

    // removeClass() working
    //   let's remove recently added test para
    $('.inner').removeClass("inner").attr("class","inner-class");


    // The :eq() selector selects an element with a specific index number.
    $( "span" ).eq( 0 ).text( "null");

    // addClass( className ) -> adds the specified class(es) to each element in the set of matched  elements

    $('div').last().addClass("last-div").append("<p>This is the last div with classname 'last-div' </p>");

    // removeClass() function removes className

    $('div').last().removeClass().addClass("removed-and-added");

    // append() --> insert content, specified by the parameter, to the end of each element in the set of matched criteria

    $('div').last().append("<h3>Appended text</h3>"); // h3 is added inside div at the last

    // after() --> inster content after each element in the set of matched elements

     $('div h3').after("<h2>after the last div</h2>");




});