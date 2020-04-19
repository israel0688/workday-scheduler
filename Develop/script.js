
var hour = moment().format('h');
var nowHour = document.getElementById('theHour')
var color = document.getElementById('midColumn')
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


function backgroundColor()
{
  

    if (hour=nowHour)
    color.style.backgroundColor = "lightblue";

    else
    color.style.backgroundColor = "gray";
        
  
}
backgroundColor();




