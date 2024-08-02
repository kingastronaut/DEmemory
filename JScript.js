// random integrer in range
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// csv file to JSON
let file = "catsEasy.csv"
fetch (file)
.then(x => x.text())
.then(csv => {
  var lines= csv.split("\n");
  lines.pop();
  var result = [];
  var headers=lines[0].split(",");
  
  for(var i=1;i<lines.length;i++){

      var obj = {};
      var currentline=lines[i].split(",");

      for(var j=0;j<headers.length;j++){
          obj[headers[j]] = currentline[j];
      }

      result.push(obj);

  }

return [result, lines.length];
//return JSON.stringify(result); //JSON

})
// choose random items for 4x4 grid
.then(z => {
  let items = z[0];
  let listLength = z[1]-1;
  var catList = [];
  var listComplete = false;
  var tempCat = 0;
console.log(listLength);
  while (listComplete == false) {
    tempCat = getRandomInt(listLength);
    if (catList.length<4){
      if (!(catList.includes(tempCat))){
        catList.push(tempCat);
      }
    }
    else {
      listComplete = true;
    }
  };
console.log(items);
console.log(catList);
  for(i in catList){
    console.log(items[catList[i]].item1);
  }
  
});

// choose random items for 4x4 grid
