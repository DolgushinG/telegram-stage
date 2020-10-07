function countTotalTrainAdmin(ssId,text,chatId,telegramUrl) {
  var sheetUserChatID = SpreadsheetApp.openById(ssId).getSheetByName('admin');
  var listChatIdAdmin= sheetUserChatID.getRange(1, 2, sheetUserChatID.getLastRow()).getValues().map(function(row){return row[0]});
  var StrAdmin = listChatIdAdmin.indexOf(chatId)+1;
  var searchNameAdminForSheet = sheetUserChatID.getRange(StrAdmin, 1).getValue();
  var listNameAdmin= sheetUserChatID.getRange(1, 1, sheetUserChatID.getLastRow()).getValues().map(function(row){return row[0]});
  var StrAdminWithName = listNameAdmin.length+1;
  var sheet = SpreadsheetApp.openById(ssId).getSheetByName(searchNameAdminForSheet);
  var arraysCommandsforuser = sheet.getRange(1, 1, sheet.getLastRow()).getValues().map(function(row){return row[0]});
  let arrname = text.split(" ").splice(0);
  let comandNumRow = arraysCommandsforuser.indexOf(arrname[0]) + 1;
  let arrStr = sheet.getRange(comandNumRow, 1, 1, 7).getValues()[0];
  if(arrStr[2] < 0){
    var message = 'Абонемент закончился =(';
    sendMessage(message,telegramUrl,chatId);
    return
  }
  if(arrStr[2] > 0 && arrStr[3] == 'бессрочный' ){
    var message = arrStr[0] + '\n'+'Осталось занятий '+arrStr[2]+'\n'+'Абонемент без срока';
    sendMessage(message,telegramUrl,chatId);
    return
  }
  let NewdateBegin = arrStr[3];
  let NewdateEnd = arrStr[4];
  let formatDatebegin =  Utilities.formatDate(NewdateBegin, 'RU', 'MMMM dd, yyyy ');
  let formatDateEnd =  Utilities.formatDate(NewdateEnd, 'RU', 'MMMM dd, yyyy ');
  if(arrStr[2] > 0){
    var message = arrStr[0] + '\n'+arrStr[2]+'\n'+'Начало абонемента: \n'+formatDatebegin+'\n'+'Конец абонемента: \n'+formatDateEnd+'\n'+'Осталось дней до окончания абонемента: \n'+ arrStr[5];
  } else {
    var message = 'Абонемент закончился =(';
  }
  sendMessage(message,telegramUrl,chatId);
}

function temp(){}

