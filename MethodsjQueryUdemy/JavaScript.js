$("h1").click(function () {
    alert("h1 clicked");
});

$("button").click(function () {
    $(this).css("background", "pink")
});

//the above is simpler
//to do this in javascript
//query selector all
//for loop
//add event listener

//$("input").keypress(function () {
//    console.log("You pressed a key");
//});

$("input").keypress(function (event) {
    if (event.which === 13) {
        alert("You hit enter");
    };
    //console.log(event);
});

//'which' will be the code of the key that is pressed
//enter is 13

//$("h1").on("click", function () {
//    $("h1").css("color", "purple");
//});

//the above is for a single instance of h1

//what if you have multiples?
//use this 

$("h1").on("click", function () {
    $(this).css("color", "purple");
});

$("input").on("keypress", function () {
    console.log("keypressed!");
});

$("button").on("mouseenter", function() {
    $(this).css("font-weight", "bold");
});

$("button").on("mouseleave", function () {
    $(this).css("font-weight", "normal");
});


//$("#fade").on("click", function () {
//    $("div").fadeOut(1000, function () {
//        console.log("Fade Completed");
//    });
//});

//$("#fade").on("click", function () {
//    $("div").fadeOut(1000, function () {
//        $(this).remove();
//    });
//});

//$("#fade").on("click", function () {
//    $("div").fadeToggle(500);
//});

//needs css to display:none
//$("#fade").on("click", function () {
//    $("div").slideDown();
//});

//$("#fade").on("click", function () {
//    $("div").slideUp();
//});

$("#fade").on("click", function () {
    $("div").slideToggle();
});