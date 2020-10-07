function addNewUser(update){
  let getNameAdmin = getData(update,1,'admins');// 1 столбец с именем в таблице админ 
  let sheet = getSheet(getNameAdmin);
  let ValueForCheck = sheet.getRange(1, 1).getValue();
  recordToTableUser(getNameAdmin,update);
  refreshkey();
  var message = 'Добавлен новый ученик \nСообщение которое нужно отправить ученику для регистрации: \n';
  let chatId = getDataUpdate(update,'chatId')
  sendMessage(chatId,message);
  let hash = str_rand();
  let nameAdminForUser = getDataUpdate(update,'firstName');
  var messagetwo = 'Регистрация ' + hash +' Тренер: '+ nameAdminForUser;
  sendMessage(chatId,messagetwo);
}
