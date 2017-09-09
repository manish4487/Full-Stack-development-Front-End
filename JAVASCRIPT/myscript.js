//var weight = prompt("ENter the eight in lbs");
//var converted = weight * 0.4;
//alert("Weight is" + converted);
//Console.log("conversion done");

//---------------PART TWO-------------------

var hot = false;
var temp = 160;
//if (temp > 80) {
//    hot = true
//    alert("Hot hot superhot");
//}
//else {
//    alert("Its not hot outside");
//}

console.log(hot);


//-----------PART THREE-------------------
var x = 0;
while (x < 5) {
    console.log("x is curently " + x);
    if (x == 3)
    {
        console.log("X is Equal to 3");
        break;
    }
    x = x + 1;
}

//------------------PART FOUR---------------

for (var i = 0; i < 25; i++)
{
    if (i % 2 !== 0)
    {
        console.log("ODD numbers are"+i);
    }
}