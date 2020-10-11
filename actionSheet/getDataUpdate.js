// получить данные из update текст, чат id , имя
function getDataUpdate(update,value){
  let updateObj = {
    'text': update.message.text,
    'chatId': update.message.chat.id,
    'firstName': update.message.chat.first_name
  }
  let newValue = updateObj[value];
  return newValue;
}
