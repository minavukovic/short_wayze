/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function searchDestination() {
  document.getElementById("search_dropdown").classList.toggle("show");
  if (window.location.pathname === '/add/building_plan_alt' ||
      window.location.pathname === '/add/building_plan' ||
      window.location.pathname === '/add/building_plan/undo' ||
      window.location.pathname === '/add/building_plan_alt/undo') {
    ga('create', 'UA-159859118-1', 'auto', {'optimize_id': 'GTM-WCS653R'});
    ga('require',  'GTM-WCS653R');
    ga('send', 'event', 'search', 'click');
  }
  console.log(window.location.pathname)
}

function filterSearch() {
  var input, filter, a, i;
  input = document.getElementById("loc_input");
  filter = input.value.toUpperCase();
  div = document.getElementById("search_dropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
