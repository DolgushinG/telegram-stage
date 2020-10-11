function addNewSeason(update) {
  let nameAdmin = getData(update,1,'admins')
  let text = getDataUpdate(update,'text');
  let arrText = separateText(text);
  let NameStudent = arrText[0];
  let Command = arrText[1];
  let CountTrain = arrText[2];
  let TimePeriod = arrText[3];
  let nameStudent  = getArrayColumn(nameAdmin,1);
  let numStr = nameStudent.indexOf(NameStudent)+1;
  let sheet = getSheet(nameAdmin);
  let chatId = getDataUpdate(update,'chatId');
  if(TimePeriod != 0){
    sheet.getRange(numStr, 4).setValue([new Date()]);
    sheet.getRange(numStr, 5).setValue('=EDATE(D'+numStr+';'+TimePeriod+')');
  } else {
    sheet.getRange(numStr, 4).setValue('бессрочный');
    sheet.getRange(numStr, 5).setValue('бессрочный');
    sheet.getRange(numStr, 6).setValue('бессрочный');
    let StrUser = sheet.getRange(numStr, 1, 1, 7).getValues()[0];
    sheet.getRange(numStr,3).setValue(CountTrain);
    var message = '\n'+ NameStudent +'\n'+'Стало занятий: \n'+CountTrain+ '\n'+StrUser[3];
    sendMessage(chatId,message);
    return
  }
  let StrUser = sheet.getRange(numStr, 1, 1, 7).getValues()[0];
  Logger.log(StrUser);
  sheet.getRange(numStr,3).setValue(CountTrain);
  let NewdateBegin = StrUser[3];
  let NewdateEnd = StrUser[4];
  let formatDatebegin =  Utilities.formatDate(NewdateBegin, 'RU', 'MMMM dd, yyyy ');
  let formatDateEnd =  Utilities.formatDate(NewdateEnd, 'RU', 'MMMM dd, yyyy ');
  var message = '\n'+ NameStudent +'\n'+'Стало занятий: \n'+CountTrain+ '\n'+'\n'+'Начало абонемента: \n'+formatDatebegin+'\n'+'Конец абонемента: \n'+formatDateEnd;
  sendMessage(chatId,message);
}
