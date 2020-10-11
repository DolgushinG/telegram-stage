function refreshKey(update) {
  let nameAdmin = getData(update,1,'admins');
  let arrayAllName = getArrayColumn(nameAdmin,1);
  let arrayAllName2 = getArrayColumn(nameAdmin,1);
  let newArrComAllName = [];
  let newArrComAllName2 = [];
  let chatId = getDataUpdate(update,'chatId');
  for (var i = 0; i < arrayAllName.length;i++){
    newArrComAllName[i] = arrayAllName[i] + ' всего ';
  }
  for (var i = 0; i < arrayAllName2.length;i++){
    newArrComAllName2[i] = 'Списать '+ arrayAllName2[i];
  }
  let NewConcatArr = newArrComAllName2.concat(newArrComAllName);
  let arrNew = colSplit(NewConcatArr, 10);
  let KEYBOARD = {
    resize_keyboard:true
  }
  KEYBOARD.keyboard = arrNew
  var message = 'Клавиатура обновилась';
  sendMessage(chatId,message,KEYBOARD);
  
}

