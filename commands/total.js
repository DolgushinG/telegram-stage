function total(update,admin,user) {
  Logger.log('total');
  if(admin){
  Logger.log('admin');
  var nameAdmin = getData(update,1,'admins');
  }
  if(user){
  Logger.log('user');
  var nameAdmin = getData(update,3,'users');
  }
  Logger.log('name')
  Logger.log(nameAdmin);
  let sheet = getSheet(nameAdmin);
  let text = getDataUpdate(update,'text')
  let chatId = getDataUpdate(update,'chatId')
  let arrText = separateText(text);
  let arrayName = getArrayColumn(nameAdmin,1);
  Logger.log(arrayName);
  let name = arrText[0];
  let numStr = arrayName.indexOf(name) + 1;
  
  let arrayTotal = sheet.getRange(numStr, 1, 1, 7).getValues()[0];
  
  let count = arrayTotal[2];
  
  let date = arrayTotal[3];
  let dateEnd = arrayTotal[4];
  let dateEnddays = arrayTotal[5];
  if(count < 0){
    var message = 'Абонемент закончился =(';
    sendMessage(chatId,message,KEYBOARD);
    return
  }
  if(count > 0 && date == 'бессрочный' ){
    var message = name + '\n'+'Осталось занятий '+count+'\n'+'Абонемент без срока';
    sendMessage(chatId,message,KEYBOARD);
    return
  }
  let formatDatebegin =  Utilities.formatDate(date, 'RU', 'MMMM dd, yyyy ');
  let formatDateEnd =  Utilities.formatDate(dateEnd, 'RU', 'MMMM dd, yyyy ');
  if(count > 0){
    var message = name + '\n'+count+'\n'+'Начало абонемента: \n'+formatDatebegin+'\n'+'Конец абонемента: \n'+formatDateEnd+'\n'+'Осталось дней до окончания абонемента: \n'+ dateEnddays;
  } else {
    var message = 'Абонемент закончился =(';
  }
  sendMessage(chatId,message);
}

    
