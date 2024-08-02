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
  // above tends to leave one empty line, remove that
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
  
// list of objects in final game
var chosenCats = [];
  for(i in catList){
    chosenCats.push(items[catList[i]]);
  }
  console.log(chosenCats);

// create a random 4x4 matrix with unique [itemN,tranN,category] values
  var matrix16 = [['b1'],['b2'],['b3'],['b4'],['b5'],['b6'],['b7'],['b8'],['b9'],['b10'],['b11'],['b12'],['b13'],['b14'],['b15'],['b16']];
  
});

// choose random items for 4x4 grid
