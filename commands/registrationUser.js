function registrationUsers(update) {
  let text = getDataUpdate(update,'text');
  let arrayText = separateText(text);
  let adminName = arrayText[3];
  let hash = arrayText[1];
  let nameUser = getDataUpdate(update,'firstName');
  let sheetUser = getSheet('users');
  let sheetAdmin = getSheet(adminName);
  let chatId = getDataUpdate(update,'chatId');
  let adminlist = sheetUser.getRange(1, 1, sheetUser.getLastRow()).getValues().map(function(row){return row[0]});
  let lenadminlist = adminlist.length+1;
  sheetUser.getRange(lenadminlist,1).setValue(nameUser);
  sheetUser.getRange(lenadminlist,2).setValue(chatId);
  sheetUser.getRange(lenadminlist,3).setValue(adminName);
  sheetUser.getRange(lenadminlist,4).setValue(hash);
  let hashlist = sheetAdmin.getRange(1, 7, sheetAdmin.getLastRow()).getValues().map(function(row){return row[0]});
  let numberStr = hashlist.indexOf(hash) + 1;
  sheetAdmin.getRange(numberStr,2).setValue(chatId);
  let chatIdUser = sheetAdmin.getRange(numberStr,2).getValue();
  let comName = sheetAdmin.getRange(numberStr,1).getValue();
  var newArrComAllName = [];
  newArrComAllName[0] = comName + ' всего';
  var arrNew = colSplit(newArrComAllName, 10);
  var KEYBOARD = {
    resize_keyboard:true
  }
  KEYBOARD.keyboard = arrNew
  let message = nameUser +' \nРегистрация прошла успешно!';
  sendMessage(chatIdUser,message,KEYBOARD);
}
