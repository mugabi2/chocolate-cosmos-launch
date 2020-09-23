var Jan=0, Feb=0, Mar=0, Apr=0, May=0, Jun=0, Jul=0, Aug=0, Sep=0, Oct=0, Nov=0, Dec=0;
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
// console.log("itit"+dbacc);
// console.log("itit"+dbit);
// console.log("itit"+dbsup);
// db.collection(dbacc).onSnapshot(snapshot=>{
// window.localStorage.setItem(currentAccounts_key, snapshot.docs);
// setupDropdownacccha(snapshot.docs);
// // setupDropdownitcrt(snapshot.docs);
// })

  var collar = localStorage.getItem(account_key);
  var collectionRefa = db.collection(collar);
  var queryer =collectionRefa.orderBy("amount", "desc").limit(1);
  console.log("+++++"+queryer);

  queryer.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
  var dropss=doc.id;
  console.log("kakaka "+dropss);
  });
  }).catch(error => {
  console.log("kakaka ");
  console.error('Please check your collection and document name in the [firestore] shortcode!', error);
  });

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
// const dropdownproacc=document.querySelector('.accchadrp');

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
    <select class="team wonder " id="dropitcha">
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

  // var fdate="06/05/2020";
  // var tdate="09/25/2020";
  //   monthler(fdate,tdate);
    function monthler(){
    // var frodate=document.getElementById("fromfrom").value;
    // var todate=document.getElementById("toto").value;
    var frodate="01/01/2020";
    var todate="31/12/2020";
      setupMonths();
      var frodateNxt=frodate;
      var froma=whatMonth(frodate);
      // var fromaNxt=whatMonth(frodate);
      var toma=whatMonth(todate);
      for (fromaNxt=froma; fromaNxt <= toma; fromaNxt++) {
        var z=0;
      if (fromaNxt==toma) {
        ///same month
        // i=toma;
      let whichMonthIsThis=whichMonth(parseInt(fromaNxt));
        // console.log("same same same "+fromaNxt);
      // console.log("same same same "+whichMonthIsThis);
        var collar = localStorage.getItem(transactions_key);
        // console.log("collar "+collar);
        // console.log(frodateNxt+" collar "+todate);
        frodateNxt=minimizeDays(frodateNxt);
        // console.log(frodateNxt+" collar "+todate);
            var citiesRef = db.collection(collar)
            .where("date", ">=", frodateNxt)
            .where("date", "<=", todate);


            citiesRef.get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
            var dropss=doc.id;
            var diplo="amount";
            // var dipo=doc.id.diplo;
            // console.log("emmmmmmm "+doc.id);

                    var citiek = db.collection(collar).doc(dropss);
                    // setupMonths();

                citiek.get().then(doc => {
                         if (doc.exists) {
                             // console.log('Document data:', doc.data());
                jQuery.each(doc.data(), function (key, value) {
                          if(key=="amount"){
                          // console.log("8888: "+value);
                          // console.log("esssssss "+doc.id);
                                        // console.log(z+" !!111111!! "+whichMonthIsThis);
                                      switch (whichMonthIsThis) {
                                  case "Jan":
                                  var silk = localStorage.getItem("Jan");
                                  // console.log(silk+" !!!!!: "+value);
                                  silk=parseInt(silk)+parseInt(value);
                                  localStorage.setItem("Jan", silk);
                                  // console.log("!!!!Jan: "+silk);
                                    break;
                                  case "Feb":
                                  var silk = localStorage.getItem("Feb");
                                  // console.log(silk+" !!!!!: "+value);
                                  silk=parseInt(silk)+parseInt(value);
                                  localStorage.setItem("Feb", silk);
                                  // console.log("!!!!!Feb: "+silk);
                                    break;
                                  case "Mar":
                                  var silk = localStorage.getItem("Mar");
                                  // console.log(silk+" !!!!!: "+value);
                                  silk=parseInt(silk)+parseInt(value);
                                  localStorage.setItem("Mar", silk);
                                  // console.log("!!!!!Mar: "+silk);
                                    break;
                                  case "Apr":
                                  var silk = localStorage.getItem("Apr");
                                  // console.log(silk+" !!!!!: "+value);
                                  silk=parseInt(silk)+parseInt(value);
                                  localStorage.setItem("Apr", silk);
                                  // console.log("!!!!!Apr: "+silk);
                                    break;
                                  case "May":
                                  var silk = localStorage.getItem("May");
                                  // console.log(silk+" !!!!!: "+value);
                                  silk=parseInt(silk)+parseInt(value);
                                  localStorage.setItem("May", silk);
                                  // console.log("!!!!!May: "+silk);
                                    break;
                                  case "Jun":
                                  var silk = localStorage.getItem("Jun");
                                  // console.log(silk+" !!!!!: "+value);
                                  silk=parseInt(silk)+parseInt(value);
                                  localStorage.setItem("Jun", silk);
                                  // console.log("!!!!!Jun: "+silk);
                                    break;
                                case "Jul":
                                var silk = localStorage.getItem("Jul");
                                // console.log(silk+" !!!!!: "+value);
                                silk=parseInt(silk)+parseInt(value);
                                localStorage.setItem("Jul", silk);
                                // console.log("!!!!!Jul: "+silk);
                                  break;
                                case "Aug":
                                var silk = localStorage.getItem("Aug");
                                // console.log(silk+" !!!!!: "+value);
                                silk=parseInt(silk)+parseInt(value);
                                localStorage.setItem("Aug", silk);
                                // console.log("!!!!!Aug: "+silk);
                                  break;
                                case "Sep":
                                var silk = localStorage.getItem("Sep");
                                // console.log(silk+" !!!!!: "+value);
                                silk=parseInt(silk)+parseInt(value);
                                localStorage.setItem("Sep", silk);
                                // console.log("!!!!!sep: "+silk);
                                  break;
                                case "Oct":
                                var silk = localStorage.getItem("Oct");
                                // console.log(silk+" !!!!!: "+value);
                                silk=parseInt(silk)+parseInt(value);
                                localStorage.setItem("Oct", silk);
                                // console.log("!!!!!oct: "+silk);
                                  break;
                                case "Nov":
                                var silk = localStorage.getItem("Nov");
                                // console.log(silk+" !!!!!: "+value);
                                silk=parseInt(silk)+parseInt(value);
                                localStorage.setItem("Nov", silk);
                                // console.log("!!!!!Nov: "+silk);
                                  break;
                                case "Dec":
                                var silk = localStorage.getItem("Dec");
                                // console.log(silk+" !!!!!: "+value);
                                silk=parseInt(silk)+parseInt(value);
                                localStorage.setItem("Dec", silk);
                                // console.log("!!!!!Dec: "+silk);
                                  break;
                                }
                          }
                          echoMonths();

                })
                  .catch(function(error) {
                    console.log(error);
                    // Some error occurred, you can inspect the code: error.code
                  });

                }else {
                // doc.data() will be undefined in this case
                console.error('Please check your collection and document name in the [firestore] shortcode!');
                }
                }).catch(error => {
                console.error('Please check your collection and document name in the [firestore] shortcode!', error);
                });

            });
            }).catch(error => {
            // document.getElementById("progbarlog").style.visibility="hidden";
            console.error('error', error);
            });
            // console.log("Jan "+Jan+"Feb "+Feb+"Mar"+Mar+"Apr "+Apr+"May "+May+"Jun "+Jun+"Jul"+Jul+"Aug "+Aug+"Sep "+Sep+"Oct "+Oct+"Nov"+Nov+"Dec "+Dec);
      }else {
        let whichMonthIsThis=whichMonth(parseInt(fromaNxt));
        // console.log("diff diff diff"+whichMonthIsThis);
        if (fromaNxt==froma) {//range of beginning month
          var maxDate=maximiseDays(frodateNxt);
          var miniDate=frodate;
          let whichMonthIsThis=whichMonth(whatMonth(miniDate));
          // console.log(miniDate+" ====++++==>1111 "+whichMonthIsThis);
            var collar = localStorage.getItem(transactions_key);
            // console.log("collar "+collar);
            // console.log("collar "+daterfrom);
                var citiesRef = db.collection(collar)
                .where("date", ">=", miniDate).where("date", "<=", maxDate);
                citiesRef.get().then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {

                      var dropss=doc.id;
                      var diplo="amount";
                      // var dipo=doc.id.diplo;
                      // console.log("emmmmmmm "+doc.id);

                          var citiek = db.collection(collar).doc(dropss);
                          // setupMonths();

                      citiek.get().then(doc => {
                               if (doc.exists) {
                                   // console.log('Document data:', doc.data());
                      jQuery.each(doc.data(), function (key, value) {
                                if(key=="amount"){
                                // console.log("8888: "+value);
                                // console.log("esssssss "+doc.id);
                                              // console.log(z+" !!222!! "+whichMonthIsThis);
                                            switch (whichMonthIsThis) {
                                        case "Jan":
                                        var silk = localStorage.getItem("Jan");
                                        // console.log(silk+" !!!!!: "+value);
                                        silk=parseInt(silk)+parseInt(value);
                                        localStorage.setItem("Jan", silk);
                                        // console.log("!!!!Jan: "+silk);
                                          break;
                                        case "Feb":
                                        var silk = localStorage.getItem("Feb");
                                        // console.log(silk+" !!!!!: "+value);
                                        silk=parseInt(silk)+parseInt(value);
                                        localStorage.setItem("Feb", silk);
                                        // console.log("!!!!!Feb: "+silk);
                                          break;
                                        case "Mar":
                                        var silk = localStorage.getItem("Mar");
                                        // console.log(silk+" !!!!!: "+value);
                                        silk=parseInt(silk)+parseInt(value);
                                        localStorage.setItem("Mar", silk);
                                        // console.log("!!!!!Mar: "+silk);
                                          break;
                                        case "Apr":
                                        var silk = localStorage.getItem("Apr");
                                        // console.log(silk+" !!!!!: "+value);
                                        silk=parseInt(silk)+parseInt(value);
                                        localStorage.setItem("Apr", silk);
                                        // console.log("!!!!!Apr: "+silk);
                                          break;
                                        case "May":
                                        var silk = localStorage.getItem("May");
                                        // console.log(silk+" !!!!!: "+value);
                                        silk=parseInt(silk)+parseInt(value);
                                        localStorage.setItem("May", silk);
                                        // console.log("!!!!!May: "+silk);
                                          break;
                                        case "Jun":
                                        var silk = localStorage.getItem("Jun");
                                        // console.log(silk+" !!!!!: "+value);
                                        silk=parseInt(silk)+parseInt(value);
                                        localStorage.setItem("Jun", silk);
                                        // console.log("!!!!!Jun: "+silk);
                                          break;
                                      case "Jul":
                                      var silk = localStorage.getItem("Jul");
                                      // console.log(silk+" !!!!!: "+value);
                                      silk=parseInt(silk)+parseInt(value);
                                      localStorage.setItem("Jul", silk);
                                      // console.log("!!!!!Jul: "+silk);
                                        break;
                                      case "Aug":
                                      var silk = localStorage.getItem("Aug");
                                      // console.log(silk+" !!!!!: "+value);
                                      silk=parseInt(silk)+parseInt(value);
                                      localStorage.setItem("Aug", silk);
                                      // console.log("!!!!!Aug: "+silk);
                                        break;
                                      case "Sep":
                                      var silk = localStorage.getItem("Sep");
                                      // console.log(silk+" !!!!!: "+value);
                                      silk=parseInt(silk)+parseInt(value);
                                      localStorage.setItem("Sep", silk);
                                      // console.log("!!!!!sep: "+silk);
                                        break;
                                      case "Oct":
                                      var silk = localStorage.getItem("Oct");
                                      // console.log(silk+" !!!!!: "+value);
                                      silk=parseInt(silk)+parseInt(value);
                                      localStorage.setItem("Oct", silk);
                                      // console.log("!!!!!oct: "+silk);
                                        break;
                                      case "Nov":
                                      var silk = localStorage.getItem("Nov");
                                      // console.log(silk+" !!!!!: "+value);
                                      silk=parseInt(silk)+parseInt(value);
                                      localStorage.setItem("Nov", silk);
                                      // console.log("!!!!!Nov: "+silk);
                                        break;
                                      case "Dec":
                                      var silk = localStorage.getItem("Dec");
                                      // console.log(silk+" !!!!!: "+value);
                                      silk=parseInt(silk)+parseInt(value);
                                      localStorage.setItem("Dec", silk);
                                      // console.log("!!!!!Dec: "+silk);
                                        break;
                                      }
                                }

                      })
                        .catch(function(error) {
                          console.log(error);
                          // Some error occurred, you can inspect the code: error.code
                        });

                      }else {
                      // doc.data() will be undefined in this case
                      console.error('Please check your collection and document name in the [firestore] shortcode!');
                      }
                      }).catch(error => {
                      console.error('Please check your collection and document name in the [firestore] shortcode!', error);
                      });

                });
                }).catch(error => {
                // document.getElementById("progbarlog").style.visibility="hidden";
                console.error('error', error);
                });
                frodateNxt=maxDate;
        }else {//range of following months
          // var whichMonthIsThis=whichMonth(parseInt(i));
        var miniDate=minimizeDays(frodateNxt);
        var maxDate=maximiseDays(miniDate);
        let whichMonthIsThis=whichMonth(whatMonth(miniDate));
        frodate=miniDate;
        // console.log(miniDate+" ======>22222 "+whichMonthIsThis);
          var collar = localStorage.getItem(transactions_key);
          // console.log("collar "+collar);
          // console.log("collar "+daterfrom);
              var citiesRef = db.collection(collar)
              .where("date", ">=", miniDate)
              .where("date", "<=", maxDate);


              citiesRef.get().then(function(querySnapshot) {
                  querySnapshot.forEach(function(doc) {

                    var dropss=doc.id;
                    var diplo="amount";
                    // var dipo=doc.id.diplo;
                    // console.log("emmmmmmm "+doc.id);

                        var citiek = db.collection(collar).doc(dropss);
                        // setupMonths();

                    citiek.get().then(doc => {
                             if (doc.exists) {
                                 // console.log('Document data:', doc.data());
                    jQuery.each(doc.data(), function (key, value) {
                              if(key=="amount"){
                              // console.log("8888: "+value);
                              // console.log("esssssss "+doc.id);
                                            // console.log(z+" !!222!! "+whichMonthIsThis);
                                          switch (whichMonthIsThis) {
                                      case "Jan":
                                      var silk = localStorage.getItem("Jan");
                                      // console.log(silk+" !!!!!: "+value);
                                      silk=parseInt(silk)+parseInt(value);
                                      localStorage.setItem("Jan", silk);
                                      // console.log("!!!!Jan: "+silk);
                                        break;
                                      case "Feb":
                                      var silk = localStorage.getItem("Feb");
                                      // console.log(silk+" !!!!!: "+value);
                                      silk=parseInt(silk)+parseInt(value);
                                      localStorage.setItem("Feb", silk);
                                      // console.log("!!!!!Feb: "+silk);
                                        break;
                                      case "Mar":
                                      var silk = localStorage.getItem("Mar");
                                      // console.log(silk+" !!!!!: "+value);
                                      silk=parseInt(silk)+parseInt(value);
                                      localStorage.setItem("Mar", silk);
                                      // console.log("!!!!!Mar: "+silk);
                                        break;
                                      case "Apr":
                                      var silk = localStorage.getItem("Apr");
                                      // console.log(silk+" !!!!!: "+value);
                                      silk=parseInt(silk)+parseInt(value);
                                      localStorage.setItem("Apr", silk);
                                      // console.log("!!!!!Apr: "+silk);
                                        break;
                                      case "May":
                                      var silk = localStorage.getItem("May");
                                      // console.log(silk+" !!!!!: "+value);
                                      silk=parseInt(silk)+parseInt(value);
                                      localStorage.setItem("May", silk);
                                      // console.log("!!!!!May: "+silk);
                                        break;
                                      case "Jun":
                                      var silk = localStorage.getItem("Jun");
                                      // console.log(silk+" !!!!!: "+value);
                                      silk=parseInt(silk)+parseInt(value);
                                      localStorage.setItem("Jun", silk);
                                      // console.log("!!!!!Jun: "+silk);
                                        break;
                                    case "Jul":
                                    var silk = localStorage.getItem("Jul");
                                    // console.log(silk+" !!!!!: "+value);
                                    silk=parseInt(silk)+parseInt(value);
                                    localStorage.setItem("Jul", silk);
                                    // console.log("!!!!!Jul: "+silk);
                                      break;
                                    case "Aug":
                                    var silk = localStorage.getItem("Aug");
                                    // console.log(silk+" !!!!!: "+value);
                                    silk=parseInt(silk)+parseInt(value);
                                    localStorage.setItem("Aug", silk);
                                    // console.log("!!!!!Aug: "+silk);
                                      break;
                                    case "Sep":
                                    var silk = localStorage.getItem("Sep");
                                    // console.log(silk+" !!!!!: "+value);
                                    silk=parseInt(silk)+parseInt(value);
                                    localStorage.setItem("Sep", silk);
                                    // console.log("!!!!!sep: "+silk);
                                      break;
                                    case "Oct":
                                    var silk = localStorage.getItem("Oct");
                                    // console.log(silk+" !!!!!: "+value);
                                    silk=parseInt(silk)+parseInt(value);
                                    localStorage.setItem("Oct", silk);
                                    // console.log("!!!!!oct: "+silk);
                                      break;
                                    case "Nov":
                                    var silk = localStorage.getItem("Nov");
                                    // console.log(silk+" !!!!!: "+value);
                                    silk=parseInt(silk)+parseInt(value);
                                    localStorage.setItem("Nov", silk);
                                    // console.log("!!!!!Nov: "+silk);
                                      break;
                                    case "Dec":
                                    var silk = localStorage.getItem("Dec");
                                    // console.log(silk+" !!!!!: "+value);
                                    silk=parseInt(silk)+parseInt(value);
                                    localStorage.setItem("Dec", silk);
                                    // console.log("!!!!!Dec: "+silk);
                                      break;
                                    }
                              }

                    })
                      .catch(function(error) {
                        console.log(error);
                        // Some error occurred, you can inspect the code: error.code
                      });

                    }else {
                    // doc.data() will be undefined in this case
                    console.error('Please check your collection and document name in the [firestore] shortcode!');
                    }
                    }).catch(error => {
                    console.error('Please check your collection and document name in the [firestore] shortcode!', error);
                    });

              });
              }).catch(error => {
              // document.getElementById("progbarlog").style.visibility="hidden";
              console.error('error', error);
              });
              frodateNxt=maxDate;
        }
      }
      // console.log(fromaNxt+"####"+frodateNxt);
      // frodateNxt=minimizeDays(frodateNxt);
      // console.log(fromaNxt+"####"+frodateNxt);
    }//for End

  }//end monthler
