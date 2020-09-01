  // get acc data
var account_key="account";
var items_key="items";
var suppliers_key="suppliers";
var tutorial_key="tutorial";
var originalAccount_key="original account";
var originalItem_key="original item";
var originalSupplier_key="original supplier";
var originalItemAcc_key="original item account";
var originalItemName_key="original item name";
var originalAccName_key="original account name";
var originalSupName_key="original supplier name";
var supplierTotal_key="supplier total";
var currentAccounts_key="current accounts";
var currentItems_key="current items";
var totalaccounts_key="total accounts";
var totalitems_key="total items";
var transactions_key="transactions";
var rangeTotal_key="range total";
  localStorage.setItem(rangeTotal_key, parseInt(0));
var dbacc = localStorage.getItem(account_key);
var dbit = localStorage.getItem(items_key);
var dbsup = localStorage.getItem(suppliers_key);
console.log("itit"+dbacc);
console.log("itit"+dbit);
console.log("itit"+dbsup);
db.collection(dbacc).onSnapshot(snapshot=>{
window.localStorage.setItem(currentAccounts_key, snapshot.docs);
setupDropdownacccha(snapshot.docs);
// setupDropdownitcrt(snapshot.docs);
})
db.collection(dbit).onSnapshot(snapshot=>{
window.localStorage.setItem(currentItems_key, snapshot.docs);
setupDropdownitcha(snapshot.docs);
})
// localStorage.setItem(tutorial_key, 1);
// table accounts

localStorage.setItem(totalaccounts_key, 0);
localStorage.setItem(totalitems_key, 0);
const tableList=document.querySelector('.tablo');
const setuptableaccounts =(data)=>{
  let html=`<tr>`;
  let htmlEnd=`</tr>`;
  var list='';
  var totalholder;
  data.forEach(doc=>{
    const drops=doc.data();
jQuery.each(drops, function (key, value) {
if(key=="total"){
totalholder=addCommas(value);
var very=localStorage.getItem(totalaccounts_key);
very=parseInt(very)+parseInt(value);
localStorage.setItem(totalaccounts_key, very);
}
    })
    const li=`
    <td>${doc.id}</td><td>${totalholder}</td></tr>
    `;
    html+=li;
  });
  var very=addCommas(localStorage.getItem(totalaccounts_key));
  const htend=`
  <td><b>TOTAL</b></td><td><b>${very}</b></td></tr>
  `;
  html+=htend;
  // html+=htmlEnd;
tableList.innerHTML=html;
// console.log(html);
  // Or with jQuery

  $(document).ready(function(){
    $('select').formSelect();
  });
}
// table ITEMS

const tableListit=document.querySelector('.tabloit');
const setuptableitems =(data)=>{
  let html=`<tr>`;
  let htmlEnd=`</tr>`;
  var list='';
  var totalholder;
  var accholder;
  data.forEach(doc=>{
    const drops=doc.data();
jQuery.each(drops, function (key, value) {
if(key=="total"){
totalholder=addCommas(value);
var very=localStorage.getItem(totalitems_key);
very=parseInt(very)+parseInt(value);
localStorage.setItem(totalitems_key, very);
}else if (key=="account") {
accholder=value;
}
    })
    const li=`
    <td>${doc.id}   (${accholder})</td><td>${totalholder}</td></tr>
    `;
    html+=li;
  });
  var very=addCommas(localStorage.getItem(totalitems_key));
  const htend=`
  <td><b>TOTAL</b></td><td><b>${very}</b></td></tr>
  `;
  html+=htend;
tableListit.innerHTML=html;
// console.log(html);
  // Or with jQuery

  $(document).ready(function(){
    $('select').formSelect();
  });
}
/////////////////////////////////////////////////////////////////////
var bigbigarray=new Array();
  // Retrieve
  var accs = localStorage.getItem(account_key);
// get acc data
db.collection(accs).onSnapshot(snapshot=>{
  setuptableaccounts(snapshot.docs);
  bigbigarray=setupAccounts(snapshot.docs);

  // WAIT FOR THE PROMISE
  const checkIfDonede = () => {
    bigbigarray.then(ok => {
      bigbigarray=ok;
      var very=localStorage.getItem(totalaccounts_key);
      very=addCommas(very);
      document.getElementById("expencehead").innerHTML = "TOTAL EXPENDITURE: "+very;
      console.log("accounts "+very);
      })
      .catch(err => {
        console.error(error)
      })

  }
  checkIfDonede();
        // Load Charts and the corechart and barchart packages.
        google.charts.load('current', {'packages':['corechart']});

        // Draw the pie chart and bar chart when Charts is loaded.
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
          // console.log("bigisbig",bigbigarray);
          var data = new google.visualization.DataTable();
          data.addColumn('string', 'team');
          data.addColumn('number', 'caps');
          data.addRows(
            bigbigarray
          //   [
          //   ['arsenal', 5],
          //   ['manu', 3],
          //   ['man city', 2],
          //   ['chelsea', 1],
          //   ['liverpool', 2]
          // ]
        );

        var array1 = new Array(1, 2, 3);

        console.log(array1); // [1, 2, 3]
        console.log(array1.length); // 3

          var piechart_options = {title:'Pie Chart: EXPENDITURE PER ACCOUNT',
                         width:400,
                         height:300};
          var piechart = new google.visualization.PieChart(document.getElementById('piechart_div'));
          piechart.draw(data, piechart_options);

          var barchart_options = {title:'Barchart: EXPENDITURE PER ACCOUNT',
          width:400,
          height:300,
                         legend: 'none'};
          var barchart = new google.visualization.BarChart(document.getElementById('barchart_div'));
          barchart.draw(data, barchart_options);
        }
})

