function addNewUser(update){
  let getNameAdmin = getData(update,1,'admins');// 1 столбец с именем в таблице админ 
  let sheet = getSheet(getNameAdmin);
  let ValueForCheck = sheet.getRange(1, 1).getValue();
  recordToTableUser(getNameAdmin,update);
  refreshKey();
  var message = 'Добавлен новый ученик \nСообщение которое нужно отправить ученику для регистрации: \n';
  let chatId = getDataUpdate(update,'chatId')
  sendMessage(chatId,message);
  let hash = strRand();
  let nameAdminForUser = getDataUpdate(update,'firstName');
  var messageTwo = 'Регистрация ' + hash +' Тренер: '+ nameAdminForUser;
  sendMessage(chatId,messageTwo);
}
