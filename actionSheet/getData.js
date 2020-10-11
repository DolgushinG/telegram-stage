// получить данные об имени админа, чат id, example (update, 1, 'admin')
function getData(update,numColumn,role) {
  let chatId = update.message.chat.id;
  let sheet = getSheet(role);
  let arrayNameAdmin = sheet.getRange(1, 2, sheet.getLastRow()).getValues().map(function(row){return row[0]});
  let numString = arrayNameAdmin.indexOf(chatId)+1;
  let date = sheet.getRange(numString, numColumn).getValue();
  return date;
}
