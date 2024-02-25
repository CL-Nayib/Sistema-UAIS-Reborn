function showCalendar(field){
  //document.getElementById('rehab').style.backgroundColor = 'var(--main-bg-color)';
  localStorage.setItem("field", field);
  document.getElementById('header-title').style.visibility = 'visible';
  document.getElementById('sch-container').style.visibility = 'visible';
  document.getElementById('calendar-container').style.visibility = 'visible';
  document.getElementById('hour-container').style.visibility = 'visible';
}



function showForm(hour){
  localStorage.setItem("hour", hour);
  //document.getElementById('rehab').style.backgroundColor = 'var(--main-bg-color)';
  document.getElementById('form-visibility').style.display = 'flex';
}

function print(){
  var field = localStorage.getItem("field");
  var hour = localStorage.getItem("hour");
  alert("field: " + field + ", hour: " + hour);
}

