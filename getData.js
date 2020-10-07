function getData(update,numColumn,role) {
  Logger.log('Внутри getData')
  let chatId = update.message.chat.id;
  let sheet = getSheet(role);
  let arrayNameAdmin = sheet.getRange(1, 2, sheet.getLastRow()).getValues().map(function(row){return row[0]});
  Logger.log(arrayNameAdmin);
  let numString = arrayNameAdmin.indexOf(chatId)+1;
  Logger.log(numString);
  let date = sheet.getRange(numString, numColumn).getValue();
  Logger.log(date);
  Logger.log('Внутри getData')
  return date;
}
