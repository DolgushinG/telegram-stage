function addAdmin(update){
  let nameAdmin = update.message.chat.first_name;
  let ssId = getssId();
  let chatId = getDataUpdate(update,'chatId');
  SpreadsheetApp.openById(ssId).insertSheet(nameAdmin);
  let sheet = getSheet('admins');
  let ValueForCheck = sheet.getRange(1, 1, sheet.getLastRow()).getValue()
  if(ValueForCheck !== []){
  let adminlist = sheet.getRange(1, 1, sheet.getLastRow()).getValues().map(function(row){return row[0]});
  let lenadminlist = adminlist.length+1;
  sheet.getRange(lenadminlist,1).setValue(nameAdmin);
  sheet.getRange(lenadminlist,2).setValue(chatId);
  } else {
  sheet.getRange(1,1).setValue(nameAdmin);
  sheet.getRange(1,2).setValue(chatId);
  }
  let message = 'Добавлен новый тренер '+ nameAdmin;
  sendMessage(chatId,message);
  let message1 = nameAdmin+'\n'+ 'Как вести учет учеников?\nВсе очень просто, есть команды которые ты сможешь использовать\nЕсть команды которые ты будешь использовать часто, они будут ввиде кнопок\n';
  let message2 = 'Остальные комнады: \n 1. Добавить нового ученика "Имя"(без кавычек)\n 2. "Имя"(без кавычек) абонемент "сколько посещений (цифра)" "срок или бесрочный если 0"\n';
  let message3 = 'Например Вася абонемент 10 3';
  let supermessage = message1+message2+message3;
  sendMessage(chatId,supermessage);
}