async function setupAccounts(data){
  var arraybig=new Array();
var fruits = ["Banana", "Orange", "Apple", "Mango"];
  let html='';
  var vary,y=-1;
  var somesing=await data.forEach(doc=>{
    var arraysmall=new Array(doc.id);
    // arraysmall=[doc.id];
    const acc=doc.data();
    jQuery.each(doc.data(), function (key, value) {
    if(key=="total"){
    vary=parseInt(value);
    }
                        })
    arraysmall[1]=vary;
        y++;
        // console.log(y);
    // arraysmall.push(vary);
    // arraybig.push(arraysmall);
    arraybig[y]=arraysmall;

    // console.log(4444,arraysmall);
  });
  var h=fruits.toString();
  // console.log(5555,fruits);
  return arraybig;
}
/////////////////items
var bigbigarrayit=new Array();
  // Retrieve
  var its = localStorage.getItem(items_key);
// get acc data
db.collection(its).onSnapshot(snapshot=>{
  setuptableitems(snapshot.docs);
  bigbigarrayit=setupItems(snapshot.docs);

  // WAIT FOR THE PROMISE
  const checkIfDonedeit = () => {
    bigbigarrayit.then(ok => {
      bigbigarrayit=ok;
      var very=localStorage.getItem(totalitems_key);
      // document.getElementById("expencehead").innerHTML = "TOTAL EXPENDITURE: "+very;
      console.log("items "+very);
      })
      .catch(err => {
        console.error(error)
      })

  }
  checkIfDonedeit();
        // Load Charts and the corechart and barchart packages.
        google.charts.load('current', {'packages':['corechart']});

        // Draw the pie chart and bar chart when Charts is loaded.
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
          // console.log("bigisbig",bigbigarrayit);
          var data = new google.visualization.DataTable();
          data.addColumn('string', 'team');
          data.addColumn('number', 'caps');
          data.addRows(
            bigbigarrayit
          //   [
          //   ['arsenal', 5],
          //   ['manu', 3],
          //   ['man city', 2],
          //   ['chelsea', 1],
          //   ['liverpool', 2]
          // ]
        );

          var piechart_options = {title:'Pie Chart: EXPENDITURE ON ITEMS',
                         width:400,
                         height:300};
          var piechart = new google.visualization.PieChart(document.getElementById('piechart_divit'));
          piechart.draw(data, piechart_options);

          var barchart_options = {title:'Barchart: EXPENDITURE ON ITEMS',
                         width:400,
                         height:300,
                         legend: 'none'};
          var barchart = new google.visualization.BarChart(document.getElementById('barchart_divit'));
          barchart.draw(data, barchart_options);
        }
})

async function setupItems(data){
  var arraybig=new Array();
var fruits = ["Banana", "Orange", "Apple", "Mango"];
  let html='';
  var vary,y=-1;
  var somesing=await data.forEach(doc=>{
    var arraysmall=new Array(doc.id);
    // arraysmall=[doc.id];
    const acc=doc.data();
    jQuery.each(doc.data(), function (key, value) {
    if(key=="total"){
    vary=parseInt(value);
    }
                        })
    arraysmall[1]=vary;
        y++;
        // console.log(y);
    // arraysmall.push(vary);
    // arraybig.push(arraysmall);
    arraybig[y]=arraysmall;

    // console.log(4444,arraysmall);
  });
  var h=fruits.toString();
  // console.log(5555,fruits);
  return arraybig;
}
// var instance = M.Tabs.init(el, options);

  // Or with jQuery

  $(document).ready(function(){
    $('.tabs').tabs();
  });
// z

var tour = new Tour({
  steps: [
  {
    element: "#tabs-swipe-demo",
    title: "CONGRATULATIONS",
    content: "You are now fully equiped, Good luck"
  }
],
  backdrop: false,
  storage: false,
  template: `<div class='popover tour black-text'>
    <div class='arrow'></div>
    <h2 class='popover-title'></h2>
    <div class='popover-content'></div>
    <div class='popover-navigation'>
        <button class='btn btn-default' data-role='prev'>« Prev</button>
        <span data-role='separator'>|</span>
    <button class='btn btn-default' data-role='end'>End tour</button>
    </div>
  </div>`
});

