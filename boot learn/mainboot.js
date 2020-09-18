$(function(){
$('#myModal').modal({
   show:true,
   backdrop:'static'
});
 //now on button click
  $('#myModal').modal('show');
});
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
$(document).ready(function() {
        var date = new Date();
        var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());

        $('#datepicker').datepicker({
        format: "dd/mm/yyyy",
        autoclose: true,
        todayBtn: true,
        });

        $('#datepicker').datepicker('setDate', today);

    });
