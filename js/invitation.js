// var specialurl=seturl();
const queryString = makeurl("@dsdfs","sssss","eeeeee");
console.log(queryString);
// console.log(queryString.get('one')); // "edit"
  document.getElementById('userCompanysu').innerHTML="Please fill in all fields";
  document.getElementById('userEmailsu').innerHTML="Please fill in all fields";
  document.getElementById('userLocation').innerHTML="Please fill in all fields";


              var up = document.getElementById('honey');
              // up.innerHTML = url;
              // var down = document.getElementById('GFG_DOWN');
              function seturl(emailinvi,companyinvi,locationinvi) {
              var url = new URL("https://chocolate-cosmos.web.app/");
                  url.searchParams.set('one', 'val_1');
                  url.searchParams.set('two', 'val_2');
                  url.searchParams.set('three', 'val3');
                  // up.innerHTML = url;
                  console.log(url);
                  return url;
              }
// ttps://chocolate-cosmos.web.app/?one=val_1&two=val_2&three=val3"
