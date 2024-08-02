// csv file to JSON
let file = "catsEasy.csv"
fetch (file)
.then(x => x.text())
.then(csv => {
  var lines= csv.split("\n");
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
  let listLength = z[1];
  
  console.log(items);
  console.log(listLength);

  
});

// choose random items for 4x4 grid
