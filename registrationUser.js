function registrationUsers(update) {
  let text = getDataUpdate(update,'text');
  let arrayText = separateText(text);
  let adminname = arrayText[3];
  let hash = arrayText[1];
  let nameUser = getDataUpdate(update,'firstName');
  let sheetuser = getSheet('users');
  let sheetadmin = getSheet(adminname);
  let chatId = getDataUpdate(update,'chatId');
  let adminlist = sheetuser.getRange(1, 1, sheetuser.getLastRow()).getValues().map(function(row){return row[0]});
  let lenadminlist = adminlist.length+1;
  sheetuser.getRange(lenadminlist,1).setValue(nameUser);
  sheetuser.getRange(lenadminlist,2).setValue(chatId);
  sheetuser.getRange(lenadminlist,3).setValue(adminname);
  sheetuser.getRange(lenadminlist,4).setValue(hash);
  let hashlist = sheetadmin.getRange(1, 7, sheetadmin.getLastRow()).getValues().map(function(row){return row[0]});
  let numberStr = hashlist.indexOf(hash) + 1;
  sheetadmin.getRange(numberStr,2).setValue(chatId);
  let chatIdUser = sheetadmin.getRange(numberStr,2).getValue();
  let comName = sheetadmin.getRange(numberStr,1).getValue();
  var newArrComAllName = [];
  newArrComAllName[0] = comName + ' всего';
  //десять рядом клавиатуры
  var arrNew = colSplit(newArrComAllName, 10);
  var KEYBOARD = {
    resize_keyboard:true
  }
  KEYBOARD.keyboard = arrNew
  let message = nameUser +' \nРегистрация прошла успешно!';
  sendMessage(chatIdUser,message,KEYBOARD);
}