// monthler1();
    function monthler1(){
    var customItem=document.getElementById("dropitcha").value;
    localStorage.setItem("custom month", customItem);
    console.log(customItem+customItem);
    var frodate="01/01/2020";
    var todate="12/31/2020";
      setupMonths1();
      var frodateNxt=frodate;
      var froma=whatMonth(frodate);
      // var fromaNxt=whatMonth(frodate);
      var toma=whatMonth(todate);
      console.log("yaya"+toma);
      for (fromaNxt=froma; fromaNxt <= toma; fromaNxt++) {
        var z=0;
      if (fromaNxt==toma) {
        ///same month
        // i=toma;
      let whichMonthIsThis=whichMonth(parseInt(fromaNxt));
        console.log("same same same "+fromaNxt);
      // console.log("same same same "+whichMonthIsThis);
        var collar = localStorage.getItem(transactions_key);
        console.log("collar "+collar);
        console.log(frodateNxt+" collar "+todate);
        frodateNxt=minimizeDays(frodateNxt);
        console.log(frodateNxt+" collar "+todate);
            var citiesRef = db.collection(collar)
            .where("item", "==", "customItem")
            .where("month", "==", whichMonthIsThis);


            citiesRef.get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
            var dropss=doc.id;
            var diplo="amount";
            // var dipo=doc.id.diplo;
            console.log("emmmmmmm "+doc.id);

                    var citiek = db.collection(collar).doc(dropss);
                    // setupMonths();

                citiek.get().then(doc => {
                         if (doc.exists) {
                             // console.log('Document data:', doc.data());
                jQuery.each(doc.data(), function (key, value) {
                          if(key=="amount"){
                          console.log("8888: "+value);
                          console.log("esssssss "+doc.id);
                                        console.log(z+" !!111111!! "+whichMonthIsThis);
                                      switch (whichMonthIsThis) {
                                  case "Jan":
                                  var silk = localStorage.getItem("Jan1");
                                  console.log(silk+" !!!!!: "+value);
                                  silk=parseInt(silk)+parseInt(value);
                                  localStorage.setItem("Jan", silk);
                                  console.log("!!!!Jan: "+silk);
                                    break;
                                  case "Feb":
                                  var silk = localStorage.getItem("Feb1");
                                  console.log(silk+" !!!!!: "+value);
                                  silk=parseInt(silk)+parseInt(value);
                                  localStorage.setItem("Feb", silk);
                                  console.log("!!!!!Feb: "+silk);
                                    break;
                                  case "Mar":
                                  var silk = localStorage.getItem("Mar1");
                                  console.log(silk+" !!!!!: "+value);
                                  silk=parseInt(silk)+parseInt(value);
                                  localStorage.setItem("Mar", silk);
                                  console.log("!!!!!Mar: "+silk);
                                    break;
                                  case "Apr":
                                  var silk = localStorage.getItem("Apr1");
                                  console.log(silk+" !!!!!: "+value);
                                  silk=parseInt(silk)+parseInt(value);
                                  localStorage.setItem("Apr", silk);
                                  console.log("!!!!!Apr: "+silk);
                                    break;
                                  case "May":
                                  var silk = localStorage.getItem("May1");
                                  console.log(silk+" !!!!!: "+value);
                                  silk=parseInt(silk)+parseInt(value);
                                  localStorage.setItem("May", silk);
                                  console.log("!!!!!May: "+silk);
                                    break;
                                  case "Jun":
                                  var silk = localStorage.getItem("Jun1");
                                  console.log(silk+" !!!!!: "+value);
                                  silk=parseInt(silk)+parseInt(value);
                                  localStorage.setItem("Jun", silk);
                                  console.log("!!!!!Jun: "+silk);
                                    break;
                                case "Jul":
                                var silk = localStorage.getItem("Jul1");
                                console.log(silk+" !!!!!: "+value);
                                silk=parseInt(silk)+parseInt(value);
                                localStorage.setItem("Jul", silk);
                                console.log("!!!!!Jul: "+silk);
                                  break;
                                case "Aug":
                                var silk = localStorage.getItem("Aug1");
                                console.log(silk+" !!!!!: "+value);
                                silk=parseInt(silk)+parseInt(value);
                                localStorage.setItem("Aug", silk);
                                console.log("!!!!!Aug: "+silk);
                                  break;
                                case "Sep":
                                var silk = localStorage.getItem("Sep1");
                                console.log(silk+" !!!!!: "+value);
                                silk=parseInt(silk)+parseInt(value);
                                localStorage.setItem("Sep", silk);
                                console.log("!!!!!sep: "+silk);
                                  break;
                                case "Oct":
                                var silk = localStorage.getItem("Oct1");
                                console.log(silk+" !!!!!: "+value);
                                silk=parseInt(silk)+parseInt(value);
                                localStorage.setItem("Oct1", silk);
                                console.log("!!!!!oct: "+silk);
                                  break;
                                case "Nov":
                                var silk = localStorage.getItem("Nov1");
                                console.log(silk+" !!!!!: "+value);
                                silk=parseInt(silk)+parseInt(value);
                                localStorage.setItem("Nov", silk);
                                console.log("!!!!!Nov: "+silk);
                                  break;
                                case "Dec":
                                var silk = localStorage.getItem("Dec1");
                                console.log(silk+" !!!!!: "+value);
                                silk=parseInt(silk)+parseInt(value);
                                localStorage.setItem("Dec1", silk);
                                console.log("!!!!!Dec: "+silk);
                                  break;
                                }
                          }
                          echoMonths1();
                          // return false;
                }).then(() => {
                  console.log("@@@@@@@@@");
                location.reload();
                })
                  .catch(function(error) {
                    console.log(error);
                    // Some error occurred, you can inspect the code: error.code
                  });

                }else {
                // doc.data() will be undefined in this case
                console.error('Please check your collection and document name in the [firestore] shortcode!');
                }
                }).catch(error => {
                console.error('Please check your collection and document name in the [firestore] shortcode!', error);
                });

            });
            }).catch(error => {
            // document.getElementById("progbarlog").style.visibility="hidden";
            console.error('error', error);
            });
            // console.log("Jan "+Jan+"Feb "+Feb+"Mar"+Mar+"Apr "+Apr+"May "+May+"Jun "+Jun+"Jul"+Jul+"Aug "+Aug+"Sep "+Sep+"Oct "+Oct+"Nov"+Nov+"Dec "+Dec);
      }else {
        let whichMonthIsThis=whichMonth(parseInt(fromaNxt));
        // console.log("popopopo"+fromaNxt);
        console.log("diff diff diff"+whichMonthIsThis);
        if (fromaNxt==froma) {//range of beginning month
          var maxDate=maximiseDays(frodateNxt);
          var miniDate=frodate;
          let whichMonthIsThis=whichMonth(whatMonth(miniDate));
          // console.log(miniDate+" ====++++==>1111 "+whichMonthIsThis);
            var collar = localStorage.getItem(transactions_key);
            // console.log("collar "+collar);
            // console.log("collar "+daterfrom);
                var citiesRef = db.collection(collar)
                .where("item", "==", customItem)
                .where("month", "==", whichMonthIsThis);

                citiesRef.get().then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {

                      var dropss=doc.id;
                      var diplo="amount";
                      // var dipo=doc.id.diplo;
                      console.log("emmmmmmm "+doc.id);

                          var citiek = db.collection(collar).doc(dropss);
                          // setupMonths();

                      citiek.get().then(doc => {
                               if (doc.exists) {
                                   // console.log('Document data:', doc.data());
                      jQuery.each(doc.data(), function (key, value) {
                                if(key=="amount"){
                                console.log("8888: "+value);
                                console.log("esssssss "+doc.id);
                                              console.log(z+" !!222!! "+whichMonthIsThis);
                                            switch (whichMonthIsThis) {
                                        case "Jan":
                                        var silk = localStorage.getItem("Jan1");
                                        console.log(silk+" !!!!!: "+value);
                                        silk=parseInt(silk)+parseInt(value);
                                        localStorage.setItem("Jan1", silk);
                                        console.log("!!!!Jan: "+silk);
                                          break;
                                        case "Feb":
                                        var silk = localStorage.getItem("Feb1");
                                        console.log(silk+" !!!!!: "+value);
                                        silk=parseInt(silk)+parseInt(value);
                                        localStorage.setItem("Feb1", silk);
                                        console.log("!!!!!Feb: "+silk);
                                          break;
                                        case "Mar":
                                        var silk = localStorage.getItem("Mar1");
                                        console.log(silk+" !!!!!: "+value);
                                        silk=parseInt(silk)+parseInt(value);
                                        localStorage.setItem("Mar1", silk);
                                        console.log("!!!!!Mar: "+silk);
                                          break;
                                        case "Apr":
                                        var silk = localStorage.getItem("Apr1");
                                        console.log(silk+" !!!!!: "+value);
                                        silk=parseInt(silk)+parseInt(value);
                                        localStorage.setItem("Apr1", silk);
                                        console.log("!!!!!Apr: "+silk);
                                          break;
                                        case "May":
                                        var silk = localStorage.getItem("May1");
                                        console.log(silk+" !!!!!: "+value);
                                        silk=parseInt(silk)+parseInt(value);
                                        localStorage.setItem("May1", silk);
                                        console.log("!!!!!May: "+silk);
                                          break;
                                        case "Jun":
                                        var silk = localStorage.getItem("Jun1");
                                        console.log(silk+" !!!!!: "+value);
                                        silk=parseInt(silk)+parseInt(value);
                                        localStorage.setItem("Jun1", silk);
                                        console.log("!!!!!Jun: "+silk);
                                          break;
                                      case "Jul":
                                      var silk = localStorage.getItem("Jul1");
                                      console.log(silk+" !!!!!: "+value);
                                      silk=parseInt(silk)+parseInt(value);
                                      localStorage.setItem("Jul1", silk);
                                      console.log("!!!!!Jul: "+silk);
                                        break;
                                      case "Aug":
                                      var silk = localStorage.getItem("Aug1");
                                      console.log(silk+" !!!!!: "+value);
                                      silk=parseInt(silk)+parseInt(value);
                                      localStorage.setItem("Aug1", silk);
                                      console.log("!!!!!Aug: "+silk);
                                        break;
                                      case "Sep":
                                      var silk = localStorage.getItem("Sep1");
                                      console.log(silk+" !!!!!: "+value);
                                      silk=parseInt(silk)+parseInt(value);
                                      localStorage.setItem("Sep1", silk);
                                      console.log("!!!!!sep: "+silk);
                                        break;
                                      case "Oct":
                                      var silk = localStorage.getItem("Oct1");
                                      console.log(silk+" !!!!!: "+value);
                                      silk=parseInt(silk)+parseInt(value);
                                      localStorage.setItem("Oct1", silk);
                                      console.log("!!!!!oct: "+silk);
                                        break;
                                      case "Nov":
                                      var silk = localStorage.getItem("Nov1");
                                      console.log(silk+" !!!!!: "+value);
                                      silk=parseInt(silk)+parseInt(value);
                                      localStorage.setItem("Nov1", silk);
                                      console.log("!!!!!Nov: "+silk);
                                        break;
                                      case "Dec":
                                      var silk = localStorage.getItem("Dec1");
                                      console.log(silk+" !!!!!: "+value);
                                      silk=parseInt(silk)+parseInt(value);
                                      localStorage.setItem("Dec1", silk);
                                      console.log("!!!!!Dec: "+silk);
                                        break;
                                      }
                                }

                      })
                        .catch(function(error) {
                          console.log(error);
                          // Some error occurred, you can inspect the code: error.code
                        });

                      }else {
                      // doc.data() will be undefined in this case
                      console.error('Please check your collection and document name in the [firestore] shortcode!');
                      }
                      }).catch(error => {
                      console.error('Please check your collection and document name in the [firestore] shortcode!', error);
                      });

                });
                }).catch(error => {
                // document.getElementById("progbarlog").style.visibility="hidden";
                console.error('error', error);
                });
                frodateNxt=maxDate;
        }else {//range of following months
          // var whichMonthIsThis=whichMonth(parseInt(i));
        var miniDate=minimizeDays(frodateNxt);
        var maxDate=maximiseDays(miniDate);
        let whichMonthIsThis=whichMonth(whatMonth(miniDate));
        frodate=miniDate;
        console.log(miniDate+" ======>22222 "+whichMonthIsThis);
          var collar = localStorage.getItem(transactions_key);
          // console.log("collar "+collar);
          // console.log("collar "+daterfrom);
              var citiesRef = db.collection(collar)
              .where("item", "==", customItem)
              .where("month", "==", whichMonthIsThis);


              citiesRef.get().then(function(querySnapshot) {
                  querySnapshot.forEach(function(doc) {

                    var dropss=doc.id;
                    var diplo="amount";
                    // var dipo=doc.id.diplo;
                    console.log("emmmmmmm "+doc.id);

                        var citiek = db.collection(collar).doc(dropss);
                        // setupMonths();

                    citiek.get().then(doc => {
                             if (doc.exists) {
                                 // console.log('Document data:', doc.data());
                    jQuery.each(doc.data(), function (key, value) {
                              if(key=="amount"){
                              console.log("8888: "+value);
                              console.log("esssssss "+doc.id);
                                            console.log(z+" !!222!! "+whichMonthIsThis);
                                          switch (whichMonthIsThis) {
                                      case "Jan":
                                      var silk = localStorage.getItem("Jan1");
                                      console.log(silk+" !!!!!: "+value);
                                      silk=parseInt(silk)+parseInt(value);
                                      localStorage.setItem("Jan1", silk);
                                      console.log("!!!!Jan: "+silk);
                                        break;
                                      case "Feb":
                                      var silk = localStorage.getItem("Feb1");
                                      console.log(silk+" !!!!!: "+value);
                                      silk=parseInt(silk)+parseInt(value);
                                      localStorage.setItem("Feb1", silk);
                                      console.log("!!!!!Feb: "+silk);
                                        break;
                                      case "Mar":
                                      var silk = localStorage.getItem("Mar1");
                                      console.log(silk+" !!!!!: "+value);
                                      silk=parseInt(silk)+parseInt(value);
                                      localStorage.setItem("Mar1", silk);
                                      console.log("!!!!!Mar: "+silk);
                                        break;
                                      case "Apr":
                                      var silk = localStorage.getItem("Apr1");
                                      console.log(silk+" !!!!!: "+value);
                                      silk=parseInt(silk)+parseInt(value);
                                      localStorage.setItem("Apr1", silk);
                                      console.log("!!!!!Apr: "+silk);
                                        break;
                                      case "May":
                                      var silk = localStorage.getItem("May1");
                                      console.log(silk+" !!!!!: "+value);
                                      silk=parseInt(silk)+parseInt(value);
                                      localStorage.setItem("May1", silk);
                                      console.log("!!!!!May: "+silk);
                                        break;
                                      case "Jun":
                                      var silk = localStorage.getItem("Jun1");
                                      console.log(silk+" !!!!!: "+value);
                                      silk=parseInt(silk)+parseInt(value);
                                      localStorage.setItem("Jun1", silk);
                                      console.log("!!!!!Jun: "+silk);
                                        break;
                                    case "Jul":
                                    var silk = localStorage.getItem("Jul1");
                                    console.log(silk+" !!!!!: "+value);
                                    silk=parseInt(silk)+parseInt(value);
                                    localStorage.setItem("Jul1", silk);
                                    console.log("!!!!!Jul: "+silk);
                                      break;
                                    case "Aug":
                                    var silk = localStorage.getItem("Aug1");
                                    console.log(silk+" !!!!!: "+value);
                                    silk=parseInt(silk)+parseInt(value);
                                    localStorage.setItem("Aug1", silk);
                                    console.log("!!!!!Aug: "+silk);
                                      break;
                                    case "Sep":
                                    var silk = localStorage.getItem("Sep1");
                                    console.log(silk+" !!!!!: "+value);
                                    silk=parseInt(silk)+parseInt(value);
                                    localStorage.setItem("Sep1", silk);
                                    console.log("!!!!!sep: "+silk);
                                      break;
                                    case "Oct":
                                    var silk = localStorage.getItem("Oct1");
                                    console.log(silk+" !!!!!: "+value);
                                    silk=parseInt(silk)+parseInt(value);
                                    localStorage.setItem("Oct1", silk);
                                    console.log("!!!!!oct: "+silk);
                                      break;
                                    case "Nov":
                                    var silk = localStorage.getItem("Nov1");
                                    console.log(silk+" !!!!!: "+value);
                                    silk=parseInt(silk)+parseInt(value);
                                    localStorage.setItem("Nov1", silk);
                                    console.log("!!!!!Nov: "+silk);
                                      break;
                                    case "Dec":
                                    var silk = localStorage.getItem("Dec1");
                                    console.log(silk+" !!!!!: "+value);
                                    silk=parseInt(silk)+parseInt(value);
                                    localStorage.setItem("Dec1", silk);
                                    console.log("!!!!!Dec: "+silk);
                                      break;
                                    }
                              }

                    })
                      .catch(function(error) {
                        console.log(error);
                        // Some error occurred, you can inspect the code: error.code
                      });

                    }else {
                    // doc.data() will be undefined in this case
                    console.error('Please check your collection and document name in the [firestore] shortcode!');
                    }
                    }).catch(error => {
                    console.error('Please check your collection and document name in the [firestore] shortcode!', error);
                    });

              });
              }).catch(error => {
              // document.getElementById("progbarlog").style.visibility="hidden";
              console.error('error', error);
              });
              frodateNxt=maxDate;
        }
      }
      // console.log(fromaNxt+"####"+frodateNxt);
      // frodateNxt=minimizeDays(frodateNxt);
      // console.log(fromaNxt+"####"+frodateNxt);
    }//for End

  }//end monthler1
    function whichMonth(monthNumber){
      var month;
      monthNumber=parseInt(monthNumber);
      switch (monthNumber) {
  case 01:
    month = "Jan";
    return month;
    break;
  case 02:
     month = "Feb";
     return month;
    break;
  case 03:
    month = "Mar";
    return month;
    break;
  case 04:
    month = "Apr";
    return month;
    break;
  case 05:
    month = "May";
    return month;
    break;
  case 06:
    month = "Jun";
    return month;
    break;
case 07:
  month = "Jul";
  return month;
  break;
case 08:
   month = "Aug";
   return month;
  break;
case 09:
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

        function whatDay(operator){
      return operator.substring(3, 5);
    }
        function whatMonth(operator){
      return operator.substring(0, 2);
    }
        function whatYear(operator){
      return operator.substring(6, 10);
    }

        function maximiseDays(operatorDate){
          var daythere =whatDay(operatorDate);
          var monththere =whatMonth(operatorDate);
          if (monththere%2==0) {
            var daylo=30;
            operatorDate = replaceAtter(operatorDate,3, daylo);
            // console.log("day day day "+operatorDate);
            return operatorDate;
          }else {
            var daylo=31;
            operatorDate = replaceAtter(operatorDate,3, daylo);
            // console.log("day day day "+operatorDate);
            return operatorDate;
          }
        }
        // var iknowdate="08/25/3020";
        // console.log("mini mini mini "+minimizeDays(iknowdate));
        function minimizeDays(operatorDate){
          var monththere =parseInt(whatMonth(operatorDate))+1;
            var daylo="01";
            operatorDate = replaceAtter(operatorDate,3, daylo);
            operatorDate = replaceAtterMonth(operatorDate,0, "0"+monththere);
            return operatorDate;
        }
        function replaceAtter(wholestring,indexat1, replacement) {
        // console.log("day day day "+wholestring);
    return wholestring.substring(0, indexat1) + replacement + wholestring.substring(5,10);
}
function replaceAtterMonth(wholestring,indexat1, replacement) {
// console.log("day day day 22 "+wholestring);
return  replacement + wholestring.substring(2,10);
}
//#################################

           $(function(){
             $("#bottomplaceholder").load("universal/bottom.html");
           });

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

                      function setupMonths(){
                      localStorage.setItem("Jan", 0);
                      localStorage.setItem("Feb", 0);
                      localStorage.setItem("Mar", 0);
                      localStorage.setItem("Apr", 0);
                      localStorage.setItem("May", 0);
                      localStorage.setItem("Jun", 0);
                      localStorage.setItem("Jul", 0);
                      localStorage.setItem("Aug", 0);
                      localStorage.setItem("Sep", 0);
                      localStorage.setItem("Oct", 0);
                      localStorage.setItem("Nov", 0);
                      localStorage.setItem("Dec", 0);
                      return "done";
                      }
                       function setupMonths1(){
                       localStorage.setItem("Jan1", 0);
                       localStorage.setItem("Feb1", 0);
                       localStorage.setItem("Mar1", 0);
                       localStorage.setItem("Apr1", 0);
                       localStorage.setItem("May1", 0);
                       localStorage.setItem("Jun1", 0);
                       localStorage.setItem("Jul1", 0);
                       localStorage.setItem("Aug1", 0);
                       localStorage.setItem("Sep1", 0);
                       localStorage.setItem("Oct1", 0);
                       localStorage.setItem("Nov1", 0);
                       localStorage.setItem("Dec1", 0);
                       return "done";
                       }
           function echoMonths(){
             var variable;
           variable=localStorage.getItem("Jan");
           console.log("1: "+variable);
           variable=localStorage.getItem("Feb");
           console.log("1: "+variable);
           variable=localStorage.getItem("Mar");
           console.log("1: "+variable);
           variable=localStorage.getItem("Apr");
           console.log("1: "+variable);
           variable=localStorage.getItem("May");
           console.log("1: "+variable);
           variable=localStorage.getItem("Jun");
           console.log("1: "+variable);
           variable=localStorage.getItem("Jul");
           console.log("jul: "+variable);
           variable=localStorage.getItem("Aug");
           console.log("aug: "+variable);
           variable=localStorage.getItem("Sep");
           console.log("sept: "+variable);
           variable=localStorage.getItem("Oct");
           console.log("oct: "+variable);
           variable=localStorage.getItem("Nov");
           console.log("nov: "+variable);
           variable=localStorage.getItem("Dec");
           console.log("dec: "+variable);
           }
function echoMonths1(){
 var variable;
variable=localStorage.getItem("Jan1");
console.log("1: "+variable);
variable=localStorage.getItem("Feb1");
console.log("1: "+variable);
variable=localStorage.getItem("Mar1");
console.log("1: "+variable);
variable=localStorage.getItem("Apr1");
console.log("1: "+variable);
variable=localStorage.getItem("May1");
console.log("1: "+variable);
variable=localStorage.getItem("Jun1");
console.log("1: "+variable);
variable=localStorage.getItem("Jul1");
console.log("jul: "+variable);
variable=localStorage.getItem("Aug1");
console.log("aug: "+variable);
variable=localStorage.getItem("Sep1");
console.log("sept: "+variable);
variable=localStorage.getItem("Oct1");
console.log("oct: "+variable);
variable=localStorage.getItem("Nov1");
console.log("nov: "+variable);
variable=localStorage.getItem("Dec1");
console.log("dec: "+variable);
}
