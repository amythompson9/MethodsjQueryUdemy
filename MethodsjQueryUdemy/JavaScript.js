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

