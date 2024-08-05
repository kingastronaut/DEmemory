// random integrer in range
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//filename

var filename = "catsEasy.csv"

// csv file to JSON
let file = filename;
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
// create a 4x4 matrix with unique [x,itemN,tranN,category] values where x is a random 'b'+N where N is between 1 and 16
  var matrix16 = [['b1'],['b2'],['b3'],['b4'],['b5'],['b6'],['b7'],['b8'],['b9'],['b10'],['b11'],['b12'],['b13'],['b14'],['b15'],['b16']];
  var matrixCats = [[chosenCats[0].item1,chosenCats[0].tran1,chosenCats[0].category],[chosenCats[0].item2,chosenCats[0].tran2,chosenCats[0].category],[chosenCats[0].item3,chosenCats[0].tran3,chosenCats[0].category],[chosenCats[0].item4,chosenCats[0].tran4,chosenCats[0].category],
                   [chosenCats[1].item1,chosenCats[1].tran1,chosenCats[1].category],[chosenCats[1].item2,chosenCats[1].tran2,chosenCats[1].category],[chosenCats[1].item3,chosenCats[1].tran3,chosenCats[1].category],[chosenCats[1].item4,chosenCats[1].tran4,chosenCats[1].category],
                   [chosenCats[2].item1,chosenCats[2].tran1,chosenCats[2].category],[chosenCats[2].item2,chosenCats[2].tran2,chosenCats[2].category],[chosenCats[2].item3,chosenCats[2].tran3,chosenCats[2].category],[chosenCats[2].item4,chosenCats[2].tran4,chosenCats[2].category],
                   [chosenCats[3].item1,chosenCats[3].tran1,chosenCats[3].category],[chosenCats[3].item2,chosenCats[3].tran2,chosenCats[3].category],[chosenCats[3].item3,chosenCats[3].tran3,chosenCats[3].category],[chosenCats[3].item4,chosenCats[3].tran4,chosenCats[3].category]]
  
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

  //creates final matrix and fills squares on page
  for (i in matrix16) {
    matrix16[i] = matrix16[i].concat(matrixCats[i]);
    document.getElementById(matrix16[i][0]).innerHTML = matrix16[i][1]+','+matrix16[i][2]+','+matrix16[i][3];
  }
});

//recreate matrix16 outside of promise when start is clicked
var mat16 = [['b1'],['b2'],['b3'],['b4'],['b5'],['b6'],['b7'],['b8'],['b9'],['b10'],['b11'],['b12'],['b13'],['b14'],['b15'],['b16']];
var chosenBtns = [];

function startButton() {
document.getElementById("cards").style.visibility = "visible"
for (i in mat16) {
    let btnInfo = document.getElementById(mat16[i][0]).innerHTML.split(',')
    mat16[i] = mat16[i].concat(btnInfo);
    document.getElementById(mat16[i][0]).innerHTML = mat16[i][1]
}
}

// buttons

function clickBox(a) {
  onCLickID = 'b'+ a.string();

  if !(onClickID in chosenBtns){ 
  document.getElementById(onClickID).style.background = "#D1D1D9";
  chosenBtns.push(onClickID)
  }
  else {
    document.getElementById(onClickID).style.background = "#D1D1D9";

  }
}
