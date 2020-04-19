
//Display todays date in header
(function()
{
  // instantiate a moment object
  var NowDate = moment().format("MMMM Do YYYY");
  

  
  // display value of moment object in #currentDay div
  var eDisplayDate = document.getElementById('currentDay');
  eDisplayDate.innerHTML = NowDate;
  

})();