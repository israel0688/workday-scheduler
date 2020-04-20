
// following variable are used fo displaying the background color

var hour = moment().format('h');
var nowHour9 = document.getElementById('9')
var nowHour10 = document.getElementById('10')
var nowHour11 = document.getElementById('11')
var nowHour12 = document.getElementById('12')
var nowHour1 = document.getElementById('1')
var nowHour2 = document.getElementById('2')
var nowHour3 = document.getElementById('3')
var nowHour4 = document.getElementById('4')
var nowHour5 = document.getElementById('5')
var color9 = document.getElementById('midColumn9')
var color10 = document.getElementById('midColumn10')
var color11 = document.getElementById('midColumn11')
var color12 = document.getElementById('midColumn12')
var color1 = document.getElementById('midColumn1')
var color2 = document.getElementById('midColumn2')
var color3 = document.getElementById('midColumn3')
var color4 = document.getElementById('midColumn4')
var color5 = document.getElementById('midColumn5')


// code to save the local storage
var input = document.getElementById('myData')
var btnInsert = document.getElementById('add-to-do')
var lsOutput = document.getElementById('lsOutput')
//var output = JSON.parse(window.localStorage.getItem(input))


//document.getElementById(output).innerHTML = lsOutput;

// funcition used to save the hourly tasks
// this is where I got stuck, I could not figure out how to
// populate from local storage to textbox
btnInsert.onclick = function save()
{
    var key = input.value;




    console.log(key);
};




//Display todays date in header
function headingDate()
{
  // instantiate a moment object
 var NowDate = moment().format("MMMM Do YYYY");
  
 
  // display value of moment object in #currentDay div
  var eDisplayDate = document.getElementById('currentDay');
  eDisplayDate.innerHTML = NowDate;
  

}
headingDate();


//following functions are for the background colors during specific hours
function backgroundColor9()
{
  nowHour9= 9;

    if (parseInt(hour) === nowHour9)
    color9.style.backgroundColor = "lightblue";

    else if (parseInt(hour) < nowHour9)
    color9.style.backgroundColor = "green";
    
    else
    color9.style.backgroundColor = "gray";
}
backgroundColor9();

function backgroundColor10()
{
  nowHour10= 10;

    if (parseInt(hour) === nowHour10)
    color10.style.backgroundColor = "lightblue";

    else if (parseInt(hour) < nowHour10)
    color10.style.backgroundColor = "green";
    
    else
    color10.style.backgroundColor = "gray";
}
backgroundColor10();

function backgroundColor11()
{
  nowHour11= 11;

    if (parseInt(hour) === nowHour11)
    color11.style.backgroundColor = "lightblue";

    else if (parseInt(hour) < nowHour11)
    color11.style.backgroundColor = "green";
    
    else
    color11.style.backgroundColor = "gray";
}
backgroundColor11();

function backgroundColor12()
{
  nowHour12= 12;

    if (parseInt(hour) === nowHour12)
    color12.style.backgroundColor = "lightblue";

    else if (parseInt(hour) < nowHour12)
    color12.style.backgroundColor = "green";
    
    else
    color12.style.backgroundColor = "gray";
}
backgroundColor12();

function backgroundColor1()
{
  nowHour1= 1;

    if (parseInt(hour) === nowHour1)
    color1.style.backgroundColor = "lightblue";

    else if (parseInt(hour) > nowHour1)
    color1.style.backgroundColor = "green";
    
    else
    color1.style.backgroundColor = "gray";
}
backgroundColor1();

function backgroundColor2()
{
  nowHour2= 2;

    if (parseInt(hour) === nowHour2)
    color2.style.backgroundColor = "lightblue";

    else if (parseInt(hour) > nowHour2)
    color2.style.backgroundColor = "green";
    
    else
    color2.style.backgroundColor = "gray";
}
backgroundColor2();

function backgroundColor3()
{
  nowHour3= 3;

    if (parseInt(hour) === nowHour3)
    color3.style.backgroundColor = "lightblue";

    else if (parseInt(hour) > nowHour3)
    color3.style.backgroundColor = "green";
    
    else
    color3.style.backgroundColor = "gray";
}
backgroundColor3();

function backgroundColor4()
{
  nowHour4= 4;

    if (parseInt(hour) === nowHour4)
    color4.style.backgroundColor = "lightblue";

    else if (parseInt(hour) > nowHour4)
    color4.style.backgroundColor = "green";

    else
    color4.style.backgroundColor = "gray";
  
}
backgroundColor4();

function backgroundColor5()
{
  nowHour5= 5;

    if (parseInt(hour) === nowHour5)
    color5.style.backgroundColor = "lightblue";

    else if (parseInt(hour) > nowHour5)
    color5.style.backgroundColor = "green";

    else
    color5.style.backgroundColor = "gray";        
  
}
backgroundColor5();




