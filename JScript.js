// random integrer in range
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function emptyConsoleP(){
  document.getElementById('consoleP').innerHTML = '';
}

//show message x for y ms below grid
function flashMessage(x, y) {
  document.getElementById('consoleP').innerHTML = x;
  setTimeout(emptyConsoleP, y);
}


//filename

var filename = "catsEasy.csv"

// csv file to JSON
function setStart(){
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
})};

setStart();

//recreate matrix16 outside of promise when start is clicked
var mat16 = [['b1'],['b2'],['b3'],['b4'],['b5'],['b6'],['b7'],['b8'],['b9'],['b10'],['b11'],['b12'],['b13'],['b14'],['b15'],['b16']];
var chosenBtns = [];
var corrects = 0;

function startButton() {
document.getElementById("cards").style.visibility = "visible"
for (i in mat16) {
    let btnInfo = document.getElementById(mat16[i][0]).innerHTML.split(',')
    mat16[i] = mat16[i].concat(btnInfo);
    document.getElementById(mat16[i][0]).innerHTML = mat16[i][1]
}
}

// buttons

function clickBox(btnNum) {
  var onClickID = 'b'+ btnNum;

    if (chosenBtns.includes(onClickID)){ 
      document.getElementById(onClickID).style.background = "#90EE90";
      chosenBtns.splice(chosenBtns.indexOf(onClickID), 1);
      
    }
    else {
      if (chosenBtns.length < 4) {
      document.getElementById(onClickID).style.background = "#D1D1D9";
      chosenBtns.push(onClickID)
        } else {
        console.log("choose max 4!");
      }
    }
}
  
  function checkAns() {
    let chosenCats = [];
    if (chosenBtns.length != 4) {
        flashMessage("You must choose 4 words!", 2000)
    } else {
      for (i in mat16){
        if (mat16[i][0] == chosenBtns[0] || mat16[i][0] == chosenBtns[1] || mat16[i][0] == chosenBtns[2] || mat16[i][0] == chosenBtns[3]) {
          chosenCats.push(mat16[i][3]);
        }
      }

      
      if (chosenCats[0] == chosenCats[1] && chosenCats[2] == chosenCats[3] && chosenCats[1] == chosenCats[2]){
        //correct combo
        corrects++;
        document.getElementById(chosenBtns[0]).onclick = null;
        document.getElementById(chosenBtns[1]).onclick = null;
        document.getElementById(chosenBtns[2]).onclick = null;
        document.getElementById(chosenBtns[3]).onclick = null;
        
        document.getElementById(chosenBtns[0]).style.background = "transparent";
        document.getElementById(chosenBtns[1]).style.background = "transparent";
        document.getElementById(chosenBtns[2]).style.background = "transparent";
        document.getElementById(chosenBtns[3]).style.background = "transparent";

        chosenBtns = []

        if (corrects == 4){
          flashMessage("Perfect, you got everything!", 2000)
        } else {
          flashMessage("Correct!", 2000)
        }
        
      } else {
        //wrong combo
        flashMessage("Try again!", 2000)
      }
        
  }
};
