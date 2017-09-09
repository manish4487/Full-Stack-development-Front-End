$('h1').click (function(){
    console.log("There was a Click")
    $(this).text("I was changed!")
})

$('li').click(function () {
console.log("Any list Item is Clicked")
})

//Effects in jQuery
$('li').click(function () {
    $('h2').slideUp();
});

$('h1').click(function () {
    $('p').slideToggle();
});

//Animate

    $('input').eq(1).click(function () {
        $('h2').animate({ height:'100px' });
    });

//Alert

    $('input').eq(0).click(function () {
        alert("Text: " + $('p').text());
    });

//AJAx and jQuery used together to change the text wthout loading the entire page
    $('input').eq(1).click(function ()
    {
            $('div').load("demotext.txt", function (responseTxt, statusTxt, xhr) 
            {
                if (statusTxt == "success")
                    alert("External content loaded successfully!");
            });
    });
        