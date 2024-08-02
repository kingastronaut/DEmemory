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
  var matrixCats = [[chosenCats[0].item1,chosenCats[0].itemtran1,chosenCats[0].category],[chosenCats[0].item2,chosenCats[0].itemtran2,chosenCats[0].category],[chosenCats[0].item3,chosenCats[0].itemtran3,chosenCats[0].category],[chosenCats[0].item4,chosenCats[0].itemtran4,chosenCats[0].category],
                   [chosenCats[1].item1,chosenCats[1].itemtran1,chosenCats[1].category],[chosenCats[1].item2,chosenCats[1].itemtran2,chosenCats[1].category],[chosenCats[1].item3,chosenCats[1].itemtran3,chosenCats[1].category],[chosenCats[1].item4,chosenCats[1].itemtran4,chosenCats[1].category],
                   [chosenCats[2].item1,chosenCats[2].itemtran1,chosenCats[2].category],[chosenCats[2].item2,chosenCats[2].itemtran2,chosenCats[2].category],[chosenCats[2].item3,chosenCats[2].itemtran3,chosenCats[2].category],[chosenCats[2].item4,chosenCats[2].itemtran4,chosenCats[2].category],
                   [chosenCats[3].item1,chosenCats[3].itemtran1,chosenCats[3].category],[chosenCats[3].item2,chosenCats[3].itemtran2,chosenCats[3].category],[chosenCats[3].item3,chosenCats[3].itemtran3,chosenCats[3].category],[chosenCats[3].item4,chosenCats[3].itemtran4,chosenCats[3].category]]
  
function shuffle(array) {
  let currentIndex = array.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
};

  shuffle(matrixCats);
  console.log(matrixCats);


    
  }
  
});

// choose random items for 4x4 grid
