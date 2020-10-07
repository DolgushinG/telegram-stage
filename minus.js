function minus(update) {
  let NameAdmin = getData(update,1,'admins')
  let sheet = getSheet(NameAdmin);
  let arrayNameStudent = getArrayColumn(NameAdmin,1)
  let text = getDataUpdate(update,'text')
  let arrText = separateText(text);
  let nameUser = arrText[1];
  let comandNumRowValue = arrayNameStudent.indexOf(nameUser) + 1;
  let dataStudent = sheet.getRange(comandNumRowValue, 1, 1, 5).getValues()[0];
  let chatId = getDataUpdate(update,'chatId');
  let count = dataStudent[2];
  if(count > 0){
    let newValueCow = count-1;
    sheet.getRange(comandNumRowValue, 3).setValue(newValueCow);
    let newDataStudent = sheet.getRange(comandNumRowValue, 1, 1, 5).getValues()[0];
    let newCount = newDataStudent[2];
    var message = nameUser+'\nCписано 1 занятие'+'\nОсталось '+ newCount;
    if(count == 0){
    let messageStudent = nameUser +'\nу тебя закончился абонемент =( \nпополни меня =)\nРеквизиты: по ном. +79992095596(сбер,тинкофф)';
    sendMessage(chatId,messageStudent);
    }
  } else {
    var message = 'Абонемент закончился =(';
  }
  sendMessage(chatId,message);
}
