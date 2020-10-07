 function getArrayColumn(sheetName,numColumn){
    let sheet = getSheet(sheetName);
    let arrayColumn = sheet.getRange(1, numColumn, sheet.getLastRow()).getValues().map(function(row){return row[0]});
    return arrayColumn;
  }