tour.init();
var tut = localStorage.getItem(tutorial_key);
if (tut==1) {
tour.start();
          localStorage.setItem(tutorial_key, 0);
}
localStorage.setItem("login", "1");

function addCommas(nStr) {
  nStr += '';
  var comma = /,/g;
  nStr = nStr.replace(comma,'');
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}
//################/////////////////////////////

// dropdown
const dropdownproacc=document.querySelector('.accchadrp');

const setupDropdownacccha =(data)=>{
  let html=`
    <select class="team wonder " id="dropitcrt">
    <option>Choose Item's Account</option>`;
  let htmlEnd=`
</select>`;
  var list='';
  data.forEach(doc=>{
    const drops=doc.data();
    const li=`
    <option>${doc.id}</option>
    `;
    html+=li;
  });
  html+=htmlEnd;
dropdownproacc.innerHTML=html;
// console.log(html);
  // Or with jQuery

  $(document).ready(function(){
    $('select').formSelect();
  });
}
////
// dropdown
const dropdownproit=document.querySelector('.itchadrp');

const setupDropdownitcha =(data)=>{
  let html=`
    <select class="team wonder " id="dropitcrt">
    <option>Choose Item's Account</option>`;
  let htmlEnd=`
</select>`;
  var list='';
  data.forEach(doc=>{
    const drops=doc.data();
    const li=`
    <option>${doc.id}</option>
    `;
    html+=li;
  });
  html+=htmlEnd;
dropdownproit.innerHTML=html;
// console.log(html);
  // Or with jQuery

  $(document).ready(function(){
    $('select').formSelect();
  });
}

// datepicker
var currYear = (new Date()).getFullYear();
var today = new Date();
var datetoday = (today.getMonth()+1).toString()+today.getDate().toString()+today.getFullYear().toString();
console.log("date "+datetoday);
$(document).ready(function() {
  $(".datepicker").datepicker({
    defaultDate: datetoday,
    setDefaultDate: true,
    format: "mm/dd/yyyy",
    autoClose:true
  }).datepicker("setDate", new Date());
});
///////////////////////////////////
var daterfrom="08/19/2020";
var daterto="08/28/2020";
var collar = localStorage.getItem(transactions_key);
console.log("collar "+collar);
console.log("collar "+daterfrom);
    // var sulement=db.collection(collar).where("date", "==", daterfrom);
    var citiesRef = db.collection(collar).where("date", ">=", daterfrom).where("date", "<=", daterto);
// citiesRef.where("state", "==", "CA").where("population", "<", 1000000);
    citiesRef.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
    var dropss=doc.id;
    console.log("emmmmmmm "+dropss);
      // localStorage.setItem(userid_key, dropss);
             // if (doc.exists) {
                 // console.log('Document data:', doc.data());
    jQuery.each(doc.data(), function (key, value) {
              if(key=="amount"){
              var colder = localStorage.getItem(rangeTotal_key);
              console.log("storage "+colder);
              console.log("value "+value);
              colder=parseInt(colder)+parseInt(value)
                localStorage.setItem(rangeTotal_key, colder);
                console.log("colder",colder);
              }

    })
    });
    }).catch(error => {
    // document.getElementById("progbarlog").style.visibility="hidden";
    console.error('error', error);
    });

    monthler(1,12);
    function monthler(froma,toma){
      for (var i = froma; i <= toma; i++) {
        var whichMonthIsThis=whichMonth(i);
      console.log(whichMonthIsThis);
      if (froma==toma) {
        i=toma;
          var whichMonthIsThis=whichMonth(i);
        console.log("same same same"+whichMonthIsThis);
      }else {
        froma++
          var whichMonthIsThis=whichMonth(i);
        console.log("diff diff diff"+whichMonthIsThis);
      }
     }
    }
    function whichMonth(monthNumber){
      switch (monthNumber) {
  case 1:
    month = "Jan";
    return month;
    break;
  case 2:
     month = "Feb";
     return month;
    break;
  case 3:
    month = "Mar";
    return month;
    break;
  case 4:
    month = "Apr";
    return month;
    break;
  case 5:
    month = "May";
    return month;
    break;
  case 6:
    month = "Jun";
    return month;
    break;
case 7:
  month = "Jul";
  return month;
  break;
case 8:
   month = "Aug";
   return month;
  break;
case 9:
  month = "Sep";
  return month;
  break;
case 10:
  month = "Oct";
  return month;
  break;
case 11:
  month = "Nov";
  return month;
  break;
case 12:
  month = "Dec";
  return month;
  break;
}
return month;
    }
//#################################